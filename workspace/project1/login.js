$(".check-input-all").on("click", function(e){
  $(".check-input").prop("checked", e.target.checked);
  $(".check-o").css("display", e.target.checked ? "flex" : "none");
  $(".check-o-d").css("display", e.target.checked ? "flex" : "none");
})

$(".check-input").on("click", function(e){
  $(".check-input-all").prop("checked", $(".check-input").filter(":checked").length === 5)
})

$("#age").on("click", function(e){
  $("#age1").css("display", e.target.checked ? "flex" : "none");
  if($(".check-input").filter(":checked").length === 5){
    $(".check-o").css("display", "flex")
  }else{
    $(".check-o").css("display", "none")
  }
})

$("#agree1").on("click", function(e){
  $("#agree11").css("display", e.target.checked ? "flex" : "none");
  if($(".check-input").filter(":checked").length === 5){
    $(".check-o").css("display", "flex")
  }else{
    $(".check-o").css("display", "none")
  }
})


$("#agree2").on("click", function(e){
  $("#agree21").css("display", e.target.checked ? "flex" : "none");
  if($(".check-input").filter(":checked").length === 5){
    $(".check-o").css("display", "flex")
  }else{
    $(".check-o").css("display", "none")
  }
})


$("#recieve1").on("click", function(e){
  $("#recieve11").css("display", e.target.checked ? "flex" : "none");
  if($(".check-input").filter(":checked").length === 5){
    $(".check-o").css("display", "flex")
  }else{
    $(".check-o").css("display", "none")
  }
})

$("#recieve2").on("click", function(e){
  $("#recieve21").css("display", e.target.checked ? "flex" : "none");
  if($(".check-input").filter(":checked").length === 5){
    $(".check-o").css("display", "flex")
  }else{
    $(".check-o").css("display", "none")
  }
})

// $("#e1").on("click", function(e){
//   if($("#e1p").css("color", "rgba(55, 56, 60, 0.61)")){
//     $("#e1p").css("color", "blue")
//   }
//   else if($("#e1p").css("color", "blue")){
//     $("#e1p").css("color", "rgba(55, 56, 60, 0.61)")
//   }
// })

<<<<<<< HEAD
$("#e1").click(function () {
    var e1p = $("#e1p");
    var currentColor = e1p.css("color");

    if (currentColor === "rgb(55, 56, 60)" || currentColor === "rgba(55, 56, 60, 0.61)") {
        e1p.css("color", "blue");
    } 
});

$("#e1").click(function () {
  var e1p = $("#e1p");
  var currentColor = e1p.css("color");

  if (currentColor === "blue") {
    e1p.css("color", "rgba(55, 56, 60, 0.61)");
  }
});

=======
// $("#e1").click(function () {
//     var e1p = $("#e1p");
//     var currentColor = e1p.css("color");

//     if (currentColor === "rgb(55, 56, 60)" || currentColor === "rgba(55, 56, 60, 0.61)") {
//         e1p.css("color", "blue");
//     } 
// });

// $("#e1").click(function () {
//   var e1p = $("#e1p");
//   var currentColor = e1p.css("color");

//   if (currentColor === "blue") {
//     e1p.css("color", "rgba(55, 56, 60, 0.61)");
//   }
// });
>>>>>>> bfb49bd048d750963a8e5acc37a128522f2b6f70
