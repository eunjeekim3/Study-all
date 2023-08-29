// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181859

/*
만들어진 stk을 return 하는 solution 함수를 완성해 주세요.
*/

function solution(arr) {
    var answer = [];
    
    for (let i=0; i<arr.length; i++) {
        if (answer.length === 0) {
            answer.push(arr[i]);
            continue;
        } else if (answer[answer.length-1] === arr[i]) { // 배열의 마지막 원소
            answer.pop();
        } else {
            answer.push(arr[i]);
        }
    }
    
    return answer.length === 0 ? [-1] : answer;
}


/*
다른 풀이
function solution(arr) {
    let stack = [arr[0]];
    for(let i=1;i<arr.length;i++){
        stack[stack.length-1] === arr[i] ? stack.pop() : stack.push(arr[i]);
    }
    return stack.length ? stack : [-1];
}
*/