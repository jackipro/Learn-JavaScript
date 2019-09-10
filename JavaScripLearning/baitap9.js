process.stdin.once('data', (input) => {
    var nums = input.toString().trim().split(' ');
    var num1 = parseInt(nums[0]);
    var num2 = parseInt(nums[1]);
    var num3 = parseInt(nums[2]);
    function myBigNum(num1, num2 , num3){           
        var maxIn = Math.max.apply(Math, nums);     
        return maxIn;
    }
        num1 = myBigNum(num1);
        num2 = myBigNum(num2);
        num3  = myBigNum(num3);
        console.log(myBigNum());
process.exit();
}); 