process.stdin.once('data', (input) =>{
    var items = input.toString().trim().split(' ');
    var a = parseInt(items[0]);
    var b = parseInt(items[1]);
    var chuVi = (a + b) * 2 ;
    var dienTich = a * b ;
    console.log(chuVi + " " + dienTich);
    process.exit();
});