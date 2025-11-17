function generate() {
    let values = "223nj32jb4[:b:4fsrfrggregeejfvgh";
    let password = ""

    for (let i = 0; i < 12; i++) {
        let randomnum = Math.floor(Math.random() * values.length);
        password =password+ values[randomnum];
    }

    document.getElementById("result").textContent = password;
}