var video = document.getElementById("shop-video");
var btn = document.getElementById("myBtn2");

video.pause();
function myFunction1() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "||";
  } else {
    video.pause();
    btn.innerHTML = "▶";
  }
}