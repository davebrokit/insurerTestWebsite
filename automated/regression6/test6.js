console.log("test6");


let buttonNextPage = document.getElementById("buttonNextPage");
let btnTestComplete = document.getElementById("btnTestComplete");

if (buttonNextPage){
  buttonNextPage.addEventListener("click", function(){
    let success = true; 
    success = success && assertEqual("T6@co.uk", exampleInputEmail1.value,  "Email address is incorrect");
    success = success && assertEqual("pwd6", exampleInputPassword1.value,"Password");
    success = success && assertEqual("sql", exampleInput3.value,"Any coding qualifications");
    success = success && assertEqual("12 Long St", exampleInput4.value, "Client Address");

    if(success === true){
      window.location.href = "/automated/regression6/pageOnlyOneQ.html";
    } else {
      setFailed()
    }
  })
}


if(btnTestComplete){
  btnTestComplete.addEventListener("click", function(){
    setupTest();

    let elemsWithClass = document.getElementsByClassName("form-control");

    assertEqual("Test this single fills", elemsWithClass[0].value, "Table");

    assertNoFailure()
  })
}


