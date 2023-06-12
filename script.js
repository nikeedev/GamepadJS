let gamepad;
let box = document.querySelector("#box");

window.addEventListener("gamepadconnected",
    () => {
        gamepad = navigator.getGamepads()[0];
        console.log("New controller! ", gamepad)
    }
);

/*
window.addEventListener(
    "gamepaddisconnected",
    function (e) {

    },
    false
);*/

const update = () => {
    gamepad = navigator.getGamepads()[0];

    if (gamepad !== null) {
        if (gamepad.buttons[0].pressed) {
            console.log("Button pressed. Changing color!")
            box.style.backgroundColor = "#ff0000";
        } else if (gamepad.buttons[5].pressed) {
            setTimeout(() => {
                console.log(gamepad);
            }, 1000);
        } else {
            box.style.backgroundColor = "#ffffff";
        }
    }

    window.requestAnimationFrame(update);
};

window.requestAnimationFrame(update)

/*
gamepad.vibrationActuator.playEffect("dual-rumble", {
    startDelay: 0,
    duration: 2000,
    weakMagnitude: .5,
    strongMagnitude: .5
});
*/
