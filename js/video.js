let videoBlock = document.getElementById('video-wrapper'),
    video = document.getElementById('video'),
    videoPreview = document.getElementById('video-preview'),
    videoBtn = document.querySelector('.play-video-btn');

videoBlock.addEventListener('click', function() {
    if (video.paused) {
        video.play();
        videoPreview.classList.add('hidden'); // Скрываем превью
        videoBtn.style.display = 'none';      // Скрываем кнопку
    } else {
        video.pause();
        videoPreview.classList.remove('hidden'); // Показываем превью
        videoBtn.style.display = 'block';        // Показываем кнопку
    }
});