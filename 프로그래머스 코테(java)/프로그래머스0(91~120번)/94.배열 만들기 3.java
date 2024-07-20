// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181895

import java.util.*;

class Solution {
    public int[] solution(int[] arr, int[][] intervals) {
        ArrayList<Integer> arrayList = new ArrayList<>();
        for (int[] interval : intervals) {
            for (int i = interval[0];i <= interval[1];i++)
                arrayList.add(arr[i]);
        }

        int idx = 0;
        int[] answer = new int[arrayList.size()];
        for (int data : arrayList)
            answer[idx++] = data;
        return answer;
    }
}
*/