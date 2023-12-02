// 레벨 3
// https://school.programmers.co.kr/learn/courses/30/lessons/42884?language=javascript

/*
고속도로를 이동하는 차량의 경로 routes가 매개변수로 주어질 때, 
모든 차량이 한 번은 단속용 카메라를 만나도록 하려면 최소 몇 대의 카메라를 설치해야 하는지를 return 하도록 solution 함수를 완성하세요.
*/

// 풀이
function solution(routes) {
    let answer = 1; 
    
    routes.sort((a, b) => a[0] - b[0]);
    
    let out = routes[0][1];
    
    for(let i = 1; i < routes.length; i++) {
      // 진출시점보다 현재 차량의 진입이 느리다면 카메라 추가 설치 및 out 시점 갱신
      if(out < routes[i][0]) {
        answer++;
        out = routes[i][1];
      }
      
      // 진출시점이 현재 차량의 진출시점보다 큰 경우, 항상 out을 갱신해주어야 다음 차량 카메라 설치 여부 판별 가능
      if(out > routes[i][1]) {
        out = routes[i][1];
      }
    }
    
    return answer;
  }