window.onload = () => {
    EVENTBUBBLING.init()
}

EVENTBUBBLING = {
    init() {
        this.addEventHandlers();
    },
    addEventHandlers() {
        document.getElementById("outer").addEventListener("click", this.outerDivClick, false);
        document.getElementById("middle").addEventListener("click", this.middleDivClick, false);
        document.getElementById("inner").addEventListener("click", this.innerDivClick, false);
        document.getElementById("clearButton").addEventListener("click", this.clearList);
    },
    outerDivClick() {
        EVENTBUBBLING.appendText("outer Div Clicked");
    },
    middleDivClick() {
        EVENTBUBBLING.appendText("middle Div Clicked");
    },
    innerDivClick() {
        EVENTBUBBLING.appendText("inner Div Clicked");
    },
    appendText(s) {
        var li = document.createElement("li");
        li.innerText = s;
        document.getElementById("eventOrder").appendChild(li);
    },
    clearList() {
        var ol = document.createElement("ol");
        ol.id = "eventOrder";
        document.getElementById("bod").replaceChild(ol, document.getElementById("eventOrder"));
    }
}