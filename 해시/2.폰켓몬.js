/*
입출력 예
[3,1,2,3]	2
[3,3,3,2,2,4]	3
[3,3,3,2,2,2]	2
*/

function solution(nums) {
    var answer = [];
    var max = nums.length / 2;
    
    // map()함수는 배열의 각 요소에 주어진 콜백함수를 실행하고 새로운 배열을 반환함
    // array.map(callback(currentValue, [index], [array]), thisArg)
    // 현재 처리중인 요소의 값, 현재 처리중인 요소의 인덱스, map함수 호출한 배열, 콜백 함수 내부에서 사용할 this의 값
    
    nums.map(num => (
        answer.length < max && !answer.includes(num) ? answer.push(num) : num
    ));
    // 배열의 길이가 max보다 작은지 확인
    // answer 배열에 num이 포함되어있지 않을 때 true 반환
    // 조건이 true일 때 push로 answer배열에 num을 추가하고 거짓이면 num을 그대로 반환
    
    return answer.length;
    // 중복되지 않는 요소의 개수를 반환하는 것이 목적이므로 length 반환
}