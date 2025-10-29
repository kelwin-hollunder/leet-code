function searchRange(nums: number[], target: number): number[] {
    let left: number = 0;
    let right: number = nums.length - 1;
    let mid: number = 0;

    const responseArr = [-1,-1];

    while(left < right) {
        mid = left + Math.floor((right - left) / 2);
        if(nums[mid] >= target) {
            right = mid;
        } else left = mid + 1;
    }

    nums[left] === target ? responseArr[0] = left : null; 

    left = 0;
    mid = 0;
    right = nums.length -1;
    
    while(left < right) {
        mid = left + Math.floor((right - left) / 2) + 1;
        if(nums[mid] > target) {
            right = mid - 1;
        } else left = mid;
    }

    nums[left] === target ? responseArr[1] = left : null; 

    return responseArr;
};