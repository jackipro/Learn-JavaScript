process.stdin.once('data' , (input) =>{
        input = parseInt(input.toString());
        input = tongS(input);
        process.exit();
        });
function tongS(n) {      
                var total = 0 ;                  
                for( var i = 1;  i <= n; i++){                   
                       total +=  1/i;
                }
                console.log(total.toFixed(6));
                
}