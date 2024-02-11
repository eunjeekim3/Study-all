// 레벨 2
// https://school.programmers.co.kr/learn/courses/30/lessons/84512?language=javascript

/*
단어 하나 word가 매개변수로 주어질 때, 이 단어가 사전에서 
몇 번째 단어인지 return 하도록 solution 함수를 완성해주세요.
*/

// 풀이 해석
let idx = 0; // 인덱스 초기화 변수
const result = {}; // 인덱스 저장
const vowels = [..."AEIOU"]; // 문자열을 배열로 변환

function solution(word) { // 단어의 인덱스를 찾기 위한 함수
  dfs("", 0); // 함수 호출해서 단어 생성 시작
  return result[word]; // 함수의 인덱스 반환
}

const dfs = (word, length) => {
  if (length > 5) return; // 길이가 5보다 크면 재귀 종료
  result[word] = idx++; // 현재 단어에 인덱스 할당
  vowels.forEach((vowel) => {
    dfs(word + vowel, length + 1); // 각 모음을 덧붙여 재귀 호출
  });
};