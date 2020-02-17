window.onload = () => {
    POSITIONING.init();
}

POSITIONING = {
    top: null,
    left: null,
    pos: null,
    init() {
        var that = this;
        this.top = document.getElementById("topText");
        this.left = document.getElementById("leftText");
        this.pos = document.getElementById("positioning");
        this.setEventHandlers(that);
    },
    setEventHandlers(that) {
        var orng2 = document.querySelector('#orange2');
        document.getElementById("btnPosition").onclick = () => {
            var img = document.getElementById("orange2");
            img.style.position = that.pos.value;
            img.style.left = that.left.value + "px";
            img.style.top = that.top.value + "px";
        }
        document.querySelector('#btnTransform').onclick = () => {
            that.addClass(orng2, 'rota');
            that.addClass(orng2, 'escala');
        }
        document.querySelector('#btnFlipX').onclick = () => {
            that.addClass(orng2, 'flipx');
        }
        document.querySelector('#btnFlipY').onclick = () => {
            that.addClass(orng2, 'flipy');
        }
        document.querySelector('#btnTranslate').onclick = () => {
            that.addClass(orng2, 'trasladar');
        }
        document.querySelector('#btnSkew').onclick = () => {
            that.addClass(orng2, 'inclinar');
        }
        document.querySelector('#btnAllInOne').onclick = () => {
            that.addClass(orng2, 'allinone');
        }
        document.querySelector('#btnHideAnElement').onclick = () => {
            var orng1 = document.querySelector('#orange1');
            if (orng1.style.display == 'inline') {
                orng1.style.display = 'none';
            } else {
                orng1.style.display = 'inline';
            }
        }
    },
    addClass(node, strClass) {
        node.classList.add(strClass);
    },
}