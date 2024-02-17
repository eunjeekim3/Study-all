// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181934?language=java

class Solution {
    public int solution(int a, int b, boolean flag) {
        int answer = 0;

        if (flag == true) {
            answer = a + b;
        } else {
            answer = a - b;
        }

        return answer;
    }
}