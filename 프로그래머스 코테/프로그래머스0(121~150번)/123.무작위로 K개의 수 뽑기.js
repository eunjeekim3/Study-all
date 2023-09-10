// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181858

/*
정수 배열 arr가 주어집니다. 문제에서의 무작위의 수는 arr에 저장된 순서대로 주어질 예정이라고 했을 때, 
완성될 배열을 return 하는 solution 함수를 완성해 주세요.
*/

function solution(arr, k) {
    const answer = [];

    for(let i = 0; i < arr.length; i++){
        if(!answer.includes(arr[i])) answer.push(arr[i]);
        if(answer.length === k) break;
    }

    if(answer.length < k){
        const diff = k - answer.length;

        for(let i = 0; i < diff; i++) answer.push(-1);
    }

    return answer;
}

/*
다른 풀이
function solution(arr, k) {
    const nums = new Set();
    const answer = new Array(k).fill(-1);
    for (let v of arr) {
        if (nums.has(v)) continue;
        if (nums.size >= k) break;
        answer[nums.size] = v;
        nums.add(v);

    }
    return answer;
}
*/