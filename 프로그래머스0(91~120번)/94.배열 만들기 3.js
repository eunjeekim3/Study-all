// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181895

/*
배열 arr의 첫 번째 구간에 해당하는 배열과 두 번째 구간에 해당하는 배열을 
앞뒤로 붙여 새로운 배열을 만들어 return 하는 solution 함수를 완성해 주세요.
*/

function solution(arr, intervals) {
    let arr1 = [];
    let arr2 = [];
    for(let i=intervals[0][0]; i<=intervals[0][1]; i++){
        arr1.push(arr[i]);
    }
    for(let i=intervals[1][0]; i<=intervals[1][1]; i++){
        arr2.push(arr[i]);
    }
    return arr1.concat(arr2);
}

/*
다른 풀이
function solution(arr, intervals) {
    const [[a,b],[c,d]] = intervals
    return [...arr.slice(a,b+1), ...arr.slice(c,d+1)]
    
}
*/