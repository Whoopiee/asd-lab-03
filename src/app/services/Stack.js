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
        if (this.isEmpty()) { 
            return false; 
        } 
 
        this.count--; 
        delete this.data[this.count]; 
        this.data.pop(); 
    } 
 
    delete(index) { 
        if (this.isEmpty()) { 
            return false; 
        } 
 
        if (index < 0 || index >= this.count) { 
            return false; 
        } 
 
        for (let i = 0; i < this.count - 1; i++) { 
            if (i === index - 1) { 
                delete this.data[i]; 
            } 
        } 
    } 
 
    swapHeadTail() { 
        if (this.isEmpty()) { 
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
 
    isContain(item) { 
        if (this.isEmpty()) { 
            return false; 
        } 
 
        for (let i = 0; i < this.count - 1; i++) { 
            if (this.data[i] === item) { 
                return true; 
            } 
        } 
        return false; 
    } 
 
    reverse() { 
        if (this.isEmpty()) { 
            return false; 
        } 
 
        let temp = []; 
        let index = 0; 
 
        for (let i = this.count - 1; i >= 0; i--) { 
            temp[index] = this.data[i]; 
            index++; 
        } 
 
        this.data = Array.from(temp); 
        temp = []; 
    } 

    getStack() {
        return this.data;
    }
 
}