// 레벨 2
// https://school.programmers.co.kr/learn/courses/30/lessons/42860?language=javascript

/*
만들고자 하는 이름 name이 매개변수로 주어질 때, 
이름에 대해 조이스틱 조작 횟수의 최솟값을 return 하도록 solution 함수를 만드세요.
*/

// 풀이
function solution(name) {
    let answer = 0;
    let min_move = name.length - 1;
  
    [...name].map((n, i) => {
      // 현재 문자를 'A'로 변경하는 데 필요한 최소 이동 횟수를 계산
      answer += Math.min(n.charCodeAt() - 65, 91 - n.charCodeAt());
      let idx = i + 1;
  
      // 연속되는 A의 개수 count
      while (idx < name.length && name[idx] === 'A') {
        idx++;
      }
  
      // 필요한 최소 이동 횟수를 업데이트
      min_move = Math.min(
        min_move,
        i * 2 + name.length - idx,
        i + 2 * (name.length - idx),
      );
    });
  
    return answer + min_move;
  }