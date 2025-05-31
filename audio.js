const audio = new Audio('./audio/em.mp3');
audio.loop = true;
audio.volume = 0;

window.addEventListener('load', () => {
  audio.play().then(() => {
    setTimeout(() => {
      audio.volume = 0.5;
    }, 1000);
  }).catch(() => {
    console.log('Phải chờ tương tác người dùng để phát nhạc');
  });
});
