console.log("test1");


btnTestComplete.addEventListener("click", function(){
  setupTest();
  assertEqual("Test@.co.uk", exampleInputEmail1.value,  "Email address is incorrect");
  assertEqual("test", exampleInputPassword1.value,"Password");
  assertEqual("No qualifications", exampleInput3.value,"Any coding qualifications");
  assertEmpty(exampleInput4.value, "Client Address should not be set");
  assertNoFailure()
})

