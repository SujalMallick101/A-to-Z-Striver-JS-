let nums = [1, -2, 0, 3];

function maximumSum(nums) {
   let noDelete = nums[0];
   let oneDelete = 0;
   let res = nums[0];

   for (let i = 1; i < nums.length; i++) {
      let prevNoDelete = noDelete;
      noDelete = Math.max(prevNoDelete + nums[i], nums[i]);
      oneDelete = Math.max(oneDelete + nums[i], prevNoDelete);
      res = Math.max(res, Math.max(noDelete, oneDelete));
   }
   return res;
}

console.log(maximumSum(nums));