class Model {           // this would hold data/states
    constructor() {

    }
}

class View {
    constructor() {
        this.input = document.querySelector('input'); // call all elements here
        this.text = document.getElementById('text');
    }
    newInput(fn) {                             // view can know which element changes the controller is listening for
    this.input.addEventListener('change', fn)   // add event listeners on needed elements
    }
}

class Controller {
    constructor() {                  // pass model and view into constructor bc it communicates/uses both
        this.m = new Model();
        this.v = new View();
        this.v.newInput(this.handleInput);     // allows handleInput to run when the newInput from view (v) has had an event
    }
    handleInput = (e) => {      // arrow function inherits this from controller
        console.log(this);
        this.v.text.textContent = e.target.value;      // target references the object that the event listener was placed on, the input box
    }
}

new Controller();        // new instances of each class...without the instances, the classes are just like blueprints