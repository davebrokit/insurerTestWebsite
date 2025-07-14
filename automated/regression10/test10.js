console.log("test 10")


btnTestSuccess.addEventListener("click",() => {
  setupTest();
  success("Inspector is showing wait for next page")
})
btnTestFail.addEventListener("click",() => {
  setupTest();
  fail(null, "Insepctor should be showing wait for next page")
})
