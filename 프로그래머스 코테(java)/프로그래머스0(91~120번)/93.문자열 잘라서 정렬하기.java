// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181866

import java.util.*;

class Solution {
    public String[] solution(String myString) {
        String[] splitStrings = myString.split("x");
        List<String> resultList = new ArrayList<>();
        for (String s : splitStrings) {
            if (!s.equals("")) {
                resultList.add(s);
            }
        }
        String[] resultArray = new String[resultList.size()];
        resultList.toArray(resultArray);
        Arrays.sort(resultArray);
        return resultArray;
    }
}