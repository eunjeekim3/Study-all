/*
길이가 같은 두 문자열 str1과 str2가 주어집니다.

두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 
한 번씩 등장하는 문자열을 만들어 return 하는 solution 함수를 완성해 주세요.
*/

function solution(str1, str2) {
    return [...str1].map((a, i) => a+str2[i]).join("")
}

// 1. str1을 전개연산자로 배열로 변환 (aaaaa)
// 2. map메소드를 사용해서 배열의 각 요소에 대해 콜백함수 실행
//    현재요소인 a와 해당 요소의 인덱스 i를 인수로 받아서 실행
// 3. map메소드의 결과를 join으로 문자열 결합.

/*
map()메소드 예시

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // 출력: [2, 4, 6, 8, 10]
*/