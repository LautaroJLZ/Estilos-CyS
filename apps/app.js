let navvbar = document.querySelector(".nav-bar");
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
}
document.onclick = function(e){
  if(!hamburger.contains(e.target) && !navvbar.contains(e.target)){
    hamburger.classList.remove("active");
    navvbar.classList.remove("active");
  }
}