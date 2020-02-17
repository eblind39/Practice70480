window.onload = () => {
    TRYCATCH.init();
}

TRYCATCH = {
    init() {
        try {
            var canvas = document.getElementById("drawingSurfaceOne");
            var context = canvas.getContext("2d");
            context.fillStyle = "blue";
            contxt.arc(50, 50, 25, 0, 360);
            context.fill();
            context.strokeStyle = "red";
            context.stroke();
        } catch (e) {
            console.log('e.message: ', e.message);
            console.log('e.number: ', e.number);
            console.log('e.name: ', e.name);
        } finally {
            //do any final logic before exiting the method
        }
    },
}