// 레벨 2
// https://school.programmers.co.kr/learn/courses/30/lessons/42885?language=javascript

/*
사람들의 몸무게를 담은 배열 people과 구명보트의 무게 제한 limit가 매개변수로 주어질 때, 
모든 사람을 구출하기 위해 필요한 구명보트 개수의 최솟값을 return 하도록 solution 함수를 작성해주세요.
*/

function solution(people, limit) {
    var answer = 0;
    
    people.sort ((a,b) => b-a)  // 내림차순 정렬. sort로 큰값->작은값
    for (var i=0, j= people.length - 1; i <=j ; i++ ) {
        if (people[i] + people [j] <= limit ) // 두사람 무게 합이 무게 제한보다 작거나 같으면
            j-- // j감소
        answer ++ // 보트 수 1증가
    }
    
    return answer;
}

/*
다른 풀이
function solution(people, limit) {
  people.sort((a, b) => b - a);
  let usedCount = 0;
  while (people.length > 0) {
    const maximum = people.shift();
    const minimum = people.pop();
    if (maximum + minimum > limit) {
      people.push(minimum);
    }
    usedCount += 1;
  }
  return usedCount;
}
*/