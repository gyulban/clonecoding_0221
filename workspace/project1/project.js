//슬라이드 이미지 감싸고 있는 부모요소
let $bannerBox = $(".banner-box");
//슬라이드 이미지
let $bannerImgs = $(".banner-img");

//슬라이드 이미지 너비
let bannerWidth = 1120;
//슬라이드 이미지 인덱스 번호
let currentIdx = 0;
//총 슬라이드 이미지 수
let slideCnt = $bannerImgs.length;

$(".next").on("click", moveNext);
function moveNext() {
    currentIdx++;
    $bannerBox.css("left", -(currentIdx * bannerWidth));
    $bannerBox.css("transition", "0.5s ease");
    checkEnd();
}

function moveFirst() {
    currentIdx = 0;
    checkEnd();
    $bannerBox.css("transition", "1.3s ease");
    $bannerBox.css("left", 0);
}

$(".prev").on("click", function () {
    currentIdx--;
    $bannerBox.css("left", -(currentIdx * bannerWidth));
    $bannerBox.css("transition", "0.5s ease");
    checkEnd();
});

checkEnd();

//처음 이미지와 마지막 이미지는 화살표 감추기
function checkEnd() {
    if (currentIdx <= 0) {
        $(".prev").css("display", "none");
    } else {
        $(".prev").css("display", "block");
    }

    if (currentIdx >= slideCnt - 1) {
        $(".next").css("display", "none");
    } else {
        $(".next").css("display", "block");
    }
}

setInterval(function () {
    if (currentIdx == slideCnt - 1) {
        // 맨처음으로 돌아갈 수 있도록 함수
        moveFirst();
    } else {
        moveNext();
    }
}, 3000);

//슬라이드 이미지 감싸고 있는 부모요소
let $bannerBox2 = $(".banner-box-2");
//슬라이드 이미지
let $bannerImgs2 = $(".banner-img-2");

//슬라이드 이미지 너비
let bannerWidth2 = 1140;
//슬라이드 이미지 인덱스 번호
let currentIdx2 = 0;
//총 슬라이드 이미지 수
let slideCnt2 = $bannerImgs2.length;

$(".next-text").on("click", moveNext2);
function moveNext2() {
    currentIdx2++;
    $bannerBox2.css("left", -(currentIdx2 * bannerWidth2));
    $bannerBox2.css("transition", "0.5s ease");
    checkEnd2();
}

function moveFirst2() {
    currentIdx2 = 0;
    checkEnd2();
    $bannerBox2.css("transition", "1.3s ease");
    $bannerBox2.css("left", 0);
}

$(".prev-text").on("click", function () {
    currentIdx2--;
    $bannerBox2.css("left", -(currentIdx2 * bannerWidth2));
    $bannerBox2.css("transition", "0.5s ease");
    checkEnd2();
});

checkEnd2();

//처음 이미지와 마지막 이미지는 화살표 감추기
function checkEnd2() {
    if (currentIdx2 <= 0) {
        $(".prev-text").css("display", "none");
        $(".prev-empty").css("display", "block");
    } else {
        $(".prev-text").css("display", "block");
        $(".prev-empty").css("display", "none");
    }

    if (currentIdx2 >= 3) {
        $(".next-text").css("display", "none");
        $(".next-empty").css("display", "block");
    } else {
        $(".next-text").css("display", "block");
        $(".next-empty").css("display", "none");
    }
}

//슬라이드 이미지 감싸고 있는 부모요소
let $bannerBox3 = $(".banner-box-3");
//슬라이드 이미지
let $bannerImgs3 = $(".banner-img-3");

//슬라이드 이미지 너비
let bannerWidth3 = 1115;
//슬라이드 이미지 인덱스 번호
let currentIdx3 = 0;
//총 슬라이드 이미지 수
let slideCnt3 = $bannerImgs3.length;

$(".nex-text").on("click", moveNext3);
function moveNext3() {
    currentIdx3++;
    $bannerBox3.css("left", -(currentIdx3 * bannerWidth3));
    $bannerBox3.css("transition", "0.5s ease");
    checkEnd3();
}

function moveFirst3() {
    currentIdx3 = 0;
    checkEnd3();
    $bannerBox3.css("transition", "1.3s ease");
    $bannerBox3.css("left", 0);
}

$(".pre-text").on("click", function () {
    currentIdx3--;
    $bannerBox3.css("left", -(currentIdx3 * bannerWidth3));
    $bannerBox3.css("transition", "0.5s ease");
    checkEnd3();
});

checkEnd3();

//처음 이미지와 마지막 이미지는 화살표 감추기
function checkEnd3() {
    if (currentIdx3 <= 0) {
        $(".pre-text").css("display", "none");
        $(".pre-empty").css("display", "block");
    } else {
        $(".pre-text").css("display", "block");
        $(".pre-empty").css("display", "none");
    }

    if (currentIdx3 >= 3) {
        $(".nex-text").css("display", "none");
        $(".nex-empty").css("display", "block");
    } else {
        $(".nex-text").css("display", "block");
        $(".nex-empty").css("display", "none");
    }
}