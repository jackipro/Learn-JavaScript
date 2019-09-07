process.stdin.once('data' , (input) =>{
            var item = input.toString().trim().split(' ');
            var a = parseInt(item[0]);
            var b  = parseInt(item[1]);
            var add = a + b;
            var mul = a * b;           
            var sub = a - b;
            var divnum = a / b;
            var div = divnum.toFixed(2);
            if(b != 0 ) {
                console.log(add + " " + sub);
                console.log(mul + " " + div);
            } else {
                console.log(add + " " + sub);
            }           
            process.exit();
} );