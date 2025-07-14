console.log("test 12")
let page = "pg1";

btnTestComplete.addEventListener("click",() => {
  setupTest();

  assertEqual("Money Tree", inPlant.value,  "Page 1 Filled");
  assertEqual("Small Kitchen", inKitchen.value,  "Page 2 Filled");
  assertEqual("Cybercube", inComputer.value,  "Page 3 Filled");
  assertEqual("Finally", inLast.value,  "Page 4 Filled");
  assertEqual("Back", inManIntervention.value,  "You need to enter in Back in the manual intervention field");
  
  assertNoFailure()
})



buttonNextPage.addEventListener("click", () => {
  if(page === "pg1"){
    page = "pg2";
    document.getElementById("pgReg12Pg1").style.display = "none";
    document.getElementById("pgReg12Pg2").style.display = "block";
    document.getElementById("pgReg12Pg3").style.display = "none";
    document.getElementById("pgReg12Pg4").style.display = "none";
  } else if(page === "pg2"){
    page = "pg3";
    document.getElementById("pgReg12Pg1").style.display = "none";
    document.getElementById("pgReg12Pg2").style.display = "none";
    document.getElementById("pgReg12Pg3").style.display = "block";
    document.getElementById("pgReg12Pg4").style.display = "none";
  } else if(page === "pg3"){
    page = "pg4";
    document.getElementById("pgReg12Pg1").style.display = "none";
    document.getElementById("pgReg12Pg2").style.display = "none";
    document.getElementById("pgReg12Pg3").style.display = "none";
    document.getElementById("pgReg12Pg4").style.display = "block";
  }
})

btnBack.addEventListener("click", () => {
  if(page === "pg2"){
    page = "pg1";
    document.getElementById("pgReg12Pg1").style.display = "block";
    document.getElementById("pgReg12Pg2").style.display = "none";
    document.getElementById("pgReg12Pg3").style.display = "none";
    document.getElementById("pgReg12Pg4").style.display = "none";
  } else if(page === "pg3"){
    page = "pg2";
    document.getElementById("pgReg12Pg1").style.display = "none";
    document.getElementById("pgReg12Pg2").style.display = "block";
    document.getElementById("pgReg12Pg3").style.display = "none";
    document.getElementById("pgReg12Pg4").style.display = "none";
  }else if(page === "pg4"){
    page = "pg3";
    document.getElementById("pgReg12Pg1").style.display = "none";
    document.getElementById("pgReg12Pg2").style.display = "none";
    document.getElementById("pgReg12Pg3").style.display = "block";
    document.getElementById("pgReg12Pg4").style.display = "none";
  }
})


