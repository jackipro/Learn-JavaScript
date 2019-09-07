process.stdin.once('data' , (input) =>{
    var R = parseFloat(input);
    var S = (4*(Math.PI.toFixed(2))) * Math.pow(R, 2);
    var V = (4/3) * (Math.PI.toFixed(2)) * Math.pow(R,3);
    console.log(S.toFixed(2) + " " + V.toFixed(2));
    process.exit();
});