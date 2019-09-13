process.stdin.once('data', (input)=>{ 
    input = parseInt(input.toString());
    input = cuocDt(input);
    process.exit();
 })
function cuocDt(num) {
    var a = (num*600) + 25000;
   
    var x = (600*(num-1)) + 400 + 25000;
    var z = (50*600) + (150*400) +25000 ;
    var y = (num -1) * (400+200);
    var b = (num - 200)*200+(150*400)+(50*600) + 25000;
   
    if (num <= 50) {
        console.log("So tien = " + a);
    } else if(num > 50 && num <=150){
        console.log("So tien = " + x);
    } else if(num > 150 && num  < 200){
        console.log("So tien = " + y);
    } else if(num  == 200){
        console.log("So tien = " + z);
    } else if(num > 200){
        console.log("So tien = " + b);
    }
    return num;
}
//var z = (600*50) +(400*150) + (200*(num-1));
// goi 51p thi tinh  = (600*50) + 400 = 
// goi 151p          = 150 * (400+200)
// goi 201           = (600*50) +(400*150) + (200*(num-1))
// truong hop 400p
// tổng số phút nhập vào = tổng của từng tích giữa giá cước và số phút 
// tương ứng sao cho tổng số phút của từng tích = tổng số phút nhập vào 
 //

//Truong hop 50*3  = (400d+600)*num
//Truong hop 50*4  = ((400d+600)*num) *2
//truong hop > 200 =  


          
 