import React from 'react';

/**
 * 
 * @param {*} arr 
 * @returns 
 * use a pointer to go through all the elements
 * use another pointer to record the prev unique value, the rule is that [0, end - 1] is the range of unique
 * unique value is when cur - 1 != cur && cur != cur + 1 is the unique value; 
 * [0,1,1,1,1,2,3,]
 * [0,0,0]
 *  0 
 *    0 
 * [0,0,1]
 */

const findAns = (nums) => {
    if(!nums) return 0;
    let k = 0;
    for(let i = 1; i < nums.length; i++){
        if(nums[k] !== nums[i]){
            nums[++k] = nums[i];
        }
    }
    return k + 1;
}
export default function RemoveDuplicates({arr}){
    
    let k = findAns(arr);
    console.log(arr.join(','));
    return(
        <>
        <h2>Remove Duplicates</h2>  
            <p>K to return: {`${k + 1}`}</p>
            <p>new arrays: {arr.join(',')}</p>
        </>
    );
}