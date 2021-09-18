import Rectangle from "./objects/rectangle";

export default class MainLoop {
    constructor(width, height) {
        this.width = width
        this.height = height

        this.rectangle = new Rectangle({x: 100, y: 100}, 50, 50, "red", {x: 50, y: 100})
    }


    init(width, height) {
        /**
         * adding and modifying some initializations
         */
        this.width = width
        this.height = height
        // this.setupObjectsArr()
    }


    update(deltaTime) {
        this.rectangle.update(deltaTime)
    }


    draw(ctx) {
        this.rectangle.draw(ctx)
    }

    setupObjectsArr() {
        // for (let i = 0; i < ; i++) {

        // }
    }

}