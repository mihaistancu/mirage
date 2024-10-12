class Sink {
    constructor(x, y, messages) {
        this.x = x;
        this.y = y;
        this.messages = messages;
        this.receivedCount = 0;
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
        this.receivedCount++;
    }
    
    display() {
        rect(this.x, this.y, 10, 10);
        fill(0);
        textAlign(CENTER, TOP);
        textSize(12);
        text(this.receivedCount, this.x + 5, this.y + 15);
    }
}