// 레벨 3
// https://school.programmers.co.kr/learn/courses/30/parts/12421

/*
컴퓨터의 개수 n, 연결에 대한 정보가 담긴 2차원 배열 computers가 매개변수로 주어질 때, 
네트워크의 개수를 return 하도록 solution 함수를 작성하시오.
*/

// 풀이
function solution(n, computers) {
    let visited = [false]; // 방문되었는지 나타내는 배열
    let answer = 0; // 네트워크의 수를 저장

    function dfs(i) { // 탐색 알고리즘
        visited[i] = true; // 이미 방문한 컴퓨터를 체크
        for(let j=0; j<computers[i].length; j++) {
            if(computers[i][j]===1 && !visited[j]){
                dfs(j); // 컴퓨터 인덱스를 0부터 n-1까지 반복
            }
        }
    }
    
    for (let i=0; i < computers.length; i++) {
        if (!visited[i]) { // 아직 방문되지 않았다면 dfs함수 호출
            dfs(i)
            answer++;
        }
    }
    return answer;
}