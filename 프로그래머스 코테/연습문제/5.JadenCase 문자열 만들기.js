// 레벨 2
// https://school.programmers.co.kr/learn/courses/30/lessons/12951

/*
문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.
*/

// 풀이
function solution(s) {
  var answer = '';
  for (let i = 0; i < s.length; i++) {
    if (i === 0 || s[i-1] === " ") {
      answer += s[i].toUpperCase();
    } else {
      answer += s[i].toLowerCase();
    }
  }
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