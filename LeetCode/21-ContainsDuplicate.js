/**
 * 
 * @param {*} nums 
 * @returns 
 */

/**
 * Dada una matriz de enteros nums, devuelve verdadero si algún valor aparece 
 * al menos dos veces en la matriz y devuelve falso si cada elemento es distinto. 
 * */

var containsDuplicate = function(nums) {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            return true;
        }
    }
    return false;
};

console.log(containsDuplicate([1,2,4, 4]));