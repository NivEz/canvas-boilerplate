import MainLoop from "./mainLoop.js";


const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");


// screen size configuration
var isFullScreen = true; // toggle true or false
// if set to false modify your own sizes below
let WIDTH = 500
let HEIGHT = 500


// setting up and initializing the canvas
const mainLoop = new MainLoop(canvas.width, canvas.height)
selectCanvasSize(isFullScreen)


// Frames loop handler
let lastTime;
function animate(timestamp) {
    let deltaTime = timestamp - lastTime
    // deltaTime =  how long it took to finish one loop = amount of milliseconds per one frame.
    // 1000 / deltaTime = frames per second
    lastTime = timestamp

    ctx.clearRect(0, 0, WIDTH, HEIGHT) // clears the canvas in each frame refresh

    mainLoop.update(deltaTime)
    mainLoop.draw(ctx)

    requestAnimationFrame(animate)
}


// sets the canvas size - do not edit this function
function selectCanvasSize(isFullScreen) {
    if (isFullScreen) {
        WIDTH = innerWidth
        HEIGHT = innerHeight
    }
    canvas.width = WIDTH
    canvas.height = HEIGHT

    mainLoop.init(canvas.width, canvas.height)
}


// initialize the canvas when fully loaded
addEventListener('load', () => {
    lastTime = 0
    requestAnimationFrame(animate)
})


// another event listeners
addEventListener('resize', () => {
    selectCanvasSize(isFullScreen)
})


