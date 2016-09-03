use std::io;

fn get_numbers() -> Vec<u16> {
    let mut line = String::new();
    io::stdin().read_line(&mut line).ok().expect("Failed to read line");
    line.split_whitespace().map(|s| s.parse::<u16>().unwrap()).collect()
}

enum Conclusion {
    Yes,
    No,
    Inconclusive,
}

fn will_conclude(x1: u16, v1: u16, x2: u16, v2: u16) -> Conclusion {
    if x1 == x2 {
        Conclusion::Yes
    } else if (v2 >= v1 && x2 > x1) || (v1 >= v2 && x1 > x2) {
        Conclusion::No
    } else {
        Conclusion::Inconclusive
    }
}

fn check_values(x1: u16, v1: u16, x2: u16, v2: u16) {
    match will_conclude(x1, v1, x2, v2) {
        Conclusion::Yes => {
            println!("YES");
            return;
        },
        Conclusion::No => {
            println!("NO");
            return;
        },
        Conclusion::Inconclusive => {
            check_values(x1 + v1, v1, x2 + v2, v2);
        }
    }
}

fn main() {
    let line = get_numbers();
    let (x1, v1, x2, v2) = (line[0], line[1], line[2], line[3]);
    check_values(x1, v1, x2, v2);
}
