/*
문자열 my_string, overwrite_string과 정수 s가 주어집니다. 
문자열 my_string의 인덱스 s부터 overwrite_string의 길이만큼을 
문자열 overwrite_string으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.
*/

function solution(my_string, overwrite_string, s) {
    // splice()는 배열에서 요소를 추가, 삭제 또는 교체하는 메소드.
    // array.splice(시작인덱스, (삭제인덱스), item1, item2, ...)
    
    // 요소 삭제 : fuits.splice(1, 2); 1부터 2개요소 삭제
    // 요소 추가 : fuits.splice(1, 0, 'apple'); 인덱스 1에 apple 추가
    // 요소 교체 : fuits.splice(2, 1, 'pear'); 인덱스 2를 pear로 변경
    const str = [...my_string]
    // '...'은 전개연산자. 배열이나 문자열과같은 객체를 개별요소로 분해/결합 가능
    str.splice(s, overwrite_string.length, overwrite_string)
    return str.join("");
    // 전개연산자를 통해 개별요소로 분해된 요소를 join으로 다시 결합
}
