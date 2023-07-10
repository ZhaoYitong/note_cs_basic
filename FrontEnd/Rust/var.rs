fn main() {
    let tuple: (u8, char, bool) = (5, 'a', true);
    println!("{:?}", tuple);

    let x: i32 = 5;
    println!("{}", x);

    let y: i64 = 10;
    println!("{}", y);

    let num: i32 = 42;
    println!("{}", num);

    let pi: f64 = 3.14159;
    println!("{}", pi);

    let is_true: bool = true;
    println!("{}", is_true);

    let _name: String = "John".to_string();

    let _test_num = '6';
    let _test_num = _test_num.to_digit(10).unwrap();
    println!("{}", _test_num);

    let test_alice: String = String::from("Alice");
    println!("{}", test_alice);

    let tuple: (u8, char, bool) = (5, 'x', true);
    let (a, b, c) = tuple;
    let five = tuple.0;
    println!("{}", five);

    println!("{} {} {}", a, b, c);
}
