$(".check-input-all").on("click", function(e){
  $(".check-input").prop("checked", e.target.checked);  
})

$(".check-input").on("click", function(e){
  $(".check-input-all").prop("checked", $("check-input").filter(":checked").length === 5)
})

function check(){
  if($("#age").filter(":checked")){
    $("#age1").css("display", "flex")
  }
}

$("#age").on("mouseover", () => {
  $("#age1").css("display", "flex")
})

$("#age").on("mouseleave", () => {
  $("#age1").css("display", "none")
})