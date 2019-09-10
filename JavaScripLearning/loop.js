process.stdin.once('data' , (input) => {
       var num = input.toString();
       function myLoop(i) {
           for (var i = 1;i < num ;  i++) {
               i = i++;
               console.log( i );
                    
           }        
           return i;
       }
       num = myLoop(num);
       console.log(num);
       process.exit();

});