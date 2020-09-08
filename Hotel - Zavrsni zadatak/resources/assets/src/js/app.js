var heroSliderN = 1;

$(".hero-slider .arrowback").on("click",function(){
    $(".hero-slider__item:nth-of-type("+heroSliderN+")").css("order", +1);
    heroSliderN +=1;
    if (heroSliderN == 4){
        heroSliderN = 1;
    }
    console.log(heroSliderN)
});