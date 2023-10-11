// 레벨 2
// https://school.programmers.co.kr/learn/courses/30/lessons/87946?language=javascript

/*
유저의 현재 피로도 k와 각 던전별 "최소 필요 피로도", "소모 피로도"가 담긴 2차원 배열 dungeons 가 매개변수로 주어질 때, 유저가 탐험할수 있는 
최대 던전 수를 return 하도록 solution 함수를 완성해주세요.
*/

// 풀이 해석
function solution(k, dungeons) {
  let answer = 0;
  const visited = new Array(dungeons.length).fill(false)

  function DFS(hp, L) { // hp는 현재 체력, L은 방문한 던전 수
    // 던전목록을 순회하며 방문 가능한지 확인
    for (let i = 0; i < dungeons.length; i++) {

      // 방문하지 않았고, 방문 가능한 경우 진입
      if (!visited[i] && dungeons[i][0] <= hp) {
        visited[i] = true; // 방문한 곳
        DFS(hp - dungeons[i][1], L + 1); // 재귀 호출
        visited[i] = false;
      }
    }
    answer = Math.max(answer, L); // 최대 던전 수 업뎃
  }

  DFS(k, 0); // 초기체력 K로 DFS를 시작해서 최대 던전 수 탐색

  return answer;
}