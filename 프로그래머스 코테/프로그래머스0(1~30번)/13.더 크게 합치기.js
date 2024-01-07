// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181939?language=java

function solution(a, b) {
    const atob = String(a) + String(b);
    const btoa = String(b) + String(a);
    
    return atob >= btoa ? Number(atob) : Number(btoa);
    // atob >= btoa가 true인 경우 : Number(atob) 반환
    // atob >= btoa가 false인 경우 : Number(btoa) 반환
}

// 자바
class Solution {
    public int solution(int a, int b) {
        String ab = String.valueOf(a) + String.valueOf(b);
        String ba = String.valueOf(b) + String.valueOf(a);
        
        int abValue = Integer.parseInt(ab);
        int baValue = Integer.parseInt(ba);
        
        if (abValue >= baValue) {
            return abValue;
        } else {
            return baValue;
        }

        /*
        다른 풀이
        int aLong = Integer.parseInt(""+a+b);
        int bLong = Integer.parseInt(""+b+a);
        answer = aLong > bLong ? aLong : bLong;
        */
    }
}