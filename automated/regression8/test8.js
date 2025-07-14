console.log("test 8")

let buttonNextPage = document.getElementById("buttonNextPage");
let btnTestComplete = document.getElementById("btnTestComplete");
let doneBtn = document.getElementById("done");

    
if(window.location.href.includes("claimNo=2")){
  btnTestComplete.style.display = "block"
}


if (buttonNextPage){
  buttonNextPage.addEventListener("click", function(){
    console.log("click")
    setupTest();

    let success = true; 
    const allQuestions = document.getElementsByClassName("form-control");
    success = assertEqual("llll@tetet.co", allQuestions[0].value,  "Email address");
    success = assertEqual("X.sharp", allQuestions[1].value,  "Password");
    success = assertEqual("c#", allQuestions[2].value,  "Any coding qualifications");
    success = assertEqual("1 New st", allQuestions[3].value,  "Client Address");

    assertNoFailure()

    if(success === true){
      window.location.href = "/automated/regression8/pageClaim.html?claimNo=1";
    } else {
      setFailed()
    }
  })
}

if(doneBtn){
  doneBtn.addEventListener("click", () => {
    console.log("click")
    setupTest();

    const claimNo = window.location.href.includes("claimNo=1") ? 1 : 2;
    if(claimNo === 1){
      assertClaim1()
    }
    else{
      assertClaim2()
    }
  })
}

if(btnTestComplete){
  btnTestComplete.addEventListener("click", () => {
    console.log("click");

    setupTest();
    assertClaim2();
  })
}

function assertClaim1(){
    const allQuestions = document.getElementsByClassName("form-control");
    let success = true
    success = assertEqual("Claim 1", allQuestions[0].value,  "What type of incident was it?");
    success = assertEqual("28/8/2020", allQuestions[1].value,  "When did the incident happen?");
    success = assertEqual("We Pause here so you can check", allQuestions[2].value,  "What type of damage was suffered?");
    success = assertEqual("No", allQuestions[3].value,  "Was the no claims discount affected?");

    assertNoFailure()
    if(success === true){
      window.location.href = "/automated/regression8/intermediary.html";
    }
}

function assertClaim2(){
    const allQuestions = document.getElementsByClassName("form-control");
    let success = true;
    success = assertEqual("Claim 2", allQuestions[0].value,  "What type of incident was it?");
    success = assertEqual("1/9/2021", allQuestions[1].value,  "When did the incident happen?");
    success = assertEqual("Accidental damage", allQuestions[2].value,  "What type of damage was suffered?");
    success = assertEqual("Yes", allQuestions[3].value,  "Was the no claims discount affected?");

    assertNoFailure()
}