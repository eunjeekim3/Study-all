// 레벨 2
// https://school.programmers.co.kr/learn/courses/30/lessons/42746?language=javascript

/*
0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 
문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.
*/

function solution(numbers) {
  const answer = numbers
      .sort((a, b) => {
          a = a.toString();
          b = b.toString();
          return (b + a) - (a + b);
      })
      .join('');

  return answer[0] === '0' ? '0' : answer;
}

/*
다른 풀이
function solution(numbers) {

    let answer = numbers.map((num) => num.toString()).sort((a,b) => (b+a)-(a+b)).join("");
    
    return answer[0]==="0" ? "0" : answer ;
}
*/