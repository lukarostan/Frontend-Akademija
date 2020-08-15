/**
 * This is main project entry point
 */

// Styles import
import './parts/styles';

// jQuery entry point
import './parts/jQuery';

// Example Pages
import './pages/user-page';

var sidebarOpened = false;
var childOpened = false;
var sidebarWidth;

$(window).on("load",function(){
    $("body").css("background-image","url("+ $("#bg").attr("src") +")");
    
})

$(".menu-button").on("mousedown",function(){
    
    if(screen.width > 600){
        sidebarWidth = 15.6;
    }else if (screen.width <= 600){
        sidebarWidth = 100;
        $(".sidebar-item").css("width","90%");
        $(".sidebar-item__child").css ("width","100%");
        $("#children1").css ("width","90%");
        $("#children2").css ("width","90%");
    }
    
    if(sidebarOpened){
        $(".sidebar").css({"width":"0", "background": "rgba(56, 59, 55, 0.05)"});
        $(".sidebar-container").css({"display":"none"});
        $(".menu-button :nth-child(1)").css({"transform":"rotate(360deg)"})
        $(".menu-button :nth-child(2)").css({"opacity":"100"})
        $(".menu-button :nth-child(3)").css({"transform":"rotate(-360deg)"})
        sidebarOpened = false
    }else{ 
        $(".sidebar").css({"width": +sidebarWidth+"vw", "background": "rgba(56, 59, 55, 0.95)"});
        $(".menu-button :nth-child(1)").css({"transform":"rotate(45deg) translateY(1.9vh)"})
        $(".menu-button :nth-child(2)").css({"opacity":"0"})
        $(".menu-button :nth-child(3)").css({"transform":"rotate(-45deg) translateY(-1.9vh)"})
        setTimeout(function(){ $(".sidebar-container").css({"display":"flex"}); }, 250);
        sidebarOpened = true
    }


})

$("#aboutus").on("mousedown",function(){
    if(childOpened){
        $("#triangle1").css("transform","rotate(360deg)")
        $("#aboutus").css({"background-color": "","border-left": ""})
        $("#children1").css("display","none")
        childOpened = false;
    }else{
        $("#triangle1").css("transform","rotate(180deg)")
        $("#aboutus").css({"background-color": "#1E201D","border-left": "2px solid #85B2FF"})
        $("#children1").css("display","block")
        childOpened = true;
    }
})



$("#planetearth").on("mousedown",function(){
    if(childOpened){
        $("#triangle2").css("transform","rotate(360deg)")
        $("#planetearth").css({"background-color": "","border-left": ""})
        $("#children2").css("display","none")
        childOpened = false;
    }else{
        $("#triangle2").css("transform","rotate(180deg)")
        $("#planetearth").css({"background-color": "#1E201D","border-left": "2px solid #85B2FF"})
        $("#children2").css("display","block")
        childOpened = true;
    }
})