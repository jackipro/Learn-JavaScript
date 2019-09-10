process.stdin.once('data' , (input) =>{
        var items = input.toString().trim().split(' ');
        var nums1 = parseInt(items[0]);
        var nums2 = parseInt(items[1]);
        function myNums(nums1, nums2) {
            if (nums1 > nums2) {
                console.log(nums1);
            } else{
                console.log(nums2);
            }
            return nums1,nums2;
        }
        myNums(nums1,nums2);
        process.exit();



})