function Counter(elem, content, delay) {
    let value = parseInt(elem.getAttribute("value"), 10);
    let interval;

    function updateDisplay(value) {
        elem.innerHTML = value;
    }

    function run() {
        value += 1;
        if (value == content.length) value = 0;

        elem.setAttribute("value", value);
        updateDisplay(content[value]);
    }

    function start() {
        interval = window.setInterval(run, delay);
    }
    this.start = start;
}

let titles = [
    "WEB DEVELOPER",
    "GRAPHIC DESIGNER",
];

let subTitles = [
    "FRONTEND - BACKEND",
    "PRINTED - WEBSITE",
]

let elem = document.getElementById("title");
let elem2 = document.getElementById("sub-title")


titleChanger = new Counter(elem, titles, 7000);
subTitleChanger = new Counter(elem2, subTitles, 7000);
titleChanger.start();
subTitleChanger.start();

// Form Logic ===============================

window.addEventListener("DOMContentLoaded", function () {

    let form = document.getElementById("my-form");
    let status = document.getElementById("status");

    function success() {
        form.reset();
        status.classList.add('success');
        status.innerHTML = "Success! Thanks!";
    }

    function error() {
        status.classList.add('error');
        status.innerHTML = "Oops! There was a problem.";
    }

    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        let data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

function ajax(method, url, data, success, error) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}