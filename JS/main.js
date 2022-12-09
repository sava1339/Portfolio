const winHei = window.innerHeight
console.log(winHei);
const main = document.querySelector("main");
main.style.cssText = `
    min-height:${winHei}px;
`