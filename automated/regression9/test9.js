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
    success = assertEqual("reload@tetet.co", allQuestions[0].value,  "Email address");
    success = assertEqual("Talk", allQuestions[1].value,  "Password");
    success = assertEqual("c# - Let's wait a bit", allQuestions[2].value,  "Any coding qualifications");
    success = assertEqual("1 New st", allQuestions[3].value,  "Client Address");
    assertNoFailure()

  })


setTimeout(() => {
  var elemDiv = document.createElement('div');
  elemDiv.innerHTML = "Loaded"
  elemDiv.style.cssText = 'width:100px;height:200px;opacity:0.3;background:#000;color:#fff;position:fixed;top:0;left:0;z-index:1000;text-align:center;font-size:20px;';
  document.body.prepend(elemDiv);
}, 500);
