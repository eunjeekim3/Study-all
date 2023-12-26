// 레벨 2
// https://school.programmers.co.kr/learn/courses/30/lessons/12941

/*
배열 A, B가 주어질 때 최종적으로 누적된 최솟값을 return 하는 solution 함수를 완성해 주세요.
*/

// 작성ing...
function solution(A,B){
  var answer = 0;

  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  console.log('Hello Javascript')

  return answer;
}

// 다른 풀이
function solution(s) {
  var answer = '';
 let result = s.split(' ');

 let result2 = result.map(x=> x.charAt(0).toUpperCase() + x.slice(1).toLowerCase());

 answer = result2.join(" ")
  return answer;
}