console.log("test3");

function moveToPageD(){
  pgD.style.display = 'block';
  mainEntry.style.display = 'none';
};

btnPgDBack.addEventListener("click", function(){
  pgD.style.display = 'none';
  mainEntry.style.display = 'block';
})

btnTestComplete.addEventListener("click", function(){
  setupTest();
  assertEqual("Test Email", exampleInputEmail1.value,  "Email address is incorrect");
  assertEqual("Test pw", exampleInputPassword1.value,"Password");
  assertEqual("C#", exampleInput3.value,"Any coding qualifications");
  assertEqual("18 Test st", exampleInput4.value, "Client Address should not be set");

  let errorStyleElem = document.getElementsByClassName("is-invalid");
  assertEqual(errorStyleElem.length, 1, "Error style was not added")

  let elemsWithClass = document.getElementsByClassName("form-control");

  assertEqual("18", elemsWithClass[4].value, "Page D - Table");
  assertEqual("Late Night", elemsWithClass[5].value, "Page D - Name");
  assertEqual("58 Test Ln", elemsWithClass[6].value, "Page D - Address");
  assertEqual("30", elemsWithClass[7].value, "Page D - Age");

  assertNoFailure()
})

btnAddError.addEventListener("click", function(){
  exampleInputEmail1.classList.add("is-invalid");
  setTimeout(moveToPageD, 3000)
});