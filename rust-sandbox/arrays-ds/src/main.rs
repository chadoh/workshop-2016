use std::io;

fn main() {
    let mut n = String::new();
    io::stdin().read_line(&mut n)
        .expect("Failed to read line");
    let n = n.trim().parse()
        .expect("Invalid number!");

    let mut a = String::new();
    io::stdin().read_line(&mut a)
        .expect("Failed to read line");
    let a: Vec<&str> = a.trim().split(" ").collect();

    for i in 0..n {
        print!("{} ", a[n - i - 1]);
    }
    println!("");
}
