"Use strict"

const reviewsSwiper = document.querySelector('.swiper-reviews');

if (reviewsSwiper) {
    const swiper = new Swiper('.swiper-reviews', {
        // Optional parameters
        autoHeight: true,
        loop: false,
        // If we need pagination
        pagination: {
            el: '.swiper-reviews__pagination',
            clickable: true
        }
    });
}

