process.stdin.once('data' ,(input) => {
            var item = input.toString().split(' ');
            var num1 = parseInt(item[0]);
            var num2 = parseInt(item[1]);
            var num3 = parseInt(item[2]);
            var num4 = parseInt(item[3]);
            function findMax(num1,num2,num3,num4) {
                var max = Math.max.apply(Math, item); 
                console.log(max);
                return max;                        
            }
            findMax(num1,num2,num3,num4);
            process.exit();


});