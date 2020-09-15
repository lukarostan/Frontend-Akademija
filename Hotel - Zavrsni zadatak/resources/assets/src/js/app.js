$(document).ready(()=>{
    $(".reviews-slider").css("width",2*reviewsSliderSize);
    $(".news-slider").css("width",2*newsSliderSize);
})

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

let newsLeftCounter = 1;
let newsRightCounter = 1;
const newsSliderItem = $(".news-item");
const newsSliderSize = $(".news-item").outerWidth(true);
$(".news-left-button").on("mousedown",()=>{
    newsLeftCounter++;
    if(newsLeftCounter >= newsSliderItem.length){
        newsLeftCounter = 1;
    }
    if(newsRightCounter <= 1){
        newsLeftCounter = 1;
    }
    $(".news-item").css("transform","translateX(" + (-newsSliderSize * ( newsRightCounter - newsLeftCounter)) + "px)");
    console.log("left"+newsLeftCounter)
    console.log(newsSliderSize * newsLeftCounter)
})
$(".news-right-button").on("mousedown",()=>{
    newsRightCounter++;
    if(newsRightCounter >= newsSliderItem.length){
        newsRightCounter = 1;
    }
    $(".news-item").css("transform","translateX(" + (newsSliderSize * (newsLeftCounter - newsRightCounter)) + "px)");  
})

//Reviews Slider

$(".reviews-slider").css("width",2*reviewsSliderSize)
let reviewsLeftCounter = 1;
let reviewsRightCounter = 1;
const reviewsSliderItem = $(".news-item");
const reviewsSliderSize = $(".news-item").outerWidth(true);
$(".reviews-left-button").on("mousedown",()=>{
    reviewsLeftCounter++;
    if(reviewsLeftCounter >= reviewsSliderItem.length){
        reviewsLeftCounter = 1;
    }
    if(reviewsRightCounter <= 1){
        reviewsLeftCounter = 1;
    }
    $(".reviews-item").css("transform","translateX(" + (-reviewsSliderSize * ( reviewsRightCounter - reviewsLeftCounter)) + "px)");
})
$(".reviews-right-button").on("mousedown",()=>{
    reviewsRightCounter++;
    if(reviewsRightCounter >= reviewsSliderItem.length){
        reviewsRightCounter = 1;
    }
    $(".reviews-item").css("transform","translateX(" + (reviewsSliderSize * (reviewsLeftCounter - reviewsRightCounter)) + "px)");   
})

//Image Slider
const imageSliderItem = $(".image-slider img");
let imageSliderCounter = 0;
$(imageSliderItem[imageSliderCounter]).css("outline","3px solid #9B6333");

$(".image-left-button").on("mousedown",()=>{
    if(imageSliderCounter > 0){
        imageSliderCounter--;
    }
})
$(".image-right-button").on("mousedown",()=>{
    if(imageSliderCounter < imageSliderItem.length-1){
        imageSliderCounter++;
    }
})

$(".image-slider-container .nav-arrow").on("mousedown",()=>{
    $(imageSliderItem).css("outline","none")
    $(imageSliderItem[imageSliderCounter]).css("outline","3px solid #9B6333");
    $(".big-picture").attr('src',$(imageSliderItem[imageSliderCounter]).attr('src'));
})

//Datepicker
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