# JQuery-Plugin
JQuery Password Strength plugin in a simple plugin designed to check the strength of a user provided password. 
To download this plugin you will need the latest jquery installed. V3.6.0
To use the plugin simply call the check method as shown below:

![image](https://user-images.githubusercontent.com/84094288/144269025-516ed06c-d4bc-4130-965c-0f72434a3edf.png)

# How does the plugin work?
The password strength plugin ia based on a point system. For each character in the password a point is given based on length, capital letters, numbers or special characters. 
The password strengths are:

  -Too Short
  
    Password length less than 5 characters. Will populate error message
    
  -Weak
  
    2-3 points
    1 > capital letter
    
  -Fair
  
    4-5 points
    2 > capital letter OR numbers
    
  -Good
  
    6-7 points
    Must contain special character
    2 > capital letter OR numbers
    
  -Strong
  
    8+ points
    2 > special character
    2 > numbers
    1 > capital letter
  
  
