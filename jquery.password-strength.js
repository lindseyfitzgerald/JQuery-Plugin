$(document).ready(function(){
    function checkStrength(password) {
        let strengthPoints = 1;
        console.log(password)
        //if more than 5 charchters
            //if contains 1 capital letter
                //strength +1      
            //if contains number
                //sterngth +1
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