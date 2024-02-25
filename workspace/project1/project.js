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
        
    } else {
        $(".prev-text").css("display", "block");
    }

    if (currentIdx2 >= 3) {
        $(".next-text").css("display", "none");
    } else {
        $(".next-text").css("display", "block");
    }
}