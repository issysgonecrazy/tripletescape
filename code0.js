gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.idToCallbackMap = new Map();
gdjs.Untitled_32sceneCode.GDsubway_9595backroundObjects1= [];
gdjs.Untitled_32sceneCode.GDsubway_9595backroundObjects2= [];
gdjs.Untitled_32sceneCode.GDtungObjects1= [];
gdjs.Untitled_32sceneCode.GDtungObjects2= [];
gdjs.Untitled_32sceneCode.GD_959567Objects1= [];
gdjs.Untitled_32sceneCode.GD_959567Objects2= [];
gdjs.Untitled_32sceneCode.GDferrariObjects1= [];
gdjs.Untitled_32sceneCode.GDferrariObjects2= [];
gdjs.Untitled_32sceneCode.GDWinTextObjects1= [];
gdjs.Untitled_32sceneCode.GDWinTextObjects2= [];
gdjs.Untitled_32sceneCode.GDGameOverTextObjects1= [];
gdjs.Untitled_32sceneCode.GDGameOverTextObjects2= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDtungObjects1Objects = Hashtable.newFrom({"tung": gdjs.Untitled_32sceneCode.GDtungObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDferrariObjects1Objects = Hashtable.newFrom({"ferrari": gdjs.Untitled_32sceneCode.GDferrariObjects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ferrari"), gdjs.Untitled_32sceneCode.GDferrariObjects1);
gdjs.copyArray(runtimeScene.getObjects("tung"), gdjs.Untitled_32sceneCode.GDtungObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtungObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtungObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.Untitled_32sceneCode.GDferrariObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDferrariObjects1[0].getPointX("")), (( gdjs.Untitled_32sceneCode.GDferrariObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDferrariObjects1[0].getPointY("")));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ferrari"), gdjs.Untitled_32sceneCode.GDferrariObjects1);
gdjs.copyArray(runtimeScene.getObjects("tung"), gdjs.Untitled_32sceneCode.GDtungObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDtungObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDferrariObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDferrariObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDferrariObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDferrariObjects1[i].getBehavior("Health").Hit(10, true, true, null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GameOverText"), gdjs.Untitled_32sceneCode.GDGameOverTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("WinText"), gdjs.Untitled_32sceneCode.GDWinTextObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDWinTextObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDWinTextObjects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SurvivalTimer");
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGameOverTextObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGameOverTextObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "SurvivalTimer") > 30;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("WinText"), gdjs.Untitled_32sceneCode.GDWinTextObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDWinTextObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDWinTextObjects1[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ferrari"), gdjs.Untitled_32sceneCode.GDferrariObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDferrariObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDferrariObjects1[i].getBehavior("Health").Health(null) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDferrariObjects1[k] = gdjs.Untitled_32sceneCode.GDferrariObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDferrariObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GameOverText"), gdjs.Untitled_32sceneCode.GDGameOverTextObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGameOverTextObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGameOverTextObjects1[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDsubway_9595backroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDsubway_9595backroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDtungObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDtungObjects2.length = 0;
gdjs.Untitled_32sceneCode.GD_959567Objects1.length = 0;
gdjs.Untitled_32sceneCode.GD_959567Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDferrariObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDferrariObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDWinTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDWinTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGameOverTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGameOverTextObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
gdjs.Untitled_32sceneCode.GDsubway_9595backroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDsubway_9595backroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDtungObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDtungObjects2.length = 0;
gdjs.Untitled_32sceneCode.GD_959567Objects1.length = 0;
gdjs.Untitled_32sceneCode.GD_959567Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDferrariObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDferrariObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDWinTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDWinTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGameOverTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGameOverTextObjects2.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
