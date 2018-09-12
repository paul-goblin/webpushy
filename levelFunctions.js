'use strict';

var gameFunctions = {

    startGame : function()
    {
        g.changeScreens( "game" );
    },

    undoMove : function()
    {
        g.undo( "field" );
    },

    startNewGame : function()
    {
        g.nextLevel.field = 1;
        g.loadNextLevel( "field" );
        g.changeScreens( "game" );
    },

    toMainMenu : function()
    {
        g.changeScreens( "mainMenu" );
    },

    toLevelSelect : function()
    {
        g.changeScreens( "levelSelect" );
    },

    restartLevel : function()
    {
        g.nextLevel.field--;
        g.loadNextLevel ( "field" );
    },

    handleClickOnCell : function( gGridId, column, row )
    {
        console.log( "[" + column + "][" + row + "]");
    },

    afterAction : function( cellData, startObject, arg )
    {
        if ( startObject.game.gObjects.hasOwnProperty("lever") && startObject.game.gObjects.hasOwnProperty("leverWall") )
        {
            var lever = startObject.game.gObjects.lever[ 0 ];
            var leverCellDataEntries = cellData[ lever.column ][ lever.row ].length;
            if ( leverCellDataEntries == 1 )
            {
                lever.active = false;
            }
            
            if ( lever.active )
            {
                startObject.game.gObjects.leverWall.forEach( function( element )
                {
                    element.objType = "open";
                });
            }
            else
            {
                startObject.game.gObjects.leverWall.forEach( function( element )
                {
                    if ( cellData[ element.column ][ element.row ].length == 1 )
                    {
                        element.objType = "closed";
                    }
                });
            }
        }
        
    },

    levelLoadAction : function( game, gGridId )
    {
        game.labels.level.innerHTML = "Level " + game.nextLevel.field;
    },

    wallAction : function()
    {
        return false;
    },

    forbiddenAction : function( cellData, gObject, arg )
    {
        var success = false;
        if ( arg.requestingObject.objName == "pushy" )
        {
            success = true;
        }
        return success;
    },

    oneWayAction : function( cellData, gObject, arg )
    {
        var success = false;

        if ( gObject.objType == arg.direction.toLowerCase() )
        {
            success = true;
        }
        
        return success;
    },

    ballAction : function( cellData, gObject, arg )
    {
        var success = false;
        if ( arg.depth == 1 )
        {
            success = gObject.move( arg.direction );
        }

        return success;
    },

    boxAction : function( cellData, gObject, arg )
    {
        var success = false;
        if ( arg.depth == 1 )
        {
            success = gObject.move( arg.direction );
        }

        return success;
    },

    holeAction : function( cellData, gObject, arg )
    {
        var success = false;

        if ( arg.requestingObject.objName == "ball" && arg.requestingObject.objType == gObject.objType )
        {
            arg.removeObjects.push( arg.requestingObject );
        }
        success = true;

        return success;
    },

    colorBlurAction : function( cellData, gObject, arg )
    {
        var success = false;

        if ( arg.requestingObject.objName == "ball" )
        {
            arg.requestingObject.objType = gObject.objType;
            arg.removeObjects.push( gObject );
        }
        success = true;

        return success;
    },

    appleAction : function( cellData, gObject, arg )
    {
        var success = false;

        if ( arg.requestingObject.objName == "pushy" )
        {
            arg.removeObjects.push( gObject );
            success = true;
        }

        return success;
    },

    portalAction : function( cellData, gObject, arg )
    {
        var success = false;

        if ( arg.requestingObject.objName == "pushy" )
        {
            var portals = gObject.game.gObjects.portal;
            var connectedPortal = portals[ (gObject.gObjectsIndex + 1) %  portals.length ];
            arg.positionObjects.push( {gObject : arg.requestingObject, column: connectedPortal.column, row: connectedPortal.row} );

            success = true;

        }

        return success;
    },

    leverAction : function( cellData, gObject, arg)
    {
        gObject.active = true;
        return true;
    },

    leverWallAction : function( cellData, gObject, arg)
    {
        var success = false;

        if ( gObject.objType == "open" )
        {
            success = true;
        }

        return success;
    },

    forbiddenTriggerAction : function( cellData, gObject, arg )
    {
        var success = false;

        if ( arg.requestingObject.objName == "pushy" )
        {
            success = true;
            arg.removeObjects.push( gObject );
            arg.addObjects.push( {gObject : "forbidden", column: gObject.column, row: gObject.row} );
            arg.requestingObject.objType = "forbiddenPushy";
        }

        return success;
    },

    pushyAction : function( cellData, gObject, arg )
    {
        if ( arg.hasOwnProperty("requestingObject") )
        {
            return false;
        }
        if ( arg.hasOwnProperty("eventKey") )
        {
            arg.direction = arg.eventKey.slice( 5 );
        }
        else if ( arg.hasOwnProperty("swipeDirection") )
        {
            arg.direction = arg.swipeDirection;
        }
            
        gObject.classListAdd( "facing" + arg.direction );
        var success = gObject.move( arg.direction );

        if ( success && gObject.objType == "forbiddenPushy" && cellData[ gObject.column ][ gObject.row ].length == 0 )
        {
            arg.addObjects.push( {gObject : "forbidden", column: gObject.column, row: gObject.row} );
        }

        return success;
    },

    houseAction : function( cellData, gObject, arg )
    {
        var success = false;
        if ( arg.requestingObject.objName == "pushy" )
        {
            var objNameArray = [ "ball", "apple", ];
            var objExists = false;

            for ( var i = 0; i < objNameArray.length; i++ )
            {
                if ( gObject.game.gObjects.hasOwnProperty( objNameArray[i] ) )
                {
                    if ( gObject.game.gObjects[ objNameArray[i] ].length != 0  )
                    {
                        objExists = true;
                    }
                }
            }

            if ( gObject.game.gObjects.hasOwnProperty( "boxField" ) )
            {
                for ( var i = 0; i < gObject.game.gObjects.boxField.length; i++ )
                {
                    var element = gObject.game.gObjects.boxField[ i ];
                    var boxFieldCellEntries = cellData[ element.column ][ element.row ];
                    if ( boxFieldCellEntries.length == 1 )
                    {
                        objExists = true;
                    }
                    else
                    {
                        for ( var objI = 0; objI < boxFieldCellEntries.length; objI++ )
                        {
                            if ( boxFieldCellEntries[ objI ].objName != "box" && boxFieldCellEntries[ objI ].objName != "boxField" )
                            {
                                objExists = true;
                            }
                        }
                    }
                }
            }


            if ( !objExists )
            {
                arg.loadNextLevel = true;
            }
            success = true;
        }

        return success;
    }

}


