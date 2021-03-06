'use strict';

var game = function()
{
    this.buttons = {};
    this.screens = {};
    this.inputs = {};
    this.labels = {};
    this.grids = {};
    this.activeGrids = [];
    this.styleCells = {};
    this.toolbars = {};
    this.tools = {};
    this.userSelections = {};
    this.levelSelections = {};
    this.activeLevelSelections = [];


    this.active = {};

    this.vars = {};

    this.cellData = {};
    this.cellDataUndo = {};

    this.gObjects = {};
    this.keyDownEffectedObjects = {};
    this.swipeEffectedObjects = [];

    this.lvlStart = {};

    this.nextLevel = {};
    this.maxLevel = {};

    this.shownScreen = "";



    return this;
}

game.prototype.setMaxLevel = function( gGridId, level )
{
    if ( typeof level == "number" )
    {
        this.maxLevel[ gGridId ] = level;
        this.saveVar( "maxLevel_" + gGridId, this.maxLevel[ gGridId ] );
        return "you're max level is " + level + " now";
    }
}

game.prototype.setCurrentLevel = function( gGridId, level )
{
    if ( typeof level == "number" )
    {
        this.nextLevel[ gGridId ] = level;
        this.saveVar( "currentLevel_" + gGridId, this.nextLevel[ gGridId ] );
        this.loadNextLevel( gGridId );
        return "you're current level is " + level + " now";
    }
}

game.prototype.setupButtons = function()
{
    var gButtonsCollection = document.querySelectorAll( '.gButton' );
    var gButtonId = "";

    for (var i = 0; i < gButtonsCollection.length; i++)
    {
        gButtonId = this.getClassValueFromClassName( gButtonsCollection[i], "ID" );
        this.buttons[ gButtonId ] = gButtonsCollection[i];
        (function( gButtonIdCopy ){
            gButtonsCollection[i].addEventListener( 'click', window.gameFunctions[ gButtonIdCopy ] ) ;
        })(gButtonId);
    }

    return this;
}

game.prototype.setupScreens = function()
{
    var gScreensCollection = document.querySelectorAll( '.gScreen' );
    var gScreenId = "";
    var gScreenType = "";
    var activeStartScreen = this.getVar( "activeStartScreen" );

    for (var i = 0; i < gScreensCollection.length; i++)
    {
        gScreenId = this.getClassValueFromClassName( gScreensCollection[i], "ID", i );
        gScreenType = this.getClassValueFromClassName( gScreensCollection[i], "TYPE" );
        this.screens[ gScreenId ] = gScreensCollection[i];
        if ( gScreenType == "start" )
        {
            if ( activeStartScreen != null )
            {
                if ( activeStartScreen != gScreenId )
                {
                    continue;
                }
            }
            var styleTarget = this.getClassValueFromClassName( gScreensCollection[i], "STYLETARGET", "body" );
            var targetClass = this.getClassValueFromClassName( gScreensCollection[i], "TARGETCLASS", "" );
            document.querySelector( styleTarget ).className = targetClass;

            gScreensCollection[i].classList.remove( "hide" );
            this.shownScreen = gScreenId;
            this.saveVar( "activeStartScreen", gScreenId );
        }
        else if ( gScreenType == "alternativeStart" )
        {
            if ( activeStartScreen == null )
            {
                continue;
            }
            else if ( activeStartScreen != gScreenId )
            {
                continue;
            }
            var styleTarget = this.getClassValueFromClassName( gScreensCollection[i], "STYLETARGET", "body" );
            var targetClass = this.getClassValueFromClassName( gScreensCollection[i], "TARGETCLASS", "" );
            document.querySelector( styleTarget ).className = targetClass;

            gScreensCollection[i].classList.remove( "hide" );
            this.shownScreen = gScreenId;
            this.saveVar( "activeStartScreen", gScreenId );
        }
    }

    return this;
}

game.prototype.setupInputs = function()
{
    var gInputsCollection = document.querySelectorAll( '.gInput' );
    var gInputId = "";

    for (var i = 0; i < gInputsCollection.length; i++)
    {
        gInputId = this.getClassValueFromClassName( gInputsCollection[i], "ID" );
        this.inputs[ gInputId ] = gInputsCollection[i];
    }

    return this;
}

game.prototype.setupLabels = function()
{
    var gLabelsCollection = document.querySelectorAll( '.gLabel' );
    var gLabelId = "";

    for (var i = 0; i < gLabelsCollection.length; i++)
    {
        gLabelId = this.getClassValueFromClassName( gLabelsCollection[i], "ID" );
        this.labels[ gLabelId ] = gLabelsCollection[i];
    }

    return this;
}

game.prototype.setupLevelSelections = function()
{
    var gLevelSelectionsCollection = document.querySelectorAll( '.gLevelSelection' );
    var gLevelSelectionId = "";
    var gGridId = "";

    for (var i = 0; i < gLevelSelectionsCollection.length; i++)
    {
        var levelList = document.createElement( 'ul' );
        var div = document.createElement( 'div' );
        div.classList.add( "selectedLevel" )
        levelList.classList.add("hide");

        gLevelSelectionId = this.getClassValueFromClassName( gLevelSelectionsCollection[i], "ID", i );
        gGridId = this.getClassValueFromClassName( gLevelSelectionsCollection[i], "GRID" );
        this.levelSelections[ gLevelSelectionId ] = gLevelSelectionsCollection[i];

        var gLevelSelection = this.levelSelections[ gLevelSelectionId ];

        gLevelSelection.appendChild( div );
        gLevelSelection.querySelector( ".selectedLevel" ).textContent = "Level " + ( this.nextLevel[ gGridId ] - 1 );

        for ( var level = 1; level <= this.maxLevel[ gGridId ]; level++ )
        {
            var levelListEntry = document.createElement( 'li' );

            levelListEntry.textContent = "Level " + level;

            (function( gLevelSelectionIdCopy, gGridIdCopy, thisCopy, levelListEntryCopy)
            {
                var levelCopy = level;
                levelListEntryCopy.addEventListener( 'click', function(){ return thisCopy.levelListEntryClick( gLevelSelectionIdCopy, gGridIdCopy, levelCopy ) } ) ;
            })(gLevelSelectionId, gGridId, this, levelListEntry);

            levelList.appendChild( levelListEntry );
        }
        gLevelSelection.appendChild( levelList );

        (function( gLevelSelectionIdCopy, gGridIdCopy, thisCopy )
        {
            gLevelSelection.addEventListener( 'click', function(){ return thisCopy.levelSelectionClick( gLevelSelectionIdCopy, gGridIdCopy ) } ) ;
        })(gLevelSelectionId, gGridId, this);

    }

    return this;
}

game.prototype.updateLevelSelections = function()
{
    for ( var gLevelSelectionId in this.levelSelections )
    {
        var levelList = document.createElement( 'ul' );
        var div = document.createElement( 'div' );
        div.classList.add( "selectedLevel" )
        levelList.classList.add("hide");
        var activeLevelSelectionsIndex = this.activeLevelSelections.indexOf( gLevelSelectionId );
        this.activeLevelSelections.splice( activeLevelSelectionsIndex, 1 );

        var gLevelSelection = this.levelSelections[ gLevelSelectionId ];
        var gGridId = this.getClassValueFromClassName( gLevelSelection, "GRID" )
        gLevelSelection.innerHTML = "";

        gLevelSelection.appendChild( div );
        gLevelSelection.querySelector( ".selectedLevel" ).textContent = "Level " + ( this.nextLevel[ gGridId ] - 1 );

        for ( var level = 1; level <= this.maxLevel[ gGridId ]; level++ )
        {
            var levelListEntry = document.createElement( 'li' );

            levelListEntry.textContent = "Level " + level;

            (function( gLevelSelectionIdCopy, gGridIdCopy, thisCopy, levelListEntryCopy)
            {
                var levelCopy = level;
                levelListEntryCopy.addEventListener( 'click', function(){ return thisCopy.levelListEntryClick( gLevelSelectionIdCopy, gGridIdCopy, levelCopy ) } ) ;
            })(gLevelSelectionId, gGridId, this, levelListEntry);

            levelList.appendChild( levelListEntry );
        }
        gLevelSelection.appendChild( levelList );
    }
}


game.prototype.levelSelectionClick = function( gLevelSelectionId, gGridId )
{
    var gLevelSelection = this.levelSelections[ gLevelSelectionId ];

    if ( this.activeLevelSelections.includes( gLevelSelectionId ) )
    {
        var activeLevelSelectionsIndex = this.activeLevelSelections.indexOf( gLevelSelectionId );
        this.activeLevelSelections.splice( activeLevelSelectionsIndex, 1 );

        gLevelSelection.querySelector( "ul" ).classList.add( "hide" );
    }
    else
    {
        this.activeLevelSelections.push( gLevelSelectionId );

        gLevelSelection.querySelector( "ul" ).classList.remove( "hide" );
    }

}

game.prototype.levelListEntryClick = function( gLevelSelectionId, gGridId, level )
{
    var gLevelSelection = this.levelSelections[ gLevelSelectionId ];

    this.nextLevel[ gGridId ] = level;
    this.loadNextLevel( gGridId );
    gLevelSelection.querySelector( ".selectedLevel" ).textContent = "Level " + level;

}

game.prototype.setupGrids = function()
{
    var gGridsCollection = document.querySelectorAll( '.gGrid' );
    var cellDiv = document.createElement( 'div' );
    cellDiv.classList.add( "cellSizeDiv" );
    var cellVis = document.createElement( 'div' );
    cellVis.classList.add( "cellStyleDiv" );
    cellDiv.appendChild( cellVis );

    var gGridId = "";
    var columns = 0;
    var rows = 0;
    var classToAdd = "";
    var numberOfCells = "";
    var thisCopy = this;
    var levels = 0;

    for (var i = 0; i < gGridsCollection.length; i++)
    {
        
        gGridId = this.getClassValueFromClassName( gGridsCollection[i], "ID" );
        this.grids[ gGridId ] = gGridsCollection[i];
        this.styleCells[ gGridId ] = [];
        this.cellData[ gGridId ] = [];
        this.cellDataUndo[ gGridId ] = [];
        this.gObjects[ gGridId ] = {};

        columns = this.getClassValueFromClassName( gGridsCollection[i], "COLUMNS" );
        rows = this.getClassValueFromClassName( gGridsCollection[i], "ROWS" );
        classToAdd = "c" + columns + "r" + rows;
        this.grids[ gGridId ].classList.add( classToAdd );

        if ( this.getClassValueFromClassName( gGridsCollection[i], "KEYDOWNLISTENER", "false" ) == "true" )
        {
            this.setupKeyDownListener( gGridId );
        }

        if ( this.getClassValueFromClassName( gGridsCollection[i], "SWIPELISTENER", "false" ) == "true" )
        {
            this.setupSwipeListener( gGridId );
        }

        levels =  this.getClassValueFromClassName( gGridsCollection[i], "LEVELS", 0 );
        if ( levels != 0 )
        {
            this.lvlStart[ gGridId ] = [];
            this.nextLevel[ gGridId ] = 1;
            this.maxLevel[ gGridId ] = 1;
            var savedLevel = this.getVar( "currentLevel_" + gGridId );
            var savedMaxLevel = this.getVar( "maxLevel_" + gGridId );
            if ( savedLevel != undefined )
            {
                this.nextLevel[ gGridId ] = savedLevel;
            }
            if ( savedMaxLevel != undefined )
            {
                this.maxLevel[ gGridId ] = savedMaxLevel;
            }

            for (var level = 0; level < levels; level++)
            {
                this.lvlStart[ gGridId ][ level ] = [];
                for (var column = 0; column < columns; column++)
                {
                    this.lvlStart[ gGridId ][ level ][ column ] = [];
                    for (var row = 0; row < rows; row++)
                    {
                        this.lvlStart[ gGridId ][ level ][ column ][ row ] = {};
                    }
                }
            }
        }

        for (var row = 0; row < rows; row++)
        {
            for (var column = 0; column < columns; column++)
            {
                if ( row == 0 )
                {
                    this.styleCells[ gGridId ][ column ] = [];
                    this.cellData[ gGridId ][ column ] = [];
                }

                (function(gGridIdCopy){
                    var columnCopy = column;
                    var rowCopy = row;
                    var sizeDiv = gGridsCollection[i].appendChild( cellDiv.cloneNode( true ) )
                    sizeDiv.addEventListener( 'click', function(){ return window.gameFunctions.handleClickOnCell(  gGridIdCopy, columnCopy, rowCopy, this.querySelector( ".cellStyleDiv" ) ) } );
                    thisCopy.styleCells[ gGridId ][ column ][ row ] = sizeDiv.querySelector( ".cellStyleDiv" );
                    thisCopy.cellData[ gGridId ][ column ][ row ] = [];
                })(gGridId);
            }
        }
    }

    return this;
}

game.prototype.setupSwipeListener = function( gGridId )
{
    var thisCopy = this;
    var grid = this.grids[ gGridId ];
    grid.addEventListener( 'touchstart', function( event ){ return thisCopy.touchStartHandler( event, gGridId ) } );
    grid.addEventListener( 'touchend', function( event ){ return thisCopy.touchEndHandler( event, gGridId ) } );
}

game.prototype.touchStartHandler = function( event, gGridId )
{
    this.vars.touchstartX = event.changedTouches[0].screenX;
    this.vars.touchstartY = event.changedTouches[0].screenY;
}

game.prototype.touchEndHandler = function( event, gGridId )
{
    this.vars.touchendX = event.changedTouches[0].screenX;
    this.vars.touchendY = event.changedTouches[0].screenY;
    this.evalSwipe( gGridId );
}

game.prototype.evalSwipe = function( gGridId )
{
    if ( !this.activeGrids.includes( gGridId ) )
    {
        return false;
    }
    var swipeDirection = "";
    var swipeRightComponent = this.vars.touchendX - this.vars.touchstartX;
    var swipeUpComponent = this.vars.touchstartY - this.vars.touchendY;
    if ( Math.abs( swipeUpComponent ) > Math.abs( swipeRightComponent ) )
    {
        if ( swipeUpComponent > 20 )
        {
            swipeDirection = "Up";
        }
        else if ( swipeUpComponent < -20 )
        {
            swipeDirection = "Down";
        }
    }
    else
    {
        if ( swipeRightComponent > 20 )
        {
            swipeDirection = "Right";
        }
        else if ( swipeRightComponent < -20 )
        {
            swipeDirection = "Left";
        }
    }

    if ( swipeDirection != "" )
    {
        for ( var i = 0; i < this.swipeEffectedObjects.length; i++ )
        {
            var objName = this.swipeEffectedObjects[i];
            if ( this.gObjects[ gGridId ].hasOwnProperty( objName ) )
            {
                for ( var j = 0; j < this.gObjects[ gGridId ][ objName ].length; j++ )
                {
                    var obj = this.gObjects[ gGridId ][ objName ][j]
                    obj.action( this.cellData[ gGridId ], {swipeDirection: swipeDirection} );

                    if ( typeof this.gObjects[ gGridId ][ objName ] == "undefined" )
                    {
                        return;
                    }
                }
            }
        }
    }
}

game.prototype.setupKeyDownListener = function( gGridId )
{
    var thisCopy = this;
    document.addEventListener( 'keydown', function( event ){ return thisCopy.keyDownHandler( event, gGridId ) } );
}

game.prototype.keyDownHandler = function( event, gGridId )
{
    if ( !this.activeGrids.includes( gGridId ) )
    {
        return false;
    }
    if ( this.keyDownEffectedObjects.hasOwnProperty( event.key ) )
    {
        for ( var i = 0; i < this.keyDownEffectedObjects[ event.key ].length; i++ )
        {
            var objName = this.keyDownEffectedObjects[ event.key ][i];
            if ( this.gObjects[ gGridId ].hasOwnProperty( objName ) )
            {
                for ( var j = 0; j < this.gObjects[ gGridId ][ objName ].length; j++ )
                {
                    var obj = this.gObjects[ gGridId ][ objName ][j];
                    obj.action( this.cellData[ gGridId ], {eventKey: event.key} );

                    if ( typeof this.gObjects[ gGridId ][ objName ] == "undefined" )
                    {
                        return;
                    }
                }
            }
        }
    }
}

game.prototype.undo = function( gGridId )
{
    if ( this.cellDataUndo[ gGridId ].length != 0 )
    {
        this.loadIntoCellData( gGridId, this.cellDataUndo[ gGridId ].pop() );
        this.renderGrid( gGridId );
    }
}

game.prototype.setupTools = function()
{
    var gToolbarsCollection = document.querySelectorAll( '.gToolbar' );

    var gToolbarId = "";
    var toolbarTools;
    var gToolId = "";
    var thisCopy = this;

    for (var i = 0; i < gToolbarsCollection.length; i++)
    {
        gToolbarId = this.getClassValueFromClassName( gToolbarsCollection[i], "ID" );
        this.toolbars[ gToolbarId ] = gToolbarsCollection[i];
        this.tools[ gToolbarId ] = {};
        this.active[ gToolbarId ] = {};


        toolbarTools = gToolbarsCollection[i].querySelectorAll( '.gTool' );

        for (var j = 0; j < toolbarTools.length; j++)
        {
            gToolId = this.getClassValueFromClassName( toolbarTools[j], "ID" );
            this.tools[ gToolbarId ][ gToolId ] = toolbarTools[j];
            if ( this.getClassValueFromClassName( toolbarTools[j], "DEFAULT" ) == "active")
            {
                this.active[ gToolbarId ][ gToolId ] = true;
                toolbarTools[j].classList.add( "active" );
            }
            else
            {
                this.active[ gToolbarId ][ gToolId ] = false;
            }

            (function(){
                var gToolbarIdCopy = gToolbarId;
                var gToolIdCopy = gToolId; 
                toolbarTools[j].addEventListener( 'click', function(){ thisCopy.toolOnclick( gToolbarIdCopy, gToolIdCopy, this)} );
            })();
        }
    }

    return this;
}

game.prototype.changeScreens = function( newScreen )
{
    this.screens[ this.shownScreen ].classList.add( "hide" );
    this.screens[ newScreen ].classList.remove( "hide" );
    this.shownScreen = newScreen;
    this.activeGrids = [];
    var gScreenType = this.getClassValueFromClassName( this.screens[ newScreen ], "TYPE" );
    if ( gScreenType == "start" || gScreenType == "alternativeStart" )
    {
        this.saveVar( "activeStartScreen", newScreen );
        var styleTarget = this.getClassValueFromClassName( this.screens[ newScreen ], "STYLETARGET", "body" );
        var targetClass = this.getClassValueFromClassName( this.screens[ newScreen ], "TARGETCLASS", "" );
        document.querySelector( styleTarget ).className = targetClass;
    }
    for ( var gGridId in this.grids )
    {
        if( this.grids[ gGridId ].offsetParent != null )
        {
            this.activeGrids.push( gGridId );
        }
    }
}






game.prototype.handle1ToolActive = function( gToolbarId, gToolId, gTool, activeTools, mode )
{
    if ( this.active[ gToolbarId ][ gToolId ] & mode == "max" )
    {
        this.active[ gToolbarId ][ gToolId ] = false;
        gTool.classList.remove( "active" );
    }
    else if ( activeTools == 0 )
    {
        this.active[ gToolbarId ][ gToolId ] = true;
        gTool.classList.add( "active" );
    }
    else
    {
        for ( var gToolIdProp in this.active[ gToolbarId ] )
        {
            if ( gToolIdProp == gToolId )
            {
                this.active[ gToolbarId ][ gToolIdProp ] = true;
                this.tools[ gToolbarId ][ gToolIdProp ].classList.add( "active" );
            }
            else
            {
                this.active[ gToolbarId ][ gToolIdProp ] = false;
                this.tools[ gToolbarId ][ gToolIdProp ].classList.remove( "active" );
            }
        }
    }
}

game.prototype.handleAllowMultipleActiveTools = function( gToolbarId, gToolId, gTool )
{
    if ( this.active[ gToolbarId ][ gToolId ] == true )
    {
        this.active[ gToolbarId ][ gToolId ] = false;
        gTool.classList.remove( "active" );
    }
    else
    {
        this.active[ gToolbarId ][ gToolId ] = true;
        gTool.classList.add( "active" );
    }
}

game.prototype.toolOnclick = function( gToolbarId, gToolId, gTool )
{
    var mode = this.getClassValueFromClassName( this.toolbars[ gToolbarId ], "MODE", "max1ToolActive" );
    var activeTools = 0;
    for ( var gToolIdProp in this.active[ gToolbarId ] )
    {
        if ( this.active[ gToolbarId ][ gToolIdProp ] )
        {
            activeTools++;
        }
    }
    switch ( mode )
    {
        case "max1ToolActive":
            this.handle1ToolActive( gToolbarId, gToolId, gTool, activeTools, "max" );
            break;
        case "allowMultipleActiveTools":
            this.handleAllowMultipleActiveTools( gToolbarId, gToolId, gTool )
            break;
        case "always1ToolActive":
            this.handle1ToolActive( gToolbarId, gToolId, gTool, activeTools, "always" )
            break;
    }
}

game.prototype.loadNextLevel = function( gGridId )
{
    this.loadIntoCellData( gGridId, this.lvlStart[ gGridId ][ this.nextLevel[ gGridId ] ] )

    if ( typeof window.gameFunctions.levelLoadAction === "function" )
    { 
        window.gameFunctions.levelLoadAction( this, gGridId );
    }

    this.saveVar( "currentLevel_" + gGridId, this.nextLevel[ gGridId ] );
    if ( this.nextLevel[ gGridId ] > this.maxLevel[ gGridId ] )
    {
        this.maxLevel[ gGridId ] = this.nextLevel[ gGridId ];
        this.saveVar( "maxLevel_" + gGridId, this.maxLevel[ gGridId ] );
    }

    this.renderGrid( gGridId );
    this.cellDataUndo[ gGridId ] = [];
    this.nextLevel[ gGridId ]++;
}

game.prototype.loadIntoCellData = function( gGridId, simpleCellData )
{
    this.gObjects[ gGridId ] = {};
    for ( var column = 0; column < this.styleCells[ gGridId ].length; column++ )
    {
        for ( var row = 0; row < this.styleCells[ gGridId ][ column ].length; row++ )
        {
            this.cellData[ gGridId ][ column ][ row ] = [];
            var lvlCell = simpleCellData[ column ][ row ];

            if ( lvlCell.hasOwnProperty("objName") )
            {
                if ( !this.gObjects[ gGridId ].hasOwnProperty( lvlCell.objName ) )
                {
                    this.gObjects[ gGridId ][ lvlCell.objName ] = [];
                }

                var instance = new this.gObject( lvlCell.objName, column, row, this.renderGrid, gGridId, this );

                for ( var userProp in lvlCell )
                {
                    if ( userProp != "objName" && userProp != "objName2" && userProp.substring( 0, 3 ) == "obj" && userProp.slice( -1 ) != "2" )
                    {
                        instance[ userProp ] = lvlCell[ userProp ];
                    }
                }

                this.gObjects[ gGridId ][ lvlCell.objName ].push( instance );
                this.cellData[ gGridId ][ column ][ row ].push( instance );
            }

            if ( lvlCell.hasOwnProperty("objName2") )
            {
                if ( !this.gObjects[ gGridId ].hasOwnProperty( lvlCell.objName2 ) )
                {
                    this.gObjects[ gGridId ][ lvlCell.objName2 ] = [];
                }

                var instance = new this.gObject( lvlCell.objName2, column, row, this.renderGrid, gGridId, this );

                for ( var userProp in lvlCell )
                {
                    if ( userProp != "objName" && userProp != "objName2" && userProp.substring( 0, 3 ) == "obj" && userProp.slice( -1 ) == "2" )
                    {
                        instance[ userProp.slice( 0, -1 ) ] = lvlCell[ userProp ];
                    }
                }

                this.gObjects[ gGridId ][ lvlCell.objName2 ].push( instance );
                this.cellData[ gGridId ][ column ][ row ].push( instance );
            }
        }
    }
}

game.prototype.getSimpleCellData = function( gGridId )
{
    var simpleCellData = [];

    for ( var column = 0; column < this.styleCells[ gGridId ].length; column++ )
    {
        simpleCellData[ column ] = [];

        for ( var row = 0; row < this.styleCells[ gGridId ][ column ].length; row++ )
        {
            simpleCellData[ column ][ row ] = {};
            var cellObjs = this.cellData[ gGridId ][ column ][ row ];

            for ( var objI = 0; objI < cellObjs.length; objI++ )
            {
                var propEnding = "";
                if ( objI > 0 )
                {
                    propEnding = objI + 1;
                }
                for ( var prop in cellObjs[ objI ] )
                {
                    if ( prop.substring( 0, 3 ) == "obj" )
                    {
                        simpleCellData[ column ][ row ][ prop + propEnding ] = cellObjs[ objI ][ prop ];
                    }
                }
            }
        }
    }
    return simpleCellData;
        
}



game.prototype.gObject = function( objName, column, row, render, gGridId, game )
{
    this.game = game;
    this.render = render;
    this.gGridId = gGridId;
    this.objName = objName || "";
    this.objType = "";
    this.classToAdd = "";
    this.column = column;
    this.row = row;
    this.oldColumn = column;
    this.oldRow = row;
    this.cellData = [];
    this.arg = {};
    this.cellDataIndex = 0;
    this.gObjectsIndex = 0;
    this.firstAction = false;

}

game.prototype.gObject.prototype.action = function( cellData, arg )
{
    if ( !this.game.activeGrids.includes( this.gGridId ) )
    {
        return false;
    }
    var success = true;
    this.cellData = cellData;
    this.arg = arg;

    if ( !this.arg.hasOwnProperty("depth") )
    {
        this.arg.depth = 0;
        this.firstAction = true;
        this.game.cellDataUndo[ this.gGridId ].push( this.game.getSimpleCellData( this.gGridId ) );
    }
    if ( !this.arg.hasOwnProperty("removeObjects") )
    {
        this.arg.removeObjects = [];
    }
    if ( !this.arg.hasOwnProperty("addObjects") )
    {
        this.arg.addObjects = [];
    }
    if ( !this.arg.hasOwnProperty("positionObjects") )
    {
        this.arg.positionObjects = [];
    }
    if ( !this.arg.hasOwnProperty("loadNextLevel") )
    {
        this.arg.loadNextLevel = false;
    }

    this.cellDataIndex = this.cellData[ this.column ][ this.row ].indexOf( this );
    this.gObjectsIndex = this.game.gObjects[ this.gGridId ][ this.objName ].indexOf( this );

    if ( typeof window.gameFunctions[ this.objName + "Action" ] === "function" )
    { 
        success = window.gameFunctions[ this.objName + "Action" ]( cellData, this, this.arg );
    }

    if ( this.column != this.oldColumn || this.row != this.oldRow )
    {
        this.cellData[ this.oldColumn ][ this.oldRow ].splice( this.cellDataIndex, 1 );
        this.cellData[ this.column ][ this.row ].push( this );

        this.cellDataIndex = this.cellData[ this.column ][ this.row ].indexOf( this );
        this.gObjectsIndex = this.game.gObjects[ this.gGridId ][ this.objName ].indexOf( this );

        this.render.call( this.game, this.gGridId );
    }

    if ( this.firstAction )
    {
        this.afterActions();
    }

    this.oldColumn = this.column;
    this.oldRow = this.row;

    return success;
}

game.prototype.gObject.prototype.afterActions = function()
{
    if ( typeof window.gameFunctions.afterAction == "function" )
    {
        window.gameFunctions.afterAction( this.game.cellData[ this.gGridId ], this, this.arg );
    }
    
    for ( var i = 0; i < this.arg.removeObjects.length; i++ )
    {
        var removeObject = this.arg.removeObjects[i];
        this.cellData[ removeObject.column ][ removeObject.row ].splice( removeObject.cellDataIndex, 1 );;
        this.game.gObjects[ this.gGridId ][ removeObject.objName ].splice( removeObject.gObjectsIndex, 1 );;
    }
    for ( var i = 0; i < this.arg.addObjects.length; i++ )
    {
        var addObjectProps = this.arg.addObjects[i];

        if ( !this.game.gObjects[ this.gGridId ].hasOwnProperty( addObjectProps.gObject ) )
        {
            this.game.gObjects[ this.gGridId ][ addObjectProps.gObject ] = [];
        }

        var instance = new this.game.gObject( addObjectProps.gObject, addObjectProps.column, addObjectProps.row, this.game.renderGrid, this.gGridId, this.game );

        for ( var userProp in addObjectProps )
        {
            if ( userProp != "gObject" || userProp != "column" || userProp != "row" )
            {
                instance[ userProp ] = addObjectProps[ userProp ];
            }
        }

        this.game.gObjects[ this.gGridId ][ addObjectProps.gObject ].push( instance );
        this.game.cellData[ this.gGridId ][ addObjectProps.column ][ addObjectProps.row ].push( instance );

    }
    for ( var i = 0; i < this.arg.positionObjects.length; i++ )
    {
        var positionObjectProps = this.arg.positionObjects[i];

        this.game.cellData[ this.gGridId ][ positionObjectProps.gObject.column ][ positionObjectProps.gObject.row ].splice( positionObjectProps.gObject.cellDataIndex, 1 );

        positionObjectProps.gObject.column = positionObjectProps.column;
        positionObjectProps.gObject.row = positionObjectProps.row;

        this.game.cellData[ this.gGridId ][ positionObjectProps.column ][ positionObjectProps.row ].push( positionObjectProps.gObject );

    }

    if ( this.arg.loadNextLevel )
    {
        this.game.loadNextLevel.call( this.game, this.gGridId );
    }

    this.render.call( this.game, this.gGridId );

    this.firstAction = false;
}

game.prototype.gObject.prototype.move = function( direction )
{
    var mod = function(n, m)
    {
        return ((n % m) + m) % m;
    }

    var success = true;

    this.arg.requestingObject = this;
    this.arg.depth++;

    var row = this.row;
    var column = this.column;

    switch ( direction )
    {
        case "Up":
            row = mod( this.row - 1, this.cellData[ column ].length );
            break;
        case "Down":
            row = mod( this.row + 1, this.cellData[ column ].length );
            break;
        case "Left":
            column = mod( this.column - 1, this.cellData.length);
            break;
        case "Right":
            column = mod( this.column + 1, this.cellData.length);
            break;
    }

    for ( var objectIndex = 0; objectIndex < this.cellData[ column ][ row ].length; objectIndex++ )
    {
        success = this.cellData[ column ][ row ][ objectIndex ].action( this.cellData, this.arg );
        if ( !success )
        {
            return false;
        }
    }

    this.row = row;
    this.column = column;

    return true;

}

game.prototype.gObject.prototype.classListAdd = function( classToAdd )
{
    this.classToAdd = classToAdd;
    this.render.call( this.game, this.gGridId );
}





game.prototype.saveVar = function( variable, value )
{
    localStorage.setItem( variable, value );
}

game.prototype.getVar = function( variable )
{
    var value = localStorage.getItem( variable );
    return value;
}

game.prototype.getClassValueFromClassName = function( target, classType = "ID", elseReturn )
{
    var classNameSplit = target.className.split( " " );

    for (var i = 0; i < classNameSplit.length; i++)
    {
        if ( classNameSplit[i].includes( classType ) )
        {
            return classNameSplit[i].slice( classType.length );
        }
    }

    return elseReturn;
}

game.prototype.renderGrid = function( gGridId )
{
    for (var column = 0; column < this.cellData[ gGridId ].length; column++)
    {
        for (var row = 0; row < this.cellData[ gGridId ][ column ].length; row++)
        {
            var className = "cellStyleDiv ";
            this.cellData[ gGridId ][ column ][ row ].forEach( function( element )
            {
                className+= element.objName + " ";
                className+= element.classToAdd + " ";
                className+= element.objType + " ";
            });
            this.styleCells[ gGridId ][ column ][ row ].className = className;
        }
    }
}