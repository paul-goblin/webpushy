'use strict';

var loadLevels2 = function()
{


    var l = 0;


//************************************************************************************************************************************************************************************************************************
    var l = 1; // L wie level, damit man level leicht neu nummerieren kann
//************************************************************************************************************************************************************************************************************************

    //border
    for ( var c = 0; c < 16 ; c ++ ) 
    {
        g.lvlStart.field2[l][c][0].objName = "wall";
        g.lvlStart.field2[l][c][11].objName = "wall";
    }
    for ( var r = 0; r < 12; r++ )
    {
        g.lvlStart.field2[l][0][r].objName = "wall";
        g.lvlStart.field2[l][15][r].objName = "wall";
    }

    //Pushys + Hauses
    // g.lvlStart.field2[l][14][1].objName = "pushy";
    // g.lvlStart.field2[l][1][10].objName = "house";
    // g.lvlStart.field2[l][1][1].objName = "pushy2";
    // g.lvlStart.field2[l][14][10].objName = "house2";











}