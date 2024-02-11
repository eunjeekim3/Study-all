// 레벨 2
// https://school.programmers.co.kr/learn/courses/30/lessons/12924

/*
자연수 n이 매개변수로 주어질 때, 연속된 자연수들로 
n을 표현하는 방법의 수를 return하는 solution를 완성해주세요.
*/

// 풀이
function solution(n) {
  let answer = 0;
  let now = 1, count = 1, plusNum = 0;

  while(count <= n) {
    plusNum = plusNum + now;
    if(plusNum >= n) {
      if(plusNum === n) answer++;
      plusNum = 0;
      count++;
      now = count;
    } else {
      now++;
    }
  }

  return answer;
}

/*
다른 풀이
function expressions(num) {
    var answer = 0;
    for (var i = 1; i <= num; i++) {
        if ((num % i == 0) && (i % 2 == 1)) {
            answer++;
        }
    }
    return answer;
  }
*/