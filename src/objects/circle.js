export default class Circle {
    constructor(position, radius, color, canvas, physics) {
        /**
         * Basic circle object with physics rules attached to it.
         * To apply the physics rules you should pass a physics object as
         * an argument.
         * @name physics {
         *     velocity: {x: float, y: float},
         *     gravity: float - positive will accelerate down and negative up.
         *     elasticity: float - 0 will set no bounce (loses all velocity), 1 won't gain or lose any velocity and above 1 will gain velocity.
         *     friction: float - "air friction" of constant x velocity lose - 0 will set no friction, 1 will set maximum amount of friction,
         *     recommended not over 0.05.
         * }
         */
        this.position = position
        this.radius = radius
        this.color = color
        this.canvas = canvas
        this.physics = physics
        this.setPhysics()

        this.originalRadius = radius
    }


    setPhysics() {
        if (!this.physics) {
            this.physics = {}
            this.physics.velocity = {x: 0, y: 0}
            this.physics.gravity = 0
            this.physics.elasticity = 1
            this.physics.friction = 0
        }
    }


    update(deltaTime) {
        // this.move(deltaTime)
        // this.edgesCollision()
    }


    draw(ctx) {
        ctx.beginPath()
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, true)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.closePath()
    }


    move(deltaTime) {
        // this.accelerate()
        // this.friction()
        this.position.x += this.physics.velocity.x * (deltaTime / 1000)
        this.position.y += this.physics.velocity.y * (deltaTime / 1000)
    }


    accelerate() {
        // gravity
        if (this.position.y + this.physics.gravity < this.canvas.height) {
            this.physics.velocity.y += this.physics.gravity
        }
    }


    friction() {
        /**
         * constant friction - can be air friction as well
         */
        this.physics.velocity.x -= (this.physics.velocity.x * this.physics.friction)
    }


    edgesCollision() {
        // handling the x walls
        if (this.position.x >= this.canvas.width - this.radius) {
            this.position.x = this.canvas.width - this.radius
            this.physics.velocity.x *= -1 * this.physics.elasticity
        }
        if (this.position.x <= this.radius) {
            this.position.x = this.radius
            this.physics.velocity.x *= -1 * this.physics.elasticity
        }

        // handling the y walls
        if (this.position.y <= this.radius) {
            this.position.y = this.radius
            this.physics.velocity.y *= -1 * this.physics.elasticity
        }
        if (this.position.y >= this.canvas.height - this.radius) {
            this.position.y = this.canvas.height - this.radius
            this.physics.velocity.y *= -1 * this.physics.elasticity
        }
    }
}