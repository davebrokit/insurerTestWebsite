
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
      window.location.href = "/automated/regression15/Test15pageB.html";
    } else {
      setFailed()
    }
  })
}



if(btnFillDone){
  btnFillDone.addEventListener("click", function(){

    let elemsWithClass = document.getElementsByClassName("form-control");
    let success = true; 
    success = success && assertEqual("Table 1", elemsWithClass[0].value, "Table");
    success = success && assertEqual("David", elemsWithClass[1].value, "Name");
    success = success && assertEqual("38 Test St", elemsWithClass[2].value, "Address");
    success = success && assertEqual("12", elemsWithClass[3].value, "Age");

    if(success === true){
      elemsWithClass[0].value = "";
      elemsWithClass[1].value = "";
      elemsWithClass[2].value = ""; 
      elemsWithClass[3].value = ""; 
      btnTestComplete.removeAttribute("disabled");
      btnFillDone.style.visibility = 'hidden';
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


