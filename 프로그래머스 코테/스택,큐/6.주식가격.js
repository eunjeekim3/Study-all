// 레벨 2
// https://school.programmers.co.kr/learn/courses/30/lessons/42584?language=javascript

/*
초 단위로 기록된 주식가격이 담긴 배열 prices가 매개변수로 주어질 때, 
가격이 떨어지지 않은 기간은 몇 초인지를 return 하도록 solution 함수를 완성하세요.
*/

function solution(prices) {
    let answer = new Array(prices.length).fill(0);
    let stack = [];
    let length = prices.length;
    for(let i = 0; i < length; i++) {
        while(stack.length && prices[i] < prices[stack[stack.length - 1]]) {
            let temp = stack.pop();
            answer[temp] = i - temp;
        }
        stack.push(i)
    }
    while(stack.length) {
        let temp = stack.pop();
        answer[temp] = length - temp - 1;
    }
    return answer;
}

// 작성중... 아직 에러ing
/*
function solution(prices) {
  var answer = [];
  let startIdx = 0;
  
  for (let i = 1; i < prices.length; i++) {
      if (prices[i] < prices[i - 1]) {
          // 감소 순간에 현재 인덱스를 저장
          answer.push(i);
          startIdx = i;
      } else if (prices[i] >= prices[i - 1]) {
          // 감소가 아닌 경우, 이전 감소 순간부터 현재 인덱스까지의 차이를 저장
          answer.push(i - startIdx);
      }
  }
  
  return answer;
}
*/