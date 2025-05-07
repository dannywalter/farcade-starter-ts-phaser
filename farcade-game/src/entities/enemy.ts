export class Enemy {
    constructor(position, health) {
        this.position = position;
        this.health = health;
    }

    move(newPosition) {
        this.position = newPosition;
    }

    attack(target) {
        if (target.health > 0) {
            target.health -= 10; // Example damage value
        }
    }
}