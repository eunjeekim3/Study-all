// 레벨 2
// https://school.programmers.co.kr/learn/courses/30/lessons/42883?language=javascript

/*
number에서 k 개의 수를 제거했을 때 만들 수 있는 수 중 
가장 큰 숫자를 문자열 형태로 return 하도록 solution 함수를 완성하세요.
*/

// 풀이
function solution(number, k) {
    const answer = [];
    for (let num of number) {
      // 현재 처리중인 숫자 num이 answer배열의 마지막 요소보다 큰 경우
      // k가 0보다 크면서 마지막 요소를 제거하는 과정
      while (k > 0 && answer[answer.length - 1] < num) {
        answer.pop(num);
        k -= 1;
      }
      answer.push(num);
    }
    // 문자열로 결합, 이 문자열의 처음부터 number.length - k까지의 부분 문자열 반환
    return answer.join("").slice(0, number.length - k);
}


// 다른 풀이
function solution(number, k) {
    let count = 0;
    let answer = number.split("");
  
    for (let i = 0; i < k; i++) {
      // 숫자 제거를 k번 반복함
      for (let j = 0; j < answer.length; j++) {
        // 숫자의 최대 크기가 9이기 때문에 9가 나오면 해당 경우를 넘어감
        if (Number(answer[j]) === 9) {
          continue;
        }
        // 현재 숫자와 다음수를 비교해 다음수가 더 크면 현재 숫자를 제거함
        if (Number(answer[j]) < Number(answer[j + 1])) {
          answer.splice(j, 1);
          count++;
          break;
        }
      }
    }
  
    if (count < k) {
      // 제거한 숫자 count가 k보다 작을 경우 맨 앞과 뒤를 비교함
      number[0] > number[number.length - 1]
        ? answer.splice(answer.length - (k - count), k - count) // 앞의 숫자가 큰 경우 뒤에서 부터 k-count만큼 잘라냄
        : answer.splice(0, k - count); // 뒤의 숫자가 큰 경우 앞에서 부터 k-count만큼 잘라냄
    }
  
    return answer.join("");
  }