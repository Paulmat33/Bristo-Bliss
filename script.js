hamburger = document.querySelector('#hamburger');
hamburger.onclick = function(){
    navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('active');
}

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (this.scrollY >= 100) {
    toTop.classList.add("active2");
  } else {
    toTop.classList.remove("active2");
  }
})


