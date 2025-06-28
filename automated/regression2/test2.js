
console.log("test2");

let btnTestComplete = document.getElementById("btnTestComplete");

if(btnTestComplete){
  btnTestComplete.addEventListener("click", function(){
    setupTest();
    // assertEqual("Test Email", exampleInputEmail1.value,  "Email address is incorrect");
    // assertEqual("Test PW", exampleInputPassword1.value,"Password");
    // assertEqual("Java", exampleInput3.value,"Any coding qualifications");
    // assertEqual("12 Test st", exampleInput4.value, "Client Address should not be set");

    let elemsWithClass = document.getElementsByClassName("form-control");

    assertEqual("Table 1", elemsWithClass[0].value, "Table");
    assertEqual("David", elemsWithClass[1].value, "Name");
    assertEqual("38 Test St", elemsWithClass[2].value, "Address");
    assertEqual("12", elemsWithClass[3].value, "Age");

    assertNoFailure()
  })
}
