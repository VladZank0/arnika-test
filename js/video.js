let videoBlock = document.getElementById('video-wrapper'),
    video = document.getElementById('video');
    videoPreview = document.getElementById('video-preview');
    videoBlock.addEventListener('click', function() {
    if (video.paused) {
        video.play();
        videoPreview.classList.remove('hidden');
    } else {
        video.pause();
        videoPreview.classList.add('hidden');
    };
})