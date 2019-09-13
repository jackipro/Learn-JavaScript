process.stdin.once('data' , (input) => {     
        var item = input.toString().split(' ');
        a = parseFloat(item[0]);
        b = parseFloat(item[1]);
        c = parseInt(item[2]);
        a,b,c = tinhPhuongTrinh(a,b,c);             
        process.exit();
});
        function tinhPhuongTrinh(a,b,c){
                var delta = Math.pow(b,2) - 4* a * c; 
                var x1, x2 = parseFloat();
                
                if(delta > 0 && a != 0) {
                var x1 = (-b - Math.sqrt(delta))/(2*a);
                var x2 = (-b + Math.sqrt(delta))/(2*a);  
                console.log(x1.toFixed(2)+ " " + x2.toFixed(2)); 
                } else if (delta == 0 && a != 0) {
                var x1 = -b/(2*a);          
                console.log("x = "+ x1.toFixed(2));
                } else if (delta < 0 && a != 0  || a==0 && b==0 || a==0 && b==0 && c==0) {
                        console.log("VN");
                } else if (( (a==0) && (b==0) &&(c ==0) )) {
                        console.log('VSN');
                }else if(a==0 && b!=0){
                        var x1= -c/b;
                        x1=x1.toFixed(2);
                        console.log("x = "+x1);
                }
                return x1,x2;
               
        }