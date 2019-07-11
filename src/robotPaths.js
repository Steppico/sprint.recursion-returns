class Board {
  constructor(size) {
    this.board = [];
    for (let row = 0; row < size; row += 1) {
      this.board.push([]);
      for (let col = 0; col < size; col += 1) {
        this.board[row].push(false);
      }
    }
  }

  togglePiece(row, col) {
    this.board[row][col] = !this.board[row][col];
    return this.board;
  }
  hasBeenVisited(row, col) {
    return this.board[row][col];
  }
}

class RobotPaths {
  constructor(size) {
    this.board = new Board(size);
    this.row = 0;
    this.col = 0;
  }

  solve() {
    const chizu = this.board.board;
    const endPoint = [chizu.length - 1, chizu.length - 1];
    let count = 0;

    const up = (row, col) => {
      if (row - 1 >= 0 && !this.board.hasBeenVisited(row - 1, col)) {
        recursion(row - 1, col);
      }
    };
    const right = (row, col) => {
      if (col + 1 <= endPoint[1] && !this.board.hasBeenVisited(row, col + 1)) {
        recursion(row, col + 1);
      }
    };
    const left = (row, col) => {
      if (col - 1 >= 0 && !this.board.hasBeenVisited(row, col - 1)) {
        recursion(row, col - 1);
      }
    };
    const down = (row, col) => {
      if (row + 1 <= endPoint[0] && !this.board.hasBeenVisited(row + 1, col)) {
        recursion(row + 1, col);
      }
    };
    const recursion = (row, col) => {
      this.board.togglePiece(row, col);
      if (row === endPoint[0] && col === endPoint[1]) {
        count++;
        this.board.togglePiece(row, col);
        return;
      }
      up(row, col);
      right(row, col);
      down(row, col);
      left(row, col);
      this.board.togglePiece(row, col);
    };

    recursion(this.row, this.col);
    return count;
  }
}

module.exports = { RobotPaths };
