'use strict';

var loadLevels = function()
{

//************************************************************************************************************************************************************************************************************************
    var l = 1; // L wie level, damit man level leicht neu nummerieren kann
//************************************************************************************************************************************************************************************************************************

    //border
    for ( var c = 0; c < 16 ; c ++ ) 
    {
        g.lvlStart.field[l][c][0].gObject = "wall";
        g.lvlStart.field[l][c][11].gObject = "wall";
    }
    for ( var r = 0; r < 12; r++ )
    {
        g.lvlStart.field[l][0][r].gObject = "wall";
        g.lvlStart.field[l][15][r].gObject = "wall";
    }

    //Pushy + Haus
    g.lvlStart.field[l][14][1].gObject = "pushy";
    g.lvlStart.field[l][1][10].gObject = "house";

    //walls
    for ( var r = 1; r < 7; r++ )
    {
        g.lvlStart.field[l][10][r].gObject = "wall";
    }
    for ( var r = 5; r < 11; r++ )
    {
        g.lvlStart.field[l][5][r].gObject = "wall";
    }

    //boxes
    g.lvlStart.field[l][10][7].gObject = "box";
    g.lvlStart.field[l][10][8].gObject = "box";
    g.lvlStart.field[l][10][9].gObject = "box";
    g.lvlStart.field[l][10][10].gObject = "box";

	
	
    g.lvlStart.field[l][9][10].gObject = "box";

    g.lvlStart.field[l][5][1].gObject = "box";
    g.lvlStart.field[l][5][2].gObject = "box";
    g.lvlStart.field[l][5][3].gObject = "box";
    g.lvlStart.field[l][5][4].gObject = "box";

    g.lvlStart.field[l][4][1].gObject = "box";
    g.lvlStart.field[l][4][3].gObject = "box";

    g.lvlStart.field[l][1][9].gObject = "box";
    g.lvlStart.field[l][2][9].gObject = "box";





//************************************************************************************************************************************************************************************************************************
    var l = 2; // level 2
//************************************************************************************************************************************************************************************************************************
    //border
    for ( var c = 0; c < 16 ; c ++ ) 
    {
        g.lvlStart.field[l][c][0].gObject = "wall";
        g.lvlStart.field[l][c][11].gObject = "wall";
    }
    for ( var r = 0; r < 12; r++ )
    {
        g.lvlStart.field[l][0][r].gObject = "wall";
        g.lvlStart.field[l][15][r].gObject = "wall";
    }

    //Pushy + Haus
    g.lvlStart.field[l][14][1].gObject = "pushy";
    g.lvlStart.field[l][3][10].gObject = "house";

    //walls
    for ( var c = 1; c < 12; c++ )
    {
        g.lvlStart.field[l][c][4].gObject = "wall";
    }
    g.lvlStart.field[l][11][3].gObject = "wall";
    g.lvlStart.field[l][11][2].gObject = "wall";
    g.lvlStart.field[l][11][1].gObject = "wall";
    for ( var c = 4; c < 16; c++ )
    {
        g.lvlStart.field[l][c][7].gObject = "wall";
    }
    g.lvlStart.field[l][4][8].gObject = "wall";
    g.lvlStart.field[l][4][9].gObject = "wall";
    g.lvlStart.field[l][4][10].gObject = "wall";

    //important stuff
    g.lvlStart.field[l][12][4].gObject = "box";
    g.lvlStart.field[l][12][6].gObject = "box";
    g.lvlStart.field[l][11][6].gObject = "box";
    g.lvlStart.field[l][11][5].gObject = "box";
    g.lvlStart.field[l][7][6].gObject = "box";
    g.lvlStart.field[l][6][5].gObject = "box";
    g.lvlStart.field[l][6][6].gObject = "box";
    g.lvlStart.field[l][13][4].gObject = "wall";
    g.lvlStart.field[l][14][4].gObject = "box";
    g.lvlStart.field[l][3][6].gObject = "box";
    g.lvlStart.field[l][2][6].gObject = "box";
    g.lvlStart.field[l][4][6].gObject = "box";
    g.lvlStart.field[l][3][8].gObject = "box";
    g.lvlStart.field[l][2][7].gObject = "box";
    g.lvlStart.field[l][2][9].gObject = "box";
    g.lvlStart.field[l][1][10].gObject = "box";
    g.lvlStart.field[l][14][2].gObject = "box";
    g.lvlStart.field[l][13][2].gObject = "box";





//************************************************************************************************************************************************************************************************************************
    var l = 3; // level 3
//************************************************************************************************************************************************************************************************************************
    for (var i = 11 - 1; i >= 1; i--) 
    {
            g.lvlStart.field[l][i][1].gObject = "wall";
            g.lvlStart.field[l][i][10].gObject = "wall";
            g.lvlStart.field[l][1][i].gObject = "wall";
            g.lvlStart.field[l][10][i].gObject = "wall";
    }
    g.lvlStart.field[l][1][1].gObject = "wall"; //viereck

    g.lvlStart.field[l][9][2].gObject = "pushy";
    g.lvlStart.field[l][2][9].gObject = "house";

    for (var i = 10 - 1; i >= 2; i--) {
        g.lvlStart.field[l][i][i].gObject = "box";
    }
    for (var i = 6 - 1; i >= 3; i--) 
    {
        g.lvlStart.field[l][i-1][i].gObject = "box";
    }
    for (var i = 7 - 1; i >= 4; i--) 
    {
        g.lvlStart.field[l][i-2][i].gObject = "box";
    }
    
    g.lvlStart.field[l][9][4].gObject = "box";
    g.lvlStart.field[l][7][3].gObject = "box";
    g.lvlStart.field[l][4][3].gObject = "box";
    g.lvlStart.field[l][8][5].gObject = "box";
    g.lvlStart.field[l][6][8].gObject = "box";
    g.lvlStart.field[l][7][5].gObject = "box";
    g.lvlStart.field[l][5][3].gObject = "box";
    g.lvlStart.field[l][6][4].gObject = "box";
    g.lvlStart.field[l][8][6].gObject = "box";

    g.lvlStart.field[l][5][6] = {gObject : "lever", active : false};    
 
    g.lvlStart.field[l][4][9] = {gObject : "leverWall", objType : "closed"};
    g.lvlStart.field[l][4][8] = {gObject : "leverWall", objType : "closed"};    
    
    for (var i = 5 - 1; i >= 2; i--) 
    {
            g.lvlStart.field[l][i][7].gObject = "wall";
    }

    //deko border
    for ( var c = 0; c < 16 ; c ++ ) 
    {
        g.lvlStart.field[l][c][0].gObject = "box";
        g.lvlStart.field[l][c][11].gObject = "box";
    }
    for ( var r = 0; r < 12; r++ )
    {
        g.lvlStart.field[l][0][r].gObject = "box";
        g.lvlStart.field[l][15][r].gObject = "box";
    }




//************************************************************************************************************************************************************************************************************************
    var l = 4;
//************************************************************************************************************************************************************************************************************************
    //border
    for ( var c = 0; c < 16 ; c ++ ) 
    {
        g.lvlStart.field[l][c][0].gObject = "wall";
        g.lvlStart.field[l][c][11].gObject = "wall";
    }
    for ( var r = 0; r < 12; r++ )
    {
        g.lvlStart.field[l][0][r].gObject = "wall";
        g.lvlStart.field[l][15][r].gObject = "wall";
    }

    //Pushy + Haus
    g.lvlStart.field[l][14][1].gObject = "pushy";
    g.lvlStart.field[l][1][10].gObject = "house";

    //other
    g.lvlStart.field[l][9][1].gObject = "wall";
    g.lvlStart.field[l][9][2].gObject = "wall";
    g.lvlStart.field[l][9][3].gObject = "wall";
    g.lvlStart.field[l][10][3].gObject = "wall";
    g.lvlStart.field[l][11][3].gObject = "wall";
    g.lvlStart.field[l][12][3].gObject = "wall";
    g.lvlStart.field[l][13][3].gObject = "wall";
    g.lvlStart.field[l][14][3].gObject = "wall";
    g.lvlStart.field[l][3][10].gObject = "wall";
    g.lvlStart.field[l][3][8].gObject = "wall";
    g.lvlStart.field[l][2][8].gObject = "wall";
    g.lvlStart.field[l][1][8].gObject = "wall";

    g.lvlStart.field[l][10][2].gObject = "portal";
    g.lvlStart.field[l][8][4].gObject = "portal";

    g.lvlStart.field[l][11][2].gObject = "box";
    g.lvlStart.field[l][13][2] = {gObject : "lever", active: false };
    g.lvlStart.field[l][3][9] = {gObject : "leverWall", objType : "closed"};

    g.lvlStart.field[l][6][9] = {gObject : "ball", objType : "red"};
    g.lvlStart.field[l][6][7] = {gObject : "ball", objType : "green"};
    g.lvlStart.field[l][6][5] = {gObject : "ball", objType : "blue"};

    g.lvlStart.field[l][13][5] = {gObject : "hole", objType : "red"};
    g.lvlStart.field[l][13][7] = {gObject : "hole", objType : "green"};
    g.lvlStart.field[l][13][9] = {gObject : "hole", objType : "blue"};

    // g.lvlStart.field[l]copy.gObject = "portal";
    // g.lvlStart.field[l]copy = {gObject : "hole", objType : "green"};





//************************************************************************************************************************************************************************************************************************
    var l = 5;
//************************************************************************************************************************************************************************************************************************
    //border
    for ( var c = 0; c < 16 ; c ++ ) 
    {
        g.lvlStart.field[l][c][0].gObject = "wall";
        g.lvlStart.field[l][c][11].gObject = "wall";
    }
    for ( var r = 0; r < 12; r++ )
    {
        g.lvlStart.field[l][0][r].gObject = "wall";
        g.lvlStart.field[l][15][r].gObject = "wall";
    }

    //Pushy + Haus
    g.lvlStart.field[l][6][4].gObject = "pushy";
    g.lvlStart.field[l][1][10].gObject = "house";

    //other
    g.lvlStart.field[l][3][2].gObject = "wall";
    g.lvlStart.field[l][3][3].gObject = "wall";
    g.lvlStart.field[l][2][3].gObject = "wall";
    g.lvlStart.field[l][1][3].gObject = "wall";
    g.lvlStart.field[l][1][5].gObject = "wall";
    g.lvlStart.field[l][3][5].gObject = "wall";
    g.lvlStart.field[l][5][1].gObject = "wall";
    g.lvlStart.field[l][5][2].gObject = "wall";
    g.lvlStart.field[l][5][3].gObject = "wall";
    g.lvlStart.field[l][6][3].gObject = "wall";
    g.lvlStart.field[l][5][5].gObject = "wall";
    g.lvlStart.field[l][5][7].gObject = "wall";
    g.lvlStart.field[l][3][7].gObject = "wall";
    g.lvlStart.field[l][1][7].gObject = "wall";
    for ( var r = 3; r < 11; r++ )
    {
        g.lvlStart.field[l][7][r].gObject = "wall";
    }

    g.lvlStart.field[l][4][2] = {gObject : "hole", objType : "red"};
    g.lvlStart.field[l][4][3].gObject = "boxField";
    g.lvlStart.field[l][4][4].gObject = "box";
    g.lvlStart.field[l][5][6] = {gObject : "ball", objType : "red"};
    g.lvlStart.field[l][4][5] = {gObject : "colorBlur", objType : "blue"};
    g.lvlStart.field[l][3][6] = {gObject : "colorBlur", objType : "green"};
    g.lvlStart.field[l][2][2].gObject = "apple";
    g.lvlStart.field[l][1][2].gObject = "apple";
    g.lvlStart.field[l][2][1].gObject = "apple";
    g.lvlStart.field[l][1][1].gObject = "apple";
    g.lvlStart.field[l][3][1] = {gObject : "leverWall", objType : "closed"};
    g.lvlStart.field[l][3][4] = {gObject : "lever", active : false};


    g.lvlStart.field[l][4][1].gObject = "portal";
    g.lvlStart.field[l][1][4].gObject = "portal";




//************************************************************************************************************************************************************************************************************************
    var l = 6;
//************************************************************************************************************************************************************************************************************************
    //border
    for ( var c = 0; c < 16 ; c ++ ) 
    {
        g.lvlStart.field[l][c][0].gObject = "wall";
        g.lvlStart.field[l][c][11].gObject = "wall";
    }
    for ( var r = 0; r < 12; r++ )
    {
        g.lvlStart.field[l][0][r].gObject = "wall";
        g.lvlStart.field[l][15][r].gObject = "wall";
    }

    //Pushy + Haus
    g.lvlStart.field[l][14][1].gObject = "pushy";
    g.lvlStart.field[l][1][10].gObject = "house";

    //other





//************************************************************************************************************************************************************************************************************************
    var l = 7;
//************************************************************************************************************************************************************************************************************************
    for ( var c = 0; c < 16 ; c ++ ) 
    {
        g.lvlStart.field[l][c][0].gObject = "box";
        g.lvlStart.field[l][c][11].gObject = "box";
        g.lvlStart.field[l][c][7].gObject = "box";
        g.lvlStart.field[l][c][3].gObject = "box";
    }
    for ( var r = 0; r < 12; r++ )
    {
        g.lvlStart.field[l][0][r].gObject = "box";
        g.lvlStart.field[l][15][r].gObject = "box";
        g.lvlStart.field[l][12][r].gObject = "box";
        g.lvlStart.field[l][8][r].gObject = "box";
        g.lvlStart.field[l][4][r].gObject = "box";
    }
    g.lvlStart.field[l][14][1].gObject = "pushy";
    g.lvlStart.field[l][1][10].gObject = "house";

    g.lvlStart.field[l][10][9] = {gObject : "hole", objType : "red"};
    g.lvlStart.field[l][2][4] = {gObject : "ball", objType : "green"};
    g.lvlStart.field[l][7][6] = {gObject : "colorBlur", objType : "red"};




//************************************************************************************************************************************************************************************************************************
    var l = 8;
//************************************************************************************************************************************************************************************************************************
    for ( var c = 0; c < 16 ; c ++ ) 
    {
        g.lvlStart.field[l][c][0].gObject = "wall";
        g.lvlStart.field[l][c][11].gObject = "wall";
    }
    for ( var r = 0; r < 12; r++ )
    {
        g.lvlStart.field[l][0][r].gObject = "wall";
        g.lvlStart.field[l][15][r].gObject = "wall";
    }//deko sehr Schick (border)
    
    g.lvlStart.field[l][14][1].gObject = "pushy";
    g.lvlStart.field[l][1][10].gObject = "house";

    for (var i = 1; i < 5; i++ ) 
    {
    	g.lvlStart.field[l][5][i].gObject = "wall";
    }
    g.lvlStart.field[l][5][5] = {gObject : "leverWall", objType : "closed"};
    g.lvlStart.field[l][6][5] = {gObject : "leverWall", objType : "closed"};
    for (var i = 6; i < 11; i++ ) 
    {
    	g.lvlStart.field[l][6][i].gObject = "wall";
    }
    g.lvlStart.field[l][10][6] = {gObject : "lever", active : false};
    for ( var i = 9; i < 12 ; i ++ ) 
    {
        g.lvlStart.field[l][i][5].gObject = "wall";
        g.lvlStart.field[l][i][7].gObject = "wall";
    //    g.lvlStart.field[l][8][i-4].gObject = "wall";
    }
    g.lvlStart.field[l][8][5].gObject = "wall";
    g.lvlStart.field[l][8][7].gObject = "wall";
    g.lvlStart.field[l][9][6] = {gObject : "hole", objType : "green"};



    g.lvlStart.field[l][1][1] = {gObject : "portal"};
    g.lvlStart.field[l][2][2] = {gObject : "ball", objType : "blue"};
    g.lvlStart.field[l][2][5] = {gObject : "colorBlur", objType : "green"};

    
    g.lvlStart.field[l][14][10] = {gObject : "portal"};
    g.lvlStart.field[l][4][1] = {gObject : "portal"};


    g.lvlStart.field[l][1][9] = {gObject : "leverWall", objType : "closed"};
    g.lvlStart.field[l][2][9] = {gObject : "leverWall", objType : "closed"};
    g.lvlStart.field[l][2][10] = {gObject : "leverWall", objType : "closed"};


    g.lvlStart.field[l][3][2] = {gObject : "leverWall", objType : "closed"};

    g.lvlStart.field[l][1][3].gObject = "wall";
    g.lvlStart.field[l][2][3].gObject = "wall";
    g.lvlStart.field[l][6][4].gObject = "wall";
    g.lvlStart.field[l][3][3].gObject = "wall";
    g.lvlStart.field[l][3][1].gObject = "wall";

	g.lvlStart.field[l][7][10] = {gObject : "hole", objType : "red"};
	g.lvlStart.field[l][13][5] = {gObject : "ball", objType : "red"};

	g.lvlStart.field[l][4][5].gObject = "box";
	g.lvlStart.field[l][3][5].gObject = "box";
	g.lvlStart.field[l][4][6].gObject = "box";
	g.lvlStart.field[l][1][5].gObject = "box";
	g.lvlStart.field[l][1][7].gObject = "box";
	g.lvlStart.field[l][2][8].gObject = "box";
	g.lvlStart.field[l][3][7].gObject = "box";

	g.lvlStart.field[l][7][2] = {gObject : "apple"};
	g.lvlStart.field[l][2][6] = {gObject : "apple"};

	g.lvlStart.field[l][9][2].gObject = "wall";
	g.lvlStart.field[l][10][3].gObject = "wall";

	g.lvlStart.field[l][13][1].gObject = "wall";




//************************************************************************************************************************************************************************************************************************
    var l = 9;
//************************************************************************************************************************************************************************************************************************
    for ( var c = 0; c < 16 ; c ++ ) 
    {
        g.lvlStart.field[l][c][0].gObject = "box";
        g.lvlStart.field[l][c][11].gObject = "box";
    }
    for ( var r = 0; r < 12; r++ )
    {
        g.lvlStart.field[l][0][r].gObject = "box";
        g.lvlStart.field[l][15][r].gObject = "box";
    }
    g.lvlStart.field[l][14][1].gObject = "pushy";
    g.lvlStart.field[l][14][7].gObject = "pushy";
    g.lvlStart.field[l][1][10].gObject = "house";
    for (var i = 1; i < 15; i++)
    {
        g.lvlStart.field[l][i][6].gObject = "wall";
    }
    g.lvlStart.field[l][13][8] = {gObject : "hole", objType : "blue"};
    g.lvlStart.field[l][3][9] = {gObject : "ball", objType : "blue"};

    g.lvlStart.field[l][1][9] = {gObject : "leverWall", objType : "closed"};
    g.lvlStart.field[l][2][9] = {gObject : "leverWall", objType : "closed"};
    g.lvlStart.field[l][2][10] = {gObject : "leverWall", objType : "closed"};

    g.lvlStart.field[l][1][3] = {gObject : "lever", active : false};
    g.lvlStart.field[l][10][4].gObject = "box";




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


    // 0. Level als Test für neue Objekte, standardmäßig ignoriert

    g.lvlStart.field[0][1][1].gObject = "wall";

    g.lvlStart.field[0][7][1] = {gObject : "ball", objType : "red"};
    g.lvlStart.field[0][7][4] = {gObject : "ball", objType : "blue"};
    g.lvlStart.field[0][7][7] = {gObject : "ball", objType : "green"};

    g.lvlStart.field[0][12][5] = {gObject : "hole", objType : "blue"};
    g.lvlStart.field[0][11][5] = {gObject : "hole", objType : "green"};
    g.lvlStart.field[0][10][5] = {gObject : "hole", objType : "red"};

    g.lvlStart.field[0][12][4] = {gObject : "colorBlur", objType : "blue"};
    g.lvlStart.field[0][11][4] = {gObject : "colorBlur", objType : "green"};
    g.lvlStart.field[0][10][4] = {gObject : "colorBlur", objType : "red"};

    g.lvlStart.field[0][5][5].gObject = "box";
    g.lvlStart.field[0][6][5].gObject = "forbiddenTrigger";

    g.lvlStart.field[0][3][4].gObject = "pushy";

    g.lvlStart.field[0][2][10].gObject = "house";

    g.lvlStart.field[0][13][5] = {gObject : "apple"};

    g.lvlStart.field[0][13][1] = {gObject : "portal"};
    g.lvlStart.field[0][1][10] = {gObject : "portal"};

    g.lvlStart.field[0][3][10] = {gObject : "lever", active : false};
    g.lvlStart.field[0][4][10] = {gObject : "leverWall", objType : "closed"};
    g.lvlStart.field[0][5][10] = {gObject : "leverWall", objType : "closed"};




    loadLevels();

    g.loadNextLevel( "field" ); //um test-Level 0 zu überspringen


    g.setupLevelSelections(); 
    

}
$( document ).ready( std() );
