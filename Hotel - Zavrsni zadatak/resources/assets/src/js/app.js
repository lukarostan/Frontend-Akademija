//Hero Slider

let heroSliderCounter = 1;
const heroSliderItem = $(".hero-slider__item");
const heroSliderSize = $(".hero-slider__item").outerWidth(true);

$(".hero-left-button").on("click",()=>{
    $(".hero-slider__item").css("transform","translateX(" + (-heroSliderSize * heroSliderCounter) + "px)");
    heroSliderCounter++;
    if(heroSliderCounter > (heroSliderItem.length-1)){
        heroSliderCounter = 0;
    }
})

//News Slider

let newsSliderCounter = 1;
const newsSliderItem = $(".news-item");
const newsSliderSize = $(".news-item").outerWidth(true);


$(".news-left-button").on("mousedown",()=>{
    if(newsSliderCounter < 1){
        newsSliderCounter = 1;
    }
    $(".news-item").css("transform","translateX(" + (-newsSliderSize * newsSliderCounter) + "px)");
    newsSliderCounter--;
    console.log(newsSliderCounter)
})
$(".news-right-button").on("mousedown",()=>{
    if(newsSliderCounter > newsSliderItem.length-2){
        newsSliderCounter = newsSliderItem.length-2;
    }
    $(".news-item").css("transform","translateX(" + (-newsSliderSize * newsSliderCounter) + "px)");
    newsSliderCounter++;
    console.log(newsSliderCounter)        
    
})

//Reviews Slider
let reviewsSliderCounter = 1;
const reviewsSliderItem = $(".reviews-item");
const reviewsSliderSize = $(".reviews-item").outerWidth(true);


$(".reviews-left-button").on("mousedown",()=>{
    if(reviewsSliderCounter < 1){
        reviewsSliderCounter = 1;
    }
    $(".reviews-item").css("transform","translateX(" + (-reviewsSliderSize * newsSliderCounter) + "px)");
    reviewsSliderCounter--;
    console.log(reviewsSliderCounter)
})
$(".reviews-right-button").on("mousedown",()=>{
    if(reviewsSliderCounter > reviewsSliderItem.length-1){
        reviewsSliderCounter = reviewsSliderItem.length-1;
    }
    $(".reviews-item").css("transform","translateX(" + (reviewsSliderSize * newsSliderCounter) + "px)");
    reviewsSliderCounter++;
    console.log(reviewsSliderCounter)        
    
})


//Date picker
$(function(){
    $(".from-date-container input").datepicker(
    {dateFormat: "yy-mm-dd",
    firstDay: 1,
    minDate: new Date(2020,11,9),
    maxDate: new Date(2020,20,9)
});
    $(".to-date-container input").datepicker({
        dateFormat:"yy-mm-dd",
        firstDay: 1
    });

});