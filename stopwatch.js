function Stopwatch() {
    let count=0, timer = false;

    const incCount = function(){
        count++;
    }

    this.duration = function () {
        console.log(count)
    }
    this.reset = function () {
        if(timer){
            clearInterval(timer)
            timer = false
        }
        count = 0
    }
    this.start = function () {
        if(!timer){
            timer = setInterval(incCount, 1000)
        }else{
           return new Error("Stopwatch has already started.")
        }
    }
    this.stop = function () {
        if(timer){
            clearInterval(timer)
            timer = false
        }else{
            return new Error("Stopwatch is not running.")
        }
    }
}