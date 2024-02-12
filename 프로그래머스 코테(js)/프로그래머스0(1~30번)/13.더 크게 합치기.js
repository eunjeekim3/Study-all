// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181939?language=java

function solution(a, b) {
    const atob = String(a) + String(b);
    const btoa = String(b) + String(a);
    
    return atob >= btoa ? Number(atob) : Number(btoa);
    // atob >= btoa가 true인 경우 : Number(atob) 반환
    // atob >= btoa가 false인 경우 : Number(btoa) 반환
}
