Java Notes

- In Java, every application begins with a class name, and that class must match the filename.

  - javac Main.java
    - compile code
  - java Main.java
    - compile and run code
  - java Main
    - run code

- Every line of code that runs in Java must be inside a class. A class should always start with an uppercase first letter.

- Java Variables
  - String - stores text, such as "Hello". String values are surrounded by double quotes
  - int - stores integers (whole numbers), without decimals, such as 123 or -123
  - float - stores floating point numbers, with decimals, such as 19.99 or -19.99
  - char - stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes
  - boolean - stores values with two states: true or false

- Display Variables
  - To combine both text and a variable, use the + character:

- Java Identifiers
  - Names can contain letters, digits, underscores, and dollar signs
  - Names must begin with a letter
  - Names should start with a lowercase letter and it cannot contain whitespace
  - Names can also begin with $ and _ (but we will not use it in this tutorial)
  - Names are case sensitive ("myVar" and "myvar" are different variables)
  - Reserved words (like Java keywords, such as int or boolean) cannot be used as names

- Non-Primitive Data Types
  - Non-primitive data types are called reference types because they refer to objects.
    - Primitive types are predefined (already defined) in Java. Non-primitive types are created by the programmer and is not defined by Java (except for String).
    - Non-primitive types can be used to call methods to perform certain operations, while primitive types cannot.
    - A primitive type has always a value, while non-primitive types can be null.
    - A primitive type starts with a lowercase letter, while non-primitive types starts with an uppercase letter.
    - The size of a primitive type depends on the data type, while non-primitive types have all the same size.

- Java Type Casting
  - Widening Casting(auto) - converting a smaller type to a larger type size
    - byte -> short -> char -> int -> long -> float -> double
  - Narrow Casting(manually) - converting a larger type to a smaller size type
    - double -> float -> long -> int -> char -> short -> byte

- Java Operators
  - 