
gdjs.evtsExt__Boomerang__Boomerang = gdjs.evtsExt__Boomerang__Boomerang || {};

/**
 * Behavior generated from Boomerang
 */
gdjs.evtsExt__Boomerang__Boomerang.Boomerang = class Boomerang extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.ThrowSpeed = behaviorData.ThrowSpeed !== undefined ? behaviorData.ThrowSpeed : Number("100") || 0;
    this._behaviorData.ReturnTime = behaviorData.ReturnTime !== undefined ? behaviorData.ReturnTime : Number("1") || 0;
    this._behaviorData.Rotation = behaviorData.Rotation !== undefined ? behaviorData.Rotation : Number("360") || 0;
    this._behaviorData.ThrowerX = Number("0") || 0;
    this._behaviorData.ThrowerY = Number("0") || 0;
    this._behaviorData.BoomerangReturning = false;
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.ThrowSpeed !== undefined)
      this._behaviorData.ThrowSpeed = behaviorOverriding.ThrowSpeed;
    if (behaviorOverriding.ReturnTime !== undefined)
      this._behaviorData.ReturnTime = behaviorOverriding.ReturnTime;
    if (behaviorOverriding.Rotation !== undefined)
      this._behaviorData.Rotation = behaviorOverriding.Rotation;
    if (behaviorOverriding.ThrowerX !== undefined)
      this._behaviorData.ThrowerX = behaviorOverriding.ThrowerX;
    if (behaviorOverriding.ThrowerY !== undefined)
      this._behaviorData.ThrowerY = behaviorOverriding.ThrowerY;
    if (behaviorOverriding.BoomerangReturning !== undefined)
      this._behaviorData.BoomerangReturning = behaviorOverriding.BoomerangReturning;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    ThrowSpeed: this._behaviorData.ThrowSpeed,
    ReturnTime: this._behaviorData.ReturnTime,
    Rotation: this._behaviorData.Rotation,
    ThrowerX: this._behaviorData.ThrowerX,
    ThrowerY: this._behaviorData.ThrowerY,
    BoomerangReturning: this._behaviorData.BoomerangReturning,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.ThrowSpeed !== undefined)
      this._behaviorData.ThrowSpeed = networkSyncData.props.ThrowSpeed;
    if (networkSyncData.props.ReturnTime !== undefined)
      this._behaviorData.ReturnTime = networkSyncData.props.ReturnTime;
    if (networkSyncData.props.Rotation !== undefined)
      this._behaviorData.Rotation = networkSyncData.props.Rotation;
    if (networkSyncData.props.ThrowerX !== undefined)
      this._behaviorData.ThrowerX = networkSyncData.props.ThrowerX;
    if (networkSyncData.props.ThrowerY !== undefined)
      this._behaviorData.ThrowerY = networkSyncData.props.ThrowerY;
    if (networkSyncData.props.BoomerangReturning !== undefined)
      this._behaviorData.BoomerangReturning = networkSyncData.props.BoomerangReturning;
  }

  // Properties:
  
  _getThrowSpeed() {
    return this._behaviorData.ThrowSpeed !== undefined ? this._behaviorData.ThrowSpeed : Number("100") || 0;
  }
  _setThrowSpeed(newValue) {
    this._behaviorData.ThrowSpeed = newValue;
  }
  _getReturnTime() {
    return this._behaviorData.ReturnTime !== undefined ? this._behaviorData.ReturnTime : Number("1") || 0;
  }
  _setReturnTime(newValue) {
    this._behaviorData.ReturnTime = newValue;
  }
  _getRotation() {
    return this._behaviorData.Rotation !== undefined ? this._behaviorData.Rotation : Number("360") || 0;
  }
  _setRotation(newValue) {
    this._behaviorData.Rotation = newValue;
  }
  _getThrowerX() {
    return this._behaviorData.ThrowerX !== undefined ? this._behaviorData.ThrowerX : Number("0") || 0;
  }
  _setThrowerX(newValue) {
    this._behaviorData.ThrowerX = newValue;
  }
  _getThrowerY() {
    return this._behaviorData.ThrowerY !== undefined ? this._behaviorData.ThrowerY : Number("0") || 0;
  }
  _setThrowerY(newValue) {
    this._behaviorData.ThrowerY = newValue;
  }
  _getBoomerangReturning() {
    return this._behaviorData.BoomerangReturning !== undefined ? this._behaviorData.BoomerangReturning : false;
  }
  _setBoomerangReturning(newValue) {
    this._behaviorData.BoomerangReturning = newValue;
  }
  _toggleBoomerangReturning() {
    this._setBoomerangReturning(!this._getBoomerangReturning());
  }
}

/**
 * Shared data generated from Boomerang
 */
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.SharedData = class BoomerangSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Boomerang_BoomerangSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Boomerang_BoomerangSharedData = new gdjs.evtsExt__Boomerang__Boomerang.Boomerang.SharedData(
      initialData
    );
  }
  return instanceContainer._Boomerang_BoomerangSharedData;
}

// Methods:
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1[i].addForceTowardPosition(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThrowerX(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThrowerY(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThrowSpeed(), 0);
}
}
}

}


};gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsBoomerangReturning(eventsFunctionContext)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1[i].timerElapsedTime("__Boomerang_ReturnTimeTimer", eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getReturnTime()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ReturnBoomerang(eventsFunctionContext);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsBoomerangReturning(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1[i].rotate(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotation(), runtimeScene);
}
}
}

}


};

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Boomerang"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Boomerang"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngleContext = {};
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngleContext.idToCallbackMap = new Map();
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngleContext.GDObjectObjects1= [];
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngleContext.GDObjectObjects2= [];


gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setThrowSpeed(eventsFunctionContext.getArgument("NewThrowSpeed"))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setReturnTime(eventsFunctionContext.getArgument("NewReturnTime"))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRotation(eventsFunctionContext.getArgument("NewRotationSpeed"))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setBoomerangReturning(false)
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngleContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngleContext.GDObjectObjects1[i].addPolarForce(eventsFunctionContext.getArgument("Angle"), eventsFunctionContext.getArgument("NewThrowSpeed"), 1);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngleContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngleContext.GDObjectObjects1[i].setY(gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngleContext.GDObjectObjects1[i].getY() - ((gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngleContext.GDObjectObjects1[i].getHeight()) / 2));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngleContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngleContext.GDObjectObjects1[i].resetTimer("__Boomerang_ReturnTimeTimer");
}
}
}

}


};

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngle = function(Angle, NewThrowSpeed, NewReturnTime, NewRotationSpeed, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Boomerang"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Boomerang"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Angle") return Angle;
if (argName === "NewThrowSpeed") return NewThrowSpeed;
if (argName === "NewReturnTime") return NewReturnTime;
if (argName === "NewRotationSpeed") return NewRotationSpeed;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngleContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngleContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPositionContext = {};
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPositionContext.idToCallbackMap = new Map();
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPositionContext.GDObjectObjects1= [];
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPositionContext.GDObjectObjects2= [];


gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPositionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setThrowSpeed(eventsFunctionContext.getArgument("NewThrowSpeed"))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setReturnTime(eventsFunctionContext.getArgument("NewReturnTime"))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRotation(eventsFunctionContext.getArgument("NewRotationSpeed"))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setBoomerangReturning(false)
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPositionContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPositionContext.GDObjectObjects1[i].addForceTowardPosition(eventsFunctionContext.getArgument("PositionX"), eventsFunctionContext.getArgument("PositionY"), eventsFunctionContext.getArgument("NewThrowSpeed"), 1);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPositionContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPositionContext.GDObjectObjects1[i].setY(gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPositionContext.GDObjectObjects1[i].getY() - ((gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPositionContext.GDObjectObjects1[i].getHeight()) / 2));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPositionContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPositionContext.GDObjectObjects1[i].resetTimer("__Boomerang_ReturnTimeTimer");
}
}
}

}


};

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPosition = function(PositionX, PositionY, NewThrowSpeed, NewReturnTime, NewRotationSpeed, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Boomerang"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Boomerang"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "PositionX") return PositionX;
if (argName === "PositionY") return PositionY;
if (argName === "NewThrowSpeed") return NewThrowSpeed;
if (argName === "NewReturnTime") return NewReturnTime;
if (argName === "NewRotationSpeed") return NewRotationSpeed;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPositionContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPositionContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPositionContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ReturnBoomerangContext = {};
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ReturnBoomerangContext.idToCallbackMap = new Map();
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ReturnBoomerangContext.GDObjectObjects1= [];
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ReturnBoomerangContext.GDObjectObjects2= [];


gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ReturnBoomerangContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ReturnBoomerangContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ReturnBoomerangContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ReturnBoomerangContext.GDObjectObjects1[i].removeTimer("__Boomerang_ReturnTimeTimer");
}
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setBoomerangReturning(true)
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ReturnBoomerangContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ReturnBoomerangContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ReturnBoomerangContext.GDObjectObjects1[i].clearForces();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ReturnBoomerangContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ReturnBoomerangContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ReturnBoomerangContext.GDObjectObjects1[i].setY(gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ReturnBoomerangContext.GDObjectObjects1[i].getY() + ((gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ReturnBoomerangContext.GDObjectObjects1[i].getHeight()) / 2));
}
}
}

}


};

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ReturnBoomerang = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Boomerang"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Boomerang"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ReturnBoomerangContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ReturnBoomerangContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ReturnBoomerangContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ReturnBoomerangContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ReturnBoomerangContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.SetReturnTimeContext = {};
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.SetReturnTimeContext.idToCallbackMap = new Map();
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.SetReturnTimeContext.GDObjectObjects1= [];
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.SetReturnTimeContext.GDObjectObjects2= [];


gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.SetReturnTimeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setReturnTime(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.SetReturnTime = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Boomerang"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Boomerang"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.SetReturnTimeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.SetReturnTimeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.SetReturnTimeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.SetReturnTimeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.SetReturnTimeContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.TrackingThrowerContext = {};
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.TrackingThrowerContext.idToCallbackMap = new Map();
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.TrackingThrowerContext.GDObjectObjects1= [];
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.TrackingThrowerContext.GDObjectObjects2= [];
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.TrackingThrowerContext.GDThrowerObjects1= [];
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.TrackingThrowerContext.GDThrowerObjects2= [];


gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.TrackingThrowerContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Thrower"), gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.TrackingThrowerContext.GDThrowerObjects1);
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setThrowerX((( gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.TrackingThrowerContext.GDThrowerObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.TrackingThrowerContext.GDThrowerObjects1[0].getCenterXInScene()))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setThrowerY((( gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.TrackingThrowerContext.GDThrowerObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.TrackingThrowerContext.GDThrowerObjects1[0].getCenterYInScene()))
}
}

}


};

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.TrackingThrower = function(Thrower, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Thrower": Thrower
},
  _objectArraysMap: {
"Object": thisObjectList
, "Thrower": gdjs.objectsListsToArray(Thrower)
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Boomerang"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Boomerang"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.TrackingThrowerContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.TrackingThrowerContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.TrackingThrowerContext.GDThrowerObjects1.length = 0;
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.TrackingThrowerContext.GDThrowerObjects2.length = 0;

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.TrackingThrowerContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.TrackingThrowerContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.TrackingThrowerContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.TrackingThrowerContext.GDThrowerObjects1.length = 0;
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.TrackingThrowerContext.GDThrowerObjects2.length = 0;


return;
}
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.IsBoomerangReturningContext = {};
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.IsBoomerangReturningContext.idToCallbackMap = new Map();
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.IsBoomerangReturningContext.GDObjectObjects1= [];
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.IsBoomerangReturningContext.GDObjectObjects2= [];


gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.IsBoomerangReturningContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBoomerangReturning();
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.IsBoomerangReturning = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Boomerang"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Boomerang"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.IsBoomerangReturningContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.IsBoomerangReturningContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.IsBoomerangReturningContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.IsBoomerangReturningContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.IsBoomerangReturningContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onDeActivateContext = {};
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onDeActivateContext.idToCallbackMap = new Map();
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onDeActivateContext.GDObjectObjects1= [];
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onDeActivateContext.GDObjectObjects2= [];


gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onDeActivateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onDeActivateContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onDeActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onDeActivateContext.GDObjectObjects1[i].removeTimer("__Boomerang_ReturnTimeTimer");
}
}
}

}


};

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onDeActivate = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Boomerang"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Boomerang"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onDeActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onDeActivateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onDeActivateContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onDeActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onDeActivateContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onActivateContext = {};
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onActivateContext.idToCallbackMap = new Map();
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onActivateContext.GDObjectObjects1= [];
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onActivateContext.GDObjectObjects2= [];


gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onActivateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onActivateContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onActivateContext.GDObjectObjects1[i].resetTimer("__Boomerang_ReturnTimeTimer");
}
}
}

}


};

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onActivate = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Boomerang"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Boomerang"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onActivateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onActivateContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onActivateContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("Boomerang::Boomerang", gdjs.evtsExt__Boomerang__Boomerang.Boomerang);
