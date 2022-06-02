public class Main {
  public static void main(String[] args) {
    // Widening Casting
    int myInt = 9;
    double myDouble = myInt;

    System.out.println(myInt);
    System.out.println(myDouble);

    // Narrowing Casting
    double myNewDouble = 9.88d;
    int myNewInt = (int) myNewDouble;
    System.out.println(myNewDouble);
    System.out.println(myNewInt);

  }
}
