process.stdin.once('data', (input)=>{ 
   input = parseInt(input.toString());
   input = fibonaci(input);
   
   process.exit();
})
         function fibonaci(num) {
           var a = 1 , b = 0;
           while(num >= 1 && 0 < num <= 50){
              
              b = a + b;
              a = b - a;
              num --;     
              console.log(b);
            }
            
            return b;
         }
        
         
