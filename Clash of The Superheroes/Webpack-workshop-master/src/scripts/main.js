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

 const getHeroes = () => {  //Salje request za 8 random heroja
    for(let i=0; i<8;i++){
        var id = Math.floor(Math.random()*733);
         sendRequest('get','https://superheroapi.com/api/2983210371755036/'+id);
    } 
    
} 
getHeroes();
console.log(heroes);



function battle(i1, i2){
/* console.log("i1s =  "+heroes[i1].powerstats.strength+"    i2s =   "+heroes[i2].powerstats.strength);
 */ 
    if(heroes[i1].powerstats.strength > heroes[i2].powerstats.strength){
        heroes[i1].score=1;
        heroes[i2].score=0;
    }else if(heroes[i1].powerstats.strength < heroes[i2].powerstats.strength){
        heroes[i2].score=1;
        heroes[i1].score=0;
    }else{
        heroes[i1].score=0;
        heroes[i2].score=0;
    }
    console.log(heroes[i1].name  +' - '+heroes[i2].name +'  '+heroes[i1].score+  ' : '+ heroes[i2].score);
}




setTimeout(function tournament () {
    /*  var stat1 =  Math.floor(Math.random() * (7 - 1) + 1);
    var stat2 =  Math.floor(Math.random() * (7 - 1) + 1);
    switch(stat1){
        case 1:
            switch(stat2){
                case 1: heroes[0].battleScore = heroes[0].powerstats.Intelligence + heroes[0].powerstats.Intelligence;
                break;
                    
                }
        break;
    }  */

    
    console.log("%c ****Četvrtfinale****","color:#a7c0cd;");
        battle(0,1);
        battle(2,3);
        battle(4,5);
        battle(6,7);
        
    console.log("%c ****Polufinale****","color:#a7c0cd;");
        
     function removeLosers(heroes){
        return heroes.score!=0;
        }
        heroes = heroes.filter(removeLosers);
        
        /* console.log(heroes); */

        battle(0,1);
        battle(2,3);
    
    console.log("%c ****Finale****","color:#a7c0cd;");
        heroes = heroes.filter(removeLosers);
            
        /* console.log(heroes); */

        battle(0,1);
        
        heroes = heroes.filter(removeLosers);
        if(heroes[0] == undefined){
            console.log("It's a draw!");
        }else{

        
        console.log(heroes[0].name +" is winner!");
        }
        

}, 1500);


/* 
Intelligence:1
Strength:2
Speed:3
Durability:4
Power:5
Combat:6 



*/

