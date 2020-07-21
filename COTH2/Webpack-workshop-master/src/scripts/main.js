/**
 * This is main project entry point
 */

// Styles import
import './parts/styles';

// jQuery entry point
import './parts/jQuery';

// Example Pages
import './pages/user-page';



var heroN = 1;
var heroUser = 1;
var tournamentHeroes = new Array;

$(".logo").click(function(){
    window.location ="http://www.factory.hr";
})

$(".button").click(function(){
    $(".button").css("visibility","hidden");
    $(".main-container").css("display","none");
    $(".tournament-container").css("display", "flex");
    
    fillTounament();
})

function selectHeroes(){
    tournamentHeroes = [];
    heroUser = heroN;
    tournamentHeroes[0] = heroes[heroUser];
    for(let i=0;i<7;i++){
        var j = Math.floor(Math.random() * (10 - 1) + 1);
        tournamentHeroes.push(heroes[j]);
    }
    console.log(tournamentHeroes);
    return tournamentHeroes;
}

function fillTounament(){
    selectHeroes();
    for(let i = 1;i<9;i++){
        $(".tournament-container .hero"+(i+1)).attr("src",tournamentHeroes[i].image.url);
    }
}



$(".header h1").click(function(){
    $(".button").css("visibility","visible");
    $(".main-container").css("display","flex");
    $(".tournament-container").css("display", "none");
})



console.log(heroN);

const updateSelection = () => {
    $(".hero-card").css("display","none")
    $(".hero-card:nth-child("+heroN+")").css("display","flex")
    updateRow();
}

const updateRow = () =>{
    $(".hero-row:nth-child("+ heroN+")").css("filter","grayscale(0%)")
}


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
    
    
    heroN= Math.floor(Math.random() * (10 - 1) + 1);
    console.log("random "+heroN);
    updateSelection();
    
    
})



const { get } = require("jquery");
var heroes = new Array;


function getHeroes(){
    for(let i=0; i<10 ;i++){ 
        var id = Math.floor(Math.random()*733);
        $.getJSON("https://superheroapi.com/api/2983210371755036/"+ id , (data, status) => {
             
                heroes.push(data);
              
        })
            .done(function(data){
                let j = 1
                $(".hero"+(j+i)).attr("src",data.image.url);
                $(".hero"+(j+i)).attr("alt",data.name);
                $(".hero"+(j+i)+"-name").text(data.name);
                
            })
            
    } 
}
getHeroes();
console.log(heroes);

function round(i1, i2){
    const powerstats = ["combat","durability","intelligence","power","speed","strength"]
    

}

/* setTimeout(function tournament () {

    console.log("%c ****Četvrtfinale****","color:#1976d2;");
        round(0,1);
        round(2,3);
        round(4,5);
        round(6,7);
        
    console.log("%c ****Polufinale****","color:#1976d2;");
        
     function removeLosers(heroes){
        return heroes.score!=0;
        }
        heroes = heroes.filter(removeLosers);
        
        round(0,1);
        round(2,3);
    
    console.log("%c ****Finale****","color:#1976d2;");
        heroes = heroes.filter(removeLosers);
            
        round(0,1);
        
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







$(".hero-row .hero1").click(function(){
    heroN = 1;
    updateSelection();
})
$(".hero-row .hero2").click(function(){
    heroN = 2;
    updateSelection();
})
$(".hero-row .hero3").click(function(){
    heroN = 3;
    updateSelection();
})
$(".hero-row .hero4").click(function(){
    heroN = 4;
    updateSelection();
})
$(".hero-row .hero5").click(function(){
    heroN = 5;
    updateSelection();
})
$(".hero-row .hero6").click(function(){
    heroN = 6;
    updateSelection();
})
$(".hero-row .hero7").click(function(){
    heroN = 7;
    updateSelection();
})
$(".hero-row .hero8").click(function(){
    heroN = 8;
    updateSelection();
})
$(".hero-row .hero9").click(function(){
    heroN = 9;
    updateSelection();
})
$(".hero-row .hero10").click(function(){
    heroN = 10;
    updateSelection();
})

