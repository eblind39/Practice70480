window.onload = () => {
    DRAGDROP.init()
}

DRAGDROP = {
    init() {
        this.addEventHandlers();
    },
    addEventHandlers() {
        var chip = document.getElementById("chip");
        chip.addEventListener("dragstart", function () { window.event.dataTransfer.setData("Text", this.id); });
        var b1 = document.getElementById("bucket1");
        b1.addEventListener("dragenter", function() {
            b1.classList.add("over");
            window.event.returnValue = false;
        });
        b1.addEventListener("dragleave", function() {
            b1.classList.remove("over");
        });
        b1.addEventListener("dragover", function() {
            window.event.returnValue = false;
        });
        b1.addEventListener("drop", function() {
            window.event.returnValue = false;
            var data = event.dataTransfer.getData("Text");
            var d = document.getElementById(data);
            d.classList.remove("begin");
            d.classList.add("dropped");
            this.appendChild(d);
        });
    },
    
}