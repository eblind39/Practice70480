window.onload = () => {
    LOCALSTORAGE.init();
    SESSIONSTORAGE.init();
}

LOCALSTORAGE = {
    init() {
        var that = this;
        this.SaveJSONObject();
        this.LoadFromStorage();
        document.getElementById("btnLocalAdd").onclick = function () {
            localStorage.setItem(document.getElementById("toLocalStorageKey").value, document.getElementById("toLocalStorageValue").value);
            that.LoadFromStorage();
        }
        document.getElementById("btnLocalRemove").onclick = function () {
            localStorage.removeItem(document.getElementById("toLocalStorageKey").value);
            that.LoadFromStorage();
        }
        document.getElementById("btnLocalClear").onclick = function () {
            localStorage.clear();
            that.LoadFromStorage();
        }
    },
    SaveJSONObject() {
        var customer = new Object();
        customer.firstName = "Rick";
        customer.lastName= "Delorme";
        customer.shirtSize = "XL";
        localStorage.setItem("cart1", JSON.stringify(customer));
    },
    LoadFromStorage() {
        var storageDiv = document.getElementById("localstorage");
        if (localStorage.length > 0) {
            var tbl = document.createElement("table");
            tbl.id = "localStorageTable";
            for (var i = 0; i < localStorage.length; i++) {
                var row = document.createElement("tr");
                var key = document.createElement("td");
                var val = document.createElement("td");
                key.innerText = localStorage.key(i);
                val.innerText = localStorage.getItem(key.innerText);
                row.appendChild(key);
                row.appendChild(val);
                tbl.appendChild(row);
                storageDiv.innerHTML = '';
                storageDiv.appendChild(tbl);
            }
            console.log('entró');
        } else {
            var strInnerHTML = '';
            strInnerHTML += '<table>';
            strInnerHTML += '<tr>';
            strInnerHTML += '<td>No data in local storage.</td>';
            strInnerHTML += '</tr>';
            strInnerHTML += '</table>';
            storageDiv.innerHTML = strInnerHTML;
        }
    },
}

SESSIONSTORAGE = {
    init() {
        var that = this;
        this.SaveJSONObject();
        this.LoadFromStorage();
        document.getElementById("btnSessionAdd").onclick = function () {
            sessionStorage.setItem(document.getElementById("toSessionStorageKey").value, document.getElementById("toSessionStorageValue").value);
            that.LoadFromStorage();
        }
        document.getElementById("btnSessionRemove").onclick = function () {
            sessionStorage.removeItem(document.getElementById("toSessionStorageKey").value);
            that.LoadFromStorage();
        }
        document.getElementById("btnSessionClear").onclick = function () {
            sessionStorage.clear();
            that.LoadFromStorage();
        }
    },
    SaveJSONObject() {
        var customer = new Object();
        customer.firstName = "Rick";
        customer.lastName= "Delorme";
        customer.shirtSize = "XL";
        sessionStorage.setItem("cart1", JSON.stringify(customer));
    },
    LoadFromStorage() {
        var storageDiv = document.getElementById("sessionstorage");
        if (sessionStorage.length > 0) {
            var tbl = document.createElement("table");
            tbl.id = "sessionStorageTable";
            for (var i = 0; i < sessionStorage.length; i++) {
                var row = document.createElement("tr");
                var key = document.createElement("td");
                var val = document.createElement("td");
                key.innerText = sessionStorage.key(i);
                val.innerText = sessionStorage.getItem(key.innerText);
                row.appendChild(key);
                row.appendChild(val);
                tbl.appendChild(row);
                storageDiv.innerHTML = '';
                storageDiv.appendChild(tbl);
            }
            console.log('entró');
        } else {
            var strInnerHTML = '';
            strInnerHTML += '<table>';
            strInnerHTML += '<tr>';
            strInnerHTML += '<td>No data in local storage.</td>';
            strInnerHTML += '</tr>';
            strInnerHTML += '</table>';
            storageDiv.innerHTML = strInnerHTML;
        }
    },
}