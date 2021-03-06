var RayCaster = function(){
  this.binHandler = new WorldBinHandler();
  this.origin = new THREE.Vector3();
  this.direction = new THREE.Vector3();
  this.oldPosition = new THREE.Vector3();
  this.updateBuffer = new Map();
  this.ready = false;
}

RayCaster.prototype.onReady = function(){
  this.ready = true;
  if (this.onReadyCallback){
    this.onReadyCallback();
  }
}

RayCaster.prototype.flush = function(){
  this.updateBuffer.forEach(this.issueUpdate);
  this.updateBuffer.clear();
}

RayCaster.prototype.refresh = function(){
  if (!projectLoaded){
    return;
  }
  this.ready = false;
  this.binHandler = new WorldBinHandler();
  for (var objName in addedObjects){
    var addedObject = addedObjects[objName];
    if (mode == 1 && !addedObject.isIntersectable){
      continue;
    }
    addedObject.mesh.updateMatrix();
    addedObject.mesh.updateMatrixWorld();
    if (!addedObject.boundingBoxes){
      addedObject.generateBoundingBoxes();
    }else{
      addedObject.updateBoundingBoxes();
    }
    this.binHandler.insert(addedObject.boundingBoxes[0], objName);
  }
  for (var objName in objectGroups){
    var objectGroup = objectGroups[objName];
    if (mode == 1 && !objectGroup.isIntersectable){
      continue;
    }
    objectGroup.mesh.updateMatrix();
    objectGroup.mesh.updateMatrixWorld();
    if (!objectGroup.boundingBoxes){
      objectGroup.generateBoundingBoxes();
    }else{
      objectGroup.updateBoundingBoxes();
    }
    for (var i = 0; i<objectGroup.boundingBoxes.length; i++){
      this.binHandler.insert(objectGroup.boundingBoxes[i], objectGroup.boundingBoxes[i].roygbivObjectName, objName);
    }
  }
  if (mode == 0){
    for (var gsName in gridSystems){
      var gridSystem = gridSystems[gsName];
      this.binHandler.insert(gridSystem.boundingBox, gridSystem.name);
    }
    for (var txtName in addedTexts){
      var addedText = addedTexts[txtName];
      if (!addedText.is2D){
        this.binHandler.insert(addedText.boundingBox, txtName);
      }
    }
  }else{
    for (var txtName in addedTexts){
      var addedText = addedTexts[txtName];
      if (addedText.isClickable && !addedText.is2D){
        this.binHandler.insert(addedText.boundingBox, txtName);
      }
    }
  }
  this.onReady();
}

RayCaster.prototype.updateObject = function(obj, forceUpdate){
  if (forceUpdate){
    this.binHandler.updateObject(obj);
    return;
  }
  this.updateBuffer.set(obj.name, obj);
}

RayCaster.prototype.issueUpdate = function(obj){
  if (!(mode == 1 && (obj.isAddedObject || obj.isObjectGroup) && !obj.isIntersectable)){
    rayCaster.binHandler.updateObject(obj);
  }
}

RayCaster.prototype.findIntersections = function(from, direction, intersectGridSystems, callbackFunction){
  intersectionPoint = 0, intersectionObject = 0;
  this.origin.copy(from);
  this.direction.copy(direction);
  this.oldPosition.copy(this.origin);
  var iterate = true;
  while (iterate){
    REUSABLE_LINE.set(this.oldPosition, this.origin);
    var results = this.binHandler.query(this.origin);
    for (var objName in results){
      var result = results[objName];
      if (result == 5){
        var obj = addedObjects[objName];
        if (obj){
          if (!(mode == 0 && keyboardBuffer["Shift"])){
            intersectionPoint = obj.intersectsLine(REUSABLE_LINE);
            if (intersectionPoint){
              intersectionObject = objName;
              callbackFunction(intersectionPoint.x, intersectionPoint.y, intersectionPoint.z, intersectionObject);
              return;
            }
          }
        }
      }else if (result == 10){
        var gs = gridSystems[objName];
        if (gs && intersectGridSystems){
          intersectionPoint = gs.intersectsLine(REUSABLE_LINE);
          if (intersectionPoint){
            intersectionObject = objName;
            callbackFunction(intersectionPoint.x, intersectionPoint.y, intersectionPoint.z, intersectionObject);
            return;
          }
        }
      }else if (result == 20){
        var addedText = addedTexts[objName];
        if (addedText && addedText.plane){
          intersectionPoint = addedText.intersectsLine(REUSABLE_LINE);
          if (intersectionPoint){
            intersectionObject = objName;
            callbackFunction(intersectionPoint.x, intersectionPoint.y, intersectionPoint.z, intersectionObject);
            return;
          }
        }
      }else{
        if (!(mode == 0 && keyboardBuffer["Shift"])){
          var parent = objectGroups[objName];
          if (parent){
            for (var childName in result){
              var obj = parent.group[childName];
              if (obj){
                if (!(mode == 0 && keyboardBuffer["Shift"])){
                  intersectionPoint = obj.intersectsLine(REUSABLE_LINE);
                  if (intersectionPoint){
                    intersectionObject = objName;
                    callbackFunction(intersectionPoint.x, intersectionPoint.y, intersectionPoint.z, intersectionObject);
                    return;
                  }
                }
              }
            }
          }
        }
      }
    }
    this.oldPosition.copy(this.origin);
    this.origin.addScaledVector(this.direction, RAYCASTER_STEP_AMOUNT);
    iterate = LIMIT_BOUNDING_BOX.containsPoint(this.origin);
  }
  callbackFunction(0, 0, 0, null);
}

RayCaster.prototype.hide = function(object){
  this.binHandler.hide(object);
}

RayCaster.prototype.show = function(object){
  this.binHandler.show(object);
}

RayCaster.prototype.query = function(point){
  return this.binHandler.query(point);
}
