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
        g.updateLevelSelections();
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
                lever.objActive = false;
            }
            
            if ( lever.objActive )
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
        if ( startObject.game.gObjects.hasOwnProperty( "slime" ) )
        {
            startObject.game.gObjects.slime.forEach( function( element )
            {
                element.triggerd = false;
            });
        }
    },

    levelLoadAction : function( game, gGridId )
    {
        game.labels.level.innerHTML = "Level " + game.nextLevel.field;

        if ( game.gObjects.hasOwnProperty( "slime" ) )
        {
            game.gObjects.slime.forEach( function( element )
            {
                element.triggerd = false;
            });
        }
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
        if ( arg.requestingObject.objName == "pushy" )
        {
            success = gObject.move( arg.direction );
        }

        return success;
    },

    boxAction : function( cellData, gObject, arg )
    {
        var success = false;
        if ( arg.requestingObject.objName == "pushy" || arg.requestingObject.objName == "slime" )
        {
            success = gObject.move( arg.direction );
        }

        return success;
    },

    slimeAction : function( cellData, gObject, arg )
    {
        var success = false;

        if ( gObject.triggerd )
        {
            return false;
        }
        gObject.triggerd = true;

        if ( arg.requestingObject.objName == "pushy" || arg.requestingObject.objName == "slime" )
        {
            success = gObject.move( arg.direction );
        }
        if ( success )
        {
            arg.requestingObject = gObject;
            if ( arg.direction == "Up" || arg.direction == "Down" )
            {
                cellData[ ( gObject.oldColumn + 1 ) % 16 ][ gObject.oldRow ].forEach( function( element )
                {
                    element.action( cellData, arg );
                });
                arg.requestingObject = gObject;
                cellData[ ( gObject.oldColumn + 15 ) % 16 ][ gObject.oldRow ].forEach( function( element )
                {
                    element.action( cellData, arg );
                });
            }
            else
            {
                cellData[ gObject.oldColumn ][ ( gObject.oldRow + 1 ) % 12 ].forEach( function( element )
                {
                    element.action( cellData, arg );
                });
                arg.requestingObject = gObject;
                cellData[ gObject.oldColumn ][ ( gObject.oldRow + 11 ) % 12 ].forEach( function( element )
                {
                    element.action( cellData, arg );
                });
            }
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
        else if ( arg.requestingObject.objName != "ball" )
        {
            success = true;
        }

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
        gObject.objActive = true;
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

    waterAction : function( cellData, gObject, arg)
    {
        var success = false;
        if ( arg.requestingObject.objName == "box" && !gObject.objActive )
        {
        	success = true;
        	gObject.objActive = true;
        	gObject.objType = "open";
        	arg.removeObjects.push( arg.requestingObject );
        	
        }
        if( gObject.objActive )
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
            arg.requestingObject.objForbidden = true;
        }
        success = true;

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
            
        gObject.objType = "facing" + arg.direction;
        var success = gObject.move( arg.direction );

        if ( success && gObject.objForbidden && cellData[ gObject.column ][ gObject.row ].length == 0 )
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


