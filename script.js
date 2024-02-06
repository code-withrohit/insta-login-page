document.addEventListener('DOMContentLoaded', function(){
    const slidesContainer = document.querySelector('.slides');
    const slides = document.querySelectorAll('.slides img');

    let currentSlideIndex = 0;
    const intervalTime =4000;
    const holdTime  = 2000;

        function changeSlide(){
            slides.forEach(slide => slide.style.opacity = 0);
            slides[currentSlideIndex].style.opacity = 1;
            currentSlideIndex++;

            if(currentSlideIndex == slides.length){
                currentSlideIndex = 0;
            }
            setTimeout(changeSlide, intervalTime);
        }
        slides[currentSlideIndex].style.opacity = 1;
        setTimeout(changeSlide,intervalTime + holdTime);
})
