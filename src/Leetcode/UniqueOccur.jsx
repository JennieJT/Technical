import React from 'react';

const uniqueOccurrences = function(arr) {
    arr.sort((a,b) => a-b);
    let freq = findFreq(arr);
    return checkFreq(freq);
};

const findFreq = (arr) => {
    //check the prev val and the cur val. if the prev val is different from cur val, record a new number;
    let prev = arr[0], cur = 1, ans = [];
    for(let i = 1; i < arr.length; i++){
        if(prev === arr[i]){
            //same value, only add the num; 
            cur++;
        }else{
            //different value, record the cur value and reset;
            ans.push(cur);
            prev = arr[i];
            cur = 1;
        }
    }
    ans.push(cur);
    return ans;
}
const checkFreq = (freq) => {
    freq.sort();
    for(let i = 1; i < freq.length; i++){
        if(freq[i - 1] === freq[i]) return false;
    }
    return true;
}

//time:sort: O(nlogn);
//space:O(n);

export default function Question(){
    let ans = uniqueOccurrences([1,2,1,3,2]);
    return(
        <>
        <h2>Unique Occur: </h2>
        <div>{ans.toString()}</div>
        </>
    );
}
