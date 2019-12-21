
//Factory function
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw');
        }
    }
}
const circle = createCircle(1);


// Constructor fuction
function Circle(radius) { 
    this.radius = radius;
    this.draw = function(){
        console.log('draw')
    }
}
const another = new Circle(1)  

// copy by refernce
let x={value: 10};
let y = x

x.value= 20