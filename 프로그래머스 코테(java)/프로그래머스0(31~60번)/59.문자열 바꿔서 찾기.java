// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181864

class Solution {
    public int solution(String myString, String pat) {
        int answer = 0;
        
        String replacedString = myString.replace('A', 'X').replace('B', 'A').replace('X', 'B');
        
        if (replacedString.contains(pat)) {
            answer = 1;
        }
        
        return answer;
    }
}