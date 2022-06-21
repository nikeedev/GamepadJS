
const log = (...any) => {
    console.log(...any)
}


var gamepads = {};

var gamepad;
var gamepadPos;

window.addEventListener(
    "gamepadconnected",
    function (e) {
        gamepads = navigator.getGamepads();
        gamepadPos = e.gamepad.index;
        gamepad = navigator.getGamepads()[e.gamepad.index];
    },
    false
);

/*
window.addEventListener(
    "gamepaddisconnected",
    function (e) {
        gamepadHandler(e, false);
    },
    false
);*/



function updateControllers() {


    log(gamepad.buttons[0].pressed)

    gamepads = navigator.getGamepads();
    gamepad = navigator.getGamepads()[gamepadPos];

    log(gamepads)
    
    log(gamepad.buttons[0].pressed)

}


function playVibration() {

    gamepad.vibrationActuator.playEffect("dual-rumble", {
        startDelay: 0,
        duration: 2000,
        weakMagnitude: .5,
        strongMagnitude: .5
    });

}



setInterval(function() {
    updateControllers()
    if (gamepad.buttons[0].pressed) {
        log("Button pressed. Viiibbbbrrraaaatttinnnggggg.......")
        playVibration();
    }

}, 1);

    

