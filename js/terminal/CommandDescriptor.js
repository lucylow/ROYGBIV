var CommandDescriptor = function(){

  this.commandArgumentsExpectedCount = [
      0, //help
      9, //newGridSystem
      0, //printCameraPosition
      0, //printCameraDirection
      0, //printGridSystems
      1, //printGridSystemInfo
      1, //destroyGridSystem
      0, //printKeyboardInfo
      0, //printSelectedGrids
      0, //resetSelectedGrids
      1, //selectAllGrids
      0, //cropGridSystem
      6, //pasteCroppedGridSystem
      0, //switchView
      2, //newBasicMaterial
      0, //printMaterials
      1, //destroyMaterial
      2, //newSurface
      0, //printObjects
      1, //printMetaData
      1, //destroyObject
      2, //newTexture
      0, //printTextures
      1, //destroyTexture
      2, //mapTexture
      3, //adjustTextureRepeat
      8, //newPhysicsBoxTest
      6, //newPhysicsSphereTest
      0, //printPhysicsTests
      0, //switchPhysicsDebugMode
      4, //newRamp
      0, //setAnchor
      1, //restartPhysicsTest
      3, //mirror
      3, //newBox
      3, //newWallCollection
      0, //printWallCollections
      1, //destroyWallCollection
      0, //destroySelectedGrids
      1, //remakeGridSystem
      0, //resetCamera
      1, //uploadImage
      0, //printImages
      2, //mapSpecular
      2, //mapEnvironment
      2, //mapAmbientOcculsion
      2, //mapAlpha
      1, //setDefaultMaterial
      2, //newAmbientLight
      0, //printLights
      1, //selectLight
      1, //destroyLight
      2, //newPhongMaterial
      2, //mapNormal
      2, //mapEmissive
      2, //newLambertMaterial
      3, //newTexturePack
      0, //printTexturePacks
      1, //printTexturePackInfo
      2, //mapTexturePack
      1, //destroyTexturePack
      1, //refreshTexturePack
      2, //mapHeight
      1, //resetMaps
      2, //segmentObject
      4, //superposeGridSystem
      2, //postProcessing
      3, //sliceGrid
      5, //newPointLight
      3, //newSkybox
      0, //printSkyboxes
      1, //printSkyboxInfo
      1, //mapSkybox
      1, //destroySkybox
      1, //skybox
      1, //scaleSkybox
      0, //save
      0, //load
      0, //undo
      0, //redo
      1, //selectObject
      2, //setMass
      3, //rotateObject
      1, //newScript
      1, //runScript
      1, //stopScript
      0, //printScripts
      1, //editScript
      1, //destroyScript
      3, //translateObject
      2, //setFog
      0, //removeFog
      2, //glue
      1, //detach
      4, //mark
      1, //unmark
      0, //printMarkedPoints
      0, //toggleMarkedPoints
      1, //runAutomatically
      2, //uploadScript
      1, //runManually
      1, //physicsWorkerMode
      0, //printPhysicsWorkerMode
      1, //explain
      0, //printScriptingFunctions
      0, //printPerformance
      1, //search
      3, //rescaleTexture
      3, //rescaleTexturePack
      1, //destroyImage
      2, //setBlending
      0, //about
      0, //resetKeyboardBuffer
      6, //setWorldLimits
      1, //setBinSize
      0, //printWorldLimits
      0, //printBinSize
      1, //particleCollisionWorkerMode
      0, //printParticleCollisionWorkerMode
      1, //particleSystemCollisionWorkerMode
      0, //printParticleSystemCollisionWorkerMode
      0, //logFrameDrops
      3, //addPaddingToTexture
      3, //newSphere
      0, //printFogInfo
      4, //applyDisplacementMap
      2, //setSlipperiness
      2, //setAtlasTextureSize
      0, //printAtlasTextureSize
      2, //sync
      2, //newArea
      0, //toggleAreas
      1, //destroyArea
      1, //areaConfigurations
      1, //setResolution
      1, //configureArea
      4, //newAreaConfiguration
      1, //autoConfigureArea
      0, //stopAreaConfigurations
      0, //startAreaConfigurations
      6, //newCylinder
      4, //setRotationPivot
      2, //printChildPosition
      1, //unsetRotationPivot
      6, //copyObject
      2, //build
      1, //skyboxConfigurations
      1, //fogConfigurations
      1, //noMobile
      2, //setMaxViewport
      1, //keepAspect
      2, //newFont
      1, //destroyFont
      0, //printFonts
      6, //newText
      1, //selectText
      1, //destroyText
      0, //printTexts
      1, //setRayStep
      0, //printRayStep
      4, //simplifyPhysics
      1, //unsimplifyPhysics
      1, //fpsWeaponAlignment
      1, //shaderPrecision
      1, //newParticleSystem
      1, //editParticleSystem
      0, //makeParticleSystemsResponsive
      3, //newParticleSystemPool
      1, //destroyParticleSystem
      1, //destroyParticleSystemPool
      0, //printParticleSystems
      0, //printParticleSystemPools
      1, //workerConfigurations
      2, //newMuzzleFlash
      1, //editMuzzleFlash
      1, //destroyMuzzleFlash
      0 //printMuzzleFlashes
  ];

  this.commandArgumentsExpectedExplanation = [
    "help",
    "newGridSystem name sizeX sizeZ centerX centerY centerZ color cellSize axis",
    "printCameraPosition",
    "printCameraDirection",
    "printGridSystems",
    "printGridSystemInfo name",
    "destroyGridSystem name",
    "printKeyboardInfo",
    "printSelectedGrids",
    "resetSelectedGrids",
    "selectAllGrids name",
    "cropGridSystem",
    "pasteCroppedGridSystem name xTranslation yTranslation zTranslation outlineColor cellSize",
    "switchView",
    "newBasicMaterial name color",
    "printMaterials",
    "destroyMaterial name",
    "newSurface name material",
    "printObjects",
    "printMetaData name",
    "destroyObject name",
    "newTexture name fileName",
    "printTextures",
    "destroyTexture name",
    "mapTexture textureName objectName",
    "adjustTextureRepeat objectName repeatU repeatV",
    "newPhysicsBoxTest duration sizeX sizeY sizeZ mass positionX positionY positionZ",
    "newPhysicsSphereTest duration radius mass positionX positionY positionZ",
    "printPhysicsTests",
    "switchPhysicsDebugMode",
    "newRamp name material axis height",
    "setAnchor",
    "restartPhysicsTest physicsTestIndex",
    "mirror objectName on/off s/t/st",
    "newBox name material height",
    "newWallCollection name height outlineColor",
    "printWallCollections",
    "destroyWallCollection name",
    "destroySelectedGrids",
    "remakeGridSystem name",
    "resetCamera",
    "uploadImage name",
    "printImages",
    "mapSpecular textureName objectName",
    "mapEnvironment textureName objectName",
    "mapAmbientOcculsion textureName objectName",
    "mapAlpha textureName objectName",
    "setDefaultMaterial basic/phong",
    "newAmbientLight name color",
    "printLights",
    "selectLight name",
    "destroyLight name",
    "newPhongMaterial name color",
    "mapNormal textureName objectName",
    "mapEmissive textureName objectName",
    "newLambertMaterial name color",
    "newTexturePack name directoryName fileExtension",
    "printTexturePacks",
    "printTexturePackInfo name",
    "mapTexturePack texturePackName objectName",
    "destroyTexturePack name",
    "refreshTexturePack name",
    "mapHeight textureName objectName",
    "resetMaps name",
    "segmentObject name count",
    "superposeGridSystem gridSystemName outlineColor cellSize objectName",
    "postProcessing effectName hide/show",
    "sliceGrid newName cellSize outlineColor",
    "newPointLight name color offsetX offsetY offsetZ",
    "newSkybox name directory fileExtension",
    "printSkyboxes",
    "printSkyboxInfo name",
    "mapSkybox name",
    "destroySkybox name",
    "skybox show/hide",
    "scaleSkybox amount",
    "save",
    "load",
    "undo",
    "redo",
    "selectObject name",
    "setMass name mass",
    "rotateObject name axis radian",
    "newScript name",
    "runScript name",
    "stopScript name",
    "printScripts",
    "editScript name",
    "destroyScript name",
    "translateObject name axis amount",
    "setFog fogColor fogDensity",
    "removeFog",
    "glue newName objectName[1],objectName[2],...objectName[n]",
    "detach name",
    "mark name offsetX offsetY offsetZ",
    "unmark name",
    "printMarkedPoints",
    "toggleMarkedPoints",
    "runAutomatically scriptName",
    "uploadScript scriptName filePath",
    "runManually scriptName",
    "physicsWorkerMode on/off",
    "printPhysicsWorkerMode",
    "explain functionName",
    "printScriptingFunctions",
    "printPerformance",
    "search textToSearch",
    "rescaleTexture textureName scale newTextureName",
    "rescaleTexturePack texturePackName scale newTexturePackName",
    "destroyImage imageName",
    "setBlending objectName mode",
    "about",
    "resetKeyboardBuffer",
    "setWorldLimits minX minY minZ maxX maxY maxZ",
    "setBinSize size",
    "printWorldLimits",
    "printBinSize",
    "particleCollisionWorkerMode on/off",
    "printParticleCollisionWorkerMode",
    "particleSystemCollisionWorkerMode on/off",
    "printParticleSystemCollisionWorkerMode",
    "logFrameDrops",
    "addPaddingToTexture textureName padding newTextureName",
    "newSphere name material radius",
    "printFogInfo",
    "applyDisplacementMap objectName textureName scale bias",
    "setSlipperiness objectName on/off",
    "setAtlasTextureSize width height",
    "printAtlasTextureSize",
    "sync sourceObject targetObject",
    "newArea areaName height",
    "toggleAreas",
    "destroyArea areaName",
    "areaConfigurations show/hide",
    "setResolution resolution",
    "configureArea areaName",
    "newAreaConfiguration areaName objectName isVisible sides",
    "autoConfigureArea areaName",
    "stopAreaConfigurations",
    "startAreaConfigurations",
    "newCylinder name materialName topRadius bottomRadius height isOpenEnded",
    "setRotationPivot objectName offsetX offsetY offsetZ",
    "printChildPosition objectName childObjectName",
    "unsetRotationPivot objectName",
    "copyObject sourceName targetName offsetX offsetY offsetZ isHardCopy",
    "build projectName author",
    "skyboxConfigurations show/hide",
    "fogConfigurations show/hide",
    "noMobile on/off",
    "setMaxViewport widthInPx heightInPx",
    "keepAspect ratio",
    "newFont fontName path",
    "destroyFont fontName",
    "printFonts",
    "newText textName fontName maxCharacterLength offsetX offsetY offsetZ",
    "selectText textName",
    "destroyText textName",
    "printTexts",
    "setRayStep stepAmount",
    "printRayStep",
    "simplifyPhysics objName sizeX sizeY sizeZ",
    "unsimplifyPhysics objName",
    "fpsWeaponAlignment objName",
    "shaderPrecision show/hide",
    "newParticleSystem psName",
    "editParticleSystem psName",
    "makeParticleSystemsResponsive",
    "newParticleSystemPool poolName refPSName poolSize",
    "destroyParticleSystem psName",
    "destroyParticleSystemPool poolName",
    "printParticleSystems",
    "printParticleSystemPools",
    "workerConfigurations show/hide",
    "newMuzzleFlash name refPSName",
    "editMuzzleFlash muzzleFlashName",
    "destroyMuzzleFlash muzzleFlashName",
    "printMuzzleFlashes"
  ];

  this.commands = [
    "help",
    "newGridSystem",
    "printCameraPosition",
    "printCameraDirection",
    "printGridSystems",
    "printGridSystemInfo",
    "destroyGridSystem",
    "printKeyboardInfo",
    "printSelectedGrids",
    "resetSelectedGrids",
    "selectAllGrids",
    "cropGridSystem",
    "pasteCroppedGridSystem",
    "switchView",
    "newBasicMaterial",
    "printMaterials",
    "destroyMaterial",
    "newSurface",
    "printObjects",
    "printMetaData",
    "destroyObject",
    "newTexture",
    "printTextures",
    "destroyTexture",
    "mapTexture",
    "adjustTextureRepeat",
    "newPhysicsBoxTest",
    "newPhysicsSphereTest",
    "printPhysicsTests",
    "switchPhysicsDebugMode",
    "newRamp",
    "setAnchor",
    "restartPhysicsTest",
    "mirror",
    "newBox",
    "newWallCollection",
    "printWallCollections",
    "destroyWallCollection",
    "destroySelectedGrids",
    "remakeGridSystem",
    "resetCamera",
    "uploadImage",
    "printImages",
    "mapSpecular",
    "mapEnvironment",
    "mapAmbientOcculsion",
    "mapAlpha",
    "setDefaultMaterial",
    "newAmbientLight",
    "printLights",
    "selectLight",
    "destroyLight",
    "newPhongMaterial",
    "mapNormal",
    "mapEmissive",
    "newLambertMaterial",
    "newTexturePack",
    "printTexturePacks",
    "printTexturePackInfo",
    "mapTexturePack",
    "destroyTexturePack",
    "refreshTexturePack",
    "mapHeight",
    "resetMaps",
    "segmentObject",
    "superposeGridSystem",
    "postProcessing",
    "sliceGrid",
    "newPointLight",
    "newSkybox",
    "printSkyboxes",
    "printSkyboxInfo",
    "mapSkybox",
    "destroySkybox",
    "skybox",
    "scaleSkybox",
    "save",
    "load",
    "undo",
    "redo",
    "selectObject",
    "setMass",
    "rotateObject",
    "newScript",
    "runScript",
    "stopScript",
    "printScripts",
    "editScript",
    "destroyScript",
    "translateObject",
    "setFog",
    "removeFog",
    "glue",
    "detach",
    "mark",
    "unmark",
    "printMarkedPoints",
    "toggleMarkedPoints",
    "runAutomatically",
    "uploadScript",
    "runManually",
    "physicsWorkerMode",
    "printPhysicsWorkerMode",
    "explain",
    "printScriptingFunctions",
    "printPerformance",
    "search",
    "rescaleTexture",
    "rescaleTexturePack",
    "destroyImage",
    "setBlending",
    "about",
    "resetKeyboardBuffer",
    "setWorldLimits",
    "setBinSize",
    "printWorldLimits",
    "printBinSize",
    "particleCollisionWorkerMode",
    "printParticleCollisionWorkerMode",
    "particleSystemCollisionWorkerMode",
    "printParticleSystemCollisionWorkerMode",
    "logFrameDrops",
    "addPaddingToTexture",
    "newSphere",
    "printFogInfo",
    "applyDisplacementMap",
    "setSlipperiness",
    "setAtlasTextureSize",
    "printAtlasTextureSize",
    "sync",
    "newArea",
    "toggleAreas",
    "destroyArea",
    "areaConfigurations",
    "setResolution",
    "configureArea",
    "newAreaConfiguration",
    "autoConfigureArea",
    "stopAreaConfigurations",
    "startAreaConfigurations",
    "newCylinder",
    "setRotationPivot",
    "printChildPosition",
    "unsetRotationPivot",
    "copyObject",
    "build",
    "skyboxConfigurations",
    "fogConfigurations",
    "noMobile",
    "setMaxViewport",
    "keepAspect",
    "newFont",
    "destroyFont",
    "printFonts",
    "newText",
    "selectText",
    "destroyText",
    "printTexts",
    "setRayStep",
    "printRayStep",
    "simplifyPhysics",
    "unsimplifyPhysics",
    "fpsWeaponAlignment",
    "shaderPrecision",
    "newParticleSystem",
    "editParticleSystem",
    "makeParticleSystemsResponsive",
    "newParticleSystemPool",
    "destroyParticleSystem",
    "destroyParticleSystemPool",
    "printParticleSystems",
    "printParticleSystemPools",
    "workerConfigurations",
    "newMuzzleFlash",
    "editMuzzleFlash",
    "destroyMuzzleFlash",
    "printMuzzleFlashes"
  ];

  this.commandInfo = [
    "help: Prints command list.",
    "newGridSystem: Creates a new GridSystem.",
    "printCameraPosition: Prints the camera position.",
    "printCameraDirection: Prints the camera direction vector.",
    "printGridSystems: Prints existent grid system names.",
    "printGridSystemInfo: Prints a grid system information.",
    "destroyGridSystem: Destroys a grid system.",
    "printKeyboardInfo: Prints information about keyboard shortcuts.",
    "printSelectedGrids: Prints selected grid names.",
    "resetSelectedGrids: Resets all selected grids.",
    "selectAllGrids: Select all grids of a grid system.",
    "cropGridSystem: Crops selected part of a grid system.",
    "pasteCroppedGridSystem: Draws a cropped grid system.",
    "switchView: Switches between views (design/preview).",
    "newBasicMaterial: Creates a new basic material.",
    "printMaterials: Prints created materials.",
    "destroyMaterial: Destroys a material.",
    "newSurface: Creates a new surface.",
    "printObjects: Prints objects.",
    "printMetaData: Prints the metadata of an object.",
    "destroyObject: Destroys an object",
    "newTexture: Creates a new texture.",
    "printTextures: Prints textures.",
    "destroyTexture: Destroys a texture.",
    "mapTexture: Maps a diffuse/color texture to an object.",
    "adjustTextureRepeat: Modifies the repeat amount of a texture/texture pack.",
    "newPhysicsBoxTest: Simulates a box in a physical world.",
    "newPhysicsSphereTest: Simulates a sphere in a physical world.",
    "printPhysicsTests: Prints physics tests statuses.",
    "switchPhysicsDebugMode: Switches physics debug mode (on/off).",
    "newRamp: Creates a new inclined plane.",
    "setAnchor: Sets an anchor grid.",
    "restartPhysicsTest: Restarts a physics test.",
    "mirror: Sets on/off a mapped textures mirrored repeat property.",
    "newBox: Creates a new box.",
    "newWallCollection: Creates a new wall collection, a set of grid systems.",
    "printWallCollections: Prints created wall collections.",
    "destroyWallCollection: Destroys a wall collection.",
    "destroySelectedGrids: Destroys selected grids.",
    "remakeGridSystem: Remakes destroyed grids of a grid system.",
    "resetCamera: Resets camera position and rotation.",
    "uploadImage: Uploads an image from the local filesystem (TGA images not supported).",
    "printImages: Prints uploaded images.",
    "mapSpecular: Sets a specular map of an object.",
    "mapEnvironment: Sets an environment map of an object.",
    "mapAmbientOcculsion: Sets an ambient occulsion map of an object.",
    "mapAlpha: Sets an alpha map of an object.",
    "setDefaultMaterial: Sets the type of the default material (basic/phong).",
    "newAmbientLight: Creates a new ambient light.",
    "printLights: Prints created lights.",
    "selectLight: Selects a created light.",
    "destroyLight: Destroys a created light.",
    "newPhongMaterial: Creates a new Phong material (light sensitive).",
    "mapNormal: Sets a normal map of an object.",
    "mapEmissive: Sets an emissive map of an object.",
    "newLambertMaterial: Creates a new Lambert material (light sensitive).",
    "newTexturePack: Cretes a new Texture Pack.",
    "printTexturePacks: Prints created texture packs.",
    "printTexturePackInfo: Prints information about a texture pack.",
    "mapTexturePack: Maps a texture pack to an object.",
    "destroyTexturePack: Destroys a texture pack.",
    "refreshTexturePack: Reloads a texture pack.",
    "mapHeight: Set a displacement/height map of an object.",
    "resetMaps: Resets all textures of an object.",
    "segmentObject: Segments an object (width/height/depth).",
    "superposeGridSystem: Creates a new grid system above a specific object.",
    "postProcessing: Shows/hides post processing effects GUI for an effect.",
    "sliceGrid: Slices a grid into equal parts and creates a new Grid System with the pieces.",
    "newPointLight: Creates a new point light.",
    "newSkybox: Creates a new Skybox",
    "printSkyboxes: Prints created skyboxes.",
    "printSkyboxInfo: Prints information about a Skybox.",
    "mapSkybox: Maps a Skybox to the scene.",
    "destroySkybox: Destroys a Skybox.",
    "skybox: Shows/hides the skybox cube.",
    "scaleSkybox: Modifies the scale of the Skybox cube.",
    "save: Saves the current state of the engine as a JSON file and initiates the download process.",
    "load: Loads a project saved in JSON format (via the save command).",
    "undo: Undo the last successful command.",
    "redo: Redo the last successful command.",
    "selectObject: Selects an object.",
    "setMass: Sets the mass of an object.",
    "rotateObject: Rotates an object around given axis.",
    "newScript: Creates a new script.",
    "runScript: Runs a script.",
    "stopScript: Stops a running script.",
    "printScripts: Prints created scripts.",
    "editScript: Edits a script.",
    "destroyScript: Destroys a script.",
    "translateObject: Translates an object along given axis.",
    "setFog: Sets the fog attributes of the scene.",
    "removeFog: Removes the fog from the scene.",
    "glue: Creates a new object, gluing given objects together.",
    "detach: Detaches a group of objects glued together using the glue command.",
    "mark: Marks a specific point.",
    "unmark: Unmarks a marked point.",
    "printMarkedPoints: Prints marked points.",
    "toggleMarkedPoints: Hides or shows the marked points on the screen.",
    "runAutomatically: Makes a script start automatically when switched to the preview mode.",
    "uploadScript: Uploads a script from the local file system.",
    "runManually: Makes a script wait for the runScript command to start the execution.",
    "physicsWorkerMode: Enables or disables the usage of web workers for physics iterations.",
    "printPhysicsWorkerMode: Prints if the physics web worker is enabled or not.",
    "explain: Prints information about given scripting API function.",
    "printScriptingFunctions: Prints a list of ROYGBIV scripting API functions.",
    "printPerformance: Prints the performance of rendering functions for the last rendered frame.",
    "search: Finds related commands.",
    "rescaleTexture: Rescales a texture and creates a new texture from the rescaled version.",
    "rescaleTexturePack: Rescales a texture pack and creates a new texture pack from the rescaled version.",
    "destroyImage: Destroys an uploaded image.",
    "setBlending: Sets the blending mode of an object. Mode can be one of NO_BLENDING, NORMAL_BLENDING, ADDITIVE_BLENDING, SUBTRACTIVE_BLENDING,\n  MULTIPLY_BLENDING.",
    "about: Prints info about this engine.",
    "resetKeyboardBuffer: Resets the keyboard buffer.",
    "setWorldLimits: Sets the limits of the scene. Objects outside of this limit will be ignored for collisions with particles/particle systems\n  and area calculations.",
    "setBinSize: Sets the size of the bin. Bins are imaginary cubes that split the scene into segments to help particle/particle system\n  collision detections and area calculations.Larger the size worse the performance but better the collision detection performs\n  for fast particles.",
    "printWorldLimits: Prints the limit info of the world. Objects outside of this limit will be ignored for collisions with particles/particle systems.",
    "printBinSize: Prints the size of the bin. Bins are imaginary cubes that split the scene into segments to help particle collision detections.",
    "particleCollisionWorkerMode: Enables or disables the usage of web workers for particle collision detection.",
    "printParticleCollisionWorkerMode: Prints if the particle collision web worker is enabled or not.",
    "particleSystemCollisionWorkerMode: Enables or disables the usage of web workers for particle system collision detection.",
    "printParticleSystemCollisionWorkerMode: Prints if the particle system collision web worker is enabled or not.",
    "logFrameDrops: Records frame drops for a minute and prints exactly how many frames are missed within a minute to Javascript console.",
    "addPaddingToTexture: Adds padding to a texture. This can be useful for crosshair rotations to prevent visual errors.",
    "newSphere: Creates a new sphere.",
    "printFogInfo: Prints the fog info.",
    "applyDisplacementMap: Applies a displacement map to an object and modifies its geometry.",
    "setSlipperiness: Sets the slipperiness of an object.",
    "setAtlasTextureSize: Sets the size of each texture/texture pack when creating object groups.",
    "printAtlasTextureSize: Prints the atlas texture size set with setAtlasTextureSize command.",
    "sync: Sets the material properties of the target object according to the source object.",
    "newArea: Creates a new area.",
    "toggleAreas: Show/hides the areas.",
    "destroyArea: Destroys an area.",
    "areaConfigurations: Show/hides the area configuration window.",
    "setResolution: Sets the screen resolution.",
    "configureArea: Shows the area configuration window for a certain area.",
    "newAreaConfiguration: Creates a new area configuration for an area and object.",
    "autoConfigureArea: Automatically configures an area using ray tests. Manual corrections may be necesary after using this command.",
    "stopAreaConfigurations: Stops area configurations handling.",
    "startAreaConfigurations: Starts area configurations handling.",
    "newCylinder: Creates a new cylinder.",
    "setRotationPivot: Defines a pivot point of rotation for an object in its local axis system.",
    "printChildPosition: Prints the world position of a child object of an object group.",
    "unsetRotationPivot: Unsets the rotation pivot point of an object set by using setRotationPivot command.",
    "copyObject: Creates a clone of an object.",
    "build: Builds the project for release.",
    "skyboxConfigurations: Shows/hides the skybox configuration GUI.",
    "fogConfigurations: Shows/hides the fog configuration GUI.",
    "noMobile: Prevents the application from loading and alerts a warning message in deployment mode for mobile devices if used with on parameter.",
    "setMaxViewport: Sets the maximum viewport of the renderer. Use 0 or a negative number for unlimited width/height.",
    "keepAspect: Modifies the renderer aspect in the browser of the client in a way where width/height = ratio. If ratio<0 the aspect is not kept.",
    "newFont: Creates a new font.",
    "destroyFont: Destroys a font.",
    "printFonts: Prints all created fonts.",
    "newText: Allocates a new text object.",
    "selectText: Selects a text for modification.",
    "destroyText: Destroys a text.",
    "printTexts: Prints a list of created texts.",
    "setRayStep: Sets the step amount used by the Raycaster while detecting intersections. Small step amount means more precise intersection\n  detection but worse performance. Default value is 32.",
    "printRayStep: Prints the ray step amount.",
    "simplifyPhysics: Sets the physics of an object to a box shape of sizeX, sizeY, sizeZ sizes. This helps optimizing the performance of the\n  physics engine but causes physics precision loss.",
    "unsimplifyPhysics: Brings back the original physics for an object after the usage of simplifyPhysics command.",
    "fpsWeaponAlignment: Shows the FPS weapon alignment GUI.",
    "shaderPrecision: Show the shader precision adjustment GUI.",
    "newParticleSystem: Opens the Particle System Creation GUI.",
    "editParticleSystem: Shows the GUI for editing a particle system.",
    "makeParticleSystemsResponsive: Calculates a reference height based on the height and resolution of the device that runs this command\nin order to make the particle systems look responsive on different devices.",
    "newParticleSystemPool: Generates a new particle system pool of given size filled with copies of refParticleSystem.",
    "destroyParticleSystem: Destroys a particle system.",
    "destroyParticleSystemPool: Destroys a particle system pool.",
    "printParticleSystems: Prints created particle systems.",
    "printParticleSystemPools: Prints created particle system pools.",
    "workerConfigurations: Shows/hides the GUI for configuring worker availibility.",
    "newMuzzleFlash: Creates a new MuzzleFlash object from given particle system in order to be used with FPS weapons.",
    "editMuzzleFlash: Shows the GUI for editing a muzzle flash.",
    "destroyMuzzleFlash: Destroys a muzzle flash.",
    "printMuzzleFlashes: Prints created muzzleflashes."
  ];

  this.keyboardInfo = [
    "W/S or ZS: Translates the camera on axis Z.",
    "A/D or QD : Translates the camera on axis X.",
    "E/Space: Translates the camera on axis Y.",
    "Up/Down : Rotates the camera around axis X.",
    "Left/Right : Rotates the camera around axis Y.",
    "Backspace: Destroys selected object.",
    ". : Shows corner coordinates of selected grids.",
    "SHIFT: Activates grid selection mode."
  ];

  this.deprecatedCommandIndices = [
    26, //newPhysicsBoxTest -> Deprecated due to lack of use cases. This command is implemented to test if the physics bodies fit the meshes. After the implementation of switchPhysicsDebugMode, this command is no longer needed.
    27, //newPhysicsSphereTest -> Deprecated due to lack of use cases. This command is implemented to test if the physics bodies fit the meshes. After the implementation of switchPhysicsDebugMode, this command is no longer needed.
    28, //printPhysicsTests -> Since box and sphere physics tests are deprecated, this command is no longer needed.
    32, //restartPhysicsTest -> Since box and sphere physics tests are deprecated, this command is no longer needed.
    38, //destroySelectedGrids -> Deprecated due to architectural changes during development. Grids are no longer rendered as seperate objects due to performance issues.
    39, //remakeGridSystem -> Deprecated due to architectural changes during development. Since grids are no longer destroyable, this command has no use case anymore.
    41, //uploadImage -> Deprecated due to lack of usecases.
    42, //printImages -> Deprecated as uploadImage is also deprecated.
    43, //mapSpecular -> Specular maps are not supported for now.
    44, //mapEnvironment -> Deprecated due to lack of use cases of environment maps in the ROYGBIV engine. Will implement mirror materials for better visual effects.
    47, //setDefaultMaterial -> Only BASIC materials are supported for now.
    48, //newAmbientLight -> Lights are not supported for now.
    49, //printLights -> Lights are not supported for now.
    50, //selectLight -> Lights are not supported for now.
    51, //destroyLight -> Lights are not supported for now.
    52, //newPhongMaterial -> Phong materials are not supported for now.
    53, //mapNormal -> Normal maps are not supported for now.
    55, //newLambertMaterial -> Deprecated due to lack of uses cases. Phong is fine for light affected objects.
    65, //superposeGridSystem -> Deprecated due to lack of uses cases after grid selection mode implementation.
    68, //newPointLight -> Lights are not supported for now.
    78, //undo -> Deprecated because causes memory issues for big projects.
    79, //redo -> Deprecated because causes memory issues for big projects.
    89, //translateObject -> Deprecated due to architectural conflicts. Objects can only be translated using animations. Instead of translating the object in the design mode, a new grid system should be created at the specific position. Every object should be associated with certain grids.
    101, //physicsWorkerMode -> Physics workers are now always enabled if the web workers are supported.
    102, //printPhysicsWorkerMode -> Physics workers are now always enabled if the web workers are supported.
    105, //printPerformance -> Deprecated because calling performance.now() multiple times on each render is costly.
    107, //rescaleTexture -> Deprecated due to lack of usecases.
    108, //rescaleTexturePack -> Deprecated due to lack of usecases.
    109, //destroyImage -> Deprecated as uploadImage is also deprecated.
    117, //particleCollisionWorkerMode  -> Workers will be re-implemented.
    118, //printParticleCollisionWorkerMode -> Workers will be re-implemented.
    119, //particleSystemCollisionWorkerMode -> Workers will be re-implemented.
    120, //printParticleCollisionWorkerMode -> Workers will be re-implemented.
    121, //logFrameDrops -> No need for such functionality after the usage of Stats.js
    122, //addPaddingToTexture -> Deprecated due to lack of usecases.
    125, //applyDisplacementMap -> Deprecated because causes problems with geometry caching.
    127, //setAtlasTextureSize -> Deprecated because has no use cases after deprecation of TextureMerger class
    128 //printAtlasTextureSize -> Deprecated due to same reasons as setAtlasTextureSize
  ];

  if (this.commandInfo.length != this.commands.length){
    console.error("CommandInfo & commands mismatch");
  }
  if (this.commandArgumentsExpectedCount.length != this.commands.length){
    console.error("commandArgumentsExpectedCount & commands mismatch");
    console.error(this.commandArgumentsExpectedCount.length+", "+this.commands.length);
  }

  for (var i=0; i<this.commands.length; i++){
    var splitted = this.commandArgumentsExpectedExplanation[i].split(" ");
    if (splitted.length != (this.commandArgumentsExpectedCount[i] + 1)){
      console.error("commandArgumentsExpectedExplanation commandArgumentsExpectedCount mismatch: "+i);
    }
  }

  this.UNKNOWN_INDICATOR          =   0;
  this.GRID_SYSTEM_AXIS           =   1;
  this.GRID_SYSTEM_NAME           =   2;
  this.COLOR                      =   3;
  this.BOOLEAN                    =   4;
  this.MATERIAL_NAME              =   5;
  this.MATERIAL_NAME_WITH_NULL    =   6;
  this.OBJECT_NAME                =   7;
  this.TEXTURE_NAME               =   9;
  this.OBJECT_AXIS                =   10;
  this.PHYSICS_TEST_INDEX         =   11;
  this.STATE_ON_OFF               =   12;
  this.S_T_ST                     =   13;
  this.WALL_COLLECTION_NAME       =   14;
  this.DEFAULT_MATERIAL_TYPE      =   15;
  this.FILE_EXTENSION             =   16;
  this.TEXTURE_PACK_NAME          =   17;
  this.HIDE_SHOW                  =   18;
  this.SKYBOX_NAME                =   29;
  this.SCRIPT_NAME                =   20;
  this.ANY_OBJECT                 =   21;
  this.GLUED_OBJECT_NAME          =   22;
  this.MARKED_POINT_NAME          =   23;
  this.API_FUNCTION_NAME          =   24;
  this.BLENDING_MODE              =   25;
  this.OBJECT_CREATION_NAME       =   26;
  this.AREA_NAME                  =   27;
  this.AREA_NAME_WITH_DEFAULT     =   28;
  this.RENDER_SIDE                =   29;
  this.CHILD_OBJECT_NAME          =   30;
  this.FONT_NAME                  =   31;
  this.TEXT_NAME                  =   32;
  this.EFFECT_NAME                =   33;
  this.FPS_WEAPON                 =   34;
  this.PRECONFIGURED_PS_NAME      =   35;
  this.PRECONFOGURED_PS_POOL_NAME =   36;
  this.MUZZLE_FLASH_NAME          =   37;

  // newGridSystem
  this.newGridSystem = new Object();
  this.newGridSystem.types = [];
  this.newGridSystem.types.push(this.UNKNOWN_INDICATOR); //name
  this.newGridSystem.types.push(this.UNKNOWN_INDICATOR); //sizeX
  this.newGridSystem.types.push(this.UNKNOWN_INDICATOR); //sizeZ
  this.newGridSystem.types.push(this.UNKNOWN_INDICATOR); //centerX
  this.newGridSystem.types.push(this.UNKNOWN_INDICATOR); //centerY
  this.newGridSystem.types.push(this.UNKNOWN_INDICATOR); //centerZ
  this.newGridSystem.types.push(this.COLOR);             //color
  this.newGridSystem.types.push(this.UNKNOWN_INDICATOR); //cellSize
  this.newGridSystem.types.push(this.GRID_SYSTEM_AXIS); //axis

  // printGridSystemInfo
  this.printGridSystemInfo = new Object();
  this.printGridSystemInfo.types = [];
  this.printGridSystemInfo.types.push(this.GRID_SYSTEM_NAME); //name

  // destroyGridSystem
  this.destroyGridSystem = new Object();
  this.destroyGridSystem.types = [];
  this.destroyGridSystem.types.push(this.GRID_SYSTEM_NAME); //name

  // selectAllGrids --> DEPRECATED
  this.selectAllGrids = new Object();
  this.selectAllGrids.types = [];
  this.selectAllGrids.types.push(this.GRID_SYSTEM_NAME); //name

  // pasteCroppedGridSystem
  this.pasteCroppedGridSystem = new Object();
  this.pasteCroppedGridSystem.types = [];
  this.pasteCroppedGridSystem.types.push(this.UNKNOWN_INDICATOR); //name
  this.pasteCroppedGridSystem.types.push(this.UNKNOWN_INDICATOR); //xTranslation
  this.pasteCroppedGridSystem.types.push(this.UNKNOWN_INDICATOR); //yTranslation
  this.pasteCroppedGridSystem.types.push(this.UNKNOWN_INDICATOR); //zTranslation
  this.pasteCroppedGridSystem.types.push(this.COLOR); //outlineColor
  this.pasteCroppedGridSystem.types.push(this.UNKNOWN_INDICATOR); //cellSize

  // newBasicMaterial
  this.newBasicMaterial = new Object();
  this.newBasicMaterial.types = [];
  this.newBasicMaterial.types.push(this.UNKNOWN_INDICATOR); //name
  this.newBasicMaterial.types.push(this.COLOR); //color

  // destroyMaterial
  this.destroyMaterial = new Object();
  this.destroyMaterial.types = [];
  this.destroyMaterial.types.push(this.MATERIAL_NAME); //name

  // newSurface
  this.newSurface = new Object();
  this.newSurface.types = [];
  this.newSurface.types.push(this.OBJECT_CREATION_NAME); //name
  this.newSurface.types.push(this.MATERIAL_NAME_WITH_NULL); //material

  // printMetaData
  this.printMetaData = new Object();
  this.printMetaData.types = [];
  this.printMetaData.types.push(this.OBJECT_NAME); //name

  // destroyObject
  this.destroyObject = new Object();
  this.destroyObject.types = [];
  this.destroyObject.types.push(this.OBJECT_NAME); //name

  // newTexture
  this.newTexture = new Object();
  this.newTexture.types = [];
  this.newTexture.types.push(this.UNKNOWN_INDICATOR); //name
  this.newTexture.types.push(this.UNKNOWN_INDICATOR); //fileName

  // destroyTexture
  this.destroyTexture = new Object();
  this.destroyTexture.types = [];
  this.destroyTexture.types.push(this.TEXTURE_NAME); //name

  // mapTexture
  this.mapTexture = new Object();
  this.mapTexture.types = [];
  this.mapTexture.types.push(this.TEXTURE_NAME); //textureName
  this.mapTexture.types.push(this.OBJECT_NAME); // objectName

  // adjustTextureRepeat
  this.adjustTextureRepeat = new Object();
  this.adjustTextureRepeat.types = [];
  this.adjustTextureRepeat.types.push(this.OBJECT_NAME); //objectName
  this.adjustTextureRepeat.types.push(this.UNKNOWN_INDICATOR); //repeatU
  this.adjustTextureRepeat.types.push(this.UNKNOWN_INDICATOR); //repeatV

  // newRamp
  this.newRamp = new Object();
  this.newRamp.types = [];
  this.newRamp.types.push(this.OBJECT_CREATION_NAME); //name
  this.newRamp.types.push(this.MATERIAL_NAME_WITH_NULL); //material
  this.newRamp.types.push(this.OBJECT_AXIS); //axis
  this.newRamp.types.push(this.UNKNOWN_INDICATOR); //height

  // mirror
  this.mirror = new Object();
  this.mirror.types = [];
  this.mirror.types.push(this.OBJECT_NAME); //objectName
  this.mirror.types.push(this.STATE_ON_OFF); //on-off
  this.mirror.types.push(this.S_T_ST); //s-t-st

  // newBox
  this.newBox = new Object();
  this.newBox.types = [];
  this.newBox.types.push(this.OBJECT_CREATION_NAME); //name
  this.newBox.types.push(this.MATERIAL_NAME_WITH_NULL); //material
  this.newBox.types.push(this.UNKNOWN_INDICATOR); //height

  // newWallCollection
  this.newWallCollection = new Object();
  this.newWallCollection.types = [];
  this.newWallCollection.types.push(this.UNKNOWN_INDICATOR); //name
  this.newWallCollection.types.push(this.UNKNOWN_INDICATOR); //height
  this.newWallCollection.types.push(this.COLOR); //outlineColor

  // destroyWallCollection
  this.destroyWallCollection = new Object();
  this.destroyWallCollection.types = [];
  this.destroyWallCollection.types.push(this.WALL_COLLECTION_NAME); //name

  // mapAmbientOcculsion
  this.mapAmbientOcculsion = new Object();
  this.mapAmbientOcculsion.types = [];
  this.mapAmbientOcculsion.types.push(this.TEXTURE_NAME); //textureName
  this.mapAmbientOcculsion.types.push(this.OBJECT_NAME); //objectName

  // mapAlpha
  this.mapAlpha = new Object();
  this.mapAlpha.types = [];
  this.mapAlpha.types.push(this.TEXTURE_NAME); //textureName
  this.mapAlpha.types.push(this.OBJECT_NAME); //objectName

  // mapEmissive
  this.mapEmissive = new Object();
  this.mapEmissive.types = [];
  this.mapEmissive.types.push(this.TEXTURE_NAME); //textureName
  this.mapEmissive.types.push(this.OBJECT_NAME); //objectName

  // newTexturePack
  this.newTexturePack = new Object();
  this.newTexturePack.types = [];
  this.newTexturePack.types.push(this.UNKNOWN_INDICATOR); //name
  this.newTexturePack.types.push(this.UNKNOWN_INDICATOR); //directoryName
  this.newTexturePack.types.push(this.FILE_EXTENSION); //fileExtension

  // printTexturePackInfo
  this.printTexturePackInfo = new Object();
  this.printTexturePackInfo.types = [];
  this.printTexturePackInfo.types.push(this.TEXTURE_PACK_NAME); //name

  // mapTexturePack
  this.mapTexturePack = new Object();
  this.mapTexturePack.types = [];
  this.mapTexturePack.types.push(this.TEXTURE_PACK_NAME); //texturePackName
  this.mapTexturePack.types.push(this.OBJECT_NAME); //objectName

  // destroyTexturePack
  this.destroyTexturePack = new Object();
  this.destroyTexturePack.types = [];
  this.destroyTexturePack.types.push(this.TEXTURE_PACK_NAME); //name

  // refreshTexturePack
  this.refreshTexturePack = new Object();
  this.refreshTexturePack.types = [];
  this.refreshTexturePack.types.push(this.TEXTURE_PACK_NAME); //name

  // mapHeight
  this.mapHeight = new Object();
  this.mapHeight.types = [];
  this.mapHeight.types.push(this.TEXTURE_NAME); //textureName
  this.mapHeight.types.push(this.OBJECT_NAME); //objectName

  // resetMaps
  this.resetMaps = new Object();
  this.resetMaps.types = [];
  this.resetMaps.types.push(this.OBJECT_NAME); //objectName

  // segmentObject
  this.segmentObject = new Object();
  this.segmentObject.types = [];
  this.segmentObject.types.push(this.OBJECT_NAME); //name
  this.segmentObject.types.push(this.UNKNOWN_INDICATOR); //count

  // postProcessing
  this.postProcessing = new Object();
  this.postProcessing.types = [];
  this.postProcessing.types.push(this.EFFECT_NAME); //effectName
  this.postProcessing.types.push(this.HIDE_SHOW); // hide/show

  // sliceGrid
  this.sliceGrid = new Object();
  this.sliceGrid.types = [];
  this.sliceGrid.types.push(this.UNKNOWN_INDICATOR); //newName
  this.sliceGrid.types.push(this.UNKNOWN_INDICATOR); //cellSize
  this.sliceGrid.types.push(this.COLOR); //outlineColor

  // newSkybox
  this.newSkybox = new Object();
  this.newSkybox.types = [];
  this.newSkybox.types.push(this.UNKNOWN_INDICATOR); //name
  this.newSkybox.types.push(this.UNKNOWN_INDICATOR); //directory
  this.newSkybox.types.push(this.FILE_EXTENSION); //fileExtension

  // printSkyboxInfo
  this.printSkyboxInfo = new Object();
  this.printSkyboxInfo.types = [];
  this.printSkyboxInfo.types.push(this.SKYBOX_NAME); //name

  // mapSkybox
  this.mapSkybox = new Object();
  this.mapSkybox.types = [];
  this.mapSkybox.types.push(this.SKYBOX_NAME); //name

  // destroySkybox
  this.destroySkybox = new Object();
  this.destroySkybox.types = [];
  this.destroySkybox.types.push(this.SKYBOX_NAME); //name

  // skybox
  this.skybox = new Object();
  this.skybox.types = [];
  this.skybox.types.push(this.HIDE_SHOW); //hide/show

  // scaleSkybox
  this.scaleSkybox = new Object();
  this.scaleSkybox.types = [];
  this.scaleSkybox.types.push(this.UNKNOWN_INDICATOR); //amount

  // selectObject
  this.selectObject = new Object();
  this.selectObject.types = [];
  this.selectObject.types.push(this.OBJECT_NAME); //name

  // setMass
  this.setMass = new Object();
  this.setMass.types = [];
  this.setMass.types.push(this.OBJECT_NAME); //name
  this.setMass.types.push(this.UNKNOWN_INDICATOR); //mass

  // rotateObject
  this.rotateObject = new Object();
  this.rotateObject.types = [];
  this.rotateObject.types.push(this.OBJECT_NAME); //name
  this.rotateObject.types.push(this.OBJECT_AXIS); //axis
  this.rotateObject.types.push(this.UNKNOWN_INDICATOR); //radian

  // newScript
  this.newScript = new Object();
  this.newScript.types = [];
  this.newScript.types.push(this.UNKNOWN_INDICATOR); //name

  // runScript
  this.runScript = new Object();
  this.runScript.types = [];
  this.runScript.types.push(this.SCRIPT_NAME); //name

  // stopScript
  this.stopScript = new Object();
  this.stopScript.types = [];
  this.stopScript.types.push(this.SCRIPT_NAME); //name

  // editScript
  this.editScript = new Object();
  this.editScript.types = [];
  this.editScript.types.push(this.SCRIPT_NAME); //name

  // destroyScript
  this.destroyScript = new Object();
  this.destroyScript.types = [];
  this.destroyScript.types.push(this.SCRIPT_NAME); //nane

  // setFog
  this.setFog = new Object();
  this.setFog.types = [];
  this.setFog.types.push(this.COLOR); //fogColor
  this.setFog.types.push(this.UNKNOWN_INDICATOR); //fogDensity

  // glue
  this.glue = new Object();
  this.glue.types = [];
  this.glue.types.push(this.OBJECT_CREATION_NAME); //newName
  this.glue.types.push(this.ANY_OBJECT); //objectName[1],objectName[2],...objectName[n]

  // detach
  this.detach = new Object();
  this.detach.types = [];
  this.detach.types.push(this.GLUED_OBJECT_NAME); //detach

  // mark
  this.mark = new Object();
  this.mark.types = [];
  this.mark.types.push(this.UNKNOWN_INDICATOR); //name
  this.mark.types.push(this.UNKNOWN_INDICATOR); //offsetX
  this.mark.types.push(this.UNKNOWN_INDICATOR); //offsetY
  this.mark.types.push(this.UNKNOWN_INDICATOR); //offsetZ

  // unmark
  this.unmark = new Object();
  this.unmark.types = [];
  this.unmark.types.push(this.MARKED_POINT_NAME); //name

  // runAutomatically
  this.runAutomatically = new Object();
  this.runAutomatically.types = [];
  this.runAutomatically.types.push(this.SCRIPT_NAME); //scriptName

  // uploadScript
  this.uploadScript = new Object();
  this.uploadScript.types = [];
  this.uploadScript.types.push(this.UNKNOWN_INDICATOR); //scriptName
  this.uploadScript.types.push(this.UNKNOWN_INDICATOR); //filePath

  // runManually
  this.runManually = new Object();
  this.runManually.types = [];
  this.runManually.types.push(this.SCRIPT_NAME); //scriptName

  // explain
  this.explain = new Object();
  this.explain.types = [];
  this.explain.types.push(this.API_FUNCTION_NAME); //functionName

  // search
  this.search = new Object();
  this.search.types = [];
  this.search.types.push(this.UNKNOWN_INDICATOR); //textToSearch

  // setBlending
  this.setBlending = new Object();
  this.setBlending.types = [];
  this.setBlending.types.push(this.OBJECT_NAME); //objectName
  this.setBlending.types.push(this.BLENDING_MODE); //mode

  // setWorldLimits
  this.setWorldLimits = new Object();
  this.setWorldLimits.types = [];
  this.setWorldLimits.types.push(this.UNKNOWN_INDICATOR); //minX
  this.setWorldLimits.types.push(this.UNKNOWN_INDICATOR); //minY
  this.setWorldLimits.types.push(this.UNKNOWN_INDICATOR); //minZ
  this.setWorldLimits.types.push(this.UNKNOWN_INDICATOR); //maxX
  this.setWorldLimits.types.push(this.UNKNOWN_INDICATOR); //maxY
  this.setWorldLimits.types.push(this.UNKNOWN_INDICATOR); //maxZ

  // setBinSize
  this.setBinSize = new Object();
  this.setBinSize.types = [];
  this.setBinSize.types.push(this.UNKNOWN_INDICATOR); //size

  // newSphere
  this.newSphere = new Object();
  this.newSphere.types = [];
  this.newSphere.types.push(this.UNKNOWN_INDICATOR); // name
  this.newSphere.types.push(this.MATERIAL_NAME_WITH_NULL); // material
  this.newSphere.types.push(this.UNKNOWN_INDICATOR); // radius

  // setSlipperiness
  this.setSlipperiness = new Object();
  this.setSlipperiness.types = [];
  this.setSlipperiness.types.push(this.OBJECT_NAME); // objectName
  this.setSlipperiness.types.push(this.STATE_ON_OFF); // on/off

  // sync
  this.sync = new Object();
  this.sync.types = [];
  this.sync.types.push(this.OBJECT_NAME); // sourceObject
  this.sync.types.push(this.OBJECT_NAME); // targetObject

  // newArea
  this.newArea = new Object();
  this.newArea.types = [];
  this.newArea.types.push(this.UNKNOWN_INDICATOR); // name
  this.newArea.types.push(this.UNKNOWN_INDICATOR); // height

  // destroyArea
  this.destroyArea = new Object();
  this.destroyArea.types = [];
  this.destroyArea.types.push(this.AREA_NAME); // areaName

  // areaConfiguration
  this.areaConfigurations = new Object();
  this.areaConfigurations.types = [];
  this.areaConfigurations.types.push(this.HIDE_SHOW); // show/hide

  // setResolution
  this.setResolution = new Object();
  this.setResolution.types = [];
  this.setResolution.types.push(this.UNKNOWN_INDICATOR); // resolution

  // configureArea
  this.configureArea = new Object();
  this.configureArea.types = [];
  this.configureArea.types.push(this.AREA_NAME_WITH_DEFAULT); // areaName

  // newAreaConfiguration
  this.newAreaConfiguration = new Object();
  this.newAreaConfiguration.types = [];
  this.newAreaConfiguration.types.push(this.AREA_NAME_WITH_DEFAULT); // areaName
  this.newAreaConfiguration.types.push(this.OBJECT_NAME); // objectName
  this.newAreaConfiguration.types.push(this.BOOLEAN); // isVisible
  this.newAreaConfiguration.types.push(this.RENDER_SIDE); // sides

  // autoConfigureArea
  this.autoConfigureArea = new Object();
  this.autoConfigureArea.types = [];
  this.autoConfigureArea.types.push(this.AREA_NAME); // areaName

  // newCylinder
  this.newCylinder = new Object();
  this.newCylinder.types = [];
  this.newCylinder.types.push(this.UNKNOWN_INDICATOR); // name
  this.newCylinder.types.push(this.MATERIAL_NAME_WITH_NULL); // materialName
  this.newCylinder.types.push(this.UNKNOWN_INDICATOR); // topRadius
  this.newCylinder.types.push(this.UNKNOWN_INDICATOR); // bottomRadius
  this.newCylinder.types.push(this.UNKNOWN_INDICATOR); // height
  this.newCylinder.types.push(this.BOOLEAN); // isOpenEnded

  // setRotationPivot
  this.setRotationPivot = new Object();
  this.setRotationPivot.types = [];
  this.setRotationPivot.types.push(this.OBJECT_NAME); // objectName
  this.setRotationPivot.types.push(this.UNKNOWN_INDICATOR); // offsetX
  this.setRotationPivot.types.push(this.UNKNOWN_INDICATOR); // offsetY
  this.setRotationPivot.types.push(this.UNKNOWN_INDICATOR); // offsetZ

  // printChildPosition
  this.printChildPosition = new Object();
  this.printChildPosition.types = [];
  this.printChildPosition.types.push(this.GLUED_OBJECT_NAME); // objectName
  this.printChildPosition.types.push(this.CHILD_OBJECT_NAME); // childObjName

  // unsetRotationPivot
  this.unsetRotationPivot = new Object();
  this.unsetRotationPivot.types = [];
  this.unsetRotationPivot.types.push(this.OBJECT_NAME); // objectName

  // copyObject
  this.copyObject = new Object();
  this.copyObject.types = [];
  this.copyObject.types.push(this.OBJECT_NAME); // sourceName
  this.copyObject.types.push(this.OBJECT_CREATION_NAME); // targetName
  this.copyObject.types.push(this.UNKNOWN_INDICATOR); // offsetX
  this.copyObject.types.push(this.UNKNOWN_INDICATOR); // offsetY
  this.copyObject.types.push(this.UNKNOWN_INDICATOR); // offsetZ
  this.copyObject.types.push(this.BOOLEAN); // isHardCopy

  // build
  this.build = new Object();
  this.build.types = [];
  this.build.types.push(this.UNKNOWN_INDICATOR); // projectName
  this.build.types.push(this.UNKNOWN_INDICATOR); // author

  // skyboxConfigurations
  this.skyboxConfigurations = new Object();
  this.skyboxConfigurations.types = [];
  this.skyboxConfigurations.types.push(this.HIDE_SHOW); // hide/show

  // fogConfigurations
  this.fogConfigurations = new Object();
  this.fogConfigurations.types = [];
  this.fogConfigurations.types.push(this.HIDE_SHOW); // hide/show

  // noMobile
  this.noMobile = new Object();
  this.noMobile.types = [];
  this.noMobile.types.push(this.STATE_ON_OFF); // on/off

  // setMaxViewport
  this.setMaxViewport = new Object();
  this.setMaxViewport.types = [];
  this.setMaxViewport.types.push(this.UNKNOWN_INDICATOR); // widthInPx
  this.setMaxViewport.types.push(this.UNKNOWN_INDICATOR); // heightInPx

  // keepAspect
  this.keepAspect = new Object();
  this.keepAspect.types = [];
  this.keepAspect.types.push(this.UNKNOWN_INDICATOR); // ratio

  // newFont
  this.newFont = new Object();
  this.newFont.types = [];
  this.newFont.types.push(this.UNKNOWN_INDICATOR); // fontName
  this.newFont.types.push(this.UNKNOWN_INDICATOR); // path

  // destroyFont
  this.destroyFont = new Object();
  this.destroyFont.types = [];
  this.destroyFont.types.push(this.FONT_NAME); // fontName

  // newText
  this.newText = new Object();
  this.newText.types = [];
  this.newText.types.push(this.UNKNOWN_INDICATOR); // textName
  this.newText.types.push(this.FONT_NAME); // fontName
  this.newText.types.push(this.UNKNOWN_INDICATOR); // maxCharacterLength
  this.newText.types.push(this.UNKNOWN_INDICATOR); // offsetX
  this.newText.types.push(this.UNKNOWN_INDICATOR); // offsetY
  this.newText.types.push(this.UNKNOWN_INDICATOR); // offsetZ

  // selectText
  this.selectText = new Object();
  this.selectText.types = [];
  this.selectText.types.push(this.TEXT_NAME); // textName

  // destroyText
  this.destroyText = new Object();
  this.destroyText.types = [];
  this.destroyText.types.push(this.TEXT_NAME); // textName

  // setRayStep
  this.setRayStep = new Object();
  this.setRayStep.types = [];
  this.setRayStep.types.push(this.UNKNOWN_INDICATOR); // stepAmount

  // simplifyPhysics
  this.simplifyPhysics = new Object();
  this.simplifyPhysics.types = [];
  this.simplifyPhysics.types.push(this.GLUED_OBJECT_NAME); // objName
  this.simplifyPhysics.types.push(this.UNKNOWN_INDICATOR); // sizeX
  this.simplifyPhysics.types.push(this.UNKNOWN_INDICATOR); // sizeY
  this.simplifyPhysics.types.push(this.UNKNOWN_INDICATOR); // sizeZ

  // unsimplifyPhysics
  this.unsimplifyPhysics = new Object();
  this.unsimplifyPhysics.types = [];
  this.unsimplifyPhysics.types.push(this.GLUED_OBJECT_NAME); // objName

  // fpsWeaponAlignment
  this.fpsWeaponAlignment = new Object();
  this.fpsWeaponAlignment.types = [];
  this.fpsWeaponAlignment.types.push(this.FPS_WEAPON); // objName

  // shaderPrecision
  this.shaderPrecision = new Object();
  this.shaderPrecision.types = [];
  this.shaderPrecision.types.push(this.HIDE_SHOW); // show/hide

  // newParticleSystem
  this.newParticleSystem = new Object();
  this.newParticleSystem.types = [];
  this.newParticleSystem.types.push(this.UNKNOWN_INDICATOR); // psName

  // editParticleSystem
  this.editParticleSystem = new Object();
  this.editParticleSystem.types = [];
  this.editParticleSystem.types.push(this.PRECONFIGURED_PS_NAME); // psName

  // newParticleSystemPool
  this.newParticleSystemPool = new Object();
  this.newParticleSystemPool.types = [];
  this.newParticleSystemPool.types.push(this.UNKNOWN_INDICATOR); // poolName
  this.newParticleSystemPool.types.push(this.PRECONFIGURED_PS_NAME); // refPSName
  this.newParticleSystemPool.types.push(this.UNKNOWN_INDICATOR); // poolSize

  // destroyParticleSystem
  this.destroyParticleSystem = new Object();
  this.destroyParticleSystem.types = [];
  this.destroyParticleSystem.types.push(this.PRECONFIGURED_PS_NAME); // psName

  // destroyParticleSystemPool
  this.destroyParticleSystemPool = new Object();
  this.destroyParticleSystemPool.types = [];
  this.destroyParticleSystemPool.types.push(this.PRECONFOGURED_PS_POOL_NAME); // poolName

  // workerConfigurations
  this.workerConfigurations = new Object();
  this.workerConfigurations.types = [];
  this.workerConfigurations.types.push(this.HIDE_SHOW); // show/hide

  // newMuzzleFlash
  this.newMuzzleFlash = new Object();
  this.newMuzzleFlash.types = [];
  this.newMuzzleFlash.types.push(this.UNKNOWN_INDICATOR); // name
  this.newMuzzleFlash.types.push(this.PRECONFIGURED_PS_NAME); // refPSName

  // editMuzzleFlash
  this.editMuzzleFlash = new Object();
  this.editMuzzleFlash.types = [];
  this.editMuzzleFlash.types.push(this.MUZZLE_FLASH_NAME); // muzzleFlashName

  // destroyMuzzleFlash
  this.destroyMuzzleFlash = new Object();
  this.destroyMuzzleFlash.types = [];
  this.destroyMuzzleFlash.types.push(this.MUZZLE_FLASH_NAME); // muzzleFlashName
};

CommandDescriptor.prototype.test = function(){
  for (var i = 0; i<this.commands.length; i++){
    if (this.deprecatedCommandIndices.includes(i)){
      if (this[this.commands[i]]){
        console.error("CommandDescriptor error: "+this.commands[i]+" is deprecated but still described.");
        return;
      }
      continue;
    }
    var curCommand = this.commands[i];
    var curDescriptor = this[curCommand];
    if (!curDescriptor && this.commandArgumentsExpectedCount[i] > 0){
      console.error("CommandDescriptor error: "+curCommand+" not implemented.");
      return;
    }
    if (curDescriptor){
      var curTypes = curDescriptor.types;
      if (!curTypes){
        console.error("CommandDescriptor error: "+curCommand+" has no type.");
        return;
      }else{
        if (curTypes.length != this.commandArgumentsExpectedCount[i]){
          console.error("CommandDescriptor error: "+curCommand+" types size mismatch.");
          return;
        }
      }
    }
  }
};
