$(document).ready(function(){
    function checkNumber(password){
        let i = 0;
        let points = 0;
        while(i < password.length){
            if(!isNaN(password.charAt(i)) && !(password.charAt(i) === " ")) {
                i++;
                points++;
                console.log("Contains number");
            }
            else{
                i++;
            }
        }
        if (points > 3){
            return points = 3;
        }
        else if (points <= 3) {
            return points;
        }

    }

    function checkUpperCase(password) {
        let i = 0;
        let points = 0;
        while(i < password.length){
            if(isNaN(password.charAt(i))) {
                if(password.charAt(i) == password.charAt(i).toUpperCase()) {
                    i++;
                    points++;
                    console.log("Contains upper case");
                }
                else{
                    i++;
                }
            }
            else{
                i++;
            }
        }
        if (points > 3){
            return points = 3;
        }
        else if (points <= 3) {
            return points;
        }

    }
    
    function checkSpecialChar(password){
        const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        let points = 0;
        let i = 0;
        while(i < password.length){
            if(format.test(password.charAt(i))){
                points++;
                i++;
            } 
            else {
                i++;
            }
        }
        return points;
    }
    function checkStrength(password) {
        let strengthPoints = 1;
        console.log(password)
        if (password.length >= 5) {
            //Check for upper case. +1 for each Upper case letter until 3pts. 
            strengthPoints +=checkUpperCase(password);
            strengthPoints +=checkNumber(password);
            strengthPoints +=checkSpecialChar(password);
        }
        else{
            console.log("Not long enough")
        }
            
            //if contains character
                //strength +1
        //if strength >= 3
            //strength +1
        return strengthPoints;
    }

    function displayStrength(strengthPoints){
        console.log(strengthPoints);
    }

    $("#check").click( () => {
        let password = $("#Password").val();
        //console.log(password)

        let strengthPoints = checkStrength(password);
        displayStrength(strengthPoints)

    });//end of check click
   
});//end of ready method