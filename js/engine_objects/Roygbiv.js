//  _______________________________________
// |                                       |
// | ROYGBIV Engine scripting API          |
// |_______________________________________|
//
// Function types:
//  * Getter functions
//  * Object manipulation functions
//  * Utility functions
//  * Listener functions
//  * Particle system functions
//  * Motion blur functions
//  * Crosshair functions
//  * Text functions
//  * Control functions
var Roygbiv = function(){
  this.functionNames = [
    "getObject",
    "getParticleSystem",
    "getChildObject",
    "getRandomColor",
    "hide",
    "show",
    "vector",
    "distance",
    "sub",
    "add",
    "moveTowards",
    "applyForce",
    "rotate",
    "rotateAroundXYZ",
    "setPosition",
    "color",
    "setMass",
    "runScript",
    "isRunning",
    "translate",
    "getPosition",
    "opacity",
    "getOpacity",
    "setCollisionListener",
    "removeCollisionListener",
    "setParticleSystemRotation",
    "setParticleSystemQuaternion",
    "getMarkedPosition",
    "setExpireListener",
    "removeExpireListener",
    "normalizeVector",
    "computeQuaternionFromVectors",
    "multiplyScalar",
    "getParticleSystemVelocityAtTime",
    "stopParticleSystem",
    "startParticleSystem",
    "hideParticleSystem",
    "getCameraDirection",
    "getCameraPosition",
    "getParticleSystemPool",
    "getParticleSystemFromPool",
    "setVector",
    "quaternion",
    "fadeAway",
    "createCrosshair",
    "selectCrosshair",
    "changeCrosshairColor",
    "hideCrosshair",
    "startCrosshairRotation",
    "stopCrosshairRotation",
    "pauseCrosshairRotation",
    "expandCrosshair",
    "shrinkCrosshair",
    "setParticleSystemPosition",
    "startMotionBlur",
    "stopMotionBlur",
    "setObjectVelocity",
    "setObjectClickListener",
    "removeObjectClickListener",
    "setObjectColor",
    "resetObjectColor",
    "setScreenClickListener",
    "removeScreenClickListener",
    "setScreenMouseDownListener",
    "removeScreenMouseDownListener",
    "setScreenMouseUpListener",
    "removeScreenMouseUpListener",
    "setScreenMouseMoveListener",
    "removeScreenMouseMoveListener",
    "requestPointerLock",
    "convertEulerToDegrees",
    "setScreenPointerLockChangeListener",
    "removeScreenPointerLockChangeListener",
    "setParticleSystemPoolConsumedListener",
    "removeParticleSystemPoolConsumedListener",
    "setParticleSystemPoolAvailableListener",
    "removeParticleSystemPoolAvailableListener",
    "isKeyPressed",
    "setCameraPosition",
    "lookAt",
    "applyAxisAngle",
    "trackObjectPosition",
    "untrackObjectPosition",
    "createRotationPivot",
    "setRotationPivot",
    "unsetRotationPivot",
    "rotateCamera",
    "translateCamera",
    "requestFullScreen",
    "setFullScreenChangeCallbackFunction",
    "removeFullScreenChangeCallbackFunction",
    "isMouseDown",
    "intersectionTest",
    "getEndPoint",
    "isMobile",
    "lerp",
    "resetObjectVelocity",
    "setFPSDropCallbackFunction",
    "removeFPSDropCallbackFunction",
    "setPerformanceDropCallbackFunction",
    "removePerformanceDropCallbackFunction",
    "getViewport",
    "setUserInactivityCallbackFunction",
    "removeUserInactivityCallbackFunction",
    "pause",
    "setScreenKeydownListener",
    "removeScreenKeydownListener",
    "setScreenKeyupListener",
    "removeScreenKeyupListener",
    "getText",
    "setText",
    "setTextColor",
    "setTextAlpha",
    "setTextPosition",
    "setTextBackground",
    "removeTextBackground",
    "onTextClick",
    "removeTextClickListener",
    "setTextCenterPosition",
    "hideText",
    "showText",
    "getFPS",
    "executeForEachObject",
    "getRandomInteger",
    "isAnyFingerTouching",
    "getCurrentTouchCount",
    "setScreenMouseWheelListener",
    "removeScreenMouseWheelListener",
    "setScreenPinchListener",
    "removeScreenPinchListener",
    "setObjectMouseOverListener",
    "removeObjectMouseOverListener",
    "setObjectMouseOutListener",
    "removeObjectMouseOutListener",
    "onTextMouseOver",
    "removeTextMouseOverListener",
    "onTextMouseOut",
    "removeTextMouseOutListener",
    "onObjectPositionThresholdExceeded",
    "removeObjectPositionThresholdExceededListener",
    "createFreeControl",
    "createCustomControl",
    "setActiveControl",
    "createFPSControl",
    "setScreenDragListener",
    "removeScreenDragListener",
    "createOrbitControl",
    "isOrientationLandscape",
    "setScreenOrientationChangeListener",
    "removeScreenOrientationChangeListener",
    "executeForEachParticleSystem"
  ];

  this.globals = new Object();

}

// GETTER FUNCTIONS ************************************************************

//   Returns the object or glued object having the name given as the parameter,
//   or undefined if no such object or glued object is found.
Roygbiv.prototype.getObject = function(name){
  if (mode == 0){
    return;
  }
  var addedObject = addedObjects[name];
  var objectGroup = objectGroups[name];
  if (addedObject){
    return addedObject;
  }
  if (objectGroup){
    return objectGroup;
  }
}

//  Returns the particle system having the name given as the parameter,
//  or zero if no such particle system is found.
Roygbiv.prototype.getParticleSystem = function(name){
  if (mode == 0){
    return;
  }
  var particleSystem = particleSystemPool[name];
  if (particleSystem){
    return particleSystem;
  }else{
    return 0;
  }
}

//  Returns a child object having the name given as the second parameter
//  of a glued object given as the first parameter, or zero if no such object
//  is found.
Roygbiv.prototype.getChildObject = function(objectGroup, childObjectName){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.getChildObject, preConditions.objectGroup, objectGroup);
  preConditions.checkIfObjectGroup(ROYGBIV.getChildObject, preConditions.objectGroup, objectGroup);
  var child = objectGroup.childObjectsByName[childObjectName];
  if (child){
    return child;
  }
  return 0;
}

// getRandomColor
//  Returns the HTML name of a random color.
Roygbiv.prototype.getRandomColor = function(){
  if (mode == 0){
    return;
  }
  return ColorNames.generateRandomColor();
}

// getPosition
//  Returns the (x, y, z) coordinates of an object, glued object or a particle system.
//  If a specific axis is specified, only the position on the specified axis is returned.
Roygbiv.prototype.getPosition = function(object, targetVector, axis){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.getPosition, preConditions.object, object);
  preConditions.checkIfAxisOnlyIfDefined(ROYGBIV.getPosition, preConditions.axis, axis);
  preConditions.checkIfVectorOnlyIfDefined(ROYGBIV.getPosition, preConditions.targetVector, targetVector);
  preConditions.checkIfAddedObjectObjectGroupParticleSystem(ROYGBIV.getPosition, preConditions.object, object);
  if (object.isAddedObject){
    if (axis){
      if (object.parentObjectName){
        var parentObject = objectGroups[object.parentObjectName];
        parentObject.graphicsGroup.position.copy(parentObject.mesh.position);
        parentObject.graphicsGroup.quaternion.copy(parentObject.mesh.quaternion);
        parentObject.graphicsGroup.updateMatrix();
        parentObject.graphicsGroup.updateMatrixWorld();
        var child = parentObject.graphicsGroup.children[object.indexInParent];
        child.getWorldPosition(REUSABLE_VECTOR);
        var worldPosition = REUSABLE_VECTOR;
        if (axis.toLowerCase() == "x"){
          return worldPosition.x;
        }else if (axis.toLowerCase() == "y"){
          return worldPosition.y;
        }else if (axis.toLowerCase() == "z"){
          return worldPosition.z;
        }
      }
      if (axis.toLowerCase() == "x"){
        return object.mesh.position.x;
      }else if (axis.toLowerCase() == "y"){
        return object.mesh.position.y;
      }else if (axis.toLowerCase() == "z"){
        return object.mesh.position.z;
      }
    }else{
      if (object.parentObjectName){
        var parentObject = objectGroups[object.parentObjectName];
        parentObject.graphicsGroup.position.copy(parentObject.mesh.position);
        parentObject.graphicsGroup.quaternion.copy(parentObject.mesh.quaternion);
        parentObject.graphicsGroup.updateMatrix();
        parentObject.graphicsGroup.updateMatrixWorld();
        var child = parentObject.graphicsGroup.children[object.indexInParent];
        child.getWorldPosition(REUSABLE_VECTOR);
        var worldPosition = REUSABLE_VECTOR;
        if (targetVector){
          targetVector.x = worldPosition.x;
          targetVector.y = worldPosition.y;
          targetVector.z = worldPosition.z;
          return targetVector;
        }else{
          return this.vector(worldPosition.x, worldPosition.y, worldPosition.z);
        }
      }
      if (targetVector){
        targetVector.x = object.mesh.position.x;
        targetVector.y = object.mesh.position.y;
        targetVector.z = object.mesh.position.z;
        return targetVector;
      }else{
        return this.vector(
          object.mesh.position.x,
          object.mesh.position.y,
          object.mesh.position.z
        );
      }
    }
  }else if (object.isObjectGroup){
    if (axis){
      if (axis.toLowerCase() == "x"){
        return object.mesh.position.x;
      }else if (axis.toLowerCase() == "y"){
        return object.mesh.position.y;
      }else if (axis.toLowerCase() == "z"){
        return object.mesh.position.z;
      }
    }else{
      if (targetVector){
        targetVector.x = object.mesh.position.x;
        targetVector.y = object.mesh.position.y;
        targetVector.z = object.mesh.position.z;
        return targetVector;
      }else{
        return this.vector(
          object.mesh.position.x,
          object.mesh.position.y,
          object.mesh.position.z
        );
      }
    }
  }else if (object.isParticleSystem){
    if (axis){
      if (axis.toLowerCase() == "x"){
        return object.mesh.position.x;
      }else if (axis.toLowerCase() == "y"){
        return object.mesh.position.y;
      }else if (axis.toLowerCase() == "z"){
        return object.mesh.position.z;
      }
    }else{
      if (targetVector){
        targetVector.x = object.mesh.position.x;
        targetVector.y = object.mesh.position.y;
        targetVector.z = object.mesh.position.z;
        return targetVector;
      }else{
        return this.vector(
          object.mesh.position.x,
          object.mesh.position.y,
          object.mesh.position.z
        );
      }
    }
  }
}

//  Returns the opacity of given object.
Roygbiv.prototype.getOpacity = function(object){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.getOpacity, preConditions.object, object);
  preConditions.checkIfAddedObjectOrObjectGroup(ROYGBIV.getOpacity, preConditions.object, object);
  if (object.isAddedObject){
    return object.mesh.material.uniforms.alpha.value;
  }
  return object.mesh.material.uniforms.totalAlpha.value;
}

//  Returns (x,y,z) coordinates of a point marked using the mark command.
Roygbiv.prototype.getMarkedPosition = function(markedPointName, targetVector){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.getMarkedPosition, preConditions.markedPointName, markedPointName);
  preConditions.checkIfDefined(ROYGBIV.getMarkedPosition, preConditions.targetVector, targetVector);
  preConditions.checkIfVectorOnlyIfDefined(ROYGBIV.getMarkedPosition, preConditions.targetVector, targetVector);
  var markedPoint = markedPoints[markedPointName];
  preConditions.checkIfMarkedPointExists(ROYGBIV.getMarkedPosition, null, markedPoint);
  targetVector.x = markedPoint.x;
  targetVector.y = markedPoint.y;
  targetVector.z = markedPoint.z;
  return targetVector;
}

// Calcualtes and returns the velocity vector of a particle system at given time.
// For particles with circular motion, this function returns the angular velocity
// at given time.
Roygbiv.prototype.getParticleSystemVelocityAtTime = function(particleSystem, time, targetVector){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.getParticleSystemVelocityAtTime, preConditions.particleSystem, particleSystem);
  preConditions.checkIfParticleSystem(ROYGBIV.getParticleSystemVelocityAtTime, preConditions.particleSystem, particleSystem);
  preConditions.checkIfDefined(ROYGBIV.getParticleSystemVelocityAtTime, preConditions.time, time);
  preConditions.checkIfNumber(ROYGBIV.getParticleSystemVelocityAtTime, preConditions.time, time);
  preConditions.checkIfDefined(ROYGBIV.getParticleSystemVelocityAtTime, preConditions.targetVector, targetVector);
  preConditions.checkIfVectorOnlyIfDefined(ROYGBIV.getParticleSystemVelocityAtTime, preConditions.targetVector, targetVector);
  return particleSystem.getVelocityAtTime(time, targetVector);
}

// Returns the direction vector of the camera.
Roygbiv.prototype.getCameraDirection = function(targetVector){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.getCameraDirection, preConditions.targetVector, targetVector);
  preConditions.checkIfVectorOnlyIfDefined(ROYGBIV.getCameraDirection, preConditions.targetVector, targetVector);
  REUSABLE_VECTOR.set(0, 0, -1).applyQuaternion(camera.quaternion);
  targetVector.x = REUSABLE_VECTOR.x;
  targetVector.y = REUSABLE_VECTOR.y;
  targetVector.z = REUSABLE_VECTOR.z;
  return targetVector;
}

// Returns the position of the camera.
Roygbiv.prototype.getCameraPosition = function(targetVector){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.getCameraPosition, preConditions.targetVector, targetVector);
  preConditions.checkIfVectorOnlyIfDefined(ROYGBIV.getCameraPosition, preConditions.targetVector, targetVector);
  targetVector.x = camera.position.x;
  targetVector.y = camera.position.y;
  targetVector.z = camera.position.z;
  return targetVector;
}

// Finds a particle system pool by name and returns it.
Roygbiv.prototype.getParticleSystemPool = function(name){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.getParticleSystemPool, preConditions.name, name);
  var psPool = particleSystemPools[name];
  preConditions.checkIfParticleSystemPoolExists(ROYGBIV.getParticleSystemPool, null, psPool);
  return psPool;
}

// Returns an available particle system from the pool, or false if there is
// not an available particle system inside the pool. The particle systems become
// available when hidden or expired.
Roygbiv.prototype.getParticleSystemFromPool = function(pool){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.getParticleSystemFromPool, preConditions.pool, pool);
  preConditions.checkIfParticleSystemPool(ROYGBIV.getParticleSystemFromPool, preConditions.pool, pool);
  preConditions.checkIfPoolDestroyed(ROYGBIV.getParticleSystemFromPool, null, pool);
  return pool.get();
}

// Gets an end point of an object. The axis may be +x,-x,+y,-y,+z or -z. Note that
// object groups do not support this function but child objects do. This function
// may be useful in cases where for example a particle system needs to be started
// from the tip point of an object.
Roygbiv.prototype.getEndPoint = function(object, axis, targetVector){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.getEndPoint, preConditions.object, object);
  preConditions.checkIfAddedObject(ROYGBIV.getEndPoint, preConditions.object, object);
  preConditions.checkIfDefined(ROYGBIV.getEndPoint, preConditions.axis, axis);
  preConditions.checkIfDefined(ROYGBIV.getEndPoint, preConditions.targetVector, targetVector);
  preConditions.checkIfVectorOnlyIfDefined(ROYGBIV.getEndPoint, preConditions.targetVector, targetVector);
  axis = axis.toLowerCase();
  preConditions.checkIfEndPointAxis(ROYGBIV.getEndPoint, preConditions.axis, axis);
  var endPoint = object.getEndPoint(axis);
  targetVector.x = endPoint.x;
  targetVector.y = endPoint.y;
  targetVector.z = endPoint.z;
  return targetVector;
}

// Returns the current viewport object having startX, startY, width and height parameters.
// Do not modify the values of the returned object.
Roygbiv.prototype.getViewport = function(){
  if (mode == 0){
    return;
  }
  return currentViewport;
}

// Returns a text object or 0 if the text does not exist.
Roygbiv.prototype.getText = function(textName){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.getText, preConditions.textName, textName);
  var text = addedTexts[textName];
  if (text){
    return text;
  }
  return 0;
}

// Returns the current FPS.
Roygbiv.prototype.getFPS = function(){
  if (mode == 0){
    return;
  }
  return fpsHandler.fps;
}

// OBJECT MANIPULATION FUNCTIONS ***********************************************

//  Hides an object or a glued object, removes it from the scene. Does nothing
//  if the object is already hidden. The additional keepPhysics parameter can
//  be used in order to hide only the graphical representation of the object
//  but keep its physicsal body. The default value of keepPhysics is false.
Roygbiv.prototype.hide = function(object, keepPhysics){
  if (mode == 0){
    return;
  }
  preConditions.checkIfBooleanOnlyIfExists(ROYGBIV.hide, preConditions.keepPhysics, keepPhysics);
  var keepPhysicsValue = keepPhysics;
  preConditions.checkIfDefined(ROYGBIV.hide, preConditions.object, object);
  preConditions.checkIfAddedObjectOrObjectGroup(ROYGBIV.hide, preConditions.object, object);
  if (object.isAddedObject){
    preConditions.checkIfChildObjectOnlyIfExists(ROYGBIV.hide, preConditions.object, object);
    if (keepPhysicsValue){
      preConditions.checkIfNoMass(ROYGBIV.hide, preConditions.object, object);
    }
    preConditions.checkIfChangeable(ROYGBIV.hide, preConditions.object, object);
    object.hide(keepPhysicsValue);
  }else if (object.isObjectGroup){
    if (keepPhysicsValue){
      preConditions.checkIfNoMass(ROYGBIV.hide, preConditions.object, object);
    }
    preConditions.checkIfChangeable(ROYGBIV.hide, preConditions.object, object);
    object.hide(keepPhysicsValue);
  }
}

//  Makes a hidden object or glued object visible. Does nothing if the object is
//  already visible.
Roygbiv.prototype.show = function(object){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.show, preConditions.object, object);
  preConditions.checkIfAddedObjectOrObjectGroup(ROYGBIV.show, preConditions.object, object);
  if (object.isAddedObject){
    preConditions.checkIfChildObjectOnlyIfExists(ROYGBIV.show, preConditions.object, object);
    preConditions.checkIfChangeable(ROYGBIV.show, preConditions.object, object);
    object.show();
  }else if (object.isObjectGroup){
    preConditions.checkIfChangeable(ROYGBIV.show, preConditions.object, object);
    object.show();
  }
}

// Applies a physical force to an object or a glued object from a given point.
Roygbiv.prototype.applyForce = function(object, force, point){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.applyForce, preConditions.object, object);
  preConditions.checkIfAddedObjectOrObjectGroup(ROYGBIV.applyForce, preConditions.object, object);
  preConditions.checkIfNoMass(ROYGBIV.applyForce, preConditions.object, object);
  preConditions.checkIfDynamic(ROYGBIV.applyForce, preConditions.object, object);
  preConditions.checkIfDefined(ROYGBIV.applyForce, preConditions.force, force);
  preConditions.checkIfDefined(ROYGBIV.applyForce, preConditions.point, point);
  preConditions.checkIfVectorOnlyIfDefined(ROYGBIV.applyForce, preConditions.force, force);
  preConditions.checkIfVectorOnlyIfDefined(ROYGBIV.applyForce, preConditions.point, point);
  REUSABLE_CANNON_VECTOR.set(force.x, force.y, force.z);
  REUSABLE_CANNON_VECTOR_2.set(point.x, point.y, point.z);
  object.physicsBody.applyImpulse(
    REUSABLE_CANNON_VECTOR,
    REUSABLE_CANNON_VECTOR_2
  );
  physicsWorld.applyImpulse(object, REUSABLE_CANNON_VECTOR, REUSABLE_CANNON_VECTOR_2);
}

//  Rotates an object or a glued object around a given world axis by given radians.
//  The parameter axis must be one of x, y or z. Objects are rotated around
//  their own centers, so their positions do not change when rotated using this
//  function.
Roygbiv.prototype.rotate = function(object, axis, radians){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.rotate, preConditions.object, object);
  preConditions.checkIfDefined(ROYGBIV.rotate, preConditions.axis, axis);
  axis = axis.toLowerCase();
  preConditions.checkIfAxisOnlyIfDefined(ROYGBIV.rotate, preConditions.axis, axis);
  preConditions.checkIfNumber(ROYGBIV.rotate, preConditions.radians, radians);
  preConditions.checkIfAddedObjectOrObjectGroup(ROYGBIV.rotate, preConditions.object, object);
  if (object.isAddedObject && object.parentObjectName){
    var parentObject = objectGroups[object.parentObjectName];
    if (parentObject){
      this.rotateAroundXYZ(
        parentObject,
        object.getPositionAtAxis("x"),
        object.getPositionAtAxis("y"),
        object.getPositionAtAxis("z"),
        radians,
        axis
      );
      return;
    }
  }
  preConditions.checkIfChangeable(ROYGBIV.rotate, preConditions.object, object);
  object.handleRotation(axis, radians);
}

//  Rotates an object or a glued object around the given (x, y, z)
//  Unlike the rotate function, the positions of the objects can change when rotated
//  using this function.
Roygbiv.prototype.rotateAroundXYZ = function(object, x, y, z, radians, axis){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.rotateAroundXYZ, preConditions.object, object);
  preConditions.checkIfDefined(ROYGBIV.rotateAroundXYZ, preConditions.x, x);
  preConditions.checkIfDefined(ROYGBIV.rotateAroundXYZ, preConditions.y, y);
  preConditions.checkIfDefined(ROYGBIV.rotateAroundXYZ, preConditions.z, z);
  preConditions.checkIfNumber(ROYGBIV.rotateAroundXYZ, preConditions.x, x);
  preConditions.checkIfNumber(ROYGBIV.rotateAroundXYZ, preConditions.y, y);
  preConditions.checkIfNumber(ROYGBIV.rotateAroundXYZ, preConditions.z, z);
  preConditions.checkIfDefined(ROYGBIV.rotateAroundXYZ, preConditions.radians, radians);
  preConditions.checkIfNumber(ROYGBIV.rotateAroundXYZ, preConditions.radians, radians);
  preConditions.checkIfDefined(ROYGBIV.rotateAroundXYZ, preConditions.axis, axis);
  preConditions.checkIfAddedObjectOrObjectGroup(ROYGBIV.rotateAroundXYZ, preConditions.object, object);
  axis = axis.toLowerCase();
  preConditions.checkIfAxisOnlyIfDefined(ROYGBIV.rotateAroundXYZ, preConditions.axis, axis);
  var axisVector;
  if (axis.toLowerCase() == "x"){
    axisVector = THREE_AXIS_VECTOR_X;
  }else if (axis.toLowerCase() == "y"){
    axisVector = THREE_AXIS_VECTOR_Y;
  }else if (axis.toLowerCase() == "z"){
    axisVector = THREE_AXIS_VECTOR_Z;
  }
  var mesh;
  if (object.isAddedObject){
    if (object.parentObjectName){
      var parentObject = objectGroups[object.parentObjectName];
      if (parentObject){
        this.rotateAroundXYZ(
          parentObject,
          x, y, z,
          radians,
          axis
        );
        return;
      }
    }
    preConditions.checkIfChangeable(ROYGBIV.rotateAroundXYZ, preConditions.object, object);
  }else if (object.isObjectGroup){
    preConditions.checkIfChangeable(ROYGBIV.rotateAroundXYZ, preConditions.object, object);
  }
  object.prevPositionVector.copy(object.mesh.position);
  object.rotateAroundXYZ(x, y, z, axis, axisVector, radians);
  physicsWorld.updateObject(object, false, true);
  if (object.autoInstancedParent){
    object.autoInstancedParent.updateObject(object);
  }
  object.onPositionChange(object.prevPositionVector, object.mesh.position);
}

//  Puts an object or glued object to the specified (x, y, z) coordinate.
Roygbiv.prototype.setPosition = function(obj, x, y, z){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.setPosition, preConditions.obj, obj);
  preConditions.checkIfDefined(ROYGBIV.setPosition, preConditions.x, x);
  preConditions.checkIfDefined(ROYGBIV.setPosition, preConditions.y, y);
  preConditions.checkIfDefined(ROYGBIV.setPosition, preConditions.z, z);
  preConditions.checkIfNumber(ROYGBIV.setPosition, preConditions.x, x);
  preConditions.checkIfNumber(ROYGBIV.setPosition, preConditions.y, y);
  preConditions.checkIfNumber(ROYGBIV.setPosition, preConditions.z, z);
  preConditions.checkIfAddedObjectOrObjectGroup(ROYGBIV.setPosition, preConditions.obj, obj);
  if (obj.parentObjectName){
    var objGroup = objectGroups[obj.parentObjectName];
    preConditions.checkIfParentExists(ROYGBIV.setPosition, null, objGroup);
    this.setPosition(objGroup, x, y, z);
    return;
  }
  preConditions.checkIfChangeable(ROYGBIV.setPosition, preConditions.obj, obj);
  obj.setPosition(x, y, z);
}

//  Sets the mass property of an object or a glued object. Objects are considered
//  dynamic if and only if their mass is greater than zero.
Roygbiv.prototype.setMass = function(object, mass){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.setMass, preConditions.object, object);
  preConditions.checkIfDefined(ROYGBIV.setMass, preConditions.mass, mass);
  preConditions.checkIfNumber(ROYGBIV.setMass, preConditions.mass, mass);
  preConditions.checkIfAddedObjectOrObjectGroup(ROYGBIV.setMass, preConditions.object, object);
  preConditions.checkIfChangeable(ROYGBIV.setMass, preConditions.object, object);
  preConditions.checkIfNoMass(ROYGBIV.setMass, preConditions.object, object);
  preConditions.checkIfChildObjectOnlyIfExists(ROYGBIV.setMass, preConditions.object, object);
  if (typeof object.originalMass == UNDEFINED){
    object.originalMass = object.mass;
  }
  if (typeof object.mass == UNDEFINED){
    object.originalMass = 0;
    object.mass = 0;
  }
  object.setMass(mass);
  physicsWorld.setMass(object, mass);
  if (object.isAddedObject){
    if (mass > 0){
      dynamicObjects.set(object.name,  object);
    }else{
      dynamicObjects.delete(object.name);
    }
  }else if (object.isObjectGroup){
    if (mass > 0){
      dynamicObjectGroups.set(object.name, object);
    }else{
      dynamicObjectGroups.delete(object.name);
    }
  }
}

//  Translates an object or glued object on the given axis by the given amount.
//  Axis must be one of x, y or z.
Roygbiv.prototype.translate = function(object, axis, amount){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.translate, preConditions.object, object);
  preConditions.checkIfDefined(ROYGBIV.translate, preConditions.axis, axis);
  preConditions.checkIfDefined(ROYGBIV.translate, preConditions.amount, amount);
  axis = axis.toLowerCase();
  preConditions.checkIfAxisOnlyIfDefined(ROYGBIV.translate, preConditions.axis, axis);
  preConditions.checkIfNumber(ROYGBIV.translate, preConditions.amount, amount);
  preConditions.checkIfAddedObjectOrObjectGroup(ROYGBIV.translate, preConditions.object, object);
  if (object.isAddedObject){
    if (object.parentObjectName){
      var parentObject = objectGroups[object.parentObjectName];
      if (parentObject){
        this.translate(parentObject, axis, amount);
        return;
      }
    }
  }
  preConditions.checkIfChangeable(ROYGBIV.translate, preConditions.object, object);
  object.translate(axis, amount, true);
  physicsWorld.updateObject(object, true, false);
  if (object.autoInstancedParent){
    object.autoInstancedParent.updateObject(object);
  }
}

//  Increases/decreases the opacity of given object.
Roygbiv.prototype.opacity = function(object, delta){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.opacity, preConditions.object, object);
  preConditions.checkIfDefined(ROYGBIV.opacity, preConditions.delta, delta);
  preConditions.checkIfNumber(ROYGBIV.opacity, preConditions.delta, delta);
  preConditions.checkIfAddedObjectOrObjectGroup(ROYGBIV.opacity, preConditions.object, object);
  preConditions.checkIfChildObjectOnlyIfExists(ROYGBIV.opacity, preConditions.object, object);
  if (!object.initOpacitySet && (object.isAddedObject)){
    object.initOpacity = object.mesh.material.uniforms.alpha.value;
    object.initOpacitySet = true;
  }else if (!object.initOpacitySet && (object.isObjectGroup)){
    object.initOpacity = object.mesh.material.uniforms.totalAlpha.value;
    object.initOpacitySet = true;
  }
  object.incrementOpacity(delta);
  if (isAddedObject){
    if (object.mesh.material.uniforms.alpha.value < 0){
      object.updateOpacity(0);
    }
    if (object.mesh.material.uniforms.alpha.value > 1){
      object.updateOpacity(1);
    }
  }else if (isObjectGroup){
    if (object.mesh.material.uniforms.totalAlpha.value < 0){
      object.updateOpacity(0);
    }
    if (object.mesh.material.uniforms.totalAlpha.value > 1){
      object.updateOpacity(1);
    }
  }
}

//  Sets the velocity of an object or a glued object. The object must be a dynamic object
//  (mass > 0) in order to have a velocity.
Roygbiv.prototype.setObjectVelocity = function(object, velocityVector, axis){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.setObjectVelocity, preConditions.object, object);
  preConditions.checkIfAddedObjectOrObjectGroup(ROYGBIV.setObjectVelocity, preConditions.object, object);
  preConditions.checkIfChangeable(ROYGBIV.setObjectVelocity, preConditions.object, object);
  preConditions.checkIfChildObjectOnlyIfExists(ROYGBIV.setObjectVelocity, preConditions.object, object);
  preConditions.checkIfDynamic(ROYGBIV.setObjectVelocity, preConditions.object, object);
  preConditions.checkIfDefined(ROYGBIV.setObjectVelocity, preConditions.velocityVector, velocityVector);
  preConditions.checkIfVectorOnlyIfDefined(ROYGBIV.setObjectVelocity, preConditions.velocityVector, velocityVector);
  if (!(typeof axis == UNDEFINED)){
    axis = axis.toLowerCase();
    preConditions.checkIfAxisOnlyIfDefined(ROYGBIV.setObjectVelocity, preConditions.axis, axis);
    if (axis == "x"){
      object.setVelocityX(velocityVector.x);
    }else if (axis == "y"){
      object.setVelocityY(velocityVector.y);
    }else if (axis == "z"){
      object.setVelocityZ(velocityVector.z);
    }
    return;
  }
  object.setVelocity(velocityVector);
}

// Modifies the color and alpha value of an object or an object group.
Roygbiv.prototype.setObjectColor = function(object, colorName, alpha){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.setObjectColor, preConditions.object, object);
  preConditions.checkIfAddedObjectOrObjectGroup(ROYGBIV.setObjectColor, preConditions.object, object);
  preConditions.checkIfColorizable(ROYGBIV.setObjectColor, preConditions.object, object);
  preConditions.checkIfDefined(ROYGBIV.setObjectColor, preConditions.colorName, colorName);
  if (typeof alpha == UNDEFINED){
    alpha = 1;
  }else{
    preConditions.checkIfNumber(ROYGBIV.setObjectColor, preConditions.alpha, alpha);
  }
  REUSABLE_COLOR.set(colorName);
  if (object.autoInstancedParent){
    object.autoInstancedParent.forceColor(object, REUSABLE_COLOR.r, REUSABLE_COLOR.g, REUSABLE_COLOR.b, alpha);
  }
  object.forceColor(REUSABLE_COLOR.r, REUSABLE_COLOR.g, REUSABLE_COLOR.b, alpha);
}

// Resets the color and alpha value of an object or an object group.
Roygbiv.prototype.resetObjectColor = function(object){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.resetObjectColor, preConditions.object, object);
  preConditions.checkIfAddedObjectOrObjectGroup(ROYGBIV.resetObjectColor, preConditions.object, object);
  preConditions.checkIfColorizable(ROYGBIV.resetObjectColor, preConditions.object, object);
  if (object.autoInstancedParent){
    object.autoInstancedParent.resetColor(object);
  }
  object.resetColor();
}

// Sets a rotation pivot for an object created with createRotationPivot API.
Roygbiv.prototype.setRotationPivot = function(rotationPivot){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.setRotationPivot, preConditions.rotationPivot, rotationPivot);
  preConditions.checkIfRotationPivot(ROYGBIV.setRotationPivot, preConditions.rotat, rotationPivot);
  var sourceObject = rotationPivot.sourceObject;
  sourceObject.setRotationPivot(rotationPivot);
}

// Unsets a rotation pivot point for an object set with setRotationPivot API.
Roygbiv.prototype.unsetRotationPivot = function(object){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.unsetRotationPivot, preConditions.object, object);
  preConditions.checkIfAddedObjectOrObjectGroup(ROYGBIV.unsetRotationPivot, preConditions.object, object);
  preConditions.checkIfHavePivotPoint(ROYGBIV.unsetRotationPivot, preConditions.object, object);
  object.unsetRotationPivot();
}

// Resets the velocity and angular velocity of an object.
Roygbiv.prototype.resetObjectVelocity = function(object){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.resetObjectVelocity, preConditions.object, object);
  preConditions.checkIfAddedObjectOrObjectGroup(ROYGBIV.resetObjectVelocity, preConditions.object, object);
  preConditions.checkIfChangeable(ROYGBIV.resetObjectVelocity, preConditions.object, object);
  preConditions.checkIfChildObjectOnlyIfExists(ROYGBIV.resetObjectVelocity, preConditions.object, object);
  preConditions.checkIfDynamic(ROYGBIV.resetObjectVelocity, preConditions.object, object);
  object.resetVelocity();
}

// PARTICLE SYSTEM FUNCTIONS ***************************************************

//  Sets the rotation of a particle system around given axis.
Roygbiv.prototype.setParticleSystemRotation = function(particleSystem, axis, radians){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.setParticleSystemRotation, preConditions.particleSystem, particleSystem);
  preConditions.checkIfDefined(ROYGBIV.setParticleSystemRotation, preConditions.axis, axis);
  preConditions.checkIfDefined(ROYGBIV.setParticleSystemRotation, preConditions.radians, radians);
  axis = axis.toLowerCase();
  preConditions.checkIfAxisOnlyIfDefined(ROYGBIV.setParticleSystemRotation, preConditions.axis, axis);
  preConditions.checkIfNumber(ROYGBIV.setParticleSystemRotation, preConditions.radians, radians);
  preConditions.checkIfTrue(ROYGBIV.setParticleSystemRotation, "particleSystem is not visible", (!particleSystem.mesh.visible));
  preConditions.checkIfTrue(ROYGBIV.setParticleSystemRotation, "particleSystem has a collision callback attached. Cannot set rotation.", particleSystem.checkForCollisions);
  preConditions.checkIfTrue(ROYGBIV.setParticleSystemRotation, "particleSystem has a collidable particle. Cannot set rotation.", particleSystem.particlesWithCollisionCallbacks.size > 0);
  preConditions.checkIfTrue(ROYGBIV.setParticleSystemRotation, "particleSystem has a trailed particle. Cannot set rotation.", particleSystem.hasTrailedParticle);
  preConditions.checkIfTrue(ROYGBIV.setParticleSystemRotation, "particleSystem has a defined motion. Cannot set rotation.", (particleSystem.velocity.x != 0 || particleSystem.velocity.y != 0 || particleSystem.velocity.z != 0 || particleSystem.acceleration.x != 0 || particleSystem.acceleration.y != 0 || particleSystem.acceleration.z != 0));
  if (axis == "x"){
    particleSystem.mesh.rotation.x = radians;
  }else if (axis == "y"){
    particleSystem.mesh.rotation.y = radians;
  }else if (axis == "z"){
    particleSystem.mesh.rotation.z = radians;
  }
  particleSystem.hasManualRotationSet = true;
}

//  Sets the quaternion of given particle system.
Roygbiv.prototype.setParticleSystemQuaternion = function(particleSystem, quatX, quatY, quatZ, quatW){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.setParticleSystemQuaternion, preConditions.particleSystem, particleSystem);
  preConditions.checkIfParticleSystem(ROYGBIV.setParticleSystemQuaternion, preConditions.particleSystem, particleSystem);
  preConditions.checkIfNumber(ROYGBIV.setParticleSystemQuaternion, preConditions.quatX, quatX);
  preConditions.checkIfNumber(ROYGBIV.setParticleSystemQuaternion, preConditions.quatY, quatY);
  preConditions.checkIfNumber(ROYGBIV.setParticleSystemQuaternion, preConditions.quatZ, quatZ);
  preConditions.checkIfNumber(ROYGBIV.setParticleSystemQuaternion, preConditions.quatW, quatW);
  preConditions.checkIfTrue(ROYGBIV.setParticleSystemQuaternion, "particleSystem is not visible.", (!particleSystem.mesh.visible));
  preConditions.checkIfTrue(ROYGBIV.setParticleSystemQuaternion, "particleSystem has a collision callback attached. Cannot set quaternion.", (particleSystem.checkForCollisions));
  preConditions.checkIfTrue(ROYGBIV.setParticleSystemQuaternion, "particleSystem has a collidable particle. Cannot set quaternion.", (particleSystem.particlesWithCollisionCallbacks.size > 0));
  preConditions.checkIfTrue(ROYGBIV.setParticleSystemQuaternion, "particleSystem has a trailed particle. Cannot set quaternion.", (particleSystem.hasTrailedParticle));
  preConditions.checkIfTrue(ROYGBIV.setParticleSystemQuaternion, "particleSystem has a defined motion. Cannot set quaternion.", (particleSystem.velocity.x != 0 || particleSystem.velocity.y != 0 || particleSystem.velocity.z != 0 || particleSystem.acceleration.x != 0 || particleSystem.acceleration.y != 0 || particleSystem.acceleration.z != 0));
  particleSystem.mesh.quaternion.set(quatX, quatY, quatZ, quatW);
  particleSystem.hasManualQuaternionSet = true;
}

// Stops the motion of a particle system. This can be useful for smooth after collision
// effects of particle systems as it lets particles to dissapear smoothly. The particle
// system is killed after stopDuration seconds. If particle systems have collision listener
// attached, the collision listener needs to be reset when starting the particle system
// after stopping.
Roygbiv.prototype.stopParticleSystem = function(particleSystem, stopDuration){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.stopParticleSystem, preConditions.particleSystem, particleSystem);
  preConditions.checkIfParticleSystem(ROYGBIV.stopParticleSystem, preConditions.particleSystem, particleSystem);
  preConditions.checkIfDefined(ROYGBIV.stopParticleSystem, preConditions.stopDuration, stopDuration);
  preConditions.checkIfNumber(ROYGBIV.stopParticleSystem, preConditions.stopDuration, stopDuration);
  preConditions.checkIfLessThanExclusive(ROYGBIV.stopParticleSystem, preConditions.stopDuration, stopDuration, 0);
  particleSystem.stop(stopDuration);
}

// Starts a particle system after its creation. Configurations are:
// particleSystem: The particle system to start. (mandatory)
// startPosition: The initial position vector of the particle system. (optional)
// startVelocity: The initial velocity vector of the particle system. (optional)
// startAcceleration: The initial acceleration vector of the particle system. (optional)
// startQuaternion: The initial quaternion of the particle system. Use ROYGBIV.computeQuaternionFromVectors (optional)
Roygbiv.prototype.startParticleSystem = function(configurations){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.startParticleSystem, preConditions.configurations, configurations);
  preConditions.checkIfMandatoryParameterExists(ROYGBIV.startParticleSystem, preConditions.particleSystem, configurations.particleSystem);
  preConditions.checkIfParticleSystem(ROYGBIV.startParticleSystem, preConditions.particleSystem, configurations.particleSystem);
  preConditions.checkIfVectorOnlyIfDefined(ROYGBIV.startParticleSystem, preConditions.startPosition, configurations.startPosition);
  preConditions.checkIfVectorOnlyIfDefined(ROYGBIV.startParticleSystem, preConditions.startVelocity, configurations.startVelocity);
  preConditions.checkIfVectorOnlyIfDefined(ROYGBIV.startParticleSystem, preConditions.startAcceleration, configurations.startAcceleration);
  preConditions.checkIfVectorOnlyIfDefined(ROYGBIV.startParticleSystem, preConditions.startQuaternion, configurations.startQuaternion);
  configurations.particleSystem.start(configurations);
}

// Makes a particle system invisible.
Roygbiv.prototype.hideParticleSystem = function(particleSystem){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.hideParticleSystem, preConditions.particleSystem, particleSystem);
  preConditions.checkIfParticleSystem(ROYGBIV.hideParticleSystem, preConditions.particleSystem, particleSystem);
  particleSystem.hide();
}

// Makes the particles of given particle system smaller on each frame. Greater
// the coefficient, faster the particles fade away. This can be used for
// smoke like particle systems to make them dissapear smoothly.
Roygbiv.prototype.fadeAway = function(particleSystem, coefficient){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.fadeAway, preConditions.particleSystem, particleSystem);
  preConditions.checkIfParticleSystem(ROYGBIV.fadeAway, preConditions.particleSystem, particleSystem);
  preConditions.checkIfDefined(ROYGBIV.fadeAway, preConditions.coefficient, coefficient);
  preConditions.checkIfNumber(ROYGBIV.fadeAway, preConditions.coefficient, coefficient);
  preConditions.checkIfLessThan(ROYGBIV.fadeAway, preConditions.coefficient, coefficient, 0);
  if (!particleSystem.psMerger){
    particleSystem.material.uniforms.dissapearCoef.value = coefficient;
  }else{
    particleSystem.psMerger.material.uniforms.dissapearCoefArray.value[particleSystem.mergedIndex] = coefficient;
  }
}

// Sets the position of a particle system. This function is designed for
// magic circle like particle systems which may follow players. This function
// should not be used for particle systems with collision callbacks or particle systems
// with defined motions in general.
Roygbiv.prototype.setParticleSystemPosition = function(particleSystem, x, y, z){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.setParticleSystemPosition, preConditions.particleSystem, particleSystem);
  preConditions.checkIfParticleSystem(ROYGBIV.setParticleSystemPosition, preConditions.particleSystem, particleSystem);
  preConditions.checkIfDefined(ROYGBIV.setParticleSystemPosition, preConditions.x, x);
  preConditions.checkIfDefined(ROYGBIV.setParticleSystemPosition, preConditions.y, y);
  preConditions.checkIfDefined(ROYGBIV.setParticleSystemPosition, preConditions.z, z);
  preConditions.checkIfNumber(ROYGBIV.setParticleSystemPosition, preConditions.x, x);
  preConditions.checkIfNumber(ROYGBIV.setParticleSystemPosition, preConditions.y, y);
  preConditions.checkIfNumber(ROYGBIV.setParticleSystemPosition, preConditions.z, z);
  preConditions.checkIfTrue(ROYGBIV.setParticleSystemPosition, "particleSystem is not visible", (!particleSystem.mesh.visible));
  preConditions.checkIfTrue(ROYGBIV.setParticleSystemPosition, "particleSystem has a collision callback attached.", particleSystem.checkForCollisions);
  preConditions.checkIfTrue(ROYGBIV.setParticleSystemPosition, "particleSystem has collidable particles.", (particleSystem.particlesWithCollisionCallbacks.size > 0));
  preConditions.checkIfTrue(ROYGBIV.setParticleSystemPosition, "particleSystem has a trailed particle.", particleSystem.hasTrailedParticle);
  preConditions.checkIfTrue(ROYGBIV.setParticleSystemPosition, "particleSystem has a defined motion.", (particleSystem.velocity.x != 0 || particleSystem.velocity.y != 0 || particleSystem.velocity.z != 0 || particleSystem.acceleration.x != 0 || particleSystem.acceleration.y != 0 || particleSystem.acceleration.z != 0));
  particleSystem.mesh.position.set(x, y, z);
  particleSystem.hasManualPositionSet = true;
}

// Runs the provided function for each particle system of given particle system pool. The callbackFunction
// is executed with particleSystem parameter.
Roygbiv.prototype.executeForEachParticleSystem = function(psPool, callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.executeForEachParticleSystem, preConditions.psPool, psPool);
  preConditions.checkIfDefined(ROYGBIV.executeForEachParticleSystem, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.executeForEachParticleSystem, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfParticleSystemPool(ROYGBIV.executeForEachParticleSystem, preConditions.psPool, psPool);
  for (var psName in psPool.particleSystems){
    callbackFunction(psPool.particleSystems[psName]);
  }
}

// MOTION BLUR FUNCTIONS *******************************************************

// Starts the motion blur effect of an object.
Roygbiv.prototype.startMotionBlur = function(object){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.startMotionBlur, preConditions.object, object);
  preConditions.checkIfAddedObjectOrObjectGroup(ROYGBIV.startMotionBlur, preConditions.object, object);
  var objectTrail = objectTrails[object.name];
  preConditions.checkIfTrue(ROYGBIV.startMotionBlur, "No effect attached to object.", (!objectTrail));
  objectTrail.start();
}

// Stops the motion blur effect of an object. The effect can be restarted using the startMotionBlur command.
Roygbiv.prototype.stopMotionBlur = function(object){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.stopMotionBlur, preConditions.object, object);
  preConditions.checkIfAddedObjectOrObjectGroup(ROYGBIV.stopMotionBlur, preConditions.object, object);
  var objectTrail = objectTrails[object.name];
  preConditions.checkIfTrue(ROYGBIV.stopMotionBlur, "No effect attached to object.", (!objectTrail));
  objectTrail.stop();
}

// CROSSHAIR FUNCTIONS *********************************************************

// Creates a new crosshair. Configurations are:
// name: The unique name of the crosshair. (mandatory)
// textureName: The texture name of the crosshair. (mandatory)
// colorName: The color name of the crosshair. (mandatory)
// alpha: The alpha value of the crosshair. (mandatory)
// size: The size of the crosshair. (mandatory)
// maxWidthPercent: If set the crosshair width cannot be more than maxWidthPercent% of the screen width. (optional)
// maxHeightPercent: If set the crosshair height cannot be more than maxHeightPercent% of the screen height. (optional)
Roygbiv.prototype.createCrosshair = function(configurations){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.createCrosshair, preConditions.configurations, configurations);
  var name = configurations.name;
  var textureName = configurations.textureName;
  var colorName = configurations.colorName;
  var alpha = configurations.alpha;
  var size = configurations.size;
  var maxWidthPercent = configurations.maxWidthPercent;
  var maxHeightPercent = configurations.maxHeightPercent;
  preConditions.checkIfMandatoryParameterExists(ROYGBIV.createCrosshair, preConditions.name, name);
  preConditions.checkIfTrue(ROYGBIV.createCrosshair, "name must be unique", crosshairs[name]);
  preConditions.checkIfMandatoryParameterExists(ROYGBIV.createCrosshair, preConditions.textureName, textureName);
  var texture = textures[textureName];
  preConditions.checkIfTextureExists(ROYGBIV.createCrosshair, preConditions.texture, texture);
  preConditions.checkIfTextureReady(ROYGBIV.createCrosshair, preConditions.texture, texture);
  preConditions.checkIfMandatoryParameterExists(ROYGBIV.createCrosshair, preConditions.alpha, alpha);
  preConditions.checkIfNumber(ROYGBIV.createCrosshair, preConditions.alpha, alpha);
  preConditions.checkIfInRange(ROYGBIV.createCrosshair, preConditions.alpha, alpha, 0, 1);
  preConditions.checkIfMandatoryParameterExists(ROYGBIV.createCrosshair, preConditions.size, size);
  preConditions.checkIfNumber(ROYGBIV.createCrosshair, preConditions.size, size);
  preConditions.checkIfLessThan(ROYGBIV.createCrosshair, preConditions.size, size, 0);
  preConditions.checkIfNumberOnlyIfExists(ROYGBIV.createCrosshair, preConditions.maxWidthPercent, maxWidthPercent);
  preConditions.checkIfLessThanOnlyIfExists(ROYGBIV.createCrosshair, preConditions.maxWidthPercent, maxWidthPercent);
  preConditions.checkIfTrueOnlyIfYExists(ROYGBIV.createCrosshair, "maxWidthPercent must be less than 100", (maxWidthPercent), (maxWidthPercent > 100));
  preConditions.checkIfNumberOnlyIfExists(ROYGBIV.createCrosshair, preConditions.maxHeightPercent, maxHeightPercent);
  preConditions.checkIfLessThanOnlyIfExists(ROYGBIV.createCrosshair, preConditions.maxHeightPercent, maxHeightPercent);
  preConditions.checkIfTrueOnlyIfYExists(ROYGBIV.createCrosshair, "maxHeightPercent must be less than 100", (maxHeightPercent), (maxHeightPercent > 100));
  var color = new THREE.Color(colorName);
  new Crosshair({
    name: name,
    texture: texture,
    colorR: color.r,
    colorB: color.b,
    colorG: color.g,
    alpha: alpha,
    size: size,
    maxWidthPercent: maxWidthPercent,
    maxHeightPercent: maxHeightPercent
  });
}

// Selects a crosshair. Only the selected crosshair is visible on the screen.
Roygbiv.prototype.selectCrosshair = function(crosshairName){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.selectCrosshair, preConditions.crosshairName, crosshairName);
  var crosshair = crosshairs[crosshairName];
  preConditions.checkIfTrue(ROYGBIV.selectCrosshair, "No such crosshair.", (!crosshair));
  crosshairHandler.selectCrosshair(crosshair);
}

// Changes the color of the selected crosshair.
Roygbiv.prototype.changeCrosshairColor = function(colorName){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.changeCrosshairColor, preConditions.colorName, colorName);
  preConditions.checkIfTrue(ROYGBIV.changeCrosshairColor, "No crosshair is selected", (!selectedCrosshair));
  crosshairHandler.changeCrosshairColor(colorName);
}

// Destroys the selected crosshair. selectCrosshair function should be used after this function
// in order to put a crosshair on the screen.
Roygbiv.prototype.hideCrosshair = function(){
  if (mode == 0){
    return;
  }
  crosshairHandler.hideCrosshair();
}

// Starts rotation effect of the selected crosshair.
Roygbiv.prototype.startCrosshairRotation = function(angularSpeed){
  if (mode == 0){
    return;
  }
  preConditions.checkIfTrue(ROYGBIV.startCrosshairRotation, "No selected crosshair", (!selectedCrosshair));
  preConditions.checkIfDefined(ROYGBIV.startCrosshairRotation, preConditions.angularSpeed, angularSpeed);
  preConditions.checkIfNumber(ROYGBIV.startCrosshairRotation, preConditions.angularSpeed, angularSpeed);
  crosshairHandler.startCrosshairRotation(angularSpeed);
}

// Stops rotation effect of the selected crosshair.
Roygbiv.prototype.stopCrosshairRotation = function(){
  if (mode == 0){
    return;
  }
  preConditions.checkIfTrue(ROYGBIV.stopCrosshairRotation, "No selectedCrosshair.", (!selectedCrosshair));
  crosshairHandler.stopCrosshairRotation();
}

// Pauses rotation effect of the selected crosshair. startCrosshairRotation function
// can be used to continue the rotation effect.
Roygbiv.prototype.pauseCrosshairRotation = function(){
  if (mode == 0){
    return;
  }
  preConditions.checkIfTrue(ROYGBIV.pauseCrosshairRotation, "No selectedCrosshair.", (!selectedCrosshair));
  crosshairHandler.pauseCrosshairRotation();
}

// Expands a crosshair. This can be used while shooting or walking for fps games.
// The crosshair expands by delta while its size is less than targetSize on each frame.
// This function is designed to be called inside onmousedown or onkeydown like events.
Roygbiv.prototype.expandCrosshair = function(targetSize, delta){
  if (mode == 0){
    return;
  }
  preConditions.checkIfTrue(ROYGBIV.expandCrosshair, "No selectedCrosshair.", (!selectedCrosshair));
  preConditions.checkIfDefined(ROYGBIV.expandCrosshair, preConditions.targetSize, targetSize);
  preConditions.checkIfNumber(ROYGBIV.expandCrosshair, preConditions.targetSize, targetSize);
  preConditions.checkIfLessThan(ROYGBIV.expandCrosshair, preConditions.targetSize, targetSize, selectedCrosshair.sizeAmount);
  preConditions.checkIfDefined(ROYGBIV.expandCrosshair, preConditions.delta, delta);
  preConditions.checkIfNumber(ROYGBIV.expandCrosshair, preConditions.delta, delta);
  preConditions.checkIfLessThan(ROYGBIV.expandCrosshair, preConditions.delta, delta, 0);
  crosshairHandler.expandCrosshair(targetSize, delta);
}

// Shrinks a crosshair. This can be used after calling the expandCrosshair function.
// The crosshair shrinks by delta while its size is greater than its initial size. This function
// is designed to be called inside onmouseup or onkeyup like events.
Roygbiv.prototype.shrinkCrosshair = function(delta){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.shrinkCrosshair, preConditions.delta, delta);
  preConditions.checkIfNumber(ROYGBIV.shrinkCrosshair, preConditions.delta, delta);
  preConditions.checkIfLessThan(ROYGBIV.shrinkCrosshair, preConditions.delta, delta, 0);
  preConditions.checkIfTrue(ROYGBIV.shrinkCrosshair, "No selected crosshair.", (!selectedCrosshair));
  crosshairHandler.shrinkCrosshair(delta);
}

// LISTENER FUNCTIONS **********************************************************

//  Sets a collision listener for an object, glued object or a particle system.
//  Callback function given as the second parameter is fired with a CollisionInfo instance when
//  the sourceObject is collided with other objects or glued objects of the scene.
//  The additional timeOffset parameter can be used for particle systems to
//  pre-calculate future collisions. This can help to prevent visual errors of collisions
//  of rather fast particle systems.
Roygbiv.prototype.setCollisionListener = function(sourceObject, callbackFunction, timeOffset){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.setCollisionListener, preConditions.sourceObject, sourceObject);
  preConditions.checkIfAddedObjectObjectGroupParticleSystem(ROYGBIV.setCollisionListener, preConditions.sourceObject, sourceObject);
  preConditions.checkIfDefined(ROYGBIV.setCollisionListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.setCollisionListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfNumberOnlyIfExists(ROYGBIV.setCollisionListener, preConditions.timeOffset, timeOffset);
  if ((sourceObject.isAddedObject) || (sourceObject.isObjectGroup)){
    preConditions.checkIfTrue(ROYGBIV.setCollisionListener, "Cannot set collision listener for more than "+MAX_OBJECT_COLLISION_LISTENER_COUNT+" objects.", (TOTAL_OBJECT_COLLISION_LISTENER_COUNT >= MAX_OBJECT_COLLISION_LISTENER_COUNT));
    preConditions.checkIfTrue(ROYGBIV.setCollisionListener, "Object used as FPS player body, cannot listen for collisions.", sourceObject.usedAsFPSPlayerBody);
    preConditions.checkIfNoMass(ROYGBIV.setCollisionListener, preConditions.sourceObject, sourceObject);
    if (!collisionCallbackRequests.has(sourceObject.name)){
      TOTAL_OBJECT_COLLISION_LISTENER_COUNT ++;
    }
    sourceObject.setCollisionListener(callbackFunction);
  }else if (sourceObject.isParticleSystem){
    preConditions.checkIfTrue(ROYGBIV.setCollisionListener, "Particle system is not marked as collidable.", (!sourceObject.isCollidable));
    preConditions.checkIfTrue(ROYGBIV.setCollisionListener, "A position is set manually to the particle system. Cannot listen for collisions.", (sourceObject.hasManualPositionSet));
    preConditions.checkIfTrue(ROYGBIV.setCollisionListener, "A rotation is set manually to the particle system. Cannot listen for collisions.", (sourceObject.hasManualRotationSet));
    preConditions.checkIfTrue(ROYGBIV.setCollisionListener, "A quaternion is set manually to the particle system. Cannot listen for collisions.", (sourceObject.hasManualQuaternionSet));
    var incrCounter = false;
    if (!particleSystemCollisionCallbackRequests[sourceObject.name]){
      incrCounter = true;
    }
    sourceObject.setCollisionListener(callbackFunction, timeOffset);
    if (incrCounter){
      TOTAL_PARTICLE_SYSTEM_COLLISION_LISTEN_COUNT ++;
    }
  }
}

//  Removes collision listeners of an object, glued object or a particle system.
Roygbiv.prototype.removeCollisionListener = function(sourceObject){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.removeCollisionListener, preConditions.sourceObject, sourceObject);
  preConditions.checkIfAddedObjectObjectGroupParticleSystemParticle(ROYGBIV.removeCollisionListener, preConditions.sourceObject, sourceObject);
  var curCallbackRequest;
  if ((sourceObject.isAddedObject) || (sourceObject.isObjectGroup)){
    curCallbackRequest = collisionCallbackRequests.get(sourceObject.name);
  }else if (sourceObject.isParticleSystem){
    curCallbackRequest = particleSystemCollisionCallbackRequests[sourceObject.name];
  }
  if (curCallbackRequest){
    if ((sourceObject.isAddedObject) || (sourceObject.isObjectGroup)){
      sourceObject.removeCollisionListener();
      TOTAL_OBJECT_COLLISION_LISTENER_COUNT --;
    }else if (sourceObject.isParticleSystem){
      TOTAL_PARTICLE_SYSTEM_COLLISION_LISTEN_COUNT --;
      sourceObject.removeCollisionListener();
    }
  }
}

// Sets an expiration listener for a particle system. The parameter callbackFunction
// is executed when sourceObject is expired. The name of the particle system is passed
// to the callbackFunction as a parameter.
Roygbiv.prototype.setExpireListener = function(sourceObject, callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.setExpireListener, preConditions.sourceObject, sourceObject);
  preConditions.checkIfParticleSystem(ROYGBIV.setExpireListener, preConditions.sourceObject, sourceObject);
  preConditions.checkIfDefined(ROYGBIV.setExpireListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.setExpireListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfTrue(ROYGBIV.setExpireListener, "sourceObject is already expired.", (sourceObject.destroyed));
  sourceObject.expirationFunction = callbackFunction;
}

// Removes the expiration listener function of a particle system.
Roygbiv.prototype.removeExpireListener = function(sourceObject){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.removeExpireListener, preConditions.sourceObject, sourceObject);
  preConditions.checkIfParticleSystem(ROYGBIV.removeExpireListener, preConditions.sourceObject, sourceObject);
  preConditions.checkIfTrue(ROYGBIV.removeExpireListener, "sourceObject is already expired", (sourceObject.destroyed));
  delete sourceObject.expirationFunction;
}

// Sets a click listener for an object or an object group. The callbackFunction is executed
// with x, y, z coordinates of the clicked point. The callbackFunction is bound to object (this = object inside the function).
Roygbiv.prototype.setObjectClickListener = function(sourceObject, callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.setObjectClickListener, preConditions.sourceObject, sourceObject);
  preConditions.checkIfDefined(ROYGBIV.setObjectClickListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfAddedObjectOrObjectGroup(ROYGBIV.setObjectClickListener, preConditions.sourceObject, sourceObject);
  preConditions.checkIfTrue(ROYGBIV.setObjectClickListener, "sourceObject marked as unintersectable, cannot be clicked on.", (!sourceObject.isIntersectable));
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.setObjectClickListener, preConditions.callbackFunction, callbackFunction);
  sourceObject.clickCallbackFunction = callbackFunction;
  objectsWithOnClickListeners.set(sourceObject.name, sourceObject);
}

// Removes the click listener of an object or an object group.
Roygbiv.prototype.removeObjectClickListener = function(sourceObject){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.removeObjectClickListener, preConditions.sourceObject, sourceObject);
  preConditions.checkIfAddedObjectOrObjectGroup(ROYGBIV.removeObjectClickListener, preConditions.sourceObject, sourceObject);
  preConditions.checkIfTrue(ROYGBIV.removeObjectClickListener, "sourceObject is marked as unintersectable.", (!sourceObject.isIntersectable));
  delete sourceObject.clickCallbackFunction;
  objectsWithOnClickListeners.delete(sourceObject.name);
}

// Sets a click listener for the screen. The callbackFunction is
// executed with x, y coordinates when clicked on the screen.
Roygbiv.prototype.setScreenClickListener = function(callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.setScreenClickListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.setScreenClickListener, preConditions.callbackFunction, callbackFunction);
  screenClickCallbackFunction = callbackFunction;
}

// Removes the click listener of screen.
Roygbiv.prototype.removeScreenClickListener = function(){
  if (mode == 0){
    return;
  }
  screenClickCallbackFunction = noop;
}

// Sets a mouse down listener for screen. The callbackFunction is
// executed with x, y coordinates when mouse-downed on the screen.
Roygbiv.prototype.setScreenMouseDownListener = function(callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.setScreenMouseDownListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.setScreenMouseDownListener, preConditions.callbackFunction, callbackFunction);
  screenMouseDownCallbackFunction = callbackFunction;
}

// Removes the mouse down listener of screen.
Roygbiv.prototype.removeScreenMouseDownListener = function(){
  if (mode == 0){
    return;
  }
  screenMouseDownCallbackFunction = noop;
}

// Sets mouse up listener for screen. The callbackFunction is
// executed with x, y coordinates when mouse-upped on the screen.
Roygbiv.prototype.setScreenMouseUpListener = function(callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.setScreenMouseUpListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.setScreenMouseUpListener, preConditions.callbackFunction, callbackFunction);
  screenMouseUpCallbackFunction = callbackFunction;
}

// Removes mouse up listener for screen.
Roygbiv.prototype.removeScreenMouseUpListener = function(){
  if (mode == 0){
    return;
  }
  screenMouseUpCallbackFunction = noop;
}

// Sets mouse move listener for screen. The callbackFunction is
// executed with x, y coordinates and dX, dY values when mouse moves on the screen.
Roygbiv.prototype.setScreenMouseMoveListener = function(callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.setScreenMouseMoveListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.setScreenMouseMoveListener, preConditions.callbackFunction, callbackFunction);
  screenMouseMoveCallbackFunction = callbackFunction;
}

// Removes mouse move listener for screen.
Roygbiv.prototype.removeScreenMouseMoveListener = function(){
  if (mode == 0){
    return;
  }
  screenMouseMoveCallbackFunction = noop;
}

// Sets a callback function for Pointer Lock API status changes. The callbackFunction
// is executed with isPointerLocked parameter.
Roygbiv.prototype.setScreenPointerLockChangeListener = function(callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.setScreenPointerLockChangeListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.setScreenPointerLockChangeListener, preConditions.callbackFunction, callbackFunction);
  screenPointerLockChangedCallbackFunction = callbackFunction;
}

// Removes the Pointer Lock change listener for the screen.
Roygbiv.prototype.removeScreenPointerLockChangeListener = function(){
  if (mode == 0){
    return;
  }
  screenPointerLockChangedCallbackFunction = noop;
}

// Sets a listener for particle system pool consumption. The callbackFunction is
// executed wheren there is no available particle system left inside the pool.
Roygbiv.prototype.setParticleSystemPoolConsumedListener = function(psPool, callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.setParticleSystemPoolConsumedListener, preConditions.psPool, psPool);
  preConditions.checkIfParticleSystemPool(ROYGBIV.setParticleSystemPoolConsumedListener, preConditions.psPool, psPool);
  preConditions.checkIfDefined(ROYGBIV.setParticleSystemPoolConsumedListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.setParticleSystemPoolConsumedListener, preConditions.callbackFunction, callbackFunction);
  psPool.consumedCallback = callbackFunction;
}

// Removes the consumption listener of a particle system pool.
Roygbiv.prototype.removeParticleSystemPoolConsumedListener = function(psPool){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.removeParticleSystemPoolConsumedListener, preConditions.psPool, psPool);
  preConditions.checkIfParticleSystemPool(ROYGBIV.removeParticleSystemPoolConsumedListener, preConditions.psPool, psPool);
  psPool.consumedCallback = noop;
}

// Sets an availability listener for a particle system pool. The callbackFunction is executed
// when there is at least one available particle system inside the pool again.
Roygbiv.prototype.setParticleSystemPoolAvailableListener = function(psPool, callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.setParticleSystemPoolAvailableListener, preConditions.psPool, psPool);
  preConditions.checkIfParticleSystemPool(ROYGBIV.setParticleSystemPoolAvailableListener, preConditions.psPool, psPool);
  preConditions.checkIfDefined(ROYGBIV.setParticleSystemPoolAvailableListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.setParticleSystemPoolAvailableListener, preConditions.callbackFunction, callbackFunction);
  psPool.availableCallback = callbackFunction;
}

// Removes the availablity listener for a particle system pool.
Roygbiv.prototype.removeParticleSystemPoolAvailableListener = function(psPool){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.removeParticleSystemPoolAvailableListener, preConditions.psPool, psPool);
  preConditions.checkIfParticleSystemPool(ROYGBIV.removeParticleSystemPoolAvailableListener, preConditions.psPool, psPool);
  psPool.availableCallback = noop;
}

// Sets a callback function for fullscreen change API. The callbackFunction is executed
// with isFullScreenOn boolean parameter when the fullscreen status is changed.
Roygbiv.prototype.setFullScreenChangeCallbackFunction = function(callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.setFullScreenChangeCallbackFunction, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.setFullScreenChangeCallbackFunction, preConditions.callbackFunction, callbackFunction);
  screenFullScreenChangeCallbackFunction = callbackFunction;
}

// Removes the fullscreen change listener.
Roygbiv.prototype.removeFullScreenChangeCallbackFunction = function(){
  if (mode == 0){
    return;
  }
  screenFullScreenChangeCallbackFunction = noop;
}

// Sets a callback function for FPS drops. The callbackFunction is executed
// with dropAmount parameter if the FPS is less than 60 for given second. The
// dropAmount is calculated using this formula: (60 - [current_fps])
Roygbiv.prototype.setFPSDropCallbackFunction = function(callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.setFPSDropCallbackFunction, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.setFPSDropCallbackFunction, preConditions.callbackFunction, callbackFunction);
  fpsDropCallbackFunction = callbackFunction;
}

// Removes the callback function for FPS drops.
Roygbiv.prototype.removeFPSDropCallbackFunction = function(){
  if (mode == 0){
    return;
  }
  fpsDropCallbackFunction = noop;
}

// Sets a callback function for performance drops. The callbackFunction is executed
// if the FPS is under [minFPS] for [seconds] seconds. The callbackFunction is automatically
// removed after the execution, so use this function again if needed after the execution
// of the callbackFunction.
Roygbiv.prototype.setPerformanceDropCallbackFunction = function(minFPS, seconds, callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.setPerformanceDropCallbackFunction, preConditions.minFPS, minFPS);
  preConditions.checkIfNumber(ROYGBIV.setPerformanceDropCallbackFunction, preConditions.minFPS, minFPS);
  preConditions.checkIfInRangeMinInclusive(ROYGBIV.setPerformanceDropCallbackFunction, preConditions.minFPS, minFPS, 0, 60);
  preConditions.checkIfDefined(ROYGBIV.setPerformanceDropCallbackFunction, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.setPerformanceDropCallbackFunction, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfDefined(ROYGBIV.setPerformanceDropCallbackFunction, preConditions.seconds, seconds);
  preConditions.checkIfNumber(ROYGBIV.setPerformanceDropCallbackFunction, preConditions.seconds, seconds);
  preConditions.checkIfLessThan(ROYGBIV.setPerformanceDropCallbackFunction, preConditions.seconds, seconds, 0);
  performanceDropCallbackFunction = callbackFunction;
  fpsHandler.initiatePerformanceDropMonitoring(minFPS, seconds);
}

// Removes the callback function for performance drops.
Roygbiv.prototype.removePerformanceDropCallbackFunction = function(){
  if (mode == 0){
    return;
  }
  performanceDropCallbackFunction = noop;
  fpsHandler.reset();
}

// Sets a callback function for user inactivity. The callbackFunction is executed
// if the user does not move or press the mouse or press a key for more than maxTimeInSeconds seconds.
// The callbackFunction is reset after the execution so use this function again to create a new
// inactivity listener.
Roygbiv.prototype.setUserInactivityCallbackFunction = function(maxTimeInSeconds, callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.setUserInactivityCallbackFunction, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.setUserInactivityCallbackFunction, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfDefined(ROYGBIV.setUserInactivityCallbackFunction, preConditions.maxTimeInSeconds, maxTimeInSeconds);
  preConditions.checkIfNumber(ROYGBIV.setUserInactivityCallbackFunction, preConditions.maxTimeInSeconds, maxTimeInSeconds);
  preConditions.checkIfLessThan(ROYGBIV.setUserInactivityCallbackFunction, preConditions.maxTimeInSeconds, maxTimeInSeconds, 0);
  inactiveCounter = 0;
  maxInactiveTime = maxTimeInSeconds;
  userInactivityCallbackFunction = callbackFunction;
}

// Removes the user inactivity callback function.
Roygbiv.prototype.removeUserInactivityCallbackFunction = function(){
  if (mode == 0){
    return;
  }
  inactiveCounter = 0;
  userInactivityCallbackFunction = noop;
  maxInactiveTime = 0;
}

// Sets a keydown listener. The callbackFunction is executed with the pressedChar
// parameter. See the values of keyCodeToChar variable for possible pressedChar
// parameters.
Roygbiv.prototype.setScreenKeydownListener = function(callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.setScreenKeydownListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.setScreenKeydownListener, preConditions.callbackFunction, callbackFunction);
  screenKeydownCallbackFunction = callbackFunction;
}

// Removes the keydown listener.
Roygbiv.prototype.removeScreenKeydownListener = function(){
  if (mode == 0){
    return;
  }
  screenKeydownCallbackFunction = noop;
}

// Sets a keyup listener. The callbackFunction is executed with the uppedChar
// parameter. See the values of keyCodeToChar variable for possible uppedChar
// parameters.
Roygbiv.prototype.setScreenKeyupListener = function(callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.setScreenKeyupListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.setScreenKeyupListener, preConditions.callbackFunction, callbackFunction);
  screenKeyupCallbackFunction = callbackFunction;
}

// Removes the keyup listener.
Roygbiv.prototype.removeScreenKeyupListener = function(){
  if (mode == 0){
    return;
  }
  screenKeyupCallbackFunction = noop;
}

// Sets a click listener for a text object. The callbackFunction is executed
// with textName parameter when the text object is clicked.
Roygbiv.prototype.onTextClick = function(text, callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.onTextClick, preConditions.text, text);
  preConditions.checkIfAddedText(ROYGBIV.onTextClick, preConditions.text, text);
  preConditions.checkIfTextClickable(ROYGBIV.onTextClick, preConditions.text, text);
  preConditions.checkIfDefined(ROYGBIV.onTextClick, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.onTextClick, preConditions.callbackFunction, callbackFunction);
  text.clickCallbackFunction = callbackFunction;
  objectsWithOnClickListeners.set(text.name, text);
}

// Removes the click listener of a text object.
Roygbiv.prototype.removeTextClickListener = function(text){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.removeTextClickListener, preConditions.text, text);
  preConditions.checkIfAddedText(ROYGBIV.removeTextClickListener, preConditions.text, text);
  text.clickCallbackFunction = noop;
  objectsWithOnClickListeners.delete(text.name);
}

// Sets a mouse wheel listener. The callbackFunction is executed with deltaX and deltaY parameters
// when a mousewheel event is triggered.
Roygbiv.prototype.setScreenMouseWheelListener = function(callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.setScreenMouseWheelListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.setScreenMouseWheelListener, preConditions.callbackFunction, callbackFunction);
  screenMouseWheelCallbackFunction = callbackFunction;
}

// Removes the listener for mousewheel events.
Roygbiv.prototype.removeScreenMouseWheelListener = function(){
  if (mode == 0){
    return;
  }
  screenMouseWheelCallbackFunction = noop;
}

// For mobile devices, sets a pinch zoom gesture listener. The callbackFunction is executed with
// delta parameter that represents the variation of the distance between two fingers.
Roygbiv.prototype.setScreenPinchListener = function(callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.setScreenPinchListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.setScreenPinchListener, preConditions.callbackFunction, callbackFunction);
  screenPinchCallbackFunction = callbackFunction;
}

// Removes the listener for pinch gesture.
Roygbiv.prototype.removeScreenPinchListener = function(){
  if (mode == 0){
    return;
  }
  screenPinchCallbackFunction = noop;
}

// Sets a mouseover listener for an object or an object group. The callbackFunction is executed
// with x, y, z coordinates of mouse. The callbackFunction is bound to object (this = object inside the function).
Roygbiv.prototype.setObjectMouseOverListener = function(sourceObject, callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.setObjectMouseOverListener, preConditions.sourceObject, sourceObject);
  preConditions.checkIfDefined(ROYGBIV.setObjectMouseOverListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfAddedObjectOrObjectGroup(ROYGBIV.setObjectMouseOverListener, preConditions.sourceObject, sourceObject);
  preConditions.checkIfTrue(ROYGBIV.setObjectMouseOverListener, "sourceObject marked as unintersectable, cannot be selected.", (!sourceObject.isIntersectable));
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.setObjectMouseOverListener, preConditions.callbackFunction, callbackFunction);
  sourceObject.mouseOverCallbackFunction = callbackFunction;
  objectsWithMouseOverListeners.set(sourceObject.name, sourceObject);
}

// Removes the mouseover listener of an object or an object group.
Roygbiv.prototype.removeObjectMouseOverListener = function(sourceObject){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.removeObjectMouseOverListener, preConditions.sourceObject, sourceObject);
  preConditions.checkIfAddedObjectOrObjectGroup(ROYGBIV.removeObjectMouseOverListener, preConditions.sourceObject, sourceObject);
  preConditions.checkIfTrue(ROYGBIV.removeObjectMouseOverListener, "sourceObject is marked as unintersectable.", (!sourceObject.isIntersectable));
  delete sourceObject.mouseOverCallbackFunction;
  objectsWithMouseOverListeners.delete(sourceObject.name);
}

// Sets a mouseout listener for an object or an object group. The callbackFunction is bound to object
// (this = object inside the function).
Roygbiv.prototype.setObjectMouseOutListener = function(sourceObject, callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.setObjectMouseOutListener, preConditions.sourceObject, sourceObject);
  preConditions.checkIfDefined(ROYGBIV.setObjectMouseOutListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfAddedObjectOrObjectGroup(ROYGBIV.setObjectMouseOutListener, preConditions.sourceObject, sourceObject);
  preConditions.checkIfTrue(ROYGBIV.setObjectMouseOutListener, "sourceObject marked as unintersectable, cannot be selected.", (!sourceObject.isIntersectable));
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.setObjectMouseOutListener, preConditions.callbackFunction, callbackFunction);
  sourceObject.mouseOutCallbackFunction = callbackFunction;
  objectsWithMouseOutListeners.set(sourceObject.name, sourceObject);
}

// Removes the mouseout listener of an object or an object group.
Roygbiv.prototype.removeObjectMouseOutListener = function(sourceObject){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.removeObjectMouseOutListener, preConditions.sourceObject, sourceObject);
  preConditions.checkIfAddedObjectOrObjectGroup(ROYGBIV.removeObjectMouseOutListener, preConditions.sourceObject, sourceObject);
  preConditions.checkIfTrue(ROYGBIV.removeObjectMouseOutListener, "sourceObject is marked as unintersectable.", (!sourceObject.isIntersectable));
  delete sourceObject.mouseOutCallbackFunction;
  objectsWithMouseOutListeners.delete(sourceObject.name);
}

// Sets a mouseover listener for a text. The callbackFunction is bound to text (this = text inside the function).
Roygbiv.prototype.onTextMouseOver = function(text, callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.onTextMouseOver, preConditions.text, text);
  preConditions.checkIfAddedText(ROYGBIV.onTextMouseOver, preConditions.text, text);
  preConditions.checkIfTextClickable(ROYGBIV.onTextMouseOver, preConditions.text, text);
  preConditions.checkIfDefined(ROYGBIV.onTextMouseOver, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.onTextMouseOver, preConditions.callbackFunction, callbackFunction);
  text.mouseOverCallbackFunction = callbackFunction;
  objectsWithMouseOverListeners.set(text.name, text);
}

// Removes the mouseover listener of a text.
Roygbiv.prototype.removeTextMouseOverListener = function(text){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.removeTextMouseOverListener, preConditions.text, text);
  preConditions.checkIfAddedText(ROYGBIV.removeTextMouseOverListener, preConditions.text, text);
  delete text.mouseOverCallbackFunction;
  objectsWithMouseOverListeners.delete(text.name);
}

// Sets a mouseout listener for a text. The callbackFunction is bound to text (this = text inside the function).
Roygbiv.prototype.onTextMouseOut = function(text, callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.onTextMouseOut, preConditions.text, text);
  preConditions.checkIfAddedText(ROYGBIV.onTextMouseOut, preConditions.text, text);
  preConditions.checkIfTextClickable(ROYGBIV.onTextMouseOut, preConditions.text, text);
  preConditions.checkIfDefined(ROYGBIV.onTextMouseOut, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.onTextMouseOut, preConditions.callbackFunction, callbackFunction);
  text.mouseOutCallbackFunction = callbackFunction;
  objectsWithMouseOutListeners.set(text.name, text);
}

// Removes the mouseout listener of a text.
Roygbiv.prototype.removeTextMouseOutListener = function(text){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.removeTextMouseOutListener, preConditions.text, text);
  preConditions.checkIfAddedText(ROYGBIV.removeTextMouseOutListener, preConditions.text, text);
  delete text.mouseOutCallbackFunction;
  objectsWithMouseOutListeners.delete(text.name);
}

// Sets a listener for an object detecting the position threshold passage for given axis. If controlMode = 1
// the callbackFunction is executed when object.position[axis] > threshold, if controlMode = 2 the callbackFunction
// is executed when object.position[axis] < threshold. The callbackFunction is bound to object (this = object inside the function)
// This API may be used to restart position of objects that went out of bounds of the scene by falling down etc.
Roygbiv.prototype.onObjectPositionThresholdExceeded = function(object, axis, threshold, controlMode, callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.onObjectPositionThresholdExceeded, preConditions.object, object);
  preConditions.checkIfDefined(ROYGBIV.onObjectPositionThresholdExceeded, preConditions.axis, axis);
  preConditions.checkIfDefined(ROYGBIV.onObjectPositionThresholdExceeded, preConditions.threshold, threshold);
  preConditions.checkIfDefined(ROYGBIV.onObjectPositionThresholdExceeded, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfDefined(ROYGBIV.onObjectPositionThresholdExceeded, preConditions.controlMode, controlMode);
  preConditions.checkIfAddedObjectOrObjectGroup(ROYGBIV.onObjectPositionThresholdExceeded, preConditions.object, object);
  preConditions.checkIfChildObjectOnlyIfExists(ROYGBIV.onObjectPositionThresholdExceeded, preConditions.object, object);
  preConditions.checkIfAxisOnlyIfDefined(ROYGBIV.onObjectPositionThresholdExceeded, preConditions.axis, axis);
  preConditions.checkIfNumber(ROYGBIV.onObjectPositionThresholdExceeded, preConditions.threshold, threshold);
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.onObjectPositionThresholdExceeded, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfTrue(ROYGBIV.onObjectPositionThresholdExceeded, "controlMode must be 1 or 2", (controlMode != 1 && controlMode != 2));
  object.setPositionThresholdExceededListener(axis, threshold, controlMode, callbackFunction);
}

// Removes the position threshold passage listener for an object. Does nothing
// if the object does not have such listener.
Roygbiv.prototype.removeObjectPositionThresholdExceededListener = function(object){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.removeObjectPositionThresholdExceededListener, preConditions.object, object);
  preConditions.checkIfAddedObjectOrObjectGroup(ROYGBIV.removeObjectPositionThresholdExceededListener, preConditions.object, object);
  if (object.positionThresholdExceededListenerInfo){
    object.positionThresholdExceededListenerInfo.isActive = false;
  }
}

// Sets a mouse drag listener for the screen. The callbackFunction is executed with x, y, movementX and movementY
// parameters.
Roygbiv.prototype.setScreenDragListener = function(callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.setScreenDragListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.setScreenDragListener, preConditions.callbackFunction, callbackFunction);
  screenDragCallbackFunction = callbackFunction;
}

// Removes the screen drag listener.
Roygbiv.prototype.removeScreenDragListener = function(){
  if (mode == 0){
    return;
  }
  screenDragCallbackFunction = noop;
}

// Sets a listener for orientation change events. For mobile devices, the callbackFunction is executed with
// isLandscape parameter when the orientation is changed.
Roygbiv.prototype.setScreenOrientationChangeListener = function(callbackFunction){
  if (mode == 0 || !isMobile){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.setScreenOrientationChangeListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.setScreenOrientationChangeListener, preConditions.callbackFunction, callbackFunction);
  screenOrientationChangeCallbackFunction = callbackFunction;
}

// Removes the listener for orientation change events.
Roygbiv.prototype.removeScreenOrientationChangeListener = function(){
  if (mode == 0 || !isMobile){
    return;
  }
  screenOrientationChangeCallbackFunction = noop;
}

// TEXT FUNCTIONS **************************************************************

// Sets a text to a text object.
Roygbiv.prototype.setText = function(textObject, text){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.setText, preConditions.textObject, textObject);
  preConditions.checkIfAddedText(ROYGBIV.setText, preConditions.textObject, textObject);
  preConditions.checkIfDefined(ROYGBIV.setText, preConditions.text, text);
  preConditions.checkIfString(ROYGBIV.setText, preConditions.text, text);
  textObject.setText(text, true);
}

// Sets the color of a text. colorName can be a color name like red or an hex string
// like #afef54.
Roygbiv.prototype.setTextColor = function(text, colorName){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.setTextColor, preConditions.text, text);
  preConditions.checkIfAddedText(ROYGBIV.setTextColor, preConditions.text, text);
  preConditions.checkIfDefined(ROYGBIV.setTextColor, preConditions.colorName, colorName);
  text.setColor(colorName, true);
}

// Sets the alpha of a text.
Roygbiv.prototype.setTextAlpha = function(text, alpha){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.setTextAlpha, preConditions.text, text);
  preConditions.checkIfAddedText(ROYGBIV.setTextAlpha, preConditions.text, text);
  preConditions.checkIfDefined(ROYGBIV.setTextAlpha, preConditions.alpha, alpha);
  preConditions.checkIfNumber(ROYGBIV.setTextAlpha, preConditions.alpha, alpha);
  text.setAlpha(alpha, true);
}

// Sets the position of a text object.
Roygbiv.prototype.setTextPosition = function(text, x, y, z){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.setTextPosition, preConditions.text, text);
  preConditions.checkIfAddedText(ROYGBIV.setTextPosition, preConditions.text, text);
  preConditions.checkIfText2D(ROYGBIV.setTextPosition, preConditions.text, text);
  preConditions.checkIfDefined(ROYGBIV.setTextPosition, preConditions.x, x);
  preConditions.checkIfDefined(ROYGBIV.setTextPosition, preConditions.y, y);
  preConditions.checkIfDefined(ROYGBIV.setTextPosition, preConditions.z, z);
  preConditions.checkIfNumber(ROYGBIV.setTextPosition, preConditions.x, x);
  preConditions.checkIfNumber(ROYGBIV.setTextPosition, preConditions.y, y);
  preConditions.checkIfNumber(ROYGBIV.setTextPosition, preConditions.z, z);
  text.mesh.position.set(x, y, z);
}

// Sets the background color/alpha of a text object.
Roygbiv.prototype.setTextBackground = function(text, colorName, alpha){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.setTextBackground, preConditions.text, text);
  preConditions.checkIfAddedText(ROYGBIV.setTextBackground, preConditions.text, text);
  preConditions.checkIfTrue(ROYGBIV.setTextBackground, "text has no background", (!text.hasBackground));
  preConditions.checkIfDefined(ROYGBIV.setTextBackground, preConditions.colorName, colorName);
  preConditions.checkIfString(ROYGBIV.setTextBackground, preConditions.colorName, colorName);
  preConditions.checkIfDefined(ROYGBIV.setTextBackground, preConditions.alpha, alpha);
  preConditions.checkIfNumber(ROYGBIV.setTextBackground, preConditions.alpha, alpha);
  text.setBackground(colorName, alpha, true);
}

// Removes the background of a text object.
Roygbiv.prototype.removeTextBackground = function(text){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.removeTextBackground, preConditions.text, text);
  preConditions.checkIfAddedText(ROYGBIV.removeTextBackground, preConditions.text, text);
  preConditions.checkIfTrue(ROYGBIV.setTextBackground, "text has no background", (!text.hasBackground));
  text.removeBackground(true);
}

// Puts the center of the given text object to given x, y, z coordinates.
Roygbiv.prototype.setTextCenterPosition = function(text, x, y, z){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.setTextCenterPosition, preConditions.text, text);
  preConditions.checkIfAddedText(ROYGBIV.setTextCenterPosition, preConditions.text, text);
  preConditions.checkIfText2D(ROYGBIV.setTextCenterPosition, preConditions.text, text);
  preConditions.checkIfDefined(ROYGBIV.setTextCenterPosition, preConditions.x, x);
  preConditions.checkIfDefined(ROYGBIV.setTextCenterPosition, preConditions.y, y);
  preConditions.checkIfDefined(ROYGBIV.setTextCenterPosition, preConditions.z, z);
  preConditions.checkIfNumber(ROYGBIV.setTextCenterPosition, preConditions.x, x);
  preConditions.checkIfNumber(ROYGBIV.setTextCenterPosition, preConditions.y, y);
  preConditions.checkIfNumber(ROYGBIV.setTextCenterPosition, preConditions.z, z);
  var centerPos = text.getCenterCoordinates();
  text.mesh.position.set(
    text.mesh.position.x + (x - centerPos.x),
    text.mesh.position.y + (y - centerPos.y),
    text.mesh.position.z + (z - centerPos.z)
  );
}

// Makes the given text object invisible. Does nothing if the text is already
// invisible.
Roygbiv.prototype.hideText = function(text){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.hideText, preConditions.text, text);
  preConditions.checkIfAddedText(ROYGBIV.hideText, preConditions.text, text);
  if (text.mesh.visible){
    text.hide();
  }
}

// Makes the given text object visible. Does nothing if the text is already
// visible.
Roygbiv.prototype.showText = function(text){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.showText, preConditions.text, text);
  preConditions.checkIfAddedText(ROYGBIV.showText, preConditions.text, text);
  if (!text.mesh.visible){
    text.show();
  }
}

// CONTROL FUNCTIONS ***********************************************************

// Creates a new FreeControl implementation where the camera can freely move
// inside the scene for both desktop and mobile devices. The controls are:
// WSAD or ZQSD (French keyboard): Translate on plane XZ
// E - Space: Translate on axis Y
// Arrow keys or touch (mobile): Look around
// Finger pinch (mobile) - Mouse wheel (desktop): Translate on axis Z
// The configurations are:
// rotationYDelta (optional): Camera rotation amount for left-right keys. Default is 0.07.
// rotationXDelta (optional): Camera rotation amount for up-down keys. Default is 0.07.
// translateZAmount (optional): Translation amount on Z axis for WS or ZS keys or finger pinch events. Default is 3.
// translateXAmount (optional): Translation amount on X axis for DA or DQ keys. Default is 3.
// translateYAmount (optional): Translation amount on Y axis for E-Space keys. Default is 3.
// mouseWheelSpeed (optional): Translation speed for mousewheel zoom in/out. Default is 1.
// swipeSpeed (optional): Rotation speed for look with touch events on mobile. Default is 0.002.
// mouseDragSpeed (optional): Rotation speed for mouse drag events on desktop devices. Default is 15.
// requestFullScreen (optional): If true, fullscreen mode is requested automatically. Default is false.
Roygbiv.prototype.createFreeControl = function(parameters){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.createFreeControl, preConditions.parameters, parameters);
  preConditions.checkIfNumberOnlyIfExists(ROYGBIV.createFreeControl, preConditions.rotationYDelta, parameters.rotationYDelta);
  preConditions.checkIfNumberOnlyIfExists(ROYGBIV.createFreeControl, preConditions.rotationXDelta, parameters.rotationXDelta);
  preConditions.checkIfNumberOnlyIfExists(ROYGBIV.createFreeControl, preConditions.translateZAmount, parameters.translateZAmount);
  preConditions.checkIfNumberOnlyIfExists(ROYGBIV.createFreeControl, preConditions.translateXAmount, parameters.translateXAmount);
  preConditions.checkIfNumberOnlyIfExists(ROYGBIV.createFreeControl, preConditions.translateYAmount, parameters.translateYAmount);
  preConditions.checkIfNumberOnlyIfExists(ROYGBIV.createFreeControl, preConditions.mouseWheelSpeed, parameters.mouseWheelSpeed);
  preConditions.checkIfNumberOnlyIfExists(ROYGBIV.createFreeControl, preConditions.swipeSpeed, parameters.swipeSpeed);
  preConditions.checkIfNumberOnlyIfExists(ROYGBIV.createFreeControl, preConditions.mouseDragSpeed, parameters.mouseDragSpeed);
  preConditions.checkIfBooleanOnlyIfExists(ROYGBIV.createFreeControl, preConditions.requestFullScreen, parameters.requestFullScreen);
  return new FreeControls(params);
}

// Creates a CustomControl implementation. This API may be used to create custom
// controls by filling the related event handlers. Parameters are:
// onClick (optional): Function to be executed with the click event when the user clicks. Default value is noop.
// onTap (optional): Function to be executed with the touch event when the user taps (mobile). Default value is noop.
// onSwipe (optional): Function to be executed with diffX and diffY parameters when the user moves their finger
// on the screen (mobile). Default value is noop.
// onPinch (optional): Function to be executed with diff parameter when the user performs a pinch zoom (mobile).
// Default value is noop.
// onMouseWheel (optional): Function to be executed with the mouse wheel event when the user performs a mouse wheel.
// Default value is noop.
// onMouseMove (optional): Function to be executed with the mouse move event when the user performs a mouse move.
// Default value is noop.
// onMouseDown (optional): Function to be executed with the mouse down event when the user performs a mouse down.
// Default vaue is noop.
// onMouseUp (optional): Function to be executed with the mouse up event when the user performs a mouse up. Default
// value is noop.
// onTouchStart (optional): Function to be executed with the TouchEvent when the user performs a touch start. Default
// value is noop.
// onTouchMove (optional): Function to be executed with the TouchEvent when the user performs a touch move. Default
// value is noop.
// onTouchEnd (optional): Function to be executed with the TouchEvent when the user performs a touch end. Default
// value is noop.
// onKeyDown (optional): Function to be executed with the key down event when the user performs a key down. Default
// value is noop.
// onKeyUp (optional): Function to be executed with the key up event when the user performs a key up. Default
// value is noop.
// onResize (optional): Function to be executed when the screen is resized. Default value is noop.
// onFullScreenChange (optional): Function to be executed with the isFullScreen parameter when the
// fullscreen status of the screen is changed. Default value is noop.
// onDrag (optional): Function to be executed with x, y, movementX, movementY parameters when the user performs
// a moue drag operation. Default value is noop.
// onUpdate (optional): Function to be executed on each frame. Default value is noop.
Roygbiv.prototype.createCustomControl = function(parameters){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.createCustomControl, preConditions.parameters, parameters);
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.createCustomControl, preConditions.onClick, parameters.onClick);
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.createCustomControl, preConditions.onTap, parameters.onTap);
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.createCustomControl, preConditions.onSwipe, parameters.onSwipe);
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.createCustomControl, preConditions.onPinch, parameters.onPinch);
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.createCustomControl, preConditions.onMouseWheel, parameters.onMouseWheel);
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.createCustomControl, preConditions.onMouseMove, parameters.onMouseMove);
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.createCustomControl, preConditions.onMouseDown, parameters.onMouseDown);
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.createCustomControl, preConditions.onMouseUp, parameters.onMouseUp);
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.createCustomControl, preConditions.onTouchStart, parameters.onTouchStart);
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.createCustomControl, preConditions.onTouchMove, parameters.onTouchMove);
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.createCustomControl, preConditions.onTouchEnd, parameters.onTouchEnd);
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.createCustomControl, preConditions.onUpdate, parameters.onUpdate);
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.createCustomControl, preConditions.onKeyDown, parameters.onKeyDown);
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.createCustomControl, preConditions.onResize, parameters.onResize);
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.createCustomControl, preConditions.onFullScreenChange, parameters.onFullScreenChange);
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.createCustomControl, preConditions.onKeyUp, parameters.onKeyUp);
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.createCustomControl, preConditions.onDrag, parameters.onDrag);
  return new CustomControls(parameters);
}

// Sets the active control.
Roygbiv.prototype.setActiveControl = function(control){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.setActiveControl, preConditions.control, control);
  preConditions.checkIfTrue(ROYGBIV.setActiveControl, "control is not a Control object.", !control.isControl);
  var callOnActivated = false;
  if (activeControl !== control){
    callOnActivated = true;
    activeControl.onDeactivated();
  }
  activeControl = control;
  if (callOnActivated){
    control.onActivated();
  }
}

// Creates a new FPSControls object to be used in First Person Shooter games for
// both desktop and mobile devices. FPSControls automatically handles the PointerLock
// as well. The controls are:
// For desktop:
// WSAD/ZQSD (French keyboard) / Arrow Keys: Move
// Mouse: Look
// Click: Shoot
// Space: Jump
// For mobile:
// Left side of the screen: Move
// Right side of the screen: Look around
// Tap on the right side of the screen: Jump
// For mobile devices controls are automatically paused for portrait orientation.
// Configurations are:
// playerBodyObject (mandatory): A dummy sphere type object to physically represent the player.
// The camera is placed on the center of the playerBodyObject. The playerBodyObject is graphically hidden
// when the FPSControls object is activated, shown again when deactivated. The playerBodyObject must be a
// dynamic object (mass > 0) and must be marked as changeable in order to be used by FPSControls class.
// mouseSpeed (optional): The speed of mouse based camera look-around event. Default value is 0.002.
// touchLookSpeed (optional): The speed of touch based camera look*around event. Default value is 0.01.
// speed (optional): The speed of motion. Default value is 200.
// jumpSpeed (optional): The jump speed. Default value is 500.
// touchJoystickThreshold (optional): For the left hand move controls on mobile devices, this
// parameter is used in order to filter out negligible TouchEvents on finger move, thus preventing
// flickering moves. The TouchEvents are filtered if the length between the previous and the current
// (pageX, pageY) is less than or equals to touchJoystickThreshold. Default value is 1.5.
// crosshairName (optional): The name of the Crosshair.
// crosshairExpandSize (optional): The target size of the crosshair in order to be used for expand animation
// when the player is moving or shooting. Default value is 9.
// crosshairAnimationDelta (optional): The delta value of the crosshair expand animation. Default value is 0.2.
// hasDoubleJump (optional): If true, the user may double jump by pressing Space or tapping twice. Default value is true.
// doubleJumpTimeThresholdInMs (optional): This parameter define the max time in milliseconds between two Space key hits or
// taps in order to perform a double jump. Default value is 500.
// weaponObject1 (optional): The first weapon object. This might be any object or object group marked as FPS Weapon.
// weaponObject2 (optional): The second weapon object. This might be any object or object group marked as FPS Weapon.
// hasIdleGunAnimation (optional): If true weapon objects are animated in order to give the FPS controls a realistic
// feeling. Default value is true.
// idleGunAnimationSpeed (optional): The speed of the idle gun animation. Default value is 0.05.
// weaponRotationRandomnessOn (optional): If true the weapons rotate a bit more than the camera in order to
// give the FPS view more realistic view. Default value is true.
// onLook (optional): A callback function executed each frame with x, y, z and objName parameters
// representing the intersected object from the FPS camera. If there is no intersected object
// the objName is set to null. Default value is noop.
// onShoot (optional): A callback function executed with x, y, z and objName parameters representing the intersected
// object from the FPS camera while the mouse is down for Desktop devices. For mobile devices due to lack of mouse device
// this function is executed when the camera is looking at one of the shootable objects defined with the shootableObjects
// parameter in order to help implementing the auto-shoot functionality. Default value is noop.
// shootableObjects (optional): An array of objects representing the objects that can be shot. This parameter is
// used inside the onShoot event for mobile devices in order to decide if the object being looked at should
// trigger the onShoot function or not. Default value is an empty array.
// onPause (optional): A callback function to be executed when the FPS controls are paused on mobile devices
// due to switching to Portrait orientation. Default value is noop.
// onResume (optional): A callback function to be executed on mobile devices when the FPS controls are resumed
// after switching back to the Landscape orientation. Default value is noop.
// requestFullScreen (optional): If true the FullScreen mode is requested if the screen is not on full screen. FPS Controls
// API also automatically re-requests the FullScreen mode every time after the user cancels the FullScreen. Default value
// is true.
Roygbiv.prototype.createFPSControl = function(parameters){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.createFPSControl, preConditions.parameters, parameters);
  preConditions.checkIfDefined(ROYGBIV.createFPSControl, preConditions.playerBodyObject, parameters.playerBodyObject);
  preConditions.checkIfAddedObject(ROYGBIV.createFPSControl, preConditions.playerBodyObject, parameters.playerBodyObject);
  preConditions.checkIfSphere(ROYGBIV.createFPSControl, preConditions.playerBodyObject, parameters.playerBodyObject);
  preConditions.checkIfDynamic(ROYGBIV.createFPSControl, preConditions.playerBodyObject, parameters.playerBodyObject);
  preConditions.checkIfChangeable(ROYGBIV.createFPSControl, preConditions.playerBodyObject, parameters.playerBodyObject);
  preConditions.checkIfTrue(ROYGBIV.createFPSControl, "Player body object must be unintersectable", parameters.playerBodyObject.isIntersectable);
  preConditions.checkIfNumberOnlyIfExists(ROYGBIV.createFPSControl, preConditions.mouseSpeed, parameters.mouseSpeed);
  preConditions.checkIfNumberOnlyIfExists(ROYGBIV.createFPSControl, preConditions.touchLookSpeed, parameters.touchLookSpeed);
  preConditions.checkIfNumberOnlyIfExists(ROYGBIV.createFPSControl, preConditions.speed, parameters.speed);
  preConditions.checkIfNumberOnlyIfExists(ROYGBIV.createFPSControl, preConditions.jumpSpeed, parameters.jumpSpeed);
  preConditions.checkIfNumberOnlyIfExists(ROYGBIV.createFPSControl, preConditions.touchJoystickThreshold, parameters.touchJoystickThreshold);
  preConditions.checkIfTrueOnlyIfYExists(ROYGBIV.createFPSControl, "No such crosshair.", parameters.crosshairName, !crosshairs[parameters.crosshairName]);
  preConditions.checkIfNumberOnlyIfExists(ROYGBIV.createFPSControl, preConditions.crosshairExpandSize, parameters.crosshairExpandSize);
  preConditions.checkIfNumberOnlyIfExists(ROYGBIV.createFPSControl, preConditions.crosshairAnimationDelta, parameters.crosshairAnimationDelta);
  preConditions.checkIfBooleanOnlyIfExists(ROYGBIV.createFPSControl, preConditions.hasDoubleJump, parameters.hasDoubleJump);
  preConditions.checkIfNumberOnlyIfExists(ROYGBIV.createFPSControl, preConditions.doubleJumpTimeThresholdInMs, parameters.doubleJumpTimeThresholdInMs);
  preConditions.checkIfAddedObjectOrObjectGroupOnlyIfExists(ROYGBIV.createFPSControl, preConditions.weaponObject1, parameters.weaponObject1);
  preConditions.checkIfFPSWeaponOnlyIfExists(ROYGBIV.createFPSControl, preConditions.weaponObject1, parameters.weaponObject1);
  preConditions.checkIfAddedObjectOrObjectGroupOnlyIfExists(ROYGBIV.createFPSControl, preConditions.weaponObject2, parameters.weaponObject2);
  preConditions.checkIfFPSWeaponOnlyIfExists(ROYGBIV.createFPSControl, preConditions.weaponObject2, parameters.weaponObject2);
  preConditions.checkIfBooleanOnlyIfExists(ROYGBIV.createFPSControl, preConditions.hasIdleGunAnimation, parameters.hasIdleGunAnimation);
  preConditions.checkIfNumberOnlyIfExists(ROYGBIV.createFPSControl, preConditions.idleGunAnimationSpeed, parameters.idleGunAnimationSpeed);
  preConditions.checkIfBooleanOnlyIfExists(ROYGBIV.createFPSControl, preConditions.weaponRotationRandomnessOn, parameters.weaponRotationRandomnessOn);
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.createFPSControl, preConditions.onLook, parameters.onLook);
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.createFPSControl, preConditions.onShoot, parameters.onShoot);
  preConditions.checkIfArrayOnlyIfExists(ROYGBIV.createFPSControl, preConditions.shootableObjects, parameters.shootableObjects);
  preConditions.checkIfArrayOfObjectsOnlyIfExists(ROYGBIV.createFPSControl, preConditions.shootableObjects, parameters.shootableObjects);
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.createFPSControl, preConditions.onPause, parameters.onPause);
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.createFPSControl, preConditions.onResume, parameters.onResume);
  preConditions.checkIfBooleanOnlyIfExists(ROYGBIV.createFPSControl, preConditions.requestFullScreen, parameters.requestFullScreen);
  preConditions.checkIfTrueOnlyIfYAndZExists(ROYGBIV.createFPSControl, "Weapon objects are the same.", parameters.weaponObject1, parameters.weaponObject2, (parameters.weaponObject1 == parameters.weaponObject2));
  preConditions.checkIfAlreadyUsedAsFPSWeaponOnlyIfExists(ROYGBIV.createFPSControl, preConditions.weaponObject1, parameters.weaponObject1);
  preConditions.checkIfAlreadyUsedAsFPSWeaponOnlyIfExists(ROYGBIV.createFPSControl, preConditions.weaponObject2, parameters.weaponObject2);
  preConditions.checkIfTrue(ROYGBIV.createFPSControl, "Player body object cannot have set colllision listener.", collisionCallbackRequests.has(parameters.playerBodyObject.name));
  return new FPSControls(parameters);
}

// Creates a new OrbitControl object. Using the OrbitControl, camera can orbit
// around a specified point by looking at it on each frame. Camera can move freely
// around the surface of an imaginary sphere. Controls are:
// For desktop:
// Mouse wheel/Mouse drag: Rotate
// Right/Left/D/A/Q: Rotate
// Up/Down/W/S/Z: Zoom in/out
// Space: Zoom in/out
// For mobile:
// Finger pinch zoom: Zoom in/out
// Finger touch: Rotate
// Configurations are:
// lookPosition (optional): A vector defining the look position and the center of the imaginary sphere. Default value is (0, 0, 0).
// maxRadius (optional): The maximum radius of the imaginary sphere that the camera can zoom out to. Default
// value is 150.
// minRadius (optional): The minimum radius of the imaginary sphere that the camera can zoom in to. Default
// value is 50.
// zoomDelta (optional): The difference of radius when the user performs a zoom in/out. Default value is 1.
// mouseWheelRotationSpeed (optional): The speed of mouse wheel rotation. Default value is 3.
// mouseDragRotationSpeed (optional): The speed of mouse drag rotation. Default value is 20.
// fingerSwipeRotationSpeed (optional): The speed of finger touch rotation for mobile devices. Default value is 20.
// keyboardRotationSpeed (optional): The speed of rotation using keyboard events. Default value is 10.
// requestFullScreen (optional): If true the FullScreen mode is requested if the screen is not on full screen. Orbit Controls
// API also automatically re-requests the FullScreen mode every time after the user cancels the FullScreen. Default value
// is false.
Roygbiv.prototype.createOrbitControl = function(parameters){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.createOrbitControl, preConditions.parameters, parameters);
  preConditions.checkIfVectorOnlyIfDefined(ROYGBIV.createOrbitControl, preConditions.lookPosition, parameters.lookPosition);
  preConditions.checkIfNumberOnlyIfExists(ROYGBIV.createOrbitControl, preConditions.maxRadius, parameters.maxRadius);
  preConditions.checkIfNumberOnlyIfExists(ROYGBIV.createOrbitControl, preConditions.minRadius, parameters.minRadius);
  preConditions.checkIfNumberOnlyIfExists(ROYGBIV.createOrbitControl, preConditions.zoomDelta, parameters.zoomDelta);
  preConditions.checkIfNumberOnlyIfExists(ROYGBIV.createOrbitControl, preConditions.mouseWheelRotationSpeed, parameters.mouseWheelRotationSpeed);
  preConditions.checkIfNumberOnlyIfExists(ROYGBIV.createOrbitControl, preConditions.mouseDragRotationSpeed, parameters.mouseDragRotationSpeed);
  preConditions.checkIfNumberOnlyIfExists(ROYGBIV.createOrbitControl, preConditions.fingerSwipeRotationSpeed, parameters.fingerSwipeRotationSpeed);
  preConditions.checkIfNumberOnlyIfExists(ROYGBIV.createOrbitControl, preConditions.keyboardRotationSpeed, parameters.keyboardRotationSpeed);
  preConditions.checkIfBooleanOnlyIfExists(ROYGBIV.createOrbitControl, preConditions.requestFullScreen, parameters.requestFullScreen);
  return new OrbitControls(parameters);
}

// UTILITY FUNCTIONS ***********************************************************

//  Creates a new vector from x, y and z coordinates.
Roygbiv.prototype.vector = function(x, y, z){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.vector, preConditions.x, x);
  preConditions.checkIfDefined(ROYGBIV.vector, preConditions.y, y);
  preConditions.checkIfDefined(ROYGBIV.vector, preConditions.z, z);
  preConditions.checkIfNumber(ROYGBIV.vector, preConditions.x, x);
  preConditions.checkIfNumber(ROYGBIV.vector, preConditions.y, y);
  preConditions.checkIfNumber(ROYGBIV.vector, preConditions.z, z);
  var obj = new Object();
  obj.x = x;
  obj.y = y;
  obj.z = z;

  return obj;
}

//  Returns the distance between two vectors.
Roygbiv.prototype.distance = function(vec1, vec2){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.distance, preConditions.vec1, vec1);
  preConditions.checkIfDefined(ROYGBIV.distance, preConditions.vec2, vec2);
  preConditions.checkIfVectorOnlyIfDefined(ROYGBIV.distance, preConditions.vec1, vec1);
  preConditions.checkIfVectorOnlyIfDefined(ROYGBIV.distance, preConditions.vec2, vec2);
  var dx = vec2.x - vec1.x;
  var dy = vec2.y - vec1.y;
  var dz = vec2.z - vec1.z;
  return Math.sqrt(
    Math.pow(dx, 2) + Math.pow(dy, 2) + Math.pow(dz, 2)
  );
}

//  Returns the substraction of two vectors.
Roygbiv.prototype.sub = function(vec1, vec2, targetVector){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.sub, preConditions.vec1, vec1);
  preConditions.checkIfDefined(ROYGBIV.sub, preConditions.vec2, vec2);
  preConditions.checkIfVectorOnlyIfDefined(ROYGBIV.sub, preConditions.vec1, vec1);
  preConditions.checkIfVectorOnlyIfDefined(ROYGBIV.sub, preConditions.vec2, vec2);
  preConditions.checkIfVectorOnlyIfDefined(ROYGBIV.sub, preConditions.targetVector, targetVector);
  if (!(typeof targetVector == UNDEFINED)){
    targetVector.x = vec1.x - vec2.x;
    targetVector.y = vec1.y - vec2.y;
    targetVector.z = vec1.z - vec2.z;
    return targetVector;
  }
  var obj = new Object();
  obj.x = vec1.x - vec2.x;
  obj.y = vec1.y - vec2.y;
  obj.z = vec1.z - vec2.z;
  return obj;
}

//  Returns the summation of two vectors.
Roygbiv.prototype.add = function(vec1, vec2, targetVector){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.add, preConditions.vec1, vec1);
  preConditions.checkIfDefined(ROYGBIV.add, preConditions.vec2, vec2);
  preConditions.checkIfVectorOnlyIfDefined(ROYGBIV.add, preConditions.vec1, vec1);
  preConditions.checkIfVectorOnlyIfDefined(ROYGBIV.add, preConditions.vec2, vec2);
  preConditions.checkIfVectorOnlyIfDefined(ROYGBIV.add, preConditions.targetVector, targetVector);
  if (!(typeof targetVector == UNDEFINED)){
    targetVector.x = vec1.x + vec2.x;
    targetVector.y = vec1.y + vec2.y;
    targetVector.z = vec1.z + vec2.z;
    return targetVector;
  }
  var obj = new Object();
  obj.x = vec1.x + vec2.x;
  obj.y = vec1.y + vec2.y;
  obj.z = vec1.z + vec2.z;
  return obj;
}

//  Moves vec1 towards vec2 by given amount and returns the new position of vec1.
//  Amount = 1 means that vec1 goes all the way towards vec2.
Roygbiv.prototype.moveTowards = function(vec1, vec2, amount, targetVector){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.moveTowards, preConditions.vec1, vec1);
  preConditions.checkIfDefined(ROYGBIV.moveTowards, preConditions.vec2, vec2);
  preConditions.checkIfVectorOnlyIfDefined(ROYGBIV.moveTowards, preConditions.vec1, vec1);
  preConditions.checkIfVectorOnlyIfDefined(ROYGBIV.moveTowards, preConditions.vec2, vec2);
  preConditions.checkIfDefined(ROYGBIV.moveTowards, preConditions.amount, amount);
  preConditions.checkIfNumber(ROYGBIV.moveTowards, preConditions.amount, amount);
  preConditions.checkIfVectorOnlyIfDefined(ROYGBIV.moveTowards, preConditions.targetVector, targetVector);
  if (!(typeof targetVector == UNDEFINED)){
    var diff = this.sub(vec2, vec1, targetVector);
    targetVector.x = vec1.x + (amount * diff.x);
    targetVector.y = vec1.y + (amount * diff.y);
    targetVector.z = vec1.z + (amount * diff.z);
    return targetVector;
  }
  var diff = this.sub(vec2, vec1);
  var newVec = this.vector(0, 0, 0);
  newVec.x = vec1.x + (amount * diff.x);
  newVec.y = vec1.y + (amount * diff.y);
  newVec.z = vec1.z + (amount * diff.z);
  return newVec;
}

//  Creates a new color object from the given HTML color name.
Roygbiv.prototype.color = function(colorName){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.color, preConditions.colorName, colorName);
  return new THREE.Color(colorName.toLowerCase());
}

//  Starts a script of the given name.
Roygbiv.prototype.runScript = function(name){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.runScript, preConditions.name, name);
  var script = scripts[name];
  preConditions.checkIfScriptExists(ROYGBIV.runScript, null, script);
  script.start();
}

//  Returns whether a script of the given name is running or not.
Roygbiv.prototype.isRunning = function(name){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.isRunning, preConditions.name, name);
  var script = scripts[name];
  preConditions.checkIfScriptExists(ROYGBIV.isRunning, null, script);
  return script.isRunning();
}

//  Normalizes the vector given in the parameter. Note that this function modifies directly the
//  parameter and returns nothing.
Roygbiv.prototype.normalizeVector = function(vector){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.normalizeVector, preConditions.vector, vector);
  preConditions.checkIfVectorOnlyIfDefined(ROYGBIV.normalizeVector, preConditions.vector, vector);
  var len = Math.sqrt((vector.x * vector.x) + (vector.y * vector.y) + (vector.z * vector.z));
  vector.x = vector.x / len;
  vector.y = vector.y / len;
  vector.z = vector.z / len;
}

//  Returns the quaternion between two vectors.
Roygbiv.prototype.computeQuaternionFromVectors = function(vec1, vec2, targetQuaternion){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.computeQuaternionFromVectors, preConditions.vec1, vec1);
  preConditions.checkIfDefined(ROYGBIV.computeQuaternionFromVectors, preConditions.vec2, vec2);
  preConditions.checkIfVectorOnlyIfDefined(ROYGBIV.computeQuaternionFromVectors, preConditions.vec1, vec1);
  preConditions.checkIfVectorOnlyIfDefined(ROYGBIV.computeQuaternionFromVectors, preConditions.vec2, vec2);
  preConditions.checkIfQuaternionOnlyIfDefined(ROYGBIV.computeQuaternionFromVectors, preConditions.targetQuaternion, targetQuaternion);
  this.normalizeVector(vec1);
  this.normalizeVector(vec2);
  REUSABLE_VECTOR.set(vec1.x, vec1.y, vec1.z);
  REUSABLE_VECTOR_2.set(vec2.x, vec2.y, vec2.z);
  REUSABLE_QUATERNION.setFromUnitVectors(REUSABLE_VECTOR, REUSABLE_VECTOR_2);
  if (!targetQuaternion){
    return REUSABLE_QUATERNION.clone();
  }else{
    targetQuaternion.set(
      REUSABLE_QUATERNION.x, REUSABLE_QUATERNION.y, REUSABLE_QUATERNION.z, REUSABLE_QUATERNION.w
    );
    return targetQuaternion;
  }
}

//  Multiplies a vector by a scalar.
Roygbiv.prototype.multiplyScalar = function(vector, scalar, targetVector){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.multiplyScalar, preConditions.scalar, scalar);
  preConditions.checkIfNumber(ROYGBIV.multiplyScalar, preConditions.scalar, scalar);
  preConditions.checkIfDefined(ROYGBIV.multiplyScalar, preConditions.vector, vector);
  preConditions.checkIfVectorOnlyIfDefined(ROYGBIV.multiplyScalar, preConditions.vector, vector);
  preConditions.checkIfVectorOnlyIfDefined(ROYGBIV.targetVector, preConditions.targetVector, targetVector);
  if (!targetVector){
    return this.vector(vector.x * scalar, vector.y * scalar, vector.z * scalar);
  }else{
    targetVector.x = vector.x * scalar;
    targetVector.y = vector.y * scalar;
    targetVector.z = vector.z * scalar;
    return targetVector;
  }
}

// Set the x, y, z components of a vector.
Roygbiv.prototype.setVector = function(vector, x, y, z){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.setVector, preConditions.vector, vector);
  preConditions.checkIfVectorOnlyIfDefined(ROYGBIV.setVector, preConditions.vector, vector);
  preConditions.checkIfDefined(ROYGBIV.setVector, preConditions.x, x);
  preConditions.checkIfDefined(ROYGBIV.setVector, preConditions.y, y);
  preConditions.checkIfDefined(ROYGBIV.setVector, preConditions.z, z);
  preConditions.checkIfNumber(ROYGBIV.setVector, preConditions.x, x);
  preConditions.checkIfNumber(ROYGBIV.setVector, preConditions.y, y);
  preConditions.checkIfNumber(ROYGBIV.setVector, preConditions.z, z);
  vector.x = x;
  vector.y = y;
  vector.z = z;
  return vector;
}

// Returns a new THREE.Quaternion instance.
Roygbiv.prototype.quaternion = function(){
  if (mode == 0){
    return;
  }
  return new THREE.Quaternion();
}

// Requests pointer lock from window on the next click.
Roygbiv.prototype.requestPointerLock = function(){
  if (mode == 0){
    return;
  }
  preConditions.checkIfTrue(ROYGBIV.requestPointerLock, "Pointer Lock API is not supported by this browser", (!pointerLockSupported || isMobile));
  pointerLockRequested = true;
}

// Returns the degree equivalent of an Euler angle.
Roygbiv.prototype.convertEulerToDegrees = function(eulerAngle){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.convertEulerToDegrees, preConditions.eulerAngle, eulerAngle);
  preConditions.checkIfNumber(ROYGBIV.convertEulerToDegrees, preConditions.eulerAngle, eulerAngle);
  return ((eulerAngle * 180) / Math.PI);
}

// Returns whether the given key is pressed or not. See the keyCodeToChar
// variable for possible key names.
Roygbiv.prototype.isKeyPressed = function(key){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.isKeyPressed, preConditions.key, key);
  return keyboardBuffer[key];
}

// Sets the position of the camera.
Roygbiv.prototype.setCameraPosition = function(x, y, z){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.setCameraPosition, preConditions.x, x);
  preConditions.checkIfDefined(ROYGBIV.setCameraPosition, preConditions.y, y);
  preConditions.checkIfDefined(ROYGBIV.setCameraPosition, preConditions.z, z);
  preConditions.checkIfNumber(ROYGBIV.setCameraPosition, preConditions.x, x);
  preConditions.checkIfNumber(ROYGBIV.setCameraPosition, preConditions.y, y);
  preConditions.checkIfNumber(ROYGBIV.setCameraPosition, preConditions.z, z);
  camera.position.set(x, y, z);
}

// Makes the camera look at specific position.
Roygbiv.prototype.lookAt = function(x, y, z){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.lookAt, preConditions.x, x);
  preConditions.checkIfDefined(ROYGBIV.lookAt, preConditions.y, y);
  preConditions.checkIfDefined(ROYGBIV.lookAt, preConditions.z, z);
  preConditions.checkIfNumber(ROYGBIV.lookAt, preConditions.x, x);
  preConditions.checkIfNumber(ROYGBIV.lookAt, preConditions.y, y);
  preConditions.checkIfNumber(ROYGBIV.lookAt, preConditions.z, z);
  camera.lookAt(x, y, z);
}

// Rotates the vector around an axis by given angle.
Roygbiv.prototype.applyAxisAngle = function(vector, axisVector, angle, targetVector){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.applyAxisAngle, preConditions.vector, vector);
  preConditions.checkIfVectorOnlyIfDefined(ROYGBIV.applyAxisAngle, preConditions.vector, vector);
  preConditions.checkIfDefined(ROYGBIV.applyAxisAngle, preConditions.axisVector, axisVector);
  preConditions.checkIfVectorOnlyIfDefined(ROYGBIV.applyAxisAngle, preConditions.axisVector, axisVector);
  preConditions.checkIfDefined(ROYGBIV.applyAxisAngle, preConditions.angle, angle);
  preConditions.checkIfNumber(ROYGBIV.applyAxisAngle, preConditions.angle, angle);
  preConditions.checkIfVectorOnlyIfDefined(ROYGBIV.applyAxisAngle, preConditions.targetVector, targetVector);
  REUSABLE_VECTOR.set(vector.x, vector.y, vector.z);
  REUSABLE_VECTOR_2.set(axisVector.x, axisVector.y, axisVector.z);
  REUSABLE_VECTOR.applyAxisAngle(REUSABLE_VECTOR_2, angle);
  if (!(typeof targetVector == UNDEFINED)){
    targetVector.x = REUSABLE_VECTOR.x;
    targetVector.y = REUSABLE_VECTOR.y;
    targetVector.z = REUSABLE_VECTOR.z;
    return targetVector;
  }
  return this.vector(REUSABLE_VECTOR.x, REUSABLE_VECTOR.y, REUSABLE_VECTOR.z);
}

// Makes sourceObject keep its relative position to targetObject.
Roygbiv.prototype.trackObjectPosition = function(sourceObject, targetObject){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.trackObjectPosition, preConditions.sourceObject, sourceObject);
  preConditions.checkIfDefined(ROYGBIV.trackObjectPosition, preConditions.targetObject, targetObject);
  preConditions.checkIfAddedObjectOrObjectGroup(ROYGBIV.trackObjectPosition, preConditions.sourceObject, sourceObject);
  preConditions.checkIfAddedObjectOrObjectGroup(ROYGBIV.trackObjectPosition, preConditions.targetObject, targetObject);
  preConditions.checkIfChildObjectOnlyIfExists(ROYGBIV.trackObjectPosition, preConditions.sourceObject, sourceObject);
  preConditions.checkIfChildObjectOnlyIfExists(ROYGBIV.trackObjectPosition, preConditions.targetObject, targetObject);
  preConditions.checkIfDynamic(ROYGBIV.trackObjectPosition, preConditions.targetObject, targetObject);
  preConditions.checkIfNotDynamic(ROYGBIV.trackObjectPosition, preConditions.sourceObject, sourceObject);
  preConditions.checkIfChangeable(ROYGBIV.trackObjectPosition, preConditions.sourceObject, sourceObject);
  sourceObject.trackObjectPosition(targetObject);
}

// Stops tracking an objects position for an object.
Roygbiv.prototype.untrackObjectPosition = function(sourceObject){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.untrackObjectPosition, preConditions.sourceObject, sourceObject);
  preConditions.checkIfAddedObjectOrObjectGroup(ROYGBIV.untrackObjectPosition, preConditions.sourceObject, sourceObject);
  sourceObject.untrackObjectPosition();
}

// Creates and returns a rotation pivot for an object. This function is not
// optimized for the runtime. Use this function before setRotationPivot API on
// initialization. Instead of ROYGBIV.rotate API that works on world axes, this
// function may be used with 0 offset parameters to achieve local rotation for objects.
Roygbiv.prototype.createRotationPivot = function(sourceObject, offsetX, offsetY, offsetZ){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.createRotationPivot, preConditions.sourceObject, sourceObject);
  preConditions.checkIfAddedObjectOrObjectGroup(ROYGBIV.createRotationPivot, preConditions.sourceObject, sourceObject);
  preConditions.checkIfDefined(ROYGBIV.createRotationPivot, preConditions.offsetX, offsetX);
  preConditions.checkIfDefined(ROYGBIV.createRotationPivot, preConditions.offsetY, offsetY);
  preConditions.checkIfDefined(ROYGBIV.createRotationPivot, preConditions.offsetZ, offsetZ);
  preConditions.checkIfNumber(ROYGBIV.createRotationPivot, preConditions.offsetX, offsetX);
  preConditions.checkIfNumber(ROYGBIV.createRotationPivot, preConditions.offsetY, offsetY);
  preConditions.checkIfNumber(ROYGBIV.createRotationPivot, preConditions.offsetZ, offsetZ);
  return sourceObject.makePivot(offsetX, offsetY, offsetZ);
}

// Rotates the camera around its axis by given radians.
Roygbiv.prototype.rotateCamera = function(axis, radians){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.rotateCamera, preConditions.axis, axis);
  preConditions.checkIfDefined(ROYGBIV.rotateCamera, preConditions.radians, radians);
  preConditions.checkIfNumber(ROYGBIV.rotateCamera, preConditions.radians, radians);
  axis = axis.toLowerCase();
  preConditions.checkIfAxisOnlyIfDefined(ROYGBIV.rotateCamera, preConditions.axis, axis);
  if (axis == "x"){
    cameraRotationBuffer.x += radians;
  }else if (axis == "y"){
    cameraRotationBuffer.y += radians;
  }else if (axis == "z"){
    cameraRotationBuffer.z += radians;
  }
}

// Translates the camera along given axis by given amount.
Roygbiv.prototype.translateCamera = function(axis, amount){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.translateCamera, preConditions.axis, axis);
  preConditions.checkIfDefined(ROYGBIV.translateCamera, preConditions.amount, amount);
  preConditions.checkIfNumber(ROYGBIV.translateCamera, preConditions.amount, amount);
  axis = axis.toLowerCase();
  preConditions.checkIfAxisOnlyIfDefined(ROYGBIV.translateCamera, preConditions.axis, axis);
  if (axis == "x"){
    camera.translateX(amount);
  }else if (axis == "y"){
    camera.translateY(amount);
  }else if (axis == "z"){
    camera.translateZ(amount);
  }
}

// Goes to full screen mode. on the next mouse click. Does nothing if the screen is
// already in full screen mode.
Roygbiv.prototype.requestFullScreen = function(){
  if (mode == 0){
    return;
  }
  if (onFullScreen){
    return;
  }
  fullScreenRequested = true;
}

// Returns true if the mouse is pressed, false otherwise.
Roygbiv.prototype.isMouseDown = function(){
  if (mode == 0){
    return;
  }
  return isMouseDown;
}

// Finds the first intersected object on a ray. The onComplete callback function
// is executed with x, y, z and objectName parameters. If there's no intersection,
// the objectName is set to null. If the web workers not supported, the onComplete
// is executed immediately.
Roygbiv.prototype.intersectionTest = function(fromVector, directionVector, onComplete){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.intersectionTest, preConditions.fromVector, fromVector);
  preConditions.checkIfVectorOnlyIfDefined(ROYGBIV.intersectionTest, preConditions.fromVector, fromVector);
  preConditions.checkIfDefined(ROYGBIV.intersectionTest, preConditions.directionVector, directionVector);
  preConditions.checkIfVectorOnlyIfDefined(ROYGBIV.intersectionTest, preConditions.directionVector, directionVector);
  preConditions.checkIfDefined(ROYGBIV.intersectionTest, preConditions.onComplete, onComplete);
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.intersectionTest, preConditions.onComplete, onComplete);
  REUSABLE_VECTOR.set(fromVector.x, fromVector.y, fromVector.z);
  REUSABLE_VECTOR_2.set(directionVector.x, directionVector.y, directionVector.z).normalize();
  rayCaster.findIntersections(REUSABLE_VECTOR, REUSABLE_VECTOR_2, false, onComplete);
}

// Returns if the current client is a mobile client.
Roygbiv.prototype.isMobile = function(){
  if (mode == 0){
    return;
  }
  return isMobile;
}

// Linearly interpolate between vector1 and vector2. The result is vector1 if
// amount = 0 and vector2 if amount = 1.
Roygbiv.prototype.lerp = function(vector1, vector2, amount, targetVector){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.lerp, preConditions.vector1, vector1);
  preConditions.checkIfDefined(ROYGBIV.lerp, preConditions.vector2, vector2);
  preConditions.checkIfDefined(ROYGBIV.lerp, preConditions.amount, amount);
  preConditions.checkIfDefined(ROYGBIV.lerp, preConditions.targetVector, targetVector);
  preConditions.checkIfVectorOnlyIfDefined(ROYGBIV.lerp, preConditions.vector1, vector1);
  preConditions.checkIfVectorOnlyIfDefined(ROYGBIV.lerp, preConditions.vector2, vector2);
  preConditions.checkIfVectorOnlyIfDefined(ROYGBIV.lerp, preConditions.targetVector, targetVector);
  preConditions.checkIfNumber(ROYGBIV.lerp, preConditions.amount, amount);
  preConditions.checkIfInRange(ROYGBIV.lerp, preConditions.amount, amount, 0, 1);
  REUSABLE_VECTOR.set(vector1.x, vector1.y, vector1.z);
  REUSABLE_VECTOR_2.set(vector2.x, vector2.y, vector2.z);
  REUSABLE_VECTOR.lerp(REUSABLE_VECTOR_2, amount);
  targetVector.x = REUSABLE_VECTOR.x;
  targetVector.y = REUSABLE_VECTOR.y;
  targetVector.z = REUSABLE_VECTOR.z;
  return targetVector;
}

// Pauses/unpauses rendering. Note that once the rendering is paused the scripts
// also pause so in order to unpause the rendering, use callback functions such
// as ROYGBIV.setScreenClickListener or ROYGBIV.setScreenPointerLockChangeListener.
Roygbiv.prototype.pause = function(paused){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.pause, preConditions.paused, paused);
  preConditions.checkIfBooleanOnlyIfExists(ROYGBIV.pause, preConditions.paused, paused);
  var oldIsPaused = isPaused;
  isPaused = paused;
  if (!paused && oldIsPaused){
    render();
  }
}

// Executes the given function for each object and object group. The func paremter
// is executed with object and objectName parameters.
Roygbiv.prototype.executeForEachObject = function(func){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.executeForEachObject, preConditions.func, func);
  preConditions.checkIfFunctionOnlyIfExists(ROYGBIV.executeForEachObject, preConditions.func, func);
  for (var objName in addedObjects){
    func(addedObjects[objName], objName)
  }
  for (var objName in objectGroups){
    func(objectGroups[objName], objName)
  }
}

// Returns a random integer in range [minInclusive, maxInclusive]
Roygbiv.prototype.getRandomInteger = function(minInclusive, maxInclusive){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(ROYGBIV.getRandomInteger, preConditions.minInclusive, minInclusive);
  preConditions.checkIfDefined(ROYGBIV.getRandomInteger, preConditions.maxInclusive, maxInclusive);
  preConditions.checkIfNumber(ROYGBIV.getRandomInteger, preConditions.minInclusive, minInclusive);
  preConditions.checkIfNumber(ROYGBIV.getRandomInteger, preConditions.maxInclusive, maxInclusive);
  preConditions.checkIfTrue(ROYGBIV.getRandomInteger, "minInclusive must be less than maxInclusive", (minInclusive > maxInclusive));
  return Math.floor(Math.random() * (maxInclusive - minInclusive + 1)) + minInclusive;
}

// For mobile devices, returns true if there is any finger touching to the screen.
Roygbiv.prototype.isAnyFingerTouching = function(){
  if (mode == 0){
    return;
  }
  return touchEventHandler.isThereFingerTouched;
}

// For mobile devices, returns the amount of fingers touching to the screen.
Roygbiv.prototype.getCurrentTouchCount = function(){
  if (mode == 0){
    return;
  }
  return touchEventHandler.currentTouchCount;
}

// For mobile devices returns if the orientation is landscape for mobile devices. Returns
// false for desktop devices.
Roygbiv.prototype.isOrientationLandscape = function(){
  if (mode == 0){
    return;
  }
  if (!isMobile){
    return false;
  }
  return isOrientationLandscape;
}
