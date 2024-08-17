// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181872

class Solution {

    public String solution(String myString, String pat) {
        String answer = "";

        for (int i = myString.length(); i >= 0; i--) {
            myString = myString.substring(0, i);
            if(myString.endsWith(pat)) {
                return myString;
            } 
        }
        return answer;
    }
}