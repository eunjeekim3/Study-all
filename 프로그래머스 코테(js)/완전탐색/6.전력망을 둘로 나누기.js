// 레벨 2
// https://school.programmers.co.kr/learn/courses/30/lessons/86971?language=javascript

/*
두 전력망이 가지고 있는 송전탑 개수의 차이(절대값)를 
return 하도록 solution 함수를 완성해주세요.
*/

// 풀이 해석
function solution(n, wires) {
  var answer = Number.MAX_SAFE_INTEGER;
  //트리 만들기
  let tree = Array.from(Array(n+1),()=>[])
  wires.map((element)=>{ // tree초기화
      let [a,b] = element;

      tree[a].push(b);
      tree[b].push(a);
  })
 
  function searchTree(root, exceptNum) { // exceptNum은 제외하고 탐색
      let count =0;
      let visit = [];
      let queue = [root];
      visit[root] = true;
      while(queue.length){
          let index = queue.pop();
          tree[index].forEach((element)=>{
              if(element !== exceptNum && visit[element]!==true){
                  visit[element] = true;
                  queue.push(element);
              }
          })
          count++;
      }
      
      return count;
  }

  // wires 값에 만든 함수에 값을 넣어 최솟값을 찾음.
  wires.forEach(element => {
      let[a,b] = element;
      answer = Math.min(answer, Math.abs(searchTree(a,b)-searchTree(b,a)))
  });
  return answer;
}