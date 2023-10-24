// 레벨 2
// https://school.programmers.co.kr/learn/courses/30/lessons/1844?language=javascript

/*
게임 맵의 상태 maps가 매개변수로 주어질 때, 캐릭터가 상대 팀 진영에 
도착하기 위해서 지나가야 하는 칸의 개수의 최솟값을 return 하도록 solution 함수를 완성해주세요.
*/

// 풀이
function solution(maps) {
    let answer = 1; // 최단거리
    let visited = maps; // 미로를 표현하는 2D배열
    let queue = [];
    const dx = [-1, 1, 0, 0]; // 이동방향 정의
    const dy = [0, 0, -1, 1]; // 이동방향 정의
    const n = maps.length; // 행과 열의 크기
    const m = maps[0].length;
    
    queue.push([0, 0]);
    visited[0][0] = 0;
    
    while(queue.length > 0) { // 큐가 빌때까지 반복
        let size = queue.length;
        
        for(let i = 0; i < size; i++) {
            let [x, y] = queue.shift();
            
            for(let j = 0; j < 4; j++) {
                let nx = x + dx[j];
                let ny = y + dy[j];
                
                if(nx >= 0 && nx < n && ny >= 0 && ny < m && visited[nx][ny] === 1) {
                    if(nx == n - 1 && ny == m - 1) {
                        return ++answer; // 도착지점 도달 시 증가, 결과반환
                    }
                    queue.push([nx, ny]);
                    visited[nx][ny] = 0;
                }
            }
        }
        answer++;
    }
    
    return -1; // 도착지점에 도착 못하고 큐가 비면 미로를 탈출 못하므로 -1
}