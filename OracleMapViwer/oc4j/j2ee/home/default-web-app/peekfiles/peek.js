
var baseURL = "/peek/";

function setBaseURI(base) {
    baseURL = base;
}

function insertText(text) {
    document.getElementById('text').value += text;
}

function insertLoaderName() {
    box = document.getElementById('loader-name');
    loaderName = box.options[box.selectedIndex].value;
    if (loaderName) {
        insertText(loaderName);
    }
}

function clickClear(thisfield, defaulttext) {
    if (thisfield.value == defaulttext) {
        thisfield.value = "";
    }
}

function clickRecall(thisfield, defaulttext) {
    if (thisfield.value == "") {
        thisfield.value = defaulttext;
    }
}

