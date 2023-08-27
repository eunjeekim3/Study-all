// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181918

/*
정수 배열 arr가 주어집니다. arr를 이용해 새로운 배열 stk를 만드려고 합니다.
*/

function solution(arr) {
    var stk = [];
    
    for (let i=0; i<arr.length; i++) {
        if (stk.length === 0) {
            stk.push(arr[i]);
        } else if (stk[stk.length - 1] < arr[i]) { // stk의 마지막 원소가 i보다 작다면
            stk.push(arr[i]);
        } else if (stk[stk.length - 1] >= arr[i]) {
            stk.pop();
            i --;
        }
    }
    
    return stk;
}

/*
다른 풀이
function solution(arr) {
    let i = 0;
    var stk = [];
    while (i < arr.length) {
        if (stk.length === 0) {
            stk.push(arr[i]);
            i += 1;
        }
        else if (stk[stk.length - 1] < arr[i]) {
            stk.push(arr[i]);
            i += 1;
        } else {
            stk.pop();
        }
    }
    return stk;
}
*/