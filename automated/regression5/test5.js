console.log("test5");


btnPgD.addEventListener("click", function(){
    pgD.style.display = 'block';
    mainEntry.style.display = 'none';
}) 


btnPgDBack.addEventListener("click", function(){
    pgD.style.display = 'none';
    mainEntry.style.display = 'block';
})


btnTestComplete.addEventListener("click", function(){
  setupTest();
  assertEqual("ttt@co.ct", exampleInputEmail1.value,  "Email address is incorrect");
  assertEqual("pwd", exampleInputPassword1.value,"Password");
  assertEqual("lua", exampleInput3.value,"Any coding qualifications");
  assertEqual("137 Fake st", exampleInput4.value, "Client Address should not be set");

  let elemsWithClass = document.getElementsByClassName("form-control");

  assertEqual("Oak", elemsWithClass[4].value, "Page D - Table");
  assertEqual("Test D", elemsWithClass[5].value, "Page D - Name");
  assertEqual("88 Agag", elemsWithClass[6].value, "Page D - Address");
  assertEqual("22", elemsWithClass[7].value, "Page D - Age");

  assertNoFailure()
})

