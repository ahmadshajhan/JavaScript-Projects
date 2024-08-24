(function () {
    var d = document;
    var c = {
        COCOS2D_DEBUG: 2, //0: debug off,1: basic debug,2:full debug
        box2d: true, //true
        showFPS: true,
        frameRate: 60,
        tag: 'viewport',
        SingleEnginFile: 'js/coco2dx.min.js', loadExtension: true,

        /*enginDir:'js/',*/
        appFiles: ['js/resources.js', 'js/b2.js', 'js/Gamepad.js', 'js/main.js']
    };
    window.addEventListener('DOMContentLoaded', function () 
    {
        var s = d.createElement('script');
        s.src = c.SingleEnginFile;
        //s.src=c.engineDir + 'platform/jsloader.js';
        d.body,appendChild(s);
        s.c=c;
        s.id='cocos2d-html5'
    });
})();
