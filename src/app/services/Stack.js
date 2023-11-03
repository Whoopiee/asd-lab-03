export class Stack {
    constructor() { // поля класу Стек
        this.data = [];
        this.count = 0;
    }

    isEmpty() {  // перевірка на наявність елементів в стеку
        return this.count === 0;
    }

    push(item) { // додавання елементу в кінець Стека
        this.data[this.count] = item;
        this.count++;
    }

    pop() { // видалення останнього доданого елемента
        if (this.isEmpty()) {
            return false;
        }

        this.count--;
        delete this.data[this.count];
        this.data.pop();
    }

    swapHeadTail() { // заміна першого і останнього елементів Стека
        if (this.isEmpty()) {
            return false;
        }

        const tail = this.data[this.count - 1];
        this.data[this.count - 1] = this.data[0];
        this.data[0] = tail;
    }

    clear() { // очистка Стека
        this.data = [];
        this.count = 0;
    }

    isContain(item) { // перевірка наявності елемента в Стеку
        if (this.isEmpty()) {
            return false;
        }

        for (let i = 0; i <= this.count - 1; i++) {
            if (this.data[i] === item) {
                return true;
            }
        }
        return false;
    }

    reverse() { // розворот Стека
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

    getStack() { // отримання елементів Стеку
        return this.data;
    }

}