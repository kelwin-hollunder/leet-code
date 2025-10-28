function nextPermutation(nums: number[]): void {
    let smallerThanNext;
    const arrLastIndex = nums.length - 1;
    let i = arrLastIndex;
    while(i >= 0 && !smallerThanNext && smallerThanNext !== 0) { 
        if(nums[i - 1] < nums[i]) {
            smallerThanNext = nums[i - 1];
        }
        i--;
    }

    if(!smallerThanNext && smallerThanNext !== 0) {
        nums.reverse();
        return;
    }

    let k = nums.length - 1;
    while(k >= 0) {
        if(nums[k] > smallerThanNext) break;
        k--;
    }

    swapNumber(i, k, nums);

    i++;
    k = arrLastIndex;
    while(i < k) {
        swapNumber(i, k, nums);
        i++;
        k--;
    }
};

function swapNumber(i: number, k: number, arr: number[]): void {
    const temp: number = arr[i];
    arr[i] = arr[k];
    arr[k] = temp;
}