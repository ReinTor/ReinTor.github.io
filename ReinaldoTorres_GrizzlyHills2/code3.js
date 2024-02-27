gdjs.TitleCode = {};
gdjs.TitleCode.GDFieldObjects1= [];
gdjs.TitleCode.GDFieldObjects2= [];
gdjs.TitleCode.GDHouseObjects1= [];
gdjs.TitleCode.GDHouseObjects2= [];
gdjs.TitleCode.GDHouse2Objects1= [];
gdjs.TitleCode.GDHouse2Objects2= [];
gdjs.TitleCode.GDGordonObjects1= [];
gdjs.TitleCode.GDGordonObjects2= [];
gdjs.TitleCode.GDBaldPirateObjects1= [];
gdjs.TitleCode.GDBaldPirateObjects2= [];
gdjs.TitleCode.GDNativeObjects1= [];
gdjs.TitleCode.GDNativeObjects2= [];
gdjs.TitleCode.GDPurpleButtonWithShadowObjects1= [];
gdjs.TitleCode.GDPurpleButtonWithShadowObjects2= [];
gdjs.TitleCode.GDNewTextObjects1= [];
gdjs.TitleCode.GDNewTextObjects2= [];
gdjs.TitleCode.GDNewBitmapTextObjects1= [];
gdjs.TitleCode.GDNewBitmapTextObjects2= [];
gdjs.TitleCode.GDNewVideoObjects1= [];
gdjs.TitleCode.GDNewVideoObjects2= [];
gdjs.TitleCode.GDTransitionObjects1= [];
gdjs.TitleCode.GDTransitionObjects2= [];
gdjs.TitleCode.GDTextBorderObjects1= [];
gdjs.TitleCode.GDTextBorderObjects2= [];
gdjs.TitleCode.GDCollisionDetectObjects1= [];
gdjs.TitleCode.GDCollisionDetectObjects2= [];
gdjs.TitleCode.GDSkeleton2Objects1= [];
gdjs.TitleCode.GDSkeleton2Objects2= [];
gdjs.TitleCode.GDCaveObjects1= [];
gdjs.TitleCode.GDCaveObjects2= [];
gdjs.TitleCode.GDSkeleton3Objects1= [];
gdjs.TitleCode.GDSkeleton3Objects2= [];
gdjs.TitleCode.GDSkeleton4Objects1= [];
gdjs.TitleCode.GDSkeleton4Objects2= [];
gdjs.TitleCode.GDHitBoxObjects1= [];
gdjs.TitleCode.GDHitBoxObjects2= [];


gdjs.TitleCode.asyncCallback24175196 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Farm");
}}
gdjs.TitleCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.TitleCode.asyncCallback24175196(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.TitleCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Field"), gdjs.TitleCode.GDFieldObjects1);
gdjs.copyArray(runtimeScene.getObjects("House"), gdjs.TitleCode.GDHouseObjects1);
{for(var i = 0, len = gdjs.TitleCode.GDHouseObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDHouseObjects1[i].play();
}
}{for(var i = 0, len = gdjs.TitleCode.GDFieldObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDFieldObjects1[i].play();
}
}{for(var i = 0, len = gdjs.TitleCode.GDFieldObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDFieldObjects1[i].setLoop(true);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "8 Bit - Link's Theme - Zelda TOTK - Gameboy Version.wav", true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithShadow"), gdjs.TitleCode.GDPurpleButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDPurpleButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDPurpleButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDPurpleButtonWithShadowObjects1[k] = gdjs.TitleCode.GDPurpleButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDPurpleButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.TitleCode.GDTransitionObjects1);
{for(var i = 0, len = gdjs.TitleCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Circular", "Forward", 255, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.TitleCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.TitleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TitleCode.GDFieldObjects1.length = 0;
gdjs.TitleCode.GDFieldObjects2.length = 0;
gdjs.TitleCode.GDHouseObjects1.length = 0;
gdjs.TitleCode.GDHouseObjects2.length = 0;
gdjs.TitleCode.GDHouse2Objects1.length = 0;
gdjs.TitleCode.GDHouse2Objects2.length = 0;
gdjs.TitleCode.GDGordonObjects1.length = 0;
gdjs.TitleCode.GDGordonObjects2.length = 0;
gdjs.TitleCode.GDBaldPirateObjects1.length = 0;
gdjs.TitleCode.GDBaldPirateObjects2.length = 0;
gdjs.TitleCode.GDNativeObjects1.length = 0;
gdjs.TitleCode.GDNativeObjects2.length = 0;
gdjs.TitleCode.GDPurpleButtonWithShadowObjects1.length = 0;
gdjs.TitleCode.GDPurpleButtonWithShadowObjects2.length = 0;
gdjs.TitleCode.GDNewTextObjects1.length = 0;
gdjs.TitleCode.GDNewTextObjects2.length = 0;
gdjs.TitleCode.GDNewBitmapTextObjects1.length = 0;
gdjs.TitleCode.GDNewBitmapTextObjects2.length = 0;
gdjs.TitleCode.GDNewVideoObjects1.length = 0;
gdjs.TitleCode.GDNewVideoObjects2.length = 0;
gdjs.TitleCode.GDTransitionObjects1.length = 0;
gdjs.TitleCode.GDTransitionObjects2.length = 0;
gdjs.TitleCode.GDTextBorderObjects1.length = 0;
gdjs.TitleCode.GDTextBorderObjects2.length = 0;
gdjs.TitleCode.GDCollisionDetectObjects1.length = 0;
gdjs.TitleCode.GDCollisionDetectObjects2.length = 0;
gdjs.TitleCode.GDSkeleton2Objects1.length = 0;
gdjs.TitleCode.GDSkeleton2Objects2.length = 0;
gdjs.TitleCode.GDCaveObjects1.length = 0;
gdjs.TitleCode.GDCaveObjects2.length = 0;
gdjs.TitleCode.GDSkeleton3Objects1.length = 0;
gdjs.TitleCode.GDSkeleton3Objects2.length = 0;
gdjs.TitleCode.GDSkeleton4Objects1.length = 0;
gdjs.TitleCode.GDSkeleton4Objects2.length = 0;
gdjs.TitleCode.GDHitBoxObjects1.length = 0;
gdjs.TitleCode.GDHitBoxObjects2.length = 0;

gdjs.TitleCode.eventsList1(runtimeScene);

return;

}

gdjs['TitleCode'] = gdjs.TitleCode;
