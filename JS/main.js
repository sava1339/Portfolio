const winHei = window.innerHeight;
const main = document.querySelector("main");
const whiteBack = document.querySelector("#whiteBack");
const regMain = document.querySelector(".reg-main");
const regTable = document.querySelector(".reg-table");
main.style.cssText = `
    min-height:${winHei}px;
`;
function reg(){
    if(whiteBack.classList.contains("white-background") == false){
        whiteBack.classList.add("white-background");
        regMain.classList.add("active");
        regTable.classList.add("active");
        regTable.insertAdjacentHTML(
            'afterbegin',
            `
                <div class="reg-obj">
                <svg class="reg-svg" onclick="regCancel()" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" fill="currentColor"><path d="M11.414 10l2.829-2.828a1 1 0 1 0-1.415-1.415L10 8.586 7.172 5.757a1 1 0 0 0-1.415 1.415L8.586 10l-2.829 2.828a1 1 0 0 0 1.415 1.415L10 11.414l2.828 2.829a1 1 0 0 0 1.415-1.415L11.414 10zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"></path></svg>
                <div class ="reg-input">
                <a class="logo-reg" href="./index.html"><img src="./SVG/logo.svg" alt=""></a>
                <input placeholder="Имя/Логин" class="reg-input-name" type="text"></input>
                <input placeholder="Пароль" class="reg-input-password" type="password"></input>
                </div>
                </div>
            `
        )
    }
}
function regCancel(){
    whiteBack.classList.remove("white-background");
    regMain.classList.remove("active");
    regTable.classList.remove("active");
    document.querySelector(".reg-obj").remove();
}