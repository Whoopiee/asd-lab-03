export class Stack {
    constructor() {
        this.data = [];
        this.count = 0;
    }

    isEmpty() {
        return this.count === 0;
    }

    push(item) {
        this.data[this.count] = item;
        this.count++;
    }

    pop() {
        if (isEmpty) {
            return false;
        }

        this.count--;
        delete this.data[this.count];
    }

    delete(index) {
        if (this.isEmpty()) {
            return false;
        }

        if (index < 0 || index >= this.count) {
            return false;
        }
        
        for(let i = 0; i < this.count - 1; i++) {
            if (i === index - 1) {
                delete this.data[i];
            }
        }
    }

    swapHeadTail() {
        if (this.isEmpty) {
            return false;
        }

        const tail = this.data[this.count - 1];
        this.data[this.count - 1] = this.data[0];
        this.data[0] = tail;
    }

    clear() {
        this.data = [];
        this.count = 0;
    }

    isExist(item) {
        if (this.isEmpty) {
            return false;
        }

        for(let i = 0; i < this.count - 1; i++) {
            if (data[i] === item) {
                return true;
            }
        }
        return false;
    }

    reverse() {
        if (this.isEmpty) {
            return false;
        }

        let temp = [];
        let index = 0;

        for(let i = count - 1; i >= 0; i--) {
            temp[index] = this.data[i];
            index++;
        }

        this.data = [...temp];
        temp = [];
    }

}