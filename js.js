// Lấy phần tử thẻ a và video
const showVideoLink = document.getElementById('show-video-link');
const videoContainer = document.getElementById('video-container');
const video = document.getElementById('video');

// Khi click vào thẻ a, hiển thị video
showVideoLink.addEventListener('click', function(event) {
    // Ngăn chặn hành động mặc định của thẻ a
    event.preventDefault();
    
    // Hiển thị container chứa video
    videoContainer.classList.remove('video1');
    // Tự động phát video khi được hiển thị
    video.play();
});
