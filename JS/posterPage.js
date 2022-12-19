const imgCommodity= document.querySelector(".img-commudity");
const nameCommodity= document.querySelector(".name-commodity");
imgCommodity.querySelector("img").src = localStorage.urlpage;
nameCommodity.textContent = localStorage.namepage;