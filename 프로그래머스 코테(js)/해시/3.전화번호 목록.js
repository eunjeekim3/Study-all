// 레벨 2
// https://school.programmers.co.kr/learn/courses/30/lessons/42577

/*
양의 정수 n이 매개변수로 주어집니다. 
n × n 배열에 1부터 n2 까지 정수를 인덱스 [0][0]부터 시계방향 나선형으로 배치한 
이차원 배열을 return 하는 solution 함수를 작성해 주세요.
*/

function solution(phone_book) {
    phone_book.sort(); // 전화번호 리스트 정렬
  
    for (let i = 0; i < phone_book.length - 1; i++) {
      // 현재 번호와 다음 번호의 시작 부분이 같으면 접두어이므로 false
      if (phone_book[i] === phone_book[i + 1].substring(0, phone_book[i].length)) {
        return false;
      }
    }
  
    return true; // 접두어가 없는 경우 true
  }

