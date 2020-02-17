window.onload = () => {
    GEOLOCATION.init()
}

GEOLOCATION = {
    geoLocator: null,
    watcher: null,
    init() {
        this.geoLocator = window.navigator.geolocation;
        var posOptions = {enableHighAccuracy: true,timeout: 45000};
        // Current position
        this.geoLocator.getCurrentPosition(this.successPosition, this.errorPosition, posOptions);
        // Continous geolocation watch
        this.watcher = this.geoLocator.watchPosition(this.successWatchPosition, this.errorWatchPosition, posOptions);
    },
    /* Current geolocation callbacks */
    successPosition(pos) {
        // display geolocation information
        var sp = document.createElement("p");
        sp.innerText = "Latitude: " + pos.coords.latitude + " Longitude: " + pos.coords.longitude;
        document.getElementById("geoCurrentResults").appendChild(sp);
        // link to google maps
        var anchor = document.createElement("a");
        anchor.setAttribute('href', 'https://www.google.com/maps/@'+pos.coords.latitude+','+pos.coords.longitude+',530m/data=!3m1!1e3');
        anchor.text = "go to Google Maps";
        document.getElementById("geoCurrentResults").appendChild(anchor);
    },
    errorPosition(err) {
        var sp = document.createElement("p");
        sp.innerText = "error: " + err.message; + " code: " + err.code;
        document.getElementById("geoCurrentResults").appendChild(sp);
    },
    /* Watcher geolocation callbacks */
    successWatchPosition(pos) {
        var sp = document.createElement("p");
        sp.innerText = "Latitude: " + pos.coords.latitude + " Longitude: " + pos.coords.longitude;
        document.getElementById("geoWatcherResults").appendChild(sp);
        GEOLOCATION.geoLocator.clearWatch(GEOLOCATION.watcher);
    },
    errorWatchPosition(err) {
        var sp = document.createElement("p");
        sp.innerText = "error: " + err.message; + " code: " + err.code;
        document.getElementById("geoWatcherResults").appendChild(sp);
    },
}