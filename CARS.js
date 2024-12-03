/* TOGGLE MENU BUTTON */
function toggleMenu() {
  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".nav");

  menu.classList.toggle("active");
  nav.classList.toggle("active");
}

/* CHANGE THE BACKGROUND VIDEO WHEN CLICK ON THE GALLERY IMAGES */

function changeVideo(name) {
  const bgvideoList = document.querySelectorAll(".bg-video");
  const trailers = document.querySelectorAll(".trailer");
  const models = document.querySelectorAll(".model");

  /* JAVASCRIPT HIGHER ORDER ARRAY FUNCTION FOREACH 
  THIS IS EASIER TO DO DATA MAPPING*/
  bgvideoList.forEach((video) => {
    video.classList.remove("active");
    if (video.classList.contains(name)) {
      video.classList.add("active");
    }
  });

  /* MAPPING MODEL NAME CHANGE */
  models.forEach((model) => {
    model.classList.remove("active");
    if (model.classList.contains(name)) {
      model.classList.add("active");
    }
  });

  /* MAPPING  TRAILOR CHANGE */
  trailers.forEach((video) => {
    video.classList.remove("active");
    if (video.classList.contains(name)) {
      video.classList.add("active");
    }
  });
}

// CHANGE THE PLAY AND PAUSE  BUTTON

function toggleplay() {
  const play = document.querySelector(".play");
  const pause = document.querySelector(".pause");

  play.classList.toggle("active");
  pause.classList.toggle("active");
}

/* PLAY PAUSE BUTTON */

function pauseVideo() {
  const bgvideoList = document.querySelectorAll(".bg-video");
  bgvideoList.forEach(video => {
    video.pause();
  });
// a challange for you 
// think how to hide in the screens on pause
  toggleplay();
}

function playVideo() {
  const bgvideoList = document.querySelectorAll(".bg-video");
  bgvideoList.forEach(video => {
    video.play();
  });
// think how to hide in the screens  play
// see the intro again if you dont't know what i mean
  toggleplay();
}
