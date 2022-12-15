const size = document.querySelector(".size");
const sizeInput = size.querySelectorAll("input");
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
    console.log(check);
    for(i = 0; i < li.length;i++){
        let a = li[i].querySelectorAll("a")[0];
        if(a.innerHTML.toUpperCase().indexOf(filter)> -1){
            if(check.length == 0){
                li[i].style.display = "";
            }else{
                
                for(b=0;b<check.length;b++){
                    if(li[i].querySelector("a").classList.contains(check[b].value)){
                        li[i].style.display = "";
                        break;
                    }else if((b+1)===check.length){
                        li[i].style.display = "none";
                    }
                }
            }
        }else{
            li[i].style.display = "none";
        }
    }
    
}