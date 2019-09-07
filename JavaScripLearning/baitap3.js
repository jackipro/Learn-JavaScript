process.stdin.once('data' , (input) =>{
        var a = parseInt(input);
        var aMuHai = Math.pow(a, 2);
        var aMuBa = Math.pow(a, 3);
        var aMuBon = Math.pow(a, 4);
        console.log(aMuHai + " " + aMuBa + " " + aMuBon );
        process.exit();
});