// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181923

/*
정수 배열 arr와 2차원 정수 배열 queries이 주어집니다.
각 쿼리의 순서에 맞게 답을 저장한 배열을 반환하는 solution 함수를 완성해 주세요.
*/

function solution(arr, queries) {
    const result = [];
    
    for (let i = 0; i < queries.length; i++) {
      const [s, e, k] = queries[i]; 
      // 쿼리 하나를 배열 디스트럭처링으로 가져옴 => s, e, k
      // 배열 디스트럭처링이란, 배열의 요소를 개별 변수로 분해해서 가져온다는 뜻.
      const subArray = arr.slice(s, e + 1);
      // arr 배열에서 s부터 e까지(끝 인덱스는 포함하지 않으니 e + 1) 부분 배열을 subArray에 저장
      const filteredArray = subArray.filter(num => num > k);
      // subArray배열에서 k보다 큰 원소를 필터링해서 새로운 배열에 저장함
      // 자바스크립트에서 필터메소드는 배열에서 주어진 조건에 해당하는 원소들로 이루어진 새로운 배열을 반환
      
      if (filteredArray.length === 0) {
        result.push(-1);
      } else {
        const minVal = Math.min(...filteredArray);
        result.push(minVal);
      }
    }
    
    return result;
  }