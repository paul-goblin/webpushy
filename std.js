'use strict';
var std = function()
{

    window.g = new game();

    g.setupScreens().setupButtons().setupLabels().setupGrids();

    g.keyDownEffectedObjects.ArrowUp = [ "pushy" ];
    g.keyDownEffectedObjects.ArrowDown = [ "pushy" ];
    g.keyDownEffectedObjects.ArrowLeft = [ "pushy" ];
    g.keyDownEffectedObjects.ArrowRight = [ "pushy" ];

    g.keyDownEffectedObjects.w = [ "pushy2" ];
    g.keyDownEffectedObjects.s = [ "pushy2" ];
    g.keyDownEffectedObjects.a = [ "pushy2" ];
    g.keyDownEffectedObjects.d = [ "pushy2" ];

    g.swipeEffectedObjects = [ "pushy" ];

    loadLevels();
    loadLevels2();

    g.loadNextLevel( "field" ); //um test-Level 0 zu überspringen
    g.loadNextLevel( "field2" ); //um test-Level 0 zu überspringen


    g.setupLevelSelections(); 
    

}
$( document ).ready( std() );
