// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181929

/*
정수가 담긴 리스트 num_list가 주어질 때, 
모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.
*/

function solution(num_list) {
    let result = 0;
    
    // num_list 각 요소 곱하기
    const a = num_list.reduce(function (accumulator, currentValue){
        return accumulator * currentValue;
    }, 1); // 곱할 때 초기값을 1로 지정
    
    // 합의 제곱
    const b = num_list.reduce(function add(sum, currValue){
        return sum + currValue;
    }, 0);
    const b2 = Math.pow(b, 2);
    
    if (a<b2) {
        result = 1;
    } else {
        result = 0;
    }
            
    return result;
}

/*
다른사람이 짠 코드
function solution(num_list) {
    var sum1 = 1, sum2 = 0;
    for(var i of num_list){
        sum1 *= i;
        sum2 += i;
    }
    return sum1 > sum2**2 ? 0 : 1;
}
*/

