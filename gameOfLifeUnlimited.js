/*Given a 2D array and a number of generations, compute n timesteps of Conway's Game of Life.

The rules of the game are:
1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
2. Any live cell with more than three live neighbours dies, as if by overcrowding.
3. Any live cell with two or three live neighbours lives on to the next generation.
4. Any dead cell with exactly three live neighbours becomes a live cell.

Each cell's neighborhood is the 8 cells immediately around it. The universe is infinite in both the x and y dimensions and all cells are initially dead - except for those specified in the arguments.

The return value should be a 2d array cropped around all of the living cells. (If there are no living cells, then return [[]].)
*/

function getGeneration(cells, generations){
  var new_gen = cells.map(function(x) {
      return x.slice();
  });
  while(generations > 0) {
    new_gen = addWhitespace(new_gen);
    new_gen = nextGeneration(new_gen);
    new_gen = removeWhitespace(new_gen);
    generations -= 1;
  }
  return new_gen;
}

function addWhitespace(cells) {
  var new_gen = cells.map(function(x) {
      return x.slice();
  });
  new_gen = new_gen.map(function(x) {
    x.unshift(0);
    x.push(0);
    return x;
  });
  new_gen.unshift(Array(new_gen[0].length).fill(0));
  new_gen.push(Array(new_gen[0].length).fill(0));
  return new_gen;
}

function removeWhitespace(cells) {
  var new_gen = cells.map(function(x) {
      return x.slice();
  });
  while(new_gen[0].every(x => x == 0)) {
    new_gen.shift()
  }
  while(new_gen[new_gen.length-1].every(x => x == 0)) {
    new_gen.pop()
  }
  while(new_gen.every(x => x[0] == 0)) {
    new_gen = new_gen.map(function(x) {
      x.shift();
      return x;
    });
  }
  while(new_gen.every(x => x[x.length-1] == 0)) {
    new_gen = new_gen.map(function(x) {
      x.pop();
      return x;
    });
  }
  return new_gen;
}

function nextGeneration(cells) {
  var new_gen = cells.map(function(x) {
      return x.slice();
  });
  var neighbors = cells.map(function(x) {
      return x.slice();
  });

  var r = cells.length;
  var c = cells[0].length;
  for (var i = 0; i < r; i++) {
    for (var j = 0; j < c; j++) {
      var n1 = (i == 0 || j == 0 ? 0 : cells[i-1][j-1]);
      var n2 = (i == 0 ? 0 : cells[i-1][j]);
      var n3 = (i == 0 || j == c-1 ? 0 : cells[i-1][j+1]);
      var n4 = (j == 0 ? 0 : cells[i][j-1]);
      var n5 = (j == c-1 ? 0 : cells[i][j+1]);
      var n6 = (i == r-1 || j == 0 ? 0 : cells[i+1][j-1]);
      var n7 = (i == r-1 ? 0 : cells[i+1][j]);
      var n8 = (i == r-1 || j == c-1 ? 0 : cells[i+1][j+1]);
      var n_total = n1+n2+n3+n4+n5+n6+n7+n8;

      neighbors[i][j] = n_total;
      if (n_total == 3) {
        new_gen[i][j] = 1
      }
      else if (n_total == 2 && cells[i][j] == 1) {
        new_gen[i][j] = 1
      }
      else {
        new_gen[i][j] = 0
      }
    }
  }
  return new_gen;
}
