class LinkedList {
    constructor() {
        this.Node = class {
            constructor(item) {
                this.item = item;
                this.next = null;
                this.prev = null;
            }
        }
        this.current = new this.Node('');
        this.undo = null;
        this.redo = null;
    }

    handleWrite(item) {
        let node = new this.Node(item);
        if (this.current.next !== null && this.current.next.item === item) {
            this.current = this.current.next
        } else {
            this.current.next = node;
            node.prev = this.current;
            this.current = node;
        }
        this.undo = this.current.prev;
        this.redo = this.current.next;
    }

    handleUndo() {
        this.undo = this.undo.prev;
        this.current = this.current.prev;
        if (this.redo) {
            this.redo = this.redo.prev
        } else {
            this.redo = this.current.next
        }
    }

    handleRedo() {
        this.redo = this.redo.next;
        this.current = this.current.next;
        if (this.undo) {
            this.undo = this.undo.next
        } else {
            this.undo = this.current.prev
        }
    }

    getListItems() {
        let pass = this.current;
        let items = [];
        while (pass.prev !== null) {
            pass = pass.prev
        }
        while (pass) {
            items.push(pass.item)
            pass = pass.next
        }
        return items
    }

    getCurPos() {
        let pass = this.current;
        let index = 0;
        while (pass.prev !== null) {
            pass = pass.prev
        }
        while(pass !== this.current) {
            pass = pass.next
            index++;
        }
        return index
    }

}

export default LinkedList

