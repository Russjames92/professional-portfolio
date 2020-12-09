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


titleChanger = new Counter(elem, titles, 5000);
subTitleChanger = new Counter(elem2, subTitles, 5000);
titleChanger.start();
subTitleChanger.start();