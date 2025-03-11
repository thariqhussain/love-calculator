function ranNumGen() {
    let name1 = document.getElementById("name-1");
    let name2 = document.getElementById("name-2");
    let result = document.getElementById("love-result");

    if(name1.value.trim() === "" || name2.value.trim() === "") {
        setTimeout(() => {
            result.innerHTML = "Enter Name First";
        }, 2000)
        
    } else {
        let n = Math.random() * 101;
        setTimeout(() => {
            result.innerHTML = Math.floor(n) + "%";
        }, 2000);
    }
}

setInterval(() => {
    let heartImg = document.querySelector('img');
    heartImg.style.height = heartImg.style.height === "60px" ? "40px" : "60px"
    heartImg.style.width = heartImg.style.width === "60px" ? "40px" : "60px"
}, 1000);

// setInterval(() => {
//     let heartImg2 = document.querySelector('img');
//     heartImg2.style.height = heartImg2.style.height === "80px" ? "60px" : "80px"
//     heartImg2.style.width = heartImg2.style.width === "80px" ? "60px" : "80px"
// }, 1000);



console.log(document.querySelector('img').alt)

// git commit message
// 1. Result percentage shows after 2 seconds (added 2 second late functionality).


// Features to be added.
// 1. heartin should be placed in the place of percentage result.
// 2. it should burst out or break the heart depending upon percentage.