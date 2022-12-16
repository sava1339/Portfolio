const size = document.querySelector(".size");
const sizeInput = size.querySelectorAll("input");
const type = document.querySelector(".type");
const typeInput = type.querySelectorAll("input");
let check = [];
function search(){
    let input = document.querySelector(".s-search");
    let filter = input.value.toUpperCase();
    let ul = document.querySelector(".s-posters");
    let li = ul.querySelectorAll(".search-poster");
    check = [];
    for(i = 0;i < sizeInput.length;i++){
        if(sizeInput[i].checked){
            check.push(sizeInput[i]);
        };
    }
    for(i = 0; i < li.length;i++){
        let a = li[i].querySelectorAll("a")[0];
        if(a.innerHTML.toUpperCase().indexOf(filter)> -1){
            if(check.length == 0){
                li[i].style.display = "";
            }else{
                if(document.querySelector("#type-filter1").checked){
                    for(b=0;b<check.length;b++){
                        if(li[i].querySelector("a").classList.contains(check[b].value)){
                            li[i].style.display = "";
                            break;
                        }else if((b+1)===check.length){
                            li[i].style.display = "none";
                        }
                    }
                }
                if(document.querySelector("#type-filter2").checked){
                    for(b=0;b<check.length;b++){
                        if(li[i].querySelector("a").classList.contains(check[b].value)){
                            if((b+1)===check.length){
                                li[i].style.display = "";
                            }
                        }else {
                            li[i].style.display = "none";
                            break;
                        }
                    }
                }
                
            }
        }else{
            li[i].style.display = "none";
        }
    }
    
}