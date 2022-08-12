<?php if (isset($_SERVER['HTTP_REFERER']) && (preg_match('/(.*)kooraonline.tv(.*)/', $_SERVER['HTTP_REFERER']))){ ?>



if (Hls.isSupported()) {
  const video = document.getElementById("video");
  const hls = new Hls();
  hls.attachMedia(video);

  hls.on(Hls.Events.MEDIA_ATTACHED, function() {
    console.log("video and hls.js are now bound together !");
    hls.loadSource(
      "https://livepeercdn.com/hls/4b1bhbpx2wzck4jn/index.m3u8"
    );
  });


  play.addEventListener("click", () => {
    console.log("play");
    video.play();
  });
  pause.addEventListener("click", () => {
    console.log("play");
    video.pause();
  });
}
<?php } else echo 'how r u !'; ?>
