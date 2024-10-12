class Sink {
    constructor(x, y, messages) {
        this.x = x;
        this.y = y;
        this.messages = messages;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    update() {
        
    }

    receive(message) {
        const index = this.messages.indexOf(message);
        if (index > -1) {
            this.messages.splice(index, 1);
        }
    }
    
    display() {
        rect(this.x, this.y, 10, 10);
    }
}