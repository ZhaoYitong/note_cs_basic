public class Main {
  public static void main(String[] args) {
    String name = "Test";
    System.out.println(name);

    int myNum = 16;
    System.out.println(myNum);

    int changenNum = 56;
    changenNum = 3;
    System.out.println(changenNum);

    // unchangeable and read-only
    // final int constNum = 45;
    // constNum = 457;

    // Declare Many Variables
    int x = 4, y = 5, z = 6;
    System.out.println(x + y + z);

    // One Value to Multiple Variables
    int x1, y1, z1;
    x1 = y1 = z1 = 67;
    System.out.println(x1 + y1 + z1);
  }
}