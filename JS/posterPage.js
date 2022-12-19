const imgCommodity= document.querySelector(".img-commodity");
const nameCommodity= document.querySelector(".name-commodity");
if(sessionStorage.urlpage){
    imgCommodity.querySelector("img").src = sessionStorage.urlpage;
    nameCommodity.textContent = `Плакат ${sessionStorage.namepage}`;
}else{
    imgCommodity.querySelector("img").src = localStorage.urlpage;
    nameCommodity.textContent = `Плакат ${localStorage.namepage}`;
}
sessionStorage.urlpage =localStorage.urlpage;
sessionStorage.namepage =localStorage.namepage;


