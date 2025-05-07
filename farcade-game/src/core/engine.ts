class Engine {
    constructor() {
        this.isRunning = false;
        this.lastTime = 0;
    }

    start() {
        this.isRunning = true;
        this.lastTime = performance.now();
        this.gameLoop();
    }

    stop() {
        this.isRunning = false;
    }

    gameLoop() {
        if (!this.isRunning) return;

        const currentTime = performance.now();
        const deltaTime = currentTime - this.lastTime;

        this.update(deltaTime);
        this.render();

        this.lastTime = currentTime;
        requestAnimationFrame(() => this.gameLoop());
    }

    update(deltaTime) {
        // Update game logic here
    }

    render() {
        // Render the game here
    }

    handleInput(input) {
        // Handle user input here
    }
}

export default Engine;