var cols , rows;
var w = 40;
var grid = []

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
}

function draw(){
    background(51)
    for(let i = 0 ; i < grid.length ; i++){
        grid[i].show()
    }
}

function Cell(i , j){
    this.i = i
    this.j = j
    this.walls = [true , true , true , true]   // top right bottom left 

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

    }
}