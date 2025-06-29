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
      window.location.href = "/automated/regression14/Test14pageB.html";
    } else {
      setFailed()
    }
  })
}


if(btnTestComplete){
  btnTestComplete.addEventListener("click", function(){
    setupTest();

    let elemsWithClass = document.getElementsByClassName("form-control");

    assertEmpty( elemsWithClass[0].value, "Table should not be filled");
    assertEmpty( elemsWithClass[1].value, "Name should not be filled");
    assertEmpty( elemsWithClass[2].value, "Address should not be filled");
    assertEmpty( elemsWithClass[3].value, "Age should not be filled");

    assertNoFailure()
  })
}


