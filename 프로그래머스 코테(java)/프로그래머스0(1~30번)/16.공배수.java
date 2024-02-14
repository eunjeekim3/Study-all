// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181936?language=java

class Solution {
    public int solution(int number, int n, int m) {
        int answer = 0;

        if (number % n == 0 && number % m == 0) {
            answer = 1;
        } else {
            answer = 0;
        }

        return answer;
    }
}