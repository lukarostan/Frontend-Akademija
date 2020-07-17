/**
 * This is main project entry point
 */

// Styles import
import './parts/styles';

// jQuery entry point
import './parts/jQuery';

// Example Pages
import './pages/user-page';


$(".logo").click(function(){
    window.location ="http://www.factory.hr";
})

$(".button").click(function(){
    $(".button").css("visibility","hidden");
    $(".main-container").css("display","none");
    $(".tournament-container").css("display", "flex");
})

$(".header h1").click(function(){
    $(".button").css("visibility","visible");
    $(".main-container").css("display","flex");
    $(".tournament-container").css("display", "none");
})

var heroN = 1;

console.log(heroN);



$(".hero-button").click(function(){
    if(heroN < 2 ){
        $(".prev").css("opacity","0%")
    }else{$(".prev").css("opacity","100%")}
    
    if(heroN > 9){
        $(".next").css("opacity","0%")
    }else{$(".next").css("opacity","100%")}
    
    
    $(".hero-card:nth-child("+ (heroN -1)  +")").css("display","none")
})

/* $(".prev").on("mousedown",function(){
    $(".prev img").css("transform","rotate(180deg) translateX(10px)");
    
})
$(".prev").on("mouseup",function(){
    $("prev img").css("transform","rotate(180deg) translateX(0px)");
    
}) */


$(".prev").click(function(){
    if(heroN>=1 && heroN<=10){
        heroN -= 1;
        $(".hero-card:nth-child("+heroN+")").css("display","flex")
        $(".hero-card:nth-child("+ (heroN +1)  +")").css("display","none")
    }
    /* $(".hero-card:nth-child("+(heroN+1)+")").animate({transform:"translateY(200px)"},"1000ms");
    $(".hero-card:nth-child("+(heroN)+")").animate({transform:"translateY(200px)"},"1000ms"); */
    console.log(heroN);
    if(heroN <= 1 ){
        heroN = 1;
    }
    
})

$(".next").click(function(){
    if(heroN>=1 && heroN<=10){
        heroN += 1;
        $(".hero-card:nth-child("+heroN+")").css("display","flex")
        $(".hero-card:nth-child("+ (heroN -1)  +")").css("display","none")
    }
    /* $(".hero-card:nth-child("+(heroN+1)+")").animate({transform:"translateY(200px)"},"1000ms");
    $(".hero-card:nth-child("+(heroN)+")").animate({transform:"translateY(200px)"},"1000ms"); */
    console.log(heroN);
    if(heroN >= 10 ){
        heroN = 10;
    }
})


$(".random").on("mousedown",function(){
    $(".random").css("font-size","22px");
})
$(".random").on("mouseup",function(){
    $(".random").css("font-size","16px");
})

$(".random").click(function(){
    
    $(".hero-card").css("display","none")
    heroN= Math.floor(Math.random() * (10 - 1) + 1);
    console.log("random "+heroN);
    $(".hero-card:nth-child("+heroN+")").css("display","flex")
    
})



const { get } = require("jquery");
var heroes = new Array;
const sendRequest = (method, url) => {
    let req = new XMLHttpRequest();
    req.open(method, url);
    req.responseType = 'json';
    req.send();
    req.onload =  function() {
        heroes.push(req.response);
    }
    return heroes;
}

 const getHeroes = () => { 
    for(let i=0; i<8;i++){
        var id = Math.floor(Math.random()*733);
         sendRequest('get','https://superheroapi.com/api/2983210371755036/'+id);
    }
}
setTimeout(function() { getHeroes();
console.log(heroes);}, 500);


function battle(i1, i2){
    if((heroes[i1].powerstats.strength + heroes[i1].powerstats.intelligence) > (heroes[i2].powerstats.strength + heroes[i1].powerstats.intelligence)){
        heroes[i1].score=1;
        heroes[i2].score=0;
    }else if((heroes[i1].powerstats.strength + heroes[i1].powerstats.intelligence) < (heroes[i2].powerstats.strength + heroes[i1].powerstats.intelligence)){
        heroes[i2].score=1;
        heroes[i1].score=0;
    }else{
        heroes[i1].score=0;
        heroes[i2].score=0;
    }
    console.log(heroes[i1].name  +' - '+heroes[i2].name +'  '+heroes[i1].score+  ' : '+ heroes[i2].score);
}

/* setTimeout(function tournament () {

    console.log("%c ****Četvrtfinale****","color:#1976d2;");
        battle(0,1);
        battle(2,3);
        battle(4,5);
        battle(6,7);
        
    console.log("%c ****Polufinale****","color:#1976d2;");
        
     function removeLosers(heroes){
        return heroes.score!=0;
        }
        heroes = heroes.filter(removeLosers);
        
        battle(0,1);
        battle(2,3);
    
    console.log("%c ****Finale****","color:#1976d2;");
        heroes = heroes.filter(removeLosers);
            
        battle(0,1);
        
        heroes = heroes.filter(removeLosers);
        if(heroes[0] == undefined){
            console.log("It's a draw!");
            alert("It's a draw!");
        }else{

        console.log(heroes[0].name +" is winner!");
        }
        alert(heroes[0].name+" is winner!")
}, 1500);
 */




$(".hero1").attr("src","https://www.superherodb.com/pictures2/portraits/10/100/17.jpg")
$(".hero2").attr("src","https://www.superherodb.com/pictures2/portraits/10/100/757.jpg")
$(".hero3").attr("src","https://www.superherodb.com/pictures2/portraits/10/100/717.jpg")
$(".hero4").attr("src","https://www.superherodb.com/pictures2/portraits/10/100/7.jpg")
$(".hero5").attr("src","https://www.superherodb.com/pictures2/portraits/10/100/57.jpg")
$(".hero6").attr("src","https://www.superherodb.com/pictures2/portraits/10/100/77.jpg")
$(".hero7").attr("src","https://www.superherodb.com/pictures2/portraits/10/100/3.jpg")
$(".hero8").attr("src","https://www.superherodb.com/pictures2/portraits/10/100/1.jpg")
$(".hero9").attr("src","https://www.superherodb.com/pictures2/portraits/10/100/77.jpg")
$(".hero10").attr("src","https://www.superherodb.com/pictures2/portraits/10/100/77.jpg") 