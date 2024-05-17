let videoBlock = document.getElementById('video-wrapper'),
    video = document.getElementById('video');
    videoPreview = document.getElementById('video-preview'),
    videoBtn = document.querySelector('.play-video-btn');
    videoBlock.addEventListener('click', function() {
    if (video.paused) {
        video.play();
        videoPreview.classList.remove('hidden');
        videoBtn.style.display = null;
    } else {
        video.pause();
        videoPreview.classList.add('hidden');
        videoBtn.style.display = 'none';
    };
})