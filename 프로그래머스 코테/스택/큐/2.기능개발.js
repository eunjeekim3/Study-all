// 레벨 2
// https://school.programmers.co.kr/learn/courses/30/lessons/42586?language=javascript

/*
먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 
각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때 각 배포마다 몇 개의 기능이 배포되는지를 
return 하도록 solution 함수를 완성하세요.
*/

function solution(progresses, speeds) {
  var answer = [];

  while(speeds.length > 0) {
      // 개발
      for(let i in speeds) {
          if(progresses[i] < 100) {
              progresses[i] += speeds[i];
          }
      }

      // 배포
      let deploy_count = 0;
      while(progresses[0] >= 100) {
          progresses.shift();
          speeds.shift();
          deploy_count++;
      }
      if(deploy_count > 0) {
          answer.push(deploy_count);
      }
  }

  return answer;
}

/*
다른 풀이
function solution(progresses, speeds) {
    // answer: 각 배포마다 배포되는 기능의 수가 적힌 정수 배열
    var answer = [];
    // days: 배포일
    let days = 1;
    // cnt: 오늘 배포되는 기능의 수
    let cnt = 0;
    // progress: 현재 기능의 작업 진도
    let progress = 0;
    
    // 모든 작업이 다 배포될 때까지 반복
    while(progresses[0]){
        // 첫 번째 기능의 작업 진도
        progress = progresses[0] + (speeds[0] * days);
        // 첫 번째 기능의 작업 진도가 100 이상인 경우 배포 완료
        if(progress >= 100){
            // 배포 완료된 기능 개수 추가
            cnt++;
            // 배포 완료된 작업 제거
            progresses.shift();
            // 배포 완료된 작업의 속도 제거
            speeds.shift();
        }
        // 첫 번째 기능의 작업 진도가 100 미만일 경우 배포 불가능
        else{
            // 배포 완료된 기능이 있는 경우, answer에 push
            if(cnt > 0){
                answer.push(cnt);
            }
            // 배포일 증가 (다음날)
            days++;
            // 배포 완료된 기능 개수 초기화
            cnt = 0;
        }
    }
    // 모든 작업이 다 배포되고 나면, 마지막으로 카운트된 배포 완료 기능 개수 push
    answer.push(cnt);
    
    return answer;
}
*/