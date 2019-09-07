var location1 = 2;
var location2 = 3;
var location3 = 4;
var banTrung = 0;
var chimTau = 0 ;
var soDaDoan = 0;
while (chimTau == false) {
    userInput = prompt("Input hear number 0 - 6: ");
    if (userInput < 0 || userInput > 6 ) {
            alert("Try again please ! " );
    } else {
        soDaDoan = soDaDoan + 1 ;
        if (userInput == location1 || userInput == location2 || userInput == location3) {
             banTrung  = banTrung + 1 ;  
             if (banTrung == 3 ) {
                 alert ("Sorry Baby :(((") ;
             }             
        }
    }
}

