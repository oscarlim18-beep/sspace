// FILTER
const buttons = document.querySelectorAll(".project-filter button");
const items = document.querySelectorAll(".project-item");

buttons.forEach(btn=>{
  btn.addEventListener("click", ()=>{
    document.querySelector(".active").classList.remove("active");
    btn.classList.add("active");

    let filter = btn.getAttribute("data-filter");

    items.forEach(item=>{
      if(filter === "all" || item.classList.contains(filter)){
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// LIGHTBOX
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

document.querySelectorAll(".project-card img").forEach(img=>{
  img.addEventListener("click", ()=>{
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

document.querySelector(".close").onclick = ()=>{
  lightbox.style.display = "none";
};

lightbox.onclick = (e)=>{
  if(e.target !== lightboxImg){
    lightbox.style.display = "none";
  }
};