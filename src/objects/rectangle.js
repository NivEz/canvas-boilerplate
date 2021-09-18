export default class Rectangle {
    constructor(position, width, height, color, velocity, canvas) {
        this.position = position
        this.width = width
        this.height = height
        this.color = color
        this.velocity = velocity
        this.canvas = canvas
    }

    update(deltaTime) {
        // this.position.x += this.velocity.x * (deltaTime / 1000)
        // this.position.y += this.velocity.y * (deltaTime / 1000)
    }

    draw(ctx) {
        ctx.fillStyle = this.color
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}