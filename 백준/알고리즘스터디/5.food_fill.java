// https://leetcode.com/problems/flood-fill/
class Solution {
    public int[][] floodFill(int[][] image, int sr, int sc, int newColor) {
        if (image[sr][sc] == newColor) { // 시작점이 newColor랑 같으면 이미지 변경X
            return image; // 그대로 반환
        }

        int startColor = image[sr][sc];

        fill(image, sr, sc, startColor, newColor);
        return image;
    }

    // 재귀호출. 시작좌표에서부터 floodfill수행
    public void fill(int[][] image, int sr, int sc, int startColor, int newColor) {
        if (sr < 0 || sc < 0 || sr >= image.length ||
                sc >= image[0].length || image[sr][sc] != startColor) {
            return; // 현 좌표가 이미지 범위를 벗어나거나 시작색이랑 다르면 함수 종료
        }

        image[sr][sc] = newColor; // 현 좌표 색을 새로운 색으로 변경

        fill(image, sr - 1, sc, startColor, newColor); // 상하좌우 인접 픽셀도 flood fill수행
        fill(image, sr + 1, sc, startColor, newColor);
        fill(image, sr, sc - 1, startColor, newColor);
        fill(image, sr, sc + 1, startColor, newColor);
    }
}
