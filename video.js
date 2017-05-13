var videoDiv = document.querySelector('.video');
var video  = document.querySelector('.video > *');

enableInlineVideo(video);

window.onscroll = function() {
  var scrolled = window.pageYOffset;
    if (scrolled > 167) {
    setTimeout(function () { video.style.display = "block";}, 1000);
  	videoDiv.classList.add ('animation');
  }
}

videoDiv.onclick = function (){
    if (video.muted === true) {    
        video.muted = false;
    }
    else {
        video.muted = true;
    }

    };

enableInlineVideo(video, {
    iPad: true
});


