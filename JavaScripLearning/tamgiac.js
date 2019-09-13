process.stdin.once('data', (input) =>{ 
        var tamGiac = input.toString().split(' ');
        var canhA = parseFloat(tamGiac[0]);
        var canhB = parseFloat(tamGiac[1]);
        var canhC = parseFloat(tamGiac[2]);
        function checkTamGiac(canhA, canhB, canhC) {
            if (canhA + canhB > canhC && canhA + canhC > canhB && canhB + canhC >canhA) {
                var p1 =canhA + canhB + canhC;
                var chuVi = (canhA + canhB + canhC)/2;
                var s = Math.sqrt(chuVi*(chuVi - canhA)*(chuVi-canhB) * (chuVi- canhC));
                console.log(p1.toFixed(2) + " " + s.toFixed(2));          
            } else{
                console.log("NO");
            }
            return canhA, canhB , canhC;
        }
        checkTamGiac(canhA,canhB,canhC);
        process.exit();
       
});