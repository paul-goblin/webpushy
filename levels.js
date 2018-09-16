'use strict';

var loadLevels = function()
{


    var l = 0;

    g.lvlStart.field[l][10][4].objName = "pushy";
    g.lvlStart.field[l][1][10].objName = "house";
    g.lvlStart.field[l][1][4].objName = "box";
    g.lvlStart.field[l][9][7].objName = "wall";
    g.lvlStart.field[l][1][1].objName = "slime";
    g.lvlStart.field[l][2][2].objName = "slime";

    g.lvlStart.field[l][8][3] = {objName : "oneWay", objType : "up"};   
    g.lvlStart.field[l][9][4] = {objName : "oneWay", objType : "left"}; 
    g.lvlStart.field[l][10][5] = {objName : "oneWay", objType : "right"};
    g.lvlStart.field[l][11][6] = {objName : "oneWay", objType : "down"};

    g.lvlStart.field[l][4][8] = {objName : "water", objType : "closed"};



//************************************************************************************************************************************************************************************************************************
    var l = 1; // L wie level, damit man level leicht neu nummerieren kann
//************************************************************************************************************************************************************************************************************************

    //border
    for ( var c = 0; c < 16 ; c ++ ) 
    {
        g.lvlStart.field[l][c][0].objName = "wall";
        g.lvlStart.field[l][c][11].objName = "wall";
    }
    for ( var r = 0; r < 12; r++ )
    {
        g.lvlStart.field[l][0][r].objName = "wall";
        g.lvlStart.field[l][15][r].objName = "wall";
    }

    //Pushy + Haus
    g.lvlStart.field[l][14][1].objName = "pushy";
    g.lvlStart.field[l][14][1].objName2 = "hole";
    g.lvlStart.field[l][14][1].objType2 = "blue";

    g.lvlStart.field[l][1][10].objName = "house";

    //walls
    for ( var r = 1; r < 7; r++ )
    {
        g.lvlStart.field[l][10][r].objName = "wall";
    }
    for ( var r = 5; r < 11; r++ )
    {
        g.lvlStart.field[l][5][r].objName = "wall";
    }

    //boxes
    g.lvlStart.field[l][10][7].objName = "box";
    g.lvlStart.field[l][10][8].objName = "box";
    g.lvlStart.field[l][10][9].objName = "box";
    g.lvlStart.field[l][10][10].objName = "box";

	
	
    g.lvlStart.field[l][9][10].objName = "box";

    g.lvlStart.field[l][5][1].objName = "box";
    g.lvlStart.field[l][5][2].objName = "box";
    g.lvlStart.field[l][5][3].objName = "box";
    g.lvlStart.field[l][5][4].objName = "box";

    g.lvlStart.field[l][4][1].objName = "box";
    g.lvlStart.field[l][4][3].objName = "box";

    g.lvlStart.field[l][1][9].objName = "box";
    g.lvlStart.field[l][2][9].objName = "box";





//************************************************************************************************************************************************************************************************************************
    var l = 2; // level 2
//************************************************************************************************************************************************************************************************************************
    //border
    for ( var c = 0; c < 16 ; c ++ ) 
    {
        g.lvlStart.field[l][c][0].objName = "wall";
        g.lvlStart.field[l][c][11].objName = "wall";
    }
    for ( var r = 0; r < 12; r++ )
    {
        g.lvlStart.field[l][0][r].objName = "wall";
        g.lvlStart.field[l][15][r].objName = "wall";
    }

    //Pushy + Haus
    g.lvlStart.field[l][14][1].objName = "pushy";
    g.lvlStart.field[l][3][10].objName = "house";

    //walls
    for ( var c = 1; c < 12; c++ )
    {
        g.lvlStart.field[l][c][4].objName = "wall";
    }
    g.lvlStart.field[l][11][3].objName = "wall";
    g.lvlStart.field[l][11][2].objName = "wall";
    g.lvlStart.field[l][11][1].objName = "wall";
    for ( var c = 4; c < 16; c++ )
    {
        g.lvlStart.field[l][c][7].objName = "wall";
    }
    g.lvlStart.field[l][4][8].objName = "wall";
    g.lvlStart.field[l][4][9].objName = "wall";
    g.lvlStart.field[l][4][10].objName = "wall";

    //important stuff
    g.lvlStart.field[l][12][4].objName = "box";
    g.lvlStart.field[l][12][6].objName = "box";
    g.lvlStart.field[l][11][6].objName = "box";
    g.lvlStart.field[l][11][5].objName = "box";
    g.lvlStart.field[l][7][6].objName = "box";
    g.lvlStart.field[l][6][5].objName = "box";
    g.lvlStart.field[l][6][6].objName = "box";
    g.lvlStart.field[l][13][4].objName = "wall";
    g.lvlStart.field[l][14][4].objName = "box";
    g.lvlStart.field[l][3][6].objName = "box";
    g.lvlStart.field[l][2][6].objName = "box";
    g.lvlStart.field[l][4][6].objName = "box";
    g.lvlStart.field[l][3][8].objName = "box";
    g.lvlStart.field[l][2][7].objName = "box";
    g.lvlStart.field[l][2][9].objName = "box";
    g.lvlStart.field[l][1][10].objName = "box";
    g.lvlStart.field[l][14][2].objName = "box";
    g.lvlStart.field[l][13][2].objName = "box";





//************************************************************************************************************************************************************************************************************************
    var l = 3; // level 3
//************************************************************************************************************************************************************************************************************************
    for (var i = 11 - 1; i >= 1; i--) 
    {
            g.lvlStart.field[l][i][1].objName = "wall";
            g.lvlStart.field[l][i][10].objName = "wall";
            g.lvlStart.field[l][1][i].objName = "wall";
            g.lvlStart.field[l][10][i].objName = "wall";
    }
    g.lvlStart.field[l][1][1].objName = "wall"; //viereck

    g.lvlStart.field[l][9][2].objName = "pushy";
    g.lvlStart.field[l][2][9].objName = "house";

    for (var i = 10 - 1; i >= 2; i--) {
        g.lvlStart.field[l][i][i].objName = "box";
    }
    for (var i = 6 - 1; i >= 3; i--) 
    {
        g.lvlStart.field[l][i-1][i].objName = "box";
    }
    for (var i = 7 - 1; i >= 4; i--) 
    {
        g.lvlStart.field[l][i-2][i].objName = "box";
    }
    
    g.lvlStart.field[l][9][4].objName = "box";
    g.lvlStart.field[l][7][3].objName = "box";
    g.lvlStart.field[l][4][3].objName = "box";
    g.lvlStart.field[l][8][5].objName = "box";
    g.lvlStart.field[l][6][8].objName = "box";
    g.lvlStart.field[l][7][5].objName = "box";
    g.lvlStart.field[l][5][3].objName = "box";
    g.lvlStart.field[l][6][4].objName = "box";
    g.lvlStart.field[l][8][6].objName = "box";

    g.lvlStart.field[l][5][6] = {objName : "lever", objActive : false};    
 
    g.lvlStart.field[l][4][9] = {objName : "leverWall", objType : "closed"};
    g.lvlStart.field[l][4][8] = {objName : "leverWall", objType : "closed"};    
    
    for (var i = 5 - 1; i >= 2; i--) 
    {
            g.lvlStart.field[l][i][7].objName = "wall";
    }

    //deko border
    for ( var c = 0; c < 16 ; c ++ ) 
    {
        g.lvlStart.field[l][c][0].objName = "box";
        g.lvlStart.field[l][c][11].objName = "box";
    }
    for ( var r = 0; r < 12; r++ )
    {
        g.lvlStart.field[l][0][r].objName = "box";
        g.lvlStart.field[l][15][r].objName = "box";
    }




//************************************************************************************************************************************************************************************************************************
    var l = 4;
//************************************************************************************************************************************************************************************************************************
    //border
    for ( var c = 0; c < 16 ; c ++ ) 
    {
        g.lvlStart.field[l][c][0].objName = "wall";
        g.lvlStart.field[l][c][11].objName = "wall";
    }
    for ( var r = 0; r < 12; r++ )
    {
        g.lvlStart.field[l][0][r].objName = "wall";
        g.lvlStart.field[l][15][r].objName = "wall";
    }

    //Pushy + Haus
    g.lvlStart.field[l][14][1].objName = "pushy";
    g.lvlStart.field[l][1][10].objName = "house";

    //other
    g.lvlStart.field[l][9][1].objName = "wall";
    g.lvlStart.field[l][9][2].objName = "wall";
    g.lvlStart.field[l][9][3].objName = "wall";
    g.lvlStart.field[l][10][3].objName = "wall";
    g.lvlStart.field[l][11][3].objName = "wall";
    g.lvlStart.field[l][12][3].objName = "wall";
    g.lvlStart.field[l][13][3].objName = "wall";
    g.lvlStart.field[l][14][3].objName = "wall";
    g.lvlStart.field[l][3][10].objName = "wall";
    g.lvlStart.field[l][3][8].objName = "wall";
    g.lvlStart.field[l][2][8].objName = "wall";
    g.lvlStart.field[l][1][8].objName = "wall";

    g.lvlStart.field[l][10][2].objName = "portal";
    g.lvlStart.field[l][8][4].objName = "portal";

    g.lvlStart.field[l][11][2].objName = "box";
    g.lvlStart.field[l][13][2] = {objName : "lever", objActive: false };
    g.lvlStart.field[l][3][9] = {objName : "leverWall", objType : "closed"};

    g.lvlStart.field[l][6][9] = {objName : "ball", objType : "red"};
    g.lvlStart.field[l][6][7] = {objName : "ball", objType : "green"};
    g.lvlStart.field[l][6][5] = {objName : "ball", objType : "blue"};

    g.lvlStart.field[l][13][5] = {objName : "hole", objType : "red"};
    g.lvlStart.field[l][13][7] = {objName : "hole", objType : "green"};
    g.lvlStart.field[l][13][9] = {objName : "hole", objType : "blue"};

    // g.lvlStart.field[l]copy.objName = "portal";
    // g.lvlStart.field[l]copy = {objName : "hole", objType : "green"};





//************************************************************************************************************************************************************************************************************************
    var l = 5;
//************************************************************************************************************************************************************************************************************************
    //border
    for ( var c = 0; c < 16 ; c ++ ) 
    {
        g.lvlStart.field[l][c][0].objName = "wall";
        g.lvlStart.field[l][c][11].objName = "wall";
    }
    for ( var r = 0; r < 12; r++ )
    {
        g.lvlStart.field[l][0][r].objName = "wall";
        g.lvlStart.field[l][15][r].objName = "wall";
    }

    //Pushy + Haus
    g.lvlStart.field[l][6][4].objName = "pushy";
    g.lvlStart.field[l][1][10].objName = "house";

    //other
    g.lvlStart.field[l][3][2].objName = "wall";
    g.lvlStart.field[l][3][3].objName = "wall";
    g.lvlStart.field[l][2][3].objName = "wall";
    g.lvlStart.field[l][1][3].objName = "wall";
    g.lvlStart.field[l][1][5].objName = "wall";
    g.lvlStart.field[l][3][5].objName = "wall";
    g.lvlStart.field[l][5][1].objName = "wall";
    g.lvlStart.field[l][5][2].objName = "wall";
    g.lvlStart.field[l][5][3].objName = "wall";
    g.lvlStart.field[l][6][3].objName = "wall";
    g.lvlStart.field[l][5][5].objName = "wall";
    g.lvlStart.field[l][5][7].objName = "wall";
    g.lvlStart.field[l][3][7].objName = "wall";
    g.lvlStart.field[l][1][7].objName = "wall";
    for ( var r = 3; r < 11; r++ )
    {
        g.lvlStart.field[l][7][r].objName = "wall";
    }

    g.lvlStart.field[l][4][2] = {objName : "hole", objType : "red"};
    g.lvlStart.field[l][4][3].objName = "boxField";
    g.lvlStart.field[l][4][4].objName = "box";
    g.lvlStart.field[l][5][6] = {objName : "ball", objType : "red"};
    g.lvlStart.field[l][4][5] = {objName : "colorBlur", objType : "blue"};
    g.lvlStart.field[l][3][6] = {objName : "colorBlur", objType : "green"};
    g.lvlStart.field[l][2][2].objName = "apple";
    g.lvlStart.field[l][1][2].objName = "apple";
    g.lvlStart.field[l][2][1].objName = "apple";
    g.lvlStart.field[l][1][1].objName = "apple";
    g.lvlStart.field[l][3][1] = {objName : "leverWall", objType : "closed"};
    g.lvlStart.field[l][3][4] = {objName : "lever", objActive : false};


    g.lvlStart.field[l][4][1].objName = "portal";
    g.lvlStart.field[l][1][4].objName = "portal";




//************************************************************************************************************************************************************************************************************************
    var l = 6;
//************************************************************************************************************************************************************************************************************************
    //border
    for ( var c = 0; c < 16 ; c ++ ) 
    {
        g.lvlStart.field[l][c][0].objName = "wall";
        g.lvlStart.field[l][c][11].objName = "wall";
    }
    for ( var r = 0; r < 12; r++ )
    {
        g.lvlStart.field[l][0][r].objName = "wall";
        g.lvlStart.field[l][15][r].objName = "wall";
    }


    //other
    for ( var c = 1; c < 15 ; c ++ ) 
    {
        for ( var r = 1; r < 11; r++ )
        {
            g.lvlStart.field[l][c][r] = {objName : "oneWay", objType : "up"};
            if ( c + r > 13 )
            {
                g.lvlStart.field[l][c][r].objType = "down"
            }  
        }
    }

    g.lvlStart.field[l][13][1].objType = "left";
    g.lvlStart.field[l][12][1].objType = "left";
    g.lvlStart.field[l][11][1].objType = "left";
    g.lvlStart.field[l][11][2].objType = "down";
    g.lvlStart.field[l][11][3].objType = "down";
    g.lvlStart.field[l][12][3].objType = "right";
    g.lvlStart.field[l][12][4].objType = "down";
    g.lvlStart.field[l][12][5].objType = "down";
    g.lvlStart.field[l][11][5].objType = "left";
    g.lvlStart.field[l][10][5].objType = "left";
    g.lvlStart.field[l][9][5].objType = "left";
    g.lvlStart.field[l][9][6].objType = "down";
    g.lvlStart.field[l][9][7].objType = "down";
    g.lvlStart.field[l][8][7].objType = "left";
    g.lvlStart.field[l][7][7].objType = "left";
    g.lvlStart.field[l][6][7].objType = "left";
    g.lvlStart.field[l][6][6].objType = "up";
    g.lvlStart.field[l][6][5].objType = "up";
    g.lvlStart.field[l][6][4].objType = "up";
    g.lvlStart.field[l][5][4].objType = "left";
    g.lvlStart.field[l][4][4].objType = "left";
    g.lvlStart.field[l][3][4].objType = "left";
    g.lvlStart.field[l][3][5].objType = "down";
    g.lvlStart.field[l][3][6].objType = "down";
    g.lvlStart.field[l][4][6].objType = "right";
    g.lvlStart.field[l][4][7].objType = "down";
    g.lvlStart.field[l][4][8].objType = "down";
    g.lvlStart.field[l][4][9].objType = "down";
    g.lvlStart.field[l][3][9].objType = "left";
    g.lvlStart.field[l][2][9].objType = "left";
    g.lvlStart.field[l][2][10].objType = "down";

    //Pushy + Haus
    g.lvlStart.field[l][14][1].objName = "pushy";
    g.lvlStart.field[l][1][10].objName = "house";


//************************************************************************************************************************************************************************************************************************
    var l = 7;
//************************************************************************************************************************************************************************************************************************
    for ( var c = 0; c < 16 ; c ++ ) 
    {
        g.lvlStart.field[l][c][0].objName = "box";
        g.lvlStart.field[l][c][11].objName = "box";
        g.lvlStart.field[l][c][7].objName = "box";
        g.lvlStart.field[l][c][3].objName = "box";
    }
    for ( var r = 0; r < 12; r++ )
    {
        g.lvlStart.field[l][0][r].objName = "box";
        g.lvlStart.field[l][15][r].objName = "box";
        g.lvlStart.field[l][12][r].objName = "box";
        g.lvlStart.field[l][8][r].objName = "box";
        g.lvlStart.field[l][4][r].objName = "box";
    }
    g.lvlStart.field[l][14][1].objName = "pushy";
    g.lvlStart.field[l][1][10].objName = "house";

    g.lvlStart.field[l][10][9] = {objName : "hole", objType : "red"};
    g.lvlStart.field[l][2][4] = {objName : "ball", objType : "green"};
    g.lvlStart.field[l][7][6] = {objName : "colorBlur", objType : "red"};




//************************************************************************************************************************************************************************************************************************
    var l = 8;
//************************************************************************************************************************************************************************************************************************
    for ( var c = 0; c < 16 ; c ++ ) 
    {
        g.lvlStart.field[l][c][0].objName = "wall";
        g.lvlStart.field[l][c][11].objName = "wall";
    }
    for ( var r = 0; r < 12; r++ )
    {
        g.lvlStart.field[l][0][r].objName = "wall";
        g.lvlStart.field[l][15][r].objName = "wall";
    }//deko sehr Schick (border)
    
    g.lvlStart.field[l][14][1].objName = "pushy";
    g.lvlStart.field[l][1][10].objName = "house";

    for (var i = 1; i < 5; i++ ) 
    {
    	g.lvlStart.field[l][5][i].objName = "wall";
    }
    g.lvlStart.field[l][5][5] = {objName : "leverWall", objType : "closed"};
    g.lvlStart.field[l][6][5] = {objName : "leverWall", objType : "closed"};
    for (var i = 6; i < 11; i++ ) 
    {
    	g.lvlStart.field[l][6][i].objName = "wall";
    }
    g.lvlStart.field[l][10][6] = {objName : "lever", objActive : false};
    for ( var i = 9; i < 12 ; i ++ ) 
    {
        g.lvlStart.field[l][i][5].objName = "wall";
        g.lvlStart.field[l][i][7].objName = "wall";
    //    g.lvlStart.field[l][8][i-4].objName = "wall";
    }
    g.lvlStart.field[l][8][5].objName = "wall";
    g.lvlStart.field[l][8][7].objName = "wall";
    g.lvlStart.field[l][9][6] = {objName : "hole", objType : "green"};



    g.lvlStart.field[l][1][1] = {objName : "portal"};
    g.lvlStart.field[l][2][2] = {objName : "ball", objType : "blue"};
    g.lvlStart.field[l][2][5] = {objName : "colorBlur", objType : "green"};

    
    g.lvlStart.field[l][14][10] = {objName : "portal"};
    g.lvlStart.field[l][4][1] = {objName : "portal"};


    g.lvlStart.field[l][1][9] = {objName : "leverWall", objType : "closed"};
    g.lvlStart.field[l][2][9] = {objName : "leverWall", objType : "closed"};
    g.lvlStart.field[l][2][10] = {objName : "leverWall", objType : "closed"};


    g.lvlStart.field[l][3][2] = {objName : "leverWall", objType : "closed"};

    g.lvlStart.field[l][1][3].objName = "wall";
    g.lvlStart.field[l][2][3].objName = "wall";
    g.lvlStart.field[l][6][4].objName = "wall";
    g.lvlStart.field[l][3][3].objName = "wall";
    g.lvlStart.field[l][3][1].objName = "wall";

	g.lvlStart.field[l][7][10] = {objName : "hole", objType : "red"};
	g.lvlStart.field[l][13][5] = {objName : "ball", objType : "red"};

	g.lvlStart.field[l][4][5].objName = "box";
	g.lvlStart.field[l][3][5].objName = "box";
	g.lvlStart.field[l][4][6].objName = "box";
	g.lvlStart.field[l][1][5].objName = "box";
	g.lvlStart.field[l][1][7].objName = "box";
	g.lvlStart.field[l][2][8].objName = "box";
	g.lvlStart.field[l][3][7].objName = "box";

	g.lvlStart.field[l][7][2] = {objName : "apple"};
	g.lvlStart.field[l][2][6] = {objName : "apple"};

	g.lvlStart.field[l][9][2].objName = "wall";
	g.lvlStart.field[l][10][3].objName = "wall";

	g.lvlStart.field[l][13][1].objName = "wall";




//************************************************************************************************************************************************************************************************************************
    var l = 9;
//************************************************************************************************************************************************************************************************************************
    for ( var c = 0; c < 16 ; c ++ ) 
    {
        g.lvlStart.field[l][c][0].objName = "box";
        g.lvlStart.field[l][c][11].objName = "box";
    }
    for ( var r = 0; r < 12; r++ )
    {
        g.lvlStart.field[l][0][r].objName = "box";
        g.lvlStart.field[l][15][r].objName = "box";
    }
    g.lvlStart.field[l][14][1].objName = "pushy";
    g.lvlStart.field[l][14][7].objName = "pushy";
    g.lvlStart.field[l][1][10].objName = "house";
    for (var i = 1; i < 15; i++)
    {
        g.lvlStart.field[l][i][6].objName = "wall";
    }
    g.lvlStart.field[l][13][8] = {objName : "hole", objType : "blue"};
    g.lvlStart.field[l][3][9] = {objName : "ball", objType : "blue"};

    g.lvlStart.field[l][1][9] = {objName : "leverWall", objType : "closed"};
    g.lvlStart.field[l][2][9] = {objName : "leverWall", objType : "closed"};
    g.lvlStart.field[l][2][10] = {objName : "leverWall", objType : "closed"};

    g.lvlStart.field[l][1][3] = {objName : "lever", objActive : false};
    g.lvlStart.field[l][10][4].objName = "box";

//************************************************************************************************************************************************************************************************************************
    var l = 10;
//************************************************************************************************************************************************************************************************************************
    for ( var c = 0; c < 16 ; c ++ ) 
    {
        if(c==4){c=5;}
        g.lvlStart.field[l][c][0].objName = "box";
        g.lvlStart.field[l][c][11].objName = "box";
    }
    for ( var r = 0; r < 12; r++ )
    {
        if(r == 8)
        {
            r = 9;
        }
        g.lvlStart.field[l][0][r].objName = "box";
        g.lvlStart.field[l][15][r].objName = "box";
    }
    for(var t = 4; t<15; t++)
    {
        g.lvlStart.field[l][t][5] = {objName : "oneWay", objType : "down"};
    }
    g.lvlStart.field[l][1][5] = {objName : "oneWay", objType : "down"};
    g.lvlStart.field[l][2][5] = {objName : "oneWay", objType : "right"};
    g.lvlStart.field[l][3][5] = {objName : "oneWay", objType : "up"};
    g.lvlStart.field[l][3][7] = {objName : "oneWay", objType : "left"};
    g.lvlStart.field[l][4][0] = {objName : "oneWay", objType : "down"};
    g.lvlStart.field[l][4][11] = {objName : "oneWay", objType : "down"};
    g.lvlStart.field[l][4][10] = {objName : "oneWay", objType : "left"};
    g.lvlStart.field[l][1][6] = {objName : "oneWay", objType : "down"};

    g.lvlStart.field[l][0][8] = {objName : "oneWay", objType : "left"};
    g.lvlStart.field[l][8][9] = {objName : "oneWay", objType : "left"};

    g.lvlStart.field[l][4][8] = {objName : "oneWay", objType : "down"};
    g.lvlStart.field[l][4][6] = {objName : "oneWay", objType : "down"};
    g.lvlStart.field[l][4][7] = {objName : "oneWay", objType : "down"};

    g.lvlStart.field[l][7][1].objName = "wall";
    g.lvlStart.field[l][7][2].objName = "wall";
    g.lvlStart.field[l][7][4].objName = "wall";
    g.lvlStart.field[l][7][3] = {objName : "oneWay", objType : "right"};
    g.lvlStart.field[l][8][3] = {objName : "oneWay", objType : "right"};

    g.lvlStart.field[l][14][1].objName = "pushy";
    g.lvlStart.field[l][1][10].objName = "house";
    g.lvlStart.field[l][8][10] = {objName : "portal"};
    g.lvlStart.field[l][2][1] = {objName : "portal"};

    
    g.lvlStart.field[l][15][8].objName = "box";
    g.lvlStart.field[l][1][1].objName = "box";

    g.lvlStart.field[l][10][2] = {objName : "ball", objType : "green"};
    g.lvlStart.field[l][1][2] = {objName : "hole", objType : "blue"};
    g.lvlStart.field[l][12][8] = {objName : "colorBlur", objType : "blue"};

    g.lvlStart.field[l][11][8] = {objName : "colorBlur", objType : "red"};
    g.lvlStart.field[l][13][8] = {objName : "colorBlur", objType : "red"};
    g.lvlStart.field[l][12][9] = {objName : "colorBlur", objType : "red"};


    g.lvlStart.field[l][2][2] = {objName : "leverWall", objType : "closed"};
    g.lvlStart.field[l][2][3] = {objName : "leverWall", objType : "closed"};
    g.lvlStart.field[l][1][3] = {objName : "leverWall", objType : "closed"};


    g.lvlStart.field[l][8][6] = {objName : "lever", objActive : false};
    g.lvlStart.field[l][7][6].objName = "wall";
    g.lvlStart.field[l][9][6].objName = "wall";
    g.lvlStart.field[l][8][7].objName = "wall";
    g.lvlStart.field[l][11][7].objName = "wall";
    g.lvlStart.field[l][13][7].objName = "wall";
    g.lvlStart.field[l][13][9].objName = "wall";
    g.lvlStart.field[l][11][9].objName = "wall";
    g.lvlStart.field[l][8][8].objName = "wall";
    g.lvlStart.field[l][10][10].objName = "wall";

    g.lvlStart.field[l][10][6].objName = "apple";



//************************************************************************************************************************************************************************************************************************
    var l = 11;
//************************************************************************************************************************************************************************************************************************
    //border
    for ( var c = 0; c < 16 ; c ++ ) 
    {
        g.lvlStart.field[l][c][0].objName = "wall";
        g.lvlStart.field[l][c][11].objName = "wall";
    }
    for ( var r = 0; r < 12; r++ )
    {
        g.lvlStart.field[l][0][r].objName = "wall";
        g.lvlStart.field[l][15][r].objName = "wall";
    }

    //Pushy + Haus
    g.lvlStart.field[l][14][1].objName = "pushy";
    g.lvlStart.field[l][1][10].objName = "house";

    //other
    g.lvlStart.field[l][9][1].objName = "wall";
    g.lvlStart.field[l][9][2].objName = "wall";
    g.lvlStart.field[l][9][3].objName = "wall";
    g.lvlStart.field[l][10][3].objName = "wall";
    g.lvlStart.field[l][11][3].objName = "wall";
    g.lvlStart.field[l][3][8].objName = "wall";
    g.lvlStart.field[l][2][8].objName = "wall";
    g.lvlStart.field[l][1][8].objName = "wall";
    g.lvlStart.field[l][13][8].objName = "wall";
    g.lvlStart.field[l][13][7].objName = "wall";
    g.lvlStart.field[l][13][6].objName = "wall";
    g.lvlStart.field[l][13][5].objName = "wall";
    g.lvlStart.field[l][13][4].objName = "wall";
    g.lvlStart.field[l][14][4].objName = "wall";

    g.lvlStart.field[l][10][2].objName = "portal";
    g.lvlStart.field[l][1][9].objName = "portal";

    g.lvlStart.field[l][7][10].objName = "boxField";
    g.lvlStart.field[l][9][9].objName = "boxField";
    g.lvlStart.field[l][11][8].objName = "boxField";
    g.lvlStart.field[l][12][6].objName = "boxField";
    g.lvlStart.field[l][14][5].objName = "boxField";

    g.lvlStart.field[l][3][9].objName = "slime";

    g.lvlStart.field[l][4][10].objName = "box";
    g.lvlStart.field[l][14][6].objName = "box";
    g.lvlStart.field[l][1][1].objName = "box";
    g.lvlStart.field[l][2][2].objName = "box";
    g.lvlStart.field[l][3][3].objName = "box";



    g.lvlStart.field[l][14][8] = {objName : "lever", objActive : false};
    g.lvlStart.field[l][14][7] = {objName : "leverWall", objType : "closed"};

















}

var std = function()
{

    window.g = new game();

    g.setupScreens().setupButtons().setupLabels().setupGrids();

    g.keyDownEffectedObjects.ArrowUp = [ "pushy" ];
    g.keyDownEffectedObjects.ArrowDown = [ "pushy" ];
    g.keyDownEffectedObjects.ArrowLeft = [ "pushy" ];
    g.keyDownEffectedObjects.ArrowRight = [ "pushy" ];

    g.swipeEffectedObjects = [ "pushy" ];

    loadLevels();

    g.loadNextLevel( "field" ); //um test-Level 0 zu überspringen


    g.setupLevelSelections(); 
    

}
$( document ).ready( std() );
