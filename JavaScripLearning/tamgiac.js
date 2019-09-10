process.stdin.once('data', (input) =>{ 
        var tamGiac = input.toString().split(' ');
        var canhA = parseInt(tamGiac[0]);
        var canhB = parseInt(tamGiac[1]);
        var canhC = parseInt(tamGiac[2]);
        function checkTamGiac(canhA, canhB, canhC) {
            if (canhA + canhB > canhC && canhA + canhC > canhB && canhB + canhC >canhA) {
                var p =(canhA + canhB + canhC)/2;
                var s = Math.sqrt(p*(p - canhA)*(p-canhB) * (p- canhC));
                console.log(p.toFixed(2) + " " + s.toFixed(2));
                
            } else{
                console.log("NO");
            }
            return canhA, canhB , canhC;
        }
        checkTamGiac(canhA,canhB,canhC);
        process.exit();
       
});