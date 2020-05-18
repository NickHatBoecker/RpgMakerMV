//=============================================================================
// NHB - Mouse Position (v1.0.0)
//=============================================================================
/*:
    @author NickHatBoecker <kontakt@nick-hat-boecker.de>
    @plugindesc Get the current mouse position

    <NHB MousePosition>
    @help
    ===========================================================================
    Introduction
    ===========================================================================
    With this script you can get the current mouse position
    via Variable or Command.

    ===========================================================================
    How to use
    ===========================================================================
    Get X coordinate: $gameScreen.getMousePosition().x
    Get Y coordinate: $gameScreen.getMousePosition().y

    Get X tile:       $gameScreen.getMouseTile().x
    Get Y tile:       $gameScreen.getMouseTile().y

    ===========================================================================
    Settings
    ===========================================================================

    @param Tile size
    @desc The size of your tiles in order to calculate the current tile
          of the mouse's position.
    @default 48

//=============================================================================
// NHB - Mouse Position
//=============================================================================
*/

var NHB = NHB || {};
NHB.MousePosition = {};

"use strict";

(function ($) {
    //-------------------------------------------------------------------------
    // Setup
    //

    const parameters = $plugins.filter(function(p) {return p.description.contains('<NHB MousePosition>');})[0].parameters;
    const nhbParameters = {
        tileSize: Number(parameters['Tile size']),
    };

    let nhbMousePosition = { x: 0, y: 0 };

    //-----------------------------------------------------------------------------
    // Plugin functions
    //

    Game_Screen.prototype.getMousePosition = function () {
        return nhbMousePosition;
    }

    Game_Screen.prototype.getMouseTile = function () {
        return {
            x: Math.round(nhbMousePosition.x / nhbParameters.tileSize),
            y: Math.round(nhbMousePosition.y / nhbParameters.tileSize),
        };
    }

    //-------------------------------------------------------------------------
    // Update mouse position
    //

    document.addEventListener('mousemove', function (e) {
        nhbMousePosition.x = e.pageX
        nhbMousePosition.y = e.pageY
    });

})(NHB.MousePosition);
