(function($) {
    $.fn.passwordStrength = function(options){

        return this.each(function(){
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
                
                return strengthPoints;
            }

            function displayStrength(strengthPoints){
                console.log(strengthPoints);
                if (strengthPoints == 1)  {
                    console.log("To short")
                    $("span").css("color", "red");
                    $('span').text("Too Short");
                }
                else if (strengthPoints >= 2 && strengthPoints <= 3)  {
                    console.log("Weak")
                    $(".box1").css("background-color", "red");
                    $("span").css("color", "red");
                    $('span').text("Weak");
                }
                else if (strengthPoints >= 4 && strengthPoints <= 5)  {
                    console.log("Fair")
                    $(".box1").css("background-color", "yellow");
                    $(".box2").css("background-color", "yellow");
                    $("span").css("color", "yellow");
                    $('span').text("Fair");
                }
                else if (strengthPoints >= 6 && strengthPoints <= 7)  {
                    console.log("Good")
                    $(".box1").css("background-color", "orange");
                    $(".box2").css("background-color", "orange");
                    $(".box3").css("background-color", "orange");
                    $("span").css("color", "orange");
                    $('span').text("Good");
                }
                else if (strengthPoints >= 8)  {
                    console.log("Strong")
                    $(".box1").css("background-color", "green");
                    $(".box2").css("background-color", "green");
                    $(".box3").css("background-color", "green");
                    $(".box4").css("background-color", "green");
                    $("span").css("color", "green");
                    $('span').text("Strong");

                }
            }

            $("check").click(function () {
                $(".box1").css("background-color", "white");
                $(".box2").css("background-color", "white");
                $(".box3").css("background-color", "white");
                $(".box4").css("background-color", "white");
                let password = $("#Password").val();
                //console.log(password)

                let strengthPoints = checkStrength(password);
                displayStrength(strengthPoints)

            })//end of check click
        })
    }
    }(jQuery));//end of ready method