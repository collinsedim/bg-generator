const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const aEL = addEventListener("input", selectColor);

function selectColor() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
}

color1.aEL;
color2.aEl;


function init() {
    const header = document.getElementById("myHeader");
    const copyButton = document.getElementById("copyButton");

    if (header.innerText !== "") {
        copyButton.style.display = "block";
    }

    const observer = new MutationObserver(function(mutationList, observer) {
        for (var mutation of mutationList) {
            if (mutation.type === "childList" && header.innerText !== "") {
                copyButton.style.display = "block";
            }
        }
    });

    observer.observe(header, { attributes: true, childList: true, characterData: true });
}

document.addEventListener("DOMContentLoaded", init);

function copyToClipboard(elementId) {
    const copyText = document.getElementById(elementId);
    const range = document.createRange();

    range.selectNode(copyText);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}