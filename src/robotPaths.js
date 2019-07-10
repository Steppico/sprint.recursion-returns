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
  // initialize all your options
  // you may want to change this code later on, too
  constructor(size) {
    this.board = new Board(size);
    this.row = 0;
    this.col = 0;
  }

  solve() {
    const chizu = this.board.board;
    console.log("chizu", chizu);
    const endPoint = [chizu.length - 1, chizu.length - 1];
    let count = 0;

    const up = () => {
      if (
        !this.board.hasBeenVisited(this.row - 1, this.col) &&
        chizu[this.row - 1][this.col] !== undefined
      ) {
        this.row -= 1;
        return recursion(this.row, this.col);
      }
    };
    const right = () => {
      this.col += 1;
      if (
        !this.board.hasBeenVisited(this.row, this.col) &&
        chizu[this.row][this.col] !== undefined
      ) {
        return recursion(this.row, this.col);
      }
    };
    const left = () => {
      this.col -= 1;
      if (
        !this.board.hasBeenVisited(this.row, this.col) &&
        chizu[this.row][this.col] !== undefined
      ) {
        return recursion(this.row, this.col);
      }
    };
    const down = () => {
      this.row += 1;
      if (
        !this.board.hasBeenVisited(this.row, this.col) &&
        chizu[this.row][this.col] !== undefined
      ) {
        return recursion(this.row, this.col);
      }
    };

    const recursion = (row, col) => {
      console.log("row", row, "col", col);
      this.board.togglePiece(row, col);
      if (row === endPoint[0] && col === endPoint[1]) {
        count++;
        console.log("count", count);
        this.board.togglePiece(row, col);
        return;
        // } else if(allaroundmeistoggled) {
        //   this.board.togglePiece(row, col)
        //   return;
      }
      return up() || right() || left() || down();
    };

    recursion(this.row, this.col);
    return count;

    //base case
    //postion === endpoint
    //update count;

    //something to do
    //looking all direction
    //toggle place
    //check if it has been visited?
    //move place
  }
}

module.exports = { RobotPaths };
