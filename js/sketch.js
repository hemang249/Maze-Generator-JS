var cols , rows;
var w = 40;
var grid = []
var current = null

function setup(){
    createCanvas(400,400)
    cols = floor(width/w)
    rows = floor(height/w)

    for(let i = 0 ; i < rows ; i++){
        for(let j = 0 ; j < cols ; j++){
            var cell = new Cell(i,j)
            grid.push(cell)
        }
    }

    current = grid[0]
}

function draw(){
    background(51)
    for(let i = 0 ; i < grid.length ; i++){
        grid[i].show()
    }

    current.visited = true
    var nextCell = current.checkNeighbours()

    if(nextCell){
        nextCell.visited = true
        current = nextCell
    }
}

function getIndex(i , j){
    if(i<0 || j < 0 || i > rows - 1 || j > cols-1)
        return -1
    return i + j * cols
}

function Cell(i , j){
    this.i = i
    this.j = j
    this.walls = [true , true , true , true]   // top right bottom left 
    this.visited = false

    this.checkNeighbours = function(){
        var neighbours = []
        var top = grid[getIndex(i , j-1)]
        var right = grid[getIndex(i+1,j)]
        var bottom = grid[getIndex(i,j+1)]
        var left = grid[getIndex(i-1,j)]

        if(top && !top.visited)
            neighbours.push(top)
        if(right && !right.visited)
            neighbours.push(right)
        if(right && !bottom.visited)
            neighbours.push(bottom)
        if(left && !left.visited)
            neighbours.push(left)

        if(neighbours.length > 0){
            var r = floor(random(0,neighbours.length))
            return neighbours[r]
        } else {
            return undefined
        }
    }

    this.show = function(){
        let x  = this.i * w
        let y = this.j * w
        stroke(255)

        if(this.walls[0]){
            line(x, y, x+w,y)
        }

        if(this.walls[1]){
            line(x+ w, y,x+w,y+w)
        }

        if(this.walls[2]){
            line(x+w, y+w,x,y+w)
        }

        if(this.walls[3]){
            line(x, y, x,y+w)
        }

        if(this.visited){
            fill(255, 0 , 255 , 100);
            rect(x,y,w,w)
        }

    }
}