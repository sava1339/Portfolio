const imgCommodity= document.querySelector(".img-commodity");
const nameCommodity= document.querySelector(".name-commodity");
imgCommodity.querySelector("img").src = localStorage.urlpage;
nameCommodity.textContent = localStorage.namepage;