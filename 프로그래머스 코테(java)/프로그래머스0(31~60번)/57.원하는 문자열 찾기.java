// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181878

class Solution {
    public int solution(String myString, String pat) {
        myString = myString.toLowerCase();
        pat = pat.toLowerCase();

        if (myString.contains(pat)) {
            return 1;
        } else {
            return 0;
        }
    }
}