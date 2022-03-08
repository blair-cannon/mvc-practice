class Model {
    constructor() {

    }
}

class View {
    constructor() {
        this.input = document.querySelector('input'); // call all elements here
        this.text = document.getElementById('text');
    }
    bindInput(fn) {                             // view can know which element changes the controller is listening for
    this.input.addEventListener('change', fn)   // add event listeners on needed elements
    }
}

class Controller {
    constructor(model, view) {                  // pass model and view into constructor bc it communicates/uses both
        this.m = model;
        this.v = view;
        this.v.bindInput(this.handleInput);     // allows handleInput to run when the bindInput from view (v) has had an event
    }
    handleInput(e) {
        text.textContent = e.target.value;      // target references the object that the event listener was placed on, the input box
    }
}

new Controller(new Model(), new View());        // new instances of each class...without the instances, the classes are just like blueprints