// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181898

/*
정수 배열 arr가 주어집니다. 이때 arr의 원소는 1 또는 0입니다. 
정수 idx가 주어졌을 때, idx보다 크면서 배열의 값이 1인 가장 작은 인덱스를 찾아서 반환하는 solution 함수를 완성해 주세요.
*/

function solution(arr, idx) {
    for(let i = idx ; i < arr.length; i++) {
        const cur = arr[i];
        if(cur === 1) return i
    }
    return -1
}

/*
다른 풀이
function solution(arr, idx) {
    var answer = 0;

    for(let i = idx; i<arr.length; i++){
        if(arr[i]==1){
            return i;
        }
    }

    return -1;
}
*/