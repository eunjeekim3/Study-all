/*
양의 정수 a와 b가 주어졌을 때, a ⊕ b와 b ⊕ a 중 더 큰 값을 
return 하는 solution 함수를 완성해 주세요.
단, a ⊕ b와 b ⊕ a가 같다면 a ⊕ b를 return 합니다.
*/

function solution(a, b) {
    const atob = String(a) + String(b);
    const btoa = String(b) + String(a);
    
    return atob >= btoa ? Number(atob) : Number(btoa);
    // atob >= btoa가 true인 경우 : Number(atob) 반환
    // atob >= btoa가 false인 경우 : Number(btoa) 반환
}