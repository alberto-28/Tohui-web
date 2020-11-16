var animation = bodymovin.loadAnimation({
  container: document.getElementById('bm'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: './animations/anim.json'
})

LottieContainer.addEventListener('click', function() {
  lottieAnimation.play();
});


$('.carousel').carousel({
    interval: 3000
  })

