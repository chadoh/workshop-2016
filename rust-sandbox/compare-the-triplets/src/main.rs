use std::io;

fn main() {
    let mut alice = String::new();
    io::stdin().read_line(&mut alice)
        .expect("Failed to read line");
    let alice: Vec<&str> = alice.split(" ").collect();

    let mut bob = String::new();
    io::stdin().read_line(&mut bob)
        .expect("Failed to read line");
    let bob: Vec<&str> = bob.split(" ").collect();

    let mut alice_comparison = 0;
    let mut bob_comparison = 0;
    for i in 0..3 {
        let alice_score: u8 = alice[i].trim().parse()
            .expect("Invalid number!");
        let bob_score: u8 = bob[i].trim().parse()
            .expect("Invalid number!");

        if alice_score > bob_score {
            alice_comparison += 1;
        } else if bob_score > alice_score {
            bob_comparison += 1;
        }
    }
    println!("{} {}", alice_comparison, bob_comparison);
}
