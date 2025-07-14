console.log("test 11")

localStorageField(inLanguage, "language");
localStorageField(inBuildingType, "buildingType"); 

localStorage.clear();

btnTestSuccess.addEventListener("click",() => {
  setupTest();
  success("Inspector is showing wait for next page")
})
btnTestFail.addEventListener("click",() => {
  setupTest();
  fail(null, "Insepctor should be showing wait for next page")
})


buttonNextPage.addEventListener("click", () => {
  location.reload();
})

setTimeout(() => {
  var elemDiv = document.createElement('div');
  elemDiv.innerHTML = "Loaded"
  elemDiv.style.cssText = 'width:100px;height:200px;opacity:0.3;background:#000;color:#fff;position:fixed;top:0;left:0;z-index:1000;text-align:center;font-size:20px;';
  document.body.prepend(elemDiv);
}, 500);
