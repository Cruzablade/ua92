const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    })
});

const HE = document.querySelectorAll('.prohidden');
HE.forEach((ele) => obs.observe(ele));


var video = document.getElementById("background-video");
var btn = document.getElementById("myBtn");

video.pause();
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "||";
  } else {
    video.pause();
    btn.innerHTML = "▶";
  }
}