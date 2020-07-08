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
getHeroes();

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

setTimeout(function tournament () {

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
