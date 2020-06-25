var igrac=0;
var smjer = 1;
for(i=1;i<100;i++){
    if(i%7==0){
        smjer = smjer * -1;
    }


    if (smjer == 1){
        igrac = igrac + 1;
    }
    if(smjer == -1){
        igrac = igrac - 1;
    }
    if(i%13==0){
        if (smjer == 1){
            igrac = igrac + 1;
        }
        if(smjer == -1){
            igrac = igrac - 1;
        }

    }
    if(igrac<1){
        igrac = igrac+10;
    } else if (igrac>10){
        igrac = igrac -10;
    }
    
    console.log("i: " +i+ " igrac: " +igrac );    
    console.log("smjer: "+smjer);
}
