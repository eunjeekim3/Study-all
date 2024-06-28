// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181844

class Solution {
    public int[] solution(int[] arr, int[] delete_list) {
        int length = arr.length;
        for (int i: delete_list) {
            for (int j = 0; j < arr.length; j++) {
                if (arr[j] == i) {
                    arr[j] = 0;
                    length--;
                    break;
                }
            }
        }

        int[] answer = new int[length];
        int idx = 0;
        for(int i: arr) {
            if (i != 0) {
                answer[idx++] = i;
            }
        }
        return answer;
    }
}