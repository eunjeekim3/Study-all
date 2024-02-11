// 레벨 2
// https://school.programmers.co.kr/learn/courses/30/lessons/42577

/*
어떤 번호가 다른 번호의 접두어인 경우가 있으면 false를 
그렇지 않으면 true를 return 하도록 solution 함수를 작성해주세요.
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

/*
다른 풀이
function solution(phoneBook) {
    return !phoneBook.sort().some((t,i)=> {
        if(i === phoneBook.length -1) return false;

        return phoneBook[i+1].startsWith(phoneBook[i]);        
    })
}
*/