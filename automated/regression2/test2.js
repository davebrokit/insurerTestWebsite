console.log("test2");


btnPgC.addEventListener("click", function(){
    pgC.hidden= false;
    mainEntry.hidden= true;
}) 

btnPgCBack.addEventListener("click", function(){
    pgC.hidden = true;
    mainEntry.hidden= false;
}) 


btnTestComplete.addEventListener("click", function(){
  setupTest();
  assertEqual("Test Email", exampleInputEmail1.value,  "Email address is incorrect");
  assertEqual("Test PW", exampleInputPassword1.value,"Password");
  assertEqual("Java", exampleInput3.value,"Any coding qualifications");
  assertEqual("12 Test st", exampleInput4.value, "Client Address should not be set");

  let elemsWithClass = document.getElementsByClassName("form-control");

  assertEqual("Table 1", elemsWithClass[4].value, "Table");
  assertEqual("David", elemsWithClass[5].value, "Name");
  assertEqual("38 Test St", elemsWithClass[6].value, "Address");
  assertEqual("12", elemsWithClass[7].value, "Age");



  assertNoFailure()
})

