window.onload = function() {
    AUDIO.init();    
};

AUDIO = {
    init() {
        this.setEventHandlers();
    },
    setEventHandlers() {
        var vid = document.querySelector('#audTGName');
        document.querySelector('#btnPlay').onclick = () => vid.play();
        document.querySelector('#btnPause').onclick = () => vid.pause();
        document.querySelector('#btnStop').onclick = () => vid.load();
        document.querySelector('#btnRewind').onclick = () => vid.load();
    },
}