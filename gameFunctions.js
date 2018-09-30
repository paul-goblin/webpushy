'use strict';

var gameFunctions = {

    startGame : function()
    {
        g.changeScreens( "game" );
    },
    startGame2 : function()
    {
        g.changeScreens( "game2" );
    },

    undoMove : function()
    {
        g.undo( "field" );
    },
    undoMove2 : function()
    {
        g.undo( "field2" );
    },

    startNewGame : function()
    {
        g.nextLevel.field = 1;
        g.loadNextLevel( "field" );
        g.changeScreens( "game" );
    },//old

    toTwoPlayers : function()
    {
        document.querySelector( "#wrapper" ).classList.add( "design2" );
        g.changeScreens( "mainMenu2" );
    },
    toOnePlayer : function()
    {
        document.querySelector( "#wrapper" ).classList.remove( "design2" );
        g.changeScreens( "mainMenu" );
    },

    toMainMenu : function()
    {
        g.changeScreens( "mainMenu" );
    },
    toMainMenu2 : function()
    {
        g.changeScreens( "mainMenu2" );
    },

    toLevelSelect : function()
    {
        g.updateLevelSelections();
        g.changeScreens( "levelSelect" );
    },
    toLevelSelect2 : function()
    {
        g.updateLevelSelections();
        g.changeScreens( "levelSelect2" );
    },

    restartLevel : function()
    {
        g.nextLevel.field--;
        g.loadNextLevel ( "field" );
    },
    restartLevel2 : function()
    {
        g.nextLevel.field2--;
        g.loadNextLevel ( "field2" );
    },

    handleClickOnCell : function( gGridId, column, row )
    {
        console.log( "[" + column + "][" + row + "]");
    },

    afterAction : function( cellData, startObject, arg )
    {
        if ( startObject.game.gObjects[ startObject.gGridId ].hasOwnProperty("lever") && startObject.game.gObjects[ startObject.gGridId ].hasOwnProperty("leverWall") )
        {
            var lever = startObject.game.gObjects[ startObject.gGridId ].lever[ 0 ];
            var leverCellDataEntries = cellData[ lever.column ][ lever.row ].length;
            if ( leverCellDataEntries == 1 )
            {
                lever.objActive = false;
            }
            
            if ( lever.objActive )
            {
                startObject.game.gObjects[ startObject.gGridId ].leverWall.forEach( function( element )
                {
                    element.objType = "open";
                });
            }
            else
            {
                startObject.game.gObjects[ startObject.gGridId ].leverWall.forEach( function( element )
                {
                    if ( cellData[ element.column ][ element.row ].length == 1 )
                    {
                        element.objType = "closed";
                    }
                });
            }
        }
        if ( startObject.game.gObjects[ startObject.gGridId ].hasOwnProperty( "slime" ) )
        {
            startObject.game.gObjects[ startObject.gGridId ].slime.forEach( function( element )
            {
                element.triggerd = false;
            });
        }

        if ( window.gameFunctions.levelDone( startObject.game, startObject.gGridId ) )
        {
            var pushyOnHouse = false;
            var pushy2OnHouse = false;
            startObject.game.gObjects[ startObject.gGridId ].house.forEach( function( element )
            {
                element.objType = "";
                if ( cellData[ element.column ][ element.row ].length == 2 )
                {
                    pushyOnHouse = true;
                }
            });
            if ( startObject.gGridId = "field" )
            {
                if ( pushyOnHouse )
                {
                    arg.loadNextLevel = true;
                }
            }
            else if ( startObject.gGridId = "field2" )
            {
                startObject.game.gObjects[ startObject.gGridId ].house2.forEach( function( element )
                {
                    element.objType = "";
                    if ( cellData[ element.column ][ element.row ].length == 2 )
                    {
                        pushy2OnHouse = true;
                    }
                });
                if ( pushyOnHouse && pushy2OnHouse )
                {
                    rg.loadNextLevel = true;
                }
            }
        }
    },

    levelLoadAction : function( game, gGridId )
    {
        game.labels.level.innerHTML = "Level " + game.nextLevel.field;
        game.labels.level2.innerHTML = "Level " + game.nextLevel.field2;

        if ( game.gObjects[ gGridId ].hasOwnProperty( "slime" ) )
        {
            game.gObjects[ gGridId ].slime.forEach( function( element )
            {
                element.triggerd = false;
            });
        }

        if ( !window.gameFunctions.levelDone( game, gGridId ) )
        {
            game.gObjects[ gGridId ].house.forEach( function( element )
            {
                element.objType = "blocked";
            });
        }


    },

    levelDone : function( game, gGridId )
    {
            var objNameArray = [ "ball", "apple", ];
            var objExists = false;

            for ( var i = 0; i < objNameArray.length; i++ )
            {
                if ( game.gObjects[ gGridId ].hasOwnProperty( objNameArray[i] ) )
                {
                    if ( game.gObjects[ gGridId ][ objNameArray[i] ].length != 0  )
                    {
                        objExists = true;
                    }
                }
            }

            if ( game.gObjects[ gGridId ].hasOwnProperty( "boxField" ) )
            {
                for ( var i = 0; i < game.gObjects[ gGridId ].boxField.length; i++ )
                {
                    var element = game.gObjects[ gGridId ].boxField[ i ];
                    var boxFieldCellEntries = game.cellData[ gGridId ][ element.column ][ element.row ];
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
                return true;
            }

            return false;
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
            success = true;
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
            var portals = gObject.game.gObjects[ gObject.gGridId ].portal;
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

    pushy2Action : function( cellData, gObject, arg )
    {
        if ( arg.hasOwnProperty("requestingObject") )
        {
            return false;
        }
        if ( arg.hasOwnProperty("eventKey") )
        {
            switch ( arg.eventKey )
            {
                case "w":
                    arg.direction = "Up";
                    break;
                case "a":
                    arg.direction = "Left";
                    break;
                case "s":
                    arg.direction = "Down";
                    break;
                case "d":
                    arg.direction = "Right";
                    break;
            }

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
            success = true;
        }

        return success;
    },

    house2Action : function( cellData, gObject, arg )
    {
        var success = false;
        if ( arg.requestingObject.objName == "pushy2" )
        {            
            success = true;
        }

        return success;
    }

}


