class Player {
    constructor(position, health) {
        this.position = position;
        this.health = health;
    }

    move(direction) {
        // Logic to move the player in the specified direction
        switch (direction) {
            case 'up':
                this.position.y -= 1;
                break;
            case 'down':
                this.position.y += 1;
                break;
            case 'left':
                this.position.x -= 1;
                break;
            case 'right':
                this.position.x += 1;
                break;
        }
    }

    attack() {
        // Logic for the player's attack
        console.log('Player attacks!');
    }
}

export default Player;