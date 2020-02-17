window.onload = function() {
    VIDEO.init();    
};

VIDEO = {
    init() {
        this.setEventHandlers();
    },
    setEventHandlers() {
        var vid = document.querySelector('#vidTGName');
        document.querySelector('#btnPlay').onclick = () => vid.play();
        document.querySelector('#btnPause').onclick = () => vid.pause();
        document.querySelector('#btnStop').onclick = () => vid.load();
        document.querySelector('#btnRewind').onclick = () => vid.load();
    },
}