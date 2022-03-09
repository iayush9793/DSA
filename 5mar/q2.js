var gameOfLife = function (board) {
    markBoard(board);
  
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === -1) {
          board[i][j] = 1;
        } else if (board[i][j] === 2) {
          board[i][j] = 0;
        }
      }
    }
    return board;
  };
  
  const markBoard = (board) => {
    
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        let neighbors = getNeighbors(board, i, j);
        if (aliveToDead(board, i, j, neighbors)) {
          board[i][j] = 2;
        } else if (deadToAlive(board, i, j, neighbors)) {
          board[i][j] = -1;
        }
      }
    }
  };
  
  const deadToAlive = (board, i, j, neighbors) => {
    return board[i][j] === 0 && neighbors === 3;
  };
  
  const aliveToDead = (board, i, j, neighbors) => {
    return board[i][j] === 1 && (neighbors < 2 || neighbors > 3);
  };
  
  const getNeighbors = (board, i, j) => {
    let count = 0;
    const directions = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];
  
    for (const direction of directions) {
      let x = i + direction[0];
      let y = j + direction[1];
      
      if (x >= 0 && x < board.length && y >= 0 && y < board[0].length) {

        if (board[x][y] > 0) {
          count++;
        }
      }
    }
    return count;
  };
  