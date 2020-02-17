window.onload = () => {
    CANVAS.init();
}

CANVAS = {
    init() {
        this.firstCurves();
        this.secondShapes();
        this.thirdShapes();
        this.fourthShapes();
        this.fifthShapes();
    },
    firstCurves() {
        var cvs = document.querySelector('#drawingSurfaceOne');
        var ctxt = cvs.getContext('2d');
        ctxt.moveTo(0, 0);
        ctxt.lineTo(200, 200);
        ctxt.lineWidth = 5;
        ctxt.strokeStyle = '#0f0';
        ctxt.stroke();

        ctxt.beginPath();
        ctxt.arc(150,100,75,0,2 * Math.PI, false);
        ctxt.lineWidth = 25;
        ctxt.strokeStyle = '#0f0';
        ctxt.stroke();

        ctxt.beginPath();
        ctxt.arc(450, 100, 75, 1.5 * Math.PI, 2 * Math.PI, false);
        ctxt.lineWidth = 25;
        ctxt.strokeStyle = 'blue';
        ctxt.stroke();

        ctxt.beginPath();
        ctxt.arc(150, 300, 75, 1 * Math.PI, 1.5 * Math.PI, false);
        ctxt.lineWidth = 25;
        ctxt.strokeStyle = '#0ff';
        ctxt.stroke();

        ctxt.beginPath();
        ctxt.arc(450, 300, 75, .5 * Math.PI, 1 * Math.PI, false);
        ctxt.lineWidth = 25;
        ctxt.strokeStyle = '#f00';
        ctxt.stroke();

        ctxt.beginPath();
        ctxt.moveTo(10,380);
        ctxt.quadraticCurveTo(300,-250,580,380);
        ctxt.lineWidth = 25;
        ctxt.strokeStyle = '#f00';
        ctxt.stroke();

        ctxt.beginPath();
        ctxt.moveTo(125, 20);
        ctxt.bezierCurveTo(0, 200, 300, 300, 50, 400);
        ctxt.lineWidth = 5;
        ctxt.strokeStyle = '#f00';
        ctxt.stroke();

        ctxt.beginPath();
        ctxt.arc(300, 200, 75, 1.75 * Math.PI, 1.25 * Math.PI, false);
        ctxt.lineTo(150, 125);
        ctxt.quadraticCurveTo(300, 0, 450, 125);
        ctxt.lineTo(353, 144);
        ctxt.strokeStyle = "blue";
        ctxt.lineCap = "round";
        ctxt.lineWidth = 10;
        ctxt.stroke();
    },
    secondShapes() {
        var cvs = document.querySelector('#drawingSurfaceTwo');
        var ctxt = cvs.getContext('2d');
        ctxt.beginPath();
        ctxt.rect(300, 200, 150, 75);
        ctxt.fillStyle = "blue";
        ctxt.fill();
        ctxt.stroke();

        ctxt.beginPath();
        ctxt.arc(300, 200, 75, 1.75 * Math.PI, 1.25 * Math.PI, false);
        ctxt.lineTo(150, 125);
        ctxt.quadraticCurveTo(300, 0, 450, 125);
        ctxt.lineTo(353, 144);
        ctxt.strokeStyle = "blue";
        ctxt.lineCap = "round";
        ctxt.lineWidth = 10;
        ctxt.fillStyle = "Green";
        ctxt.fill();
        ctxt.stroke();
        
    },
    thirdShapes() {
        var cvs = document.querySelector('#drawingSurfaceThree');
        var ctxt = cvs.getContext("2d");
        ctxt.lineWidth = 3;
        ctxt.rect(150, 150, 200, 125);
        var gradient = ctxt.createLinearGradient(150, 150, 200, 125);
        gradient.addColorStop(0, "Black");
        gradient.addColorStop(0.5, "Gray");
        gradient.addColorStop(1,"White");
        ctxt.fillStyle = gradient;
        ctxt.fill();
        ctxt.stroke();

        ctxt.beginPath();
        ctxt.lineWidth = 3;
        ctxt.rect(20, 20, 250, 175);
        var gradient = ctxt.createRadialGradient(80, 80,5, 130, 130,100);
        gradient.addColorStop(0, "Red");
        gradient.addColorStop(.5, "Orange");
        gradient.addColorStop(1, "Blue");
        ctxt.fillStyle = gradient;
        ctxt.fill();
        ctxt.stroke();
    },
    fourthShapes() {
        var cvs = document.querySelector('#drawingSurfaceFour');
        var ctxt = cvs.getContext("2d");
        ctxt.lineWidth = 3;
        ctxt.rect(0, 0, 600, 400);
        var img = new Image();
        img.src = "media/images/maurits.jpg";
        img.onload = function () {
            var pat = ctxt.createPattern(img, "repeat");
            ctxt.fillStyle = pat;
            ctxt.fill();
            ctxt.stroke();
        }
    },
    fifthShapes() {
        var cvs = document.querySelector('#drawingSurfaceFive');
        var ctxt = cvs.getContext("2d");
        var img = new Image();
        img.src = "media/images/maurits.jpg";
        img.onload = function () {
            // ctxt.drawImage(img, 0, 0);   // original size of the image
            ctxt.drawImage(img, 0,0,img.width * .5, img.height * .5);      // scaled image
            ctxt.stroke();
        }

        // text
        ctxt.font = "24px arial";
        ctxt.strokeStyle = "Red";
        ctxt.fillStyle = "Red";
        ctxt.textAlign = "center";
        ctxt.strokeText("1. Text with Arial font", 150, 150);
    },
}