const winHei = window.screen.height;
function main(){
    ()=> new Promise((res,rej)=>{
        res(document.querySelector(main))
    });
}
async function autoHeight(){
    const main = await main();
    main.style.cssText = `
        min-height:${winHei};
    `;
}