var game_swiper_for_NSL = new Swiper('#game_swiper_for_NSL',{
    direction: 'vertical',
    navigation: {
        nextEl: '#NSL_Digital',
        prevEl: '#NSL_Cassette',
    },
});

var game_swiper_for_NSL_Cassette = new Swiper('#game_swiper_for_NSL_Cassette',{
    navigation: {
        nextEl: '#NSLCnext',
        prevEl: '#NSLCprev',
    },
    spaceBetween: 52.4,
    slidesPerView: 6,
})

var game_swiper_for_NSL_Dassette = new Swiper('#game_swiper_for_NSL_Digital',{
    navigation: {
        nextEl: '#NSLDnext',
        prevEl: '#NSLDprev',
    },
    spaceBetween: 42,
    slidesPerView: 5,
})

var game_swiper_for_WIIU = new Swiper('#game_swiper_for_WIIU',{
    navigation: {
        nextEl: '#WIIUnext',
        prevEl: '#WIIUprev',
    },
    spaceBetween: 30.8,
    slidesPerView: 6,
});

var game_swiper_for_3DSLL = new Swiper('#game_swiper_for_3DSLL',{
    navigation: {
        nextEl: '#N3DSLLnext',
        prevEl: '#N3DSLLprev',
    },
    spaceBetween: 42,
    slidesPerView: 5,
});