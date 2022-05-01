


class CheckersGame {
    constructor(container) {
        this.container = container
        this.board = new Board();
        this.board.appendTo(this.container)
    }

    clear() {
        this.container.innerHTML = '';


    }
}
