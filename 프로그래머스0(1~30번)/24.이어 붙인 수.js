// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181928

/*
정수가 담긴 리스트 num_list가 주어집니다. 
num_list의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return하도록 solution 함수를 완성해주세요.
*/

function solution(num_list) {
    let sum1 = [], sum2 = [];
    
    for (let i of num_list) {
        if (i % 2 === 0) { // 짝수일때
            sum1.push(i);
        } else { // 홀수일때
            sum2.push(i);
        }
    }
    
    const result = parseInt(sum1.join("")) + parseInt(sum2.join(""));
    return result;
}

/*
다른 사람의 풀이
function solution(num_list) {
  let isEven = num_list.filter((a) => a % 2 === 0);
  let isOdd = num_list.filter((a) => a % 2 === 1);

  let evenSum = isEven.reduce((acc, cur) => acc + String(cur));
  let oddSum = isOdd.reduce((acc, cur) => acc + String(cur));

  return Number(evenSum) + Number(oddSum);
}
*/