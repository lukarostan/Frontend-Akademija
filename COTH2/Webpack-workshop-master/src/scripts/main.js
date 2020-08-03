/**
 * This is main project entry point
 */

// Styles import
import './parts/styles';

// jQuery entry point
import './parts/jQuery';

// Example Pages
import './pages/user-page';

const { get } = require("jquery");
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


$(".hero-button").on("mousedown",function(){
    $(".hero-button ").css({"background":"#0062ca"});
})
$(".hero-button").on("mouseup",function(){
    $(".hero-button ").css({"background":"#003DA7"});
})

function hidePrev(){
    $(".prev").css({"pointer-events":"none","background":"rgba(43, 43, 43, 0.09)"});
}
function showPrev(){
    $(".prev").css("pointer-events","auto");
    $(".next").css({"pointer-events":"auto","background":"#003DA7"});
}

$(".prev").mousedown(function(){
    if(heroN>=1 && heroN<=10){
        heroN -= 1;
        updateSelection();
    }
    if(heroN == 1){
        hidePrev();
    }else{
       showPrev();
    }
    checkRow();
    clearRow();
    
    if(heroN <= 1 ){
        heroN = 1;
    }
    
})

function hideNext(){
    $(".next").css({"pointer-events":"none","background": "rgba(43, 43, 43, 0.09)"});
}

function showNext(){
    $(".prev").css({"pointer-events":"auto","background":"#003DA7"});
    $(".next").css("pointer-events","auto");
}

$(".next").mousedown(function(){
    if(heroN>=1 && heroN<=10){
        heroN += 1;
        updateSelection();
    }
    if(heroN == 10){
        hideNext();
    }else{
        showNext();
    }
    checkRow();
    clearRow();
    
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

$(".random").on("mousedown",(function(){
    heroN= Math.floor(Math.random() * (10 - 1) + 1);
    console.log("random "+heroN);
    updateSelection();
    checkRow();
    clearRow();
    if(heroN == 1){
        hidePrev();
    }
    if(heroN == 10){
        hideNext();
    }
    else{
        showPrev();
        showNext();
    }
}))



$(".hero-row .hero1").click(function(){
    heroN = 1;
    updateSelection();
    checkRow();
    clearRow();
    hidePrev();
    
})

$(".hero-row .hero2").click(function(){
    heroN = 2;
    updateSelection();
    checkRow();
    clearRow();
    showPrev();
    showNext();
})
$(".hero-row .hero3").click(function(){
    heroN = 3;
    updateSelection();
    checkRow();
    clearRow();
    showPrev();
    showNext();
})
$(".hero-row .hero4").click(function(){
    heroN = 4;
    updateSelection();
    checkRow();
    clearRow();
    showPrev();
    showNext();
})
$(".hero-row .hero5").click(function(){
    heroN = 5;
    updateSelection();
    checkRow();
    clearRow();
    showPrev();
    showNext();
})
$(".hero-row .hero6").click(function(){
    heroN = 6;
    updateSelection();
    checkRow();
    clearRow();
    showPrev();
    showNext();
})
$(".hero-row .hero7").click(function(){
    heroN = 7;
    updateSelection();
    checkRow();
    clearRow();
    showPrev();
    showNext();
})
$(".hero-row .hero8").click(function(){
    heroN = 8;
    updateSelection();
    checkRow();
    clearRow();
    showPrev();
    showNext();
})
$(".hero-row .hero9").click(function(){
    heroN = 9;
    updateSelection();
    checkRow();
    clearRow();
    showPrev();
    showNext();
})
$(".hero-row .hero10").click(function(){
    heroN = 10;
    updateSelection();
    checkRow();
    clearRow();
    hideNext();
    
}) 


function checkRow(){
    $(".hero-row .hero"+(heroN)).css({"filter": "grayscale(0)",
    "opacity": "100%",
    "width": "90px",
    "height": "90px",
    "box-shadow": "4px 4px 92px -12px rgba(82,79,82,0.66)"})
}
function clearRow(){
    $(".hero-row").children().not(".hero-row .hero"+(heroN)).css({ "filter": "grayscale(98%)",
        "width": "60px",
        "opacity": "50%",
        "height": "60px"
    })
} 




//##########INTERFACE END#########//

//##########BUSSINESS################//



var heroes = new Array;
const powerstats =  ["combat","durability","intelligence","power","speed","strength"]  
var heroN = 1;
var heroUser = 1;
var tournamentIDs = new Array;
var winners = new Array;
var results = new Array;

 function fixNull(){
    
    console.log("pozvana")
    for(let i=0;i<10;i++){
        if(heroes[i].powerstats.combat == null){
            console.log("null je")
            heroes[i].powerstats.combat = "0";
        } if(heroes[i].powerstats.durability == null){
            heroes[i].powerstats.durability = "0";
        } if(heroes[i].powerstats.intelligence == null){
            heroes[i].powerstats.intelligence = "0";
        } if(heroes[i].powerstats.power == null){
            heroes[i].powerstats.power = "0";
        } if(heroes[i].powerstats.speed == null){
            heroes[i].powerstats.speed = "0";
        } if(heroes[i].powerstats.strength == null){
            heroes[i].powerstats.strength = "0";
        }
    }
}

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
    
    final();
}

function round(i1, i2){
    
    let stat1 = 0;
    let stat2 = 0;
    stat1 = powerstats[Math.floor(Math.random() * (5)) ]
    stat2 = powerstats[Math.floor(Math.random() * (5) )]
    while(stat1 == stat2){
        stat2 = powerstats[Math.floor(Math.random() * (5 - 0) + 0)];
    }
    
    if(( heroes[i1].powerstats[stat1] + heroes[i1].powerstats[stat2]) > (heroes[i2].powerstats[stat1] + heroes[i2].powerstats[stat2])){
        
        return true; //prvi je pobijedio

    }else if (( heroes[i1].powerstats[stat1] + heroes[i1].powerstats[stat2]) < (heroes[i2].powerstats[stat1] + heroes[i2].powerstats[stat2])){
        
        return false; //drugi je pobijedio
    }
}


function battle(i1,i2){
    var heroes1score = 0;
    var heroes2score = 0;

    while(heroes1score <2 && heroes2score <2){
        if( round(i1,i2) ){
            heroes1score += 1
        }else if ( round(i1,i2) == false){
            heroes2score += 1
        }
        
    }

    if(heroes1score > heroes2score){
        winners.push(i1);
        heroes[i1].qfinal = true;
    }else if (heroes1score < heroes2score){
        winners.push(i2);
        heroes[i2].qfinal = true;
    }
    console.log(winners);
    results.push(heroes1score +":"+ heroes2score);
    console.log(results)

}


function quarterFinal(){
    battle(tournamentIDs[0],tournamentIDs[1])
    $(".result1").text(results[0]);
    battle(tournamentIDs[2],tournamentIDs[3])
    $(".result2").text(results[1]);
    battle(tournamentIDs[4],tournamentIDs[5])
    $(".result3").text(results[2]);
    battle(tournamentIDs[6],tournamentIDs[7])
    $(".result4").text(results[3]);

    for(let i=0;i<4;i++){
        $(".winner"+(i+1)).attr("src",heroes[winners[i]].image.url);
        $(".winner"+(i+1)).css({"width":"60px","height":"60px","margin":"0"});     
    }
}

    
   
    async function semiFinal(){

        await quarterFinal();

        battle(winners[0],winners[1]);
        $(".result5").text(results[4]);
        battle(winners[2],winners[3]);
        $(".result6").text(results[5]); 
         
        console.log(winners)

        $(".winner5").attr("src",heroes[winners[4]].image.url);
        $(".winner6").attr("src",heroes[winners[5]].image.url);
        $(".winner5").css({"width":"60px","height":"60px","margin":"0"});
        $(".winner6").css({"width":"60px","height":"60px","margin":"0"});

    }
    async function final(){ 
        await semiFinal();
        battle(winners[4],winners[5]);
        $(".result7").text(results[6]); 

        $(".winnerfinal").attr("src",heroes[winners[6]].image.url);
        $(".winnerfinal").css({"width":"100px","height":"100px","margin":"0"});
    }


//##########BUSSINESS END################//