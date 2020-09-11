


var reviewSliderN = 1;
$(document).ready(function reviewSlider(params) {
    $(".reviews-left-button").on("mousedown",function () {
        reviewSliderN -=1;
        console.log(reviewSliderN);
    })
    
    $(".reviews-right-button").on("mousedown",function () {
        reviewSliderN +=1;
        console.log(reviewSliderN);
    })
})