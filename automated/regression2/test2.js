
console.log("test2");

let buttonNextPage = document.getElementById("buttonNextPage");
let btnTestComplete = document.getElementById("btnTestComplete");


if (buttonNextPage){
  buttonNextPage.addEventListener("click", function(){
    let success = true; 
    success = success && assertEqual("Test Email", exampleInputEmail1.value,  "Email address is incorrect");
    success = success && assertEqual("Test PW", exampleInputPassword1.value,"Password");
    success = success && assertEqual("Java", exampleInput3.value,"Any coding qualifications");
    success = success && assertEqual("12 Test st", exampleInput4.value, "Client Address should not be set");

    if(success === true){
      window.location.href = "/automated/regression2/test2pageB.html";
    } else {
      setFailed()
    }
  })
}

if(btnTestComplete){
  btnTestComplete.addEventListener("click", function(){
    setupTest();

    let elemsWithClass = document.getElementsByClassName("form-control");

    assertEqual("Table 1", elemsWithClass[0].value, "Table");
    assertEqual("David", elemsWithClass[1].value, "Name");
    assertEqual("38 Test St", elemsWithClass[2].value, "Address");
    assertEqual("12", elemsWithClass[3].value, "Age");

    assertNoFailure()
  })
}


