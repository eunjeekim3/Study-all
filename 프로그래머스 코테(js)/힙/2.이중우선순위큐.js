// 레벨 3
// https://school.programmers.co.kr/learn/courses/30/lessons/42628?language=javascript

/*
모든 연산을 처리한 후 큐가 비어있으면 [0,0] 비어있지 않으면 
[최댓값, 최솟값]을 return 하도록 solution 함수를 구현해주세요.
*/

// 풀이
function solution(operations) {
  const heap = [];
  const op = operations.map(operation => operation.split(' '));
  // 입력된 명령어를 공백(' ')을 기준으로 분할
  
  op.forEach(num => {
      if(num[0] === 'I') {	// 명령어가 I라면 데이터 삽입
          heap.push(Number(num[1]))
      }
      else {	// 그 외, 명령어가 D인 경우
          const findValue = (num[1] === '1' ? Math.max : Math.min)(...heap);
          // 숫자가 1이라면 max값을, -1이라면 min값을 적용
          const delIdx = heap.indexOf(findValue);
          // 찾고자 하는 값의 인덱스를 찾아서
          heap.splice(delIdx, 1);
          // (이름만 heap인) 배열에서 해당 인덱스의 원소를 제거
      }
  })
  
  return heap.length ? [Math.max(...heap), Math.min(...heap)] : [0, 0];
}

