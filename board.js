

class Board {
    constructor() {
        this.el = document.createElement('div');
        this.el.className = 'checkers-board'

        this.initialize()
    }

    initialize() {
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                const field = this.createField(row, col);
                this.el.appendChild(field);
            }
        }
    }

    createField(row, col) {
        const el = document.createElement('div');
        el.className = 'checkers-field'

        const dark = (row + col) % 2
        if (dark = true) {
            el.className = 'checkers-field-dark'
        } else {
            el.className = 'checkers-field-light'
        }

        return el;
    }
    appendTo(container) {
        container.appendChild(this.el)
    }
}

