const imgs = Array.from(document.querySelectorAll("img"));
const layer = document.getElementById("layer");
const innerItem = document.getElementById("inner-item");
const closeBtn = document.getElementById("close");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
let currentIndex = 0;
for (let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function (e) {
    layer.style.display = "flex";
    let imgSrc = e.target.getAttribute("src");
    innerItem.style.backgroundImage = `url(${imgSrc})`;
    currentIndex = imgs.indexOf(e.target);
  });
}

closeBtn.addEventListener("click", closeSlide);
function closeSlide() {
  layer.style.display = "none";
}

nextBtn.addEventListener("click", nextSlide);

function nextSlide() {
  currentIndex++;
  if (currentIndex == imgs.length) {
    currentIndex = 0;
  }
  let imgSrc = imgs[currentIndex].getAttribute("src");
  innerItem.style.backgroundImage = `url(${imgSrc})`;
}

prevBtn.addEventListener("click", prevSlider);

function prevSlider() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = imgs.length - 1;
  }
  let imgSrc = imgs[currentIndex].getAttribute("src");
  innerItem.style.backgroundImage = `url(${imgSrc})`;
}


document.addEventListener("keydown",function(e){
  if(e.key == "ArrowRight"){
    nextSlide()
  }else if(e.key == "ArrowLeft"){
    prevSlider()
  }else if(e.key == "Escape"){
    closeSlide()
  }
})