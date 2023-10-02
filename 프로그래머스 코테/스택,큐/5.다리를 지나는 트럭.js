// 레벨 2
// https://school.programmers.co.kr/learn/courses/30/lessons/42583?language=javascript

/*
모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return 하도록 solution 함수를 완성하세요.
*/

function solution(bridge_length, weight, truck_weights) {
    var answer = 0; // 총 걸린 시간
    let onBridge = []; // 현재 다리 위에 있는 트럭의 정보를 저장
    let doneTruck = []; // 이미 다리를 건넌 트럭의 정보를 저장
  
    // 아직 다리에 진입하지 않은 트럭이 있으면 true => 계속 반복
    // 현재 다리 위에 있는 트럭이 있으면 true => 다리위에 트럭이 있어도 반복
    // 두 조건이 모두 false가 되면 루프가 종료됨
    while (truck_weights.length > 0 || onBridge.length > 0) {
      answer++;
  
      // 다리 위에 있는 트럭이 다리를 완전히 건넌 경우.
      // 다리 위에 트럭이 하나 이상 있어야됨
      // 첫번째 트럭이 다리를 처음부터 끝까지 다 건너면 true
      if (onBridge.length > 0 && answer - onBridge[0].timeOnBridge === bridge_length) {
        const truck = onBridge.shift(); // 다리에서 트럭 꺼냄
        weight += truck.weight; // 다리 위 총 무게에서 트럭무게 갱신
        doneTruck.push(truck); // 배열에 추가
      }
  
      // 아직 다리에 들어가지 않은 트럭이 있는지 확인
      // 현재 다리의 트럭과 새로운 트럭무게를 합한 값이 weight보다 작거나 같은지 확인
      // 두 조건이 모두 만족할 때 새로운 트럭 진입
      if (truck_weights.length > 0 && weight >= truck_weights[0]) {
        const truckWeight = truck_weights.shift();
        onBridge.push({ weight: truckWeight, timeOnBridge: answer });
        weight -= truckWeight;
      }
    }
  
    return answer;
}
  

/*
에러났던 풀이
function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    
    //let goalTruck = truck_weights; // 이렇게하면 원본 변경될 시 같이 변경됨
    let goalTruck = [...truck_weights]; // 트럭 무게 백업
    let doneTruck = []; // 트럭 무게를 옮길 부분
    
    while (doneTruck == goalTruck) { // 도착한 트럭이 백업한 트럭과 동일해질 경우 반복문 종료
        let sum = 0; // 트럭 무게의 합
                        
        for (let i = 0; i < truck_weights.length; i++) {
        // 현재 요소를 합에 더했을 때, 합이 weight을 넘지 않으면 더함
        if (sum + truck_weights[i] <= weight) {
          sum += truck_weights[i];
        } else {
          break; // weight을 넘으면 더 이상 더하지 않고 종료
        }
            
        let removedElement = truck_weights.shift(); // 첫 번째 요소를 제거하고 반환
        doneTruck.push(removedElement); // 배열 b의 맨 오른쪽에 추가
            
        answer++;
      }
    }
    
    return answer;
}
*/