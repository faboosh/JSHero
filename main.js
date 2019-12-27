class GUIButton {
    constructor() {
        this.container = document.createElement('div');
        this.container.classList.add('button');
        document.querySelector('#buttons').append(this.container);
    }

    update(btnState) {
        btnState ? this.container.classList.add('pressed') : this.container.classList.remove('pressed');
    };

    addClass(className) {
        this.container.classList.add(className);
    }
}

let buttons = [];
let gamepads;
let guitar;

let btnMap = [
    {class: 'green', index: 0 },
    {class: 'red', index: 1 }, 
    {class: 'yellow', index: 3 },
    {class: 'blue', index: 2 },
    {class: 'orange', index: 4 },
    {class: 'strumDown', index: 13 },
    {class: 'strumUp', index: 12 }
]

window.addEventListener("gamepadconnected", (event) => {
    console.log("A gamepad connected:");
    console.log(event.gamepad);
    btnMap.forEach(btn => {
        let guiBtn = new GUIButton;
        guiBtn.addClass(btn.class);
        buttons.push(guiBtn);
    })
    gamepads = navigator.getGamepads();
    animate();
});

function animate() {
    gamepads = navigator.getGamepads();
    guitar = gamepads[0];

    guitar.buttons.forEach((button, i) => {
        //button.pressed ? console.log(i) : undefined;
    });

    btnMap.forEach((btn, i) => {
        buttons[i].update(guitar.buttons[btn.index].pressed)
    })

    window.requestAnimationFrame(animate);
};