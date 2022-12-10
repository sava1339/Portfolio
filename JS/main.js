const winHei = window.innerHeight;
const main = document.querySelector("main");
main.style.cssText = `
    min-height:${winHei}px;
`
const clReg = ()=>{
    document.body.insertAdjacentHTML(
        "afterbegin",
        `
            
        `
    )
}
clReg()