// 자바 기본 세팅
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World!!");
    }}

    // 변수 선언
    int num = 1;
    double num = 0.1; // 실수형의 기본 자료형
    String string = "Hi";
    Member member = new Member(); // 객체타입 Member 클래스타입

    // 자바 변수 유형
    /*
     * 멤버 변수 : 클래스부에 선언된 변수들로 객체의 속성에 해당함. 인스턴스 변수와 클래스 변수로 구분됨
     * 인스턴스 변수 : 클래스가 인스턴스될 때 초기화되는 변수. 인스턴스를 통해서만 접근할 수 있음
     * 매개변수 : 메소드에 인자로 전달되는 값을 받기위한 변수. 메소드 내에서 지역변수처럼 사용됨
     * 지역변수 : 메소드 내에 선언된 변수
     * 클래스변수 : static으로 선언된 변수. 인스턴스 생성 없이 클래스이름.변수명으로 사용가능
     */

    // 다양한 변수로 이루어진 클래스
public class Main {
    // 멤버 변수, 인스턴스 변수
    int num1;

    // 멤버 변수, 클래스 변수
    static int num2;

    // 매개변수
    public void printName(String name) {
        // 지역변수
        String prtMsg = name + " Hello";
        System.out.println(prtMsg);
    }

    public static void main(String[] args) {
        // 인스턴스 생성
        Main mc = new Main();
        // 인스턴스 변수 사용
        mc.num1 = 100;
        // 클래스 변수 사용
        Main.num2 = 50;  // num2 = 50 으로 사용해도 됨.

        // 인자로 매개변수에 값을 전달
        mc.printName("홍길동");

        System.out.printf("%d,%d",mc.num1, Main.num2);
    }
}