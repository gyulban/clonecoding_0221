$(".check-input-all").click(function(){
    var checked = $("check-input-all").is(":checked");

    if(checked){
        $(".check-input").prop("checked", true)
    }
})
  
$(".check-input").click(function(){
    $(".check-input-all").prop("checked", $("check-input").filter(":checked").length === 5)
})
  
// $("#age").click(function(){
//     $("#age").prop("checked", true)
// })


  function check1(){
    if($("#age").is(":checked")){
      $("#age1").css("display", "flex")
      $("#age1").css("margin-bottom", "3px")
    }else{
        $("#age1").css("display", "none")
    }
  }

  function check2(){
    if($("#agree1").is(":checked")){
      $("#agree11").css("display", "flex")
      $("#agree11").css("margin-bottom", "3px")
    }else{
        $("#agree11").css("display", "none")
    }
  }

  function check3(){
    if($("#agree2").is(":checked")){
      $("#agree21").css("display", "flex")
      $("#agree21").css("margin-bottom", "3px")
    }else{
        $("#agree21").css("display", "none")
    }
  }

  function check4(){
    if($("#recieve1").is(":checked")){
      $("#recieve11").css("display", "flex")
      $("#recieve11").css("margin-bottom", "3px")
    }else{
        $("#recieve11").css("display", "none")
    }
  }

  function check5(){
    if($("#recieve2").is(":checked")){
      $("#recieve21").css("display", "flex")
      $("#recieve21").css("margin-bottom", "3px")
    }else{
        $("#recieve21").css("display", "none")
    }
  }

  check1();

  console.log($("#age").is(":checked"))

  $('#allCk').click(function(){
    var checked = $('#allCk').is(':checked');
    
    if(checked)
        $('input:checkbox').prop('checked',true);
});