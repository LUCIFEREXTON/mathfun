let isgame = 0;
let sec = 20;
let score = 0;


const startcountdown = (sec) => {
    var myvar = setInterval(() => {
        if (sec == 0) {
            clearInterval(myvar);
        } else {
            sec--;
            $(".timeleft").text(sec);
        }
    }, 1000);

}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let n1 = 0;
let n2 = 0;
let limit = 10;
const generatequetions = (limit) => {
    n1 = getRndInteger(1, limit);
    n2 = getRndInteger(1, limit);
    $(".question").text(`${n1} x ${n2}`);
    let options = [
        n1 * n2,
        n1 * n2 + 10,
        n1 * n2 - 10,
        n1 * n2 + 20
    ];
    $(".option").each((i, e) => {
        let index = getRndInteger(0, options.length - 1);
        $(e).text(options[index]);
        options.splice(index, 1);
    });

}


$(".option").each((i, e) => {
    $(e).click(() => {
        if (isgame == 1) {
            if ($(e).text() == (n1 * n2)) {
                score++;
                console.log("correct");
                $(".cscore").text(score);
            }
        }
        generatequetions(limit++);
    });
});



const startgame = () => {
    $(".startgame").css("display", "none");
    $(".time").css("display", "inline");
    $(".restart").css("display", "inline");
    $(".timeleft").text(sec)
    startcountdown(sec);

    generatequetions(limit++);

    setTimeout(() => {
        $(".message").css("display", "flex");
        $(".startgame").css("display", "inline");
        $(".time").css("display", "none");
        $(".restart").css("display", "none");
        isgame = 0;
    }, (sec * 1000));
};


$(".restart").click(() => {
    if (isgame == 1) {
        location.reload(true);
    }
});

$(".startgame").click(() => {
    $(".message").css("display", "none");
    if (isgame == 0) {
        isgame = 1;
        startgame();
    }
});