// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/120956

/*
머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.
*/

function solution(babbling) {
    var answer = 0;
    let can = ["aya", "ye", "woo", "ma"];
  
    for (let i in babbling) {
      let init = babbling[i];
  
      for (let j in can) {
        if (babbling[i].includes(can[j])) {
          init = init.replace(can[j], "X");  // 할 수 있는 단어는 X로 치환
        }
      }
  
      init = init.replace(/X/gi, "");  // X를 모두 공백으로 치환하고 나서
      if (init.length === 0) {  // 공백이 되면 answer에 추가
        answer += 1;
      }
    }
    return answer;
  }
