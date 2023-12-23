// 레벨 2
// https://school.programmers.co.kr/learn/courses/30/lessons/12939

/*
str에 나타나는 숫자 중 최소값과 최대값을 찾아 
이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.
*/

// 풀이
function solution(s) {
  s = s.split(" ")
  let max = Math.max(...s)
  let min = Math.min(...s)
  return min+" "+max;
}