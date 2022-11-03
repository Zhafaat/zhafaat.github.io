const start = document.getElementById("start");
const nama = document.getElementById("input-name");
const age = document.getElementById("input-age");
const player = document.getElementById("name");
const alert = document.getElementById("alert");
const image = document.querySelector("img")
const score = document.getElementById("score-text");
const time  = document.getElementById("time-text");
const final = document.getElementById("winner");
const finalScore = document.getElementById("yourScore");
const play = document.getElementById("play-btn");
let sekon = 5;
let indexSoal = 0;
let nilai = 0;
let imageList = [
    {
        question: "https://d3rprocq7xhbva.cloudfront.net/pgcpost/thumbnail/0-941r-1572504015945_640x376.jpeg",
        option: ["lion", "cat", "squirrel", "horse"],
        answer:  "horse"
    }, {
        question: "https://akcdn.detik.net.id/visual/2022/01/04/ilustrasi-kucing-oranye_169.jpeg?w=650",
        option: ["squirrel", "cat", "lion", "fish"],
        answer: "cat"
    }, {
        question: "https://www.eekwi.org/sites/default/files/2019-11/greysquirrel.jpg",
        option: ["squirrel", "lion", "fish", "cow"],
        answer: "squirrel"
    }, {
        question: "https://pelopor.id/wp-content/uploads/2022/09/lionking2019_feature-e1563769867902.jpg", 
        option: ["lion", "fish", "cow", "panda"],
        answer: "lion"
    }, {
        question: "https://images.twinkl.co.uk/tr/raw/upload/u/ux/usawiki-fish-clownfish_ver_1.jpg", 
        option: ["bird", "cow", "panda", "fish"],
        answer: "fish"
    }, {
        question: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Cow_female_black_white.jpg/1280px-Cow_female_black_white.jpg", 
        option: ["swan", "panda", "cow", "rabbit"],
        answer: "cow"
    }, {
        question: "https://pict.sindonews.net/dyn/850/pena/news/2022/01/24/766/665813/ini-penyebab-panda-raksasa-tetap-gemuk-meskipun-vegetarian-makan-bambu-bjp.JPG", 
        option: ["panda", "bird", "rabbit", "swan"],
        answer: "panda"        
    }, {
        question: "https://static.scientificamerican.com/sciam/cache/file/7A715AD8-449D-4B5A-ABA2C5D92D9B5A21_source.png", 
        option: ["horse", "bird", "swan", "horse"],
        answer: "bird"
    },{
        question: "https://nypost.com/wp-content/uploads/sites/2/2022/09/deadly-rabbit-disease-419.jpg?quality=75&strip=all", 
        option: ["swan", "rabbit", "horse", "cat"],
        answer: "rabbit"
    }, {
        question: "https://a-z-animals.com/media/swan-3.jpg", 
        option: ["swan", "horse", "cat", "squirrel"],
        answer: "swan"
    }
];
let btn1 = document.querySelector(".button1");
let btn2 = document.querySelector(".button2");
let btn3 = document.querySelector(".button3");
let btn4 = document.querySelector(".button4");
btn1.disabled = true;
btn2.disabled = true;
btn3.disabled = true;
btn4.disabled = true;


// console.log(btn1.innerText)

start.addEventListener("click", function(e){
    if (nama.value == ""){
        player.innerHTML = nama.value;
        score.innerHTML = `${nilai} Point`
        image.style.display = "flex";
        alert.style.display = "none";
        final.style.display = "none";
        
    }
    if (nama.value != "" && age.value != ""){
        if(age.value >= 4 && age.value <= 6){
            e.preventDefault()
            btn1.disabled = false;
            btn2.disabled = false;
            btn3.disabled = false;
            btn4.disabled = false;
            start.disabled = true;
            image.style.display = "flex";
            alert.style.display = "none";
            final.style.display = "none";
            player.innerHTML = nama.value;
            score.innerHTML = `${nilai} Point`
            // gamePlay();
            // time
            image.src = imageList[indexSoal].question;
            btn1.innerHTML = imageList[indexSoal].option[0];
            btn2.innerHTML = imageList[indexSoal].option[1];
            btn3.innerHTML = imageList[indexSoal].option[2];
            btn4.innerHTML = imageList[indexSoal].option[3];
            let timer = setInterval(function(){
                time.innerHTML = `${sekon} detik`;
                sekon--
                if(sekon < 0 ) {
                    indexSoal += 1;
                    // console.log(indexSoal);
                    if (indexSoal <= 9) {
                        image.src = imageList[indexSoal].question;
                        btn1.innerHTML = imageList[indexSoal].option[0];
                        btn2.innerHTML = imageList[indexSoal].option[1];
                        btn3.innerHTML = imageList[indexSoal].option[2];
                        btn4.innerHTML = imageList[indexSoal].option[3];
                        sekon = 5;
                    }
                }
                // console.log("tes",indexSoal > 9)
                if (indexSoal  > 9) {
                    // console.log("clear the interval", indexSoal)
                    time.innerHTML = "stop";
                    image.style.display = "none";
                    final.style.display = "flex";
                    finalScore.innerHTML = `Your Score is ${nilai} point`;               
                    btn1.innerHTML = "A";
                    btn2.innerHTML = "B";
                    btn3.innerHTML = "C";
                    btn4.innerHTML = "D";
                    nama.value = "";
                    age.value = "";
                    indexSoal = 0;
                    nilai = 0;
                    sekon = 5;
                    start.disabled = false;
                    image.src = "./logo.png";
                    // console.log("lewat");
                    btn1.disabled = true;
                    btn2.disabled = true;
                    btn3.disabled = true;
                    btn4.disabled = true;
                    clearInterval(timer);
                }
            }, 1000);
        } 
        // else if(age.value == ""){} 
        
        else if(age.value < 4 || age.value > 6){
            e.preventDefault()
            image.style.display = "none";
            final.style.display = "none";
            alert.style.display = "flex";
        }
    }
})

// function gamePlay(){
    //     for (let indexSoal = 0; indexSoal < imageList.length; indexSoal++){
        //         sekon = 15;  
//     }
// }

play.addEventListener("click", function(e){
    e.preventDefault()
    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;
    btn4.disabled = false;
    start.disabled = true;
    image.style.display = "flex";
    alert.style.display = "none";
    final.style.display = "none";
    player.innerHTML = nama.value;
    score.innerHTML = `${nilai} Point`
    // gamePlay();
    // time
    image.src = imageList[indexSoal].question;
    btn1.innerHTML = imageList[indexSoal].option[0];
    btn2.innerHTML = imageList[indexSoal].option[1];
    btn3.innerHTML = imageList[indexSoal].option[2];
    btn4.innerHTML = imageList[indexSoal].option[3];
    let timer = setInterval(function(){
        time.innerHTML = `${sekon} detik`;
        sekon--
        if(sekon < 0 ) {
            indexSoal += 1;
            // console.log(indexSoal);
            if (indexSoal <= 9) {
                image.src = imageList[indexSoal].question;
                btn1.innerHTML = imageList[indexSoal].option[0];
                btn2.innerHTML = imageList[indexSoal].option[1];
                btn3.innerHTML = imageList[indexSoal].option[2];
                btn4.innerHTML = imageList[indexSoal].option[3];
                sekon = 5;
            }
        }
        // console.log("tes",indexSoal > 9)
        if (indexSoal  > 9) {
            // console.log("clear the interval", indexSoal)
            time.innerHTML = "stop";
            image.style.display = "none";
            final.style.display = "flex";
            finalScore.innerHTML = `Your Score is ${nilai} point`;               
            btn1.innerHTML = "A";
            btn2.innerHTML = "B";
            btn3.innerHTML = "C";
            btn4.innerHTML = "D";
            nama.value = "";
            age.value = "";
            indexSoal = 0;
            nilai = 0;
            sekon = 5;
            start.disabled = false;
            image.src = "./logo.png";
            // console.log("lewat");
            btn1.disabled = true;
            btn2.disabled = true;
            btn3.disabled = true;
            btn4.disabled = true;
            clearInterval(timer);
        }
    }, 1000);
});

btn1.addEventListener("click", function(){
    if (indexSoal <= 9) {
        if (imageList[indexSoal].answer == btn1.innerHTML){
            if (nilai < 100) {
                nilai += 10;
                score.innerHTML = `${nilai} Point`
                // console.log(indexSoal);
                indexSoal += 1;
                if (indexSoal <= 9) {
                    image.src = imageList[indexSoal].question;
                    btn1.innerHTML = imageList[indexSoal].option[0];
                    btn2.innerHTML = imageList[indexSoal].option[1];
                    btn3.innerHTML = imageList[indexSoal].option[2];
                    btn4.innerHTML = imageList[indexSoal].option[3];
                    sekon = 5;
                }
            }
        } else if (imageList[indexSoal].option[0] != btn1.innerHTML){
            indexSoal += 1;
            if (indexSoal <= 9) {
                image.src = imageList[indexSoal].question;
                btn1.innerHTML = imageList[indexSoal].option[0];
                btn2.innerHTML = imageList[indexSoal].option[1];
                btn3.innerHTML = imageList[indexSoal].option[2];
                btn4.innerHTML = imageList[indexSoal].option[3];
                sekon = 5;
            }
        }
    }
})

btn2.addEventListener("click", function(){
    if (indexSoal <= 9) {
        if (imageList[indexSoal].answer == btn2.innerHTML){
            if (nilai < 100) {
                nilai += 10;
                score.innerHTML = `${nilai} Point`
                console.log(indexSoal);
                indexSoal += 1;
                if (indexSoal <= 9) {
                    image.src = imageList[indexSoal].question;
                    btn1.innerHTML = imageList[indexSoal].option[0];
                    btn2.innerHTML = imageList[indexSoal].option[1];
                    btn3.innerHTML = imageList[indexSoal].option[2];
                    btn4.innerHTML = imageList[indexSoal].option[3];
                    sekon = 5;
                }
            }
        } else if (imageList[indexSoal].option[0] != btn2.innerHTML){
            indexSoal += 1;
            if (indexSoal <= 9) {
                image.src = imageList[indexSoal].question;
                btn1.innerHTML = imageList[indexSoal].option[0];
                btn2.innerHTML = imageList[indexSoal].option[1];
                btn3.innerHTML = imageList[indexSoal].option[2];
                btn4.innerHTML = imageList[indexSoal].option[3];
                sekon = 5;
            }
        }
    }
})

btn3.addEventListener("click", function(){
    if (indexSoal <= 9) {
        if (imageList[indexSoal].answer == btn3.innerHTML){
            if (nilai < 100) {
                nilai += 10;
                score.innerHTML = `${nilai} Point`
                console.log(indexSoal);
                indexSoal += 1;
                if (indexSoal <= 9) {
                    image.src = imageList[indexSoal].question;
                    btn1.innerHTML = imageList[indexSoal].option[0];
                    btn2.innerHTML = imageList[indexSoal].option[1];
                    btn3.innerHTML = imageList[indexSoal].option[2];
                    btn4.innerHTML = imageList[indexSoal].option[3];
                    sekon = 5;
                }
            }
        } else if (imageList[indexSoal].option[0] != btn3.innerHTML){
            indexSoal += 1;
            if (indexSoal <= 9) {
                image.src = imageList[indexSoal].question;
                btn1.innerHTML = imageList[indexSoal].option[0];
                btn2.innerHTML = imageList[indexSoal].option[1];
                btn3.innerHTML = imageList[indexSoal].option[2];
                btn4.innerHTML = imageList[indexSoal].option[3];
                sekon = 5;
            }
        }
    }
})

btn4.addEventListener("click", function(){
    if (indexSoal <= 9) {
        if (imageList[indexSoal].answer == btn4.innerHTML){
            if (nilai < 100) {
                nilai += 10;
                score.innerHTML = `${nilai} Point`
                console.log(indexSoal);
                indexSoal += 1;
                if (indexSoal <= 9) {
                    image.src = imageList[indexSoal].question;
                    btn1.innerHTML = imageList[indexSoal].option[0];
                    btn2.innerHTML = imageList[indexSoal].option[1];
                    btn3.innerHTML = imageList[indexSoal].option[2];
                    btn4.innerHTML = imageList[indexSoal].option[3];
                    sekon = 5;
                }
            }
        } else if (imageList[indexSoal].option[0] != btn4.innerHTML){
            indexSoal += 1;
            if (indexSoal <= 9) {
                image.src = imageList[indexSoal].question;
                btn1.innerHTML = imageList[indexSoal].option[0];
                btn2.innerHTML = imageList[indexSoal].option[1];
                btn3.innerHTML = imageList[indexSoal].option[2];
                btn4.innerHTML = imageList[indexSoal].option[3];
                sekon = 5;
            }
        }
    }
})