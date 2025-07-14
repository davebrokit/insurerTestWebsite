console.log("test 9")
let email = localStorage.getItem("email");
let pwd = localStorage.getItem("password");

if(email){
    exampleInputEmail1.value = email;
}
if(pwd){
    exampleInputPassword1.value = pwd;
}
localStorage.clear();

const emailInput = document.getElementById("exampleInputEmail1");
const passwordInput = document.getElementById("exampleInputPassword1");
const btnTestComplete = document.getElementById("btnTestComplete");
const checkbox = document.getElementById("exampleCheck1");

emailInput.addEventListener("change", (e) => {
  localStorage.setItem("email", e.target.value)
})
passwordInput.addEventListener("change", (e) => {
  localStorage.setItem("password", e.target.value)
})

checkbox.addEventListener("change", () => {
  window.location.href = "/automated/regression9/Test9.html"
})

btnTestComplete.addEventListener("click",() => {
   setupTest();

    let success = true; 
    const allQuestions = document.getElementsByClassName("form-control");
    success = assertEqual("llll@tetet.co", allQuestions[0].value,  "Email address");
    success = assertEqual("X.sharp", allQuestions[1].value,  "Password");
    success = assertEqual("c#", allQuestions[2].value,  "Any coding qualifications");
    success = assertEqual("1 New st", allQuestions[3].value,  "Client Address");
    assertNoFailure()

  })



