process.stdin.once('data', (input)=>{ 
    input = parseInt(input.toString());
    input = soNguyenTo(input);
    process.exit();
 })
function soNguyenTo(num) {
    var flag = true;
    if (num < 2) 
    {
        flag = false;
    }
    else{
        for(var i = 2; i < num - 1; i++){

            if (num % i ==0) {
                flag = false;
                break;
            }
        }

    }
    if (flag == true) {
        console.log("TRUE")
    }else{
        console.log("FALSE");
    }
        return num;
}
         
          
 