// CANVAS ANIMATIONS
const canvas = document.querySelector('canvas');
const body = document.querySelector('body');
canvas.width = body.clientWidth;
canvas.height = body.clientHeight;
const context = canvas.getContext('2d');

let mouse = {
    x: undefined,
    y: undefined
}
// MAXIMUM RADIUS FOR EACH DOT
const maxRadius = 8;

// AN ARRAY OF COLORS WHERE TO CHOOSE FROM RANDOMLY
const colorArray = [
    '#2E333D',
    '#25282D',
    '#c8c8c8',
    '#D9E4EC',
    '#B00000',
];

// DETECTS THE MOUSE POSITION
window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
});

// DETECTS A RESIZE AND ADJUSTS THE CANVAS SIZE
window.addEventListener('resize', function(){
    canvas.width = body.clientWidth;
    canvas.height = body.clientHeight;
})

// RECEIVES RANDOM VALUES FROM THE INIT FUNCTION AND CREATES A NEW INSTANCE OF THE A CIRCLE OBJECT
function Circle(x, y, dx, dy, radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random()*colorArray.length)];

    // DRAWS THE CIRCLE WITH THE PROVIDED VALUES FROM THE INIT FUNCTION
    this.draw = function(){
        context.beginPath();
        context.arc(this.x,this.y,this.radius, 0, Math.PI*2, false);
        context.fillStyle = this.color;
        context.fill();
    }

    // CHECKS WHEN A CIRCLE REACHES THE EDGES OF THE SCREEN AND REVERSES ITS DIRECTION
    this.update = function(){
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx;
        }
        if(this.y + this.radius > innerHeight || this.y-this.radius < 0){
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        // CHECKS THE VALUES FROM THE MOUSEMOVE EVENT LISTENER AND COMPARES THEM
        // TO CHECK IF THE MOUSE IS 50 PIXELS CLOSE TO ANY CIRCLE. IF IT IS, EACH
        // CIRCLE SCALES TO MAXRADIUS, AND THEN TO MINRADIUS
        if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y<50 && mouse.y - this.y > -50){
            if(this.radius<maxRadius){
                this.radius += 0.2;
            }
        }else if(this.radius>this.minRadius){
            this.radius -= 0.2;
        }
        this.draw();
    }
}

// ALL THE CIRCLES ARE STORED IN AN ARRAY, IS AN ARRAY OF OBJECTS
let circleArray = [];

function init(){
    // THE CIRCLE ARRAY IS EMPTIED EVERY TIME THE INIT FUNCTION RUN
    circleArray = [];

    // CREATES 60 CIRCLES WITH RANDOM VALUES FOR POSITION, DIAMETER AND DIRECTION
    for(let i=0; i<30; i++){
        let radius = Math.random() * 3 + 2;
        let x = Math.random() * innerWidth;
        let y = Math.random() * innerHeight;
        let dx = (Math.random() -0.2) * 0.1;
        let dy = (Math.random() -0.2) * 0.1;
        // CALLS THE CIRCLE FUNCTION AND THEN ADDS EACH CIRCLE TO THE CIRCLE ARRAY
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }
}

function animate(){
    requestAnimationFrame(animate);

    // CLEARS EACH FRAME OF THE ANIMATION
    context.clearRect(0,0, innerWidth, innerHeight);
        
    for(let i=0; i<circleArray.length; i++){
        circleArray[i].update();
    }
}

// ASSINGS EVERY CIRCLE WITH A SPEED OF 2 VERTICALLY FOR HALF A SECOND, THEN RETURN TO NORMAL
const displaceCirclesDown = () => {
    for(let circle in circleArray){
        circleArray[circle].dy = 3;
    }
    setTimeout(() => {
        for(let circle in circleArray){
            circleArray[circle].dy = (Math.random() -0.2) * 0.1;
        }  
    }, 500)
}

// ASSINGS EVERY CIRCLE WITH A SPEED OF -2 VERTICALLY FOR HALF A SECOND, THEN RETURN TO NORMAL
const displaceCirclesUp = () => {
    for(let circle in circleArray){
        circleArray[circle].dy = -3;
    }
    setTimeout(() => {
        for(let circle in circleArray){
            circleArray[circle].dy = (Math.random() -0.2) * 0.1;
        }  
    }, 500)
}

init();
animate();