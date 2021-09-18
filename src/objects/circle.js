export default class Circle {
    constructor(position, radius, color, velocity, canvas) {
        this.position = position
        this.radius = radius
        this.color = color
        this.velocity = velocity
        this.canvas = canvas
        this.originalRadius = this.radius
    }

    update(deltaTime) {
        // this.position.x += this.velocity.x * (deltaTime / 1000)
        // this.position.y += this.velocity.y * (deltaTime / 1000)
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, true)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.closePath()
    }
}