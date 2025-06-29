console.log("test4");


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
  assertEqual("testEmail", exampleInputEmail1.value,  "Email address is incorrect");
  assertEqual("testPTT", exampleInputPassword1.value,"Password");
  assertEqual("js", exampleInput3.value,"Any coding qualifications");
  assertEqual("1808 Fake St", exampleInput4.value, "Client Address should not be set");

  let elemsWithClass = document.getElementsByClassName("form-control");

  assertEqual("Maghongy", elemsWithClass[4].value, "Page C - Table");
  assertEqual("James", elemsWithClass[5].value, "Page C - Name");
  assertEqual("88 Drum st", elemsWithClass[6].value, "Page C - Address");
  assertEqual("10 Fingers", elemsWithClass[7].value, "Page C - Age");

  assertNoFailure()
})

