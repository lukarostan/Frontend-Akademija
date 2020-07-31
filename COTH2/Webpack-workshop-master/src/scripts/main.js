/**
 * This is main project entry point
 */

// Styles import
import './parts/styles';

// jQuery entry point
import './parts/jQuery';

// Example Pages
import './pages/user-page';


//##########INTERFACE#########//

$(".logo").click(function(){
    window.location ="http://www.factory.hr";
})


$(".button").click(function(){
    $(".button").css("visibility","hidden");
    $(".main-container").css("display","none");
    $(".tournament-container").css("display", "flex");
    heroUser = heroN;
    fillTournament();
    
})



$(".header h1").click(function(){
    $(".button").css("visibility","visible");
    $(".main-container").css("display","flex");
    $(".tournament-container").css("display", "none");
})



const updateSelection = () => {
    $(".hero-card").css("display","none")
    $(".hero-card:nth-child("+heroN+")").css("display","flex")
    updateRow();
}

const updateRow = () =>{
    $(".hero-row:nth-child("+ heroN+")").css("filter","grayscale(0%)");
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




//##########INTERFACE END#########//

//##########BUSSINESS################//
const { get } = require("jquery");

var heroes = new Array;
const powerstats =  ["combat","durability","intelligence","power","speed","strength"]  
var heroN = 1;
var heroUser = 1;
var tournamentIDs = new Array;
var winners = new Array;


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
                $(".hero"+(j+i)).attr("title", data.name);
            })
    } 
}

let promise = new Promise((resolve,reject) => {
    getHeroes();
    if (heroes != undefined){
        resolve("Got data")
    }else if(heroes[0] == undefined) {
        reject("Get failed")
    }
})

promise.then((message) =>{
    console.log(message)
    console.log(heroes)
}).catch((message)=>{
    console.log(message)
    alert("Failed to get data from database. Please try again.")
})


function selectHeroes(){
    tournamentIDs = [0,1,2,3,4,5,6,7,8,9];
    let newPosition, temp;
    for(let i = tournamentIDs.length -1; i>0;i--){  
        newPosition = Math.floor(Math.random()*(i+1));
        temp = tournamentIDs[i];
        tournamentIDs[i] = tournamentIDs[newPosition];
        tournamentIDs[newPosition] = temp;
    } 
    tournamentIDs.length = 7;
    tournamentIDs.unshift(heroUser); 
    console.log("tournamentIDs: "+tournamentIDs);
    return tournamentIDs;
}




async function fillTournament(){
    
    await selectHeroes();
    for(let i = 0;i<8;i++){
        $(".tournament-container .hero"+(i)).attr("src",heroes[tournamentIDs[i]].image.url); 
        $(".tournament-container .hero"+(i)).attr("title",heroes[tournamentIDs[i]].name); 
        /* console.log(heroes[tournamentIDs[i]]); */
    }
    battle(0,1)
}

function round(i1, i2){
    let stat1 = 0;
    let stat2 = 0;
    stat1 = powerstats[Math.floor(Math.random() * (5 - 0) + 0)]
    stat2 = powerstats[Math.floor(Math.random() * (5 - 0) + 0)]
    while(stat1 == stat2){
        stat2 = powerstats[Math.floor(Math.random() * (5 - 0) + 0)];
    }
    if(( heroes[i1].powerstats[stat1] + heroes[i1].powerstats[stat2]) > (heroes[i2].powerstats[stat1] + heroes[i2].powerstats[stat2])){
        console.log("prvi")
        return true; //prvi je pobijedio

    }else if (( heroes[i1].powerstats[stat1] + heroes[i1].powerstats[stat2]) < (heroes[i2].powerstats[stat1] + heroes[i2].powerstats[stat2])){
        console.log("drugi")
        return false; //drugi je pobijedio
    }
}


function battle(i1,i2){

    var heroes1score = 0;
    var heroes2score = 0;
    while(heroes1score <2 && heroes2score <2){
        if(round(i1,i2)){
            heroes1score += 1
        }else if (round(i1,i2)==false){
            heroes2score += 1
        }
    }
    
    if(heroes1score > heroes2score){
        winners.push(heroes[i1]);
    }else if (heroes1score < heroes2score){
        winners.push(heroes[i2]);
    }
    console.log(winners);
    console.log(heroes1score +":"+ heroes2score);
}



//##########BUSSINESS END################//