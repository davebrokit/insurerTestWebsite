let pageNo = 0;

let buttonNextPage = document.getElementById("btnPgF");
let buttonNextPageG = document.getElementById("btnPgG");
let btnTestComplete = document.getElementById("btnTestComplete");
console.log(buttonNextPage, buttonNextPageG, btnTestComplete)

const pageA = document.getElementById("mainEntry")
const pageF = document.getElementById("pF")
const pageG = document.getElementById("pG")

buttonNextPage.addEventListener("click", () => {
  console.log("click");

  pageA.style.display = "none"
  pageF.style.display = "block"
})

buttonNextPageG.addEventListener("click", () => {
  console.log("click");

  pageF.style.display = "none"
  pageG.style.display = "block"
})

btnTestComplete.addEventListener("click", () => {
  setupTest()
  const allQuestions = document.getElementsByClassName("form-control");
  assertEqual("llll@tetet.co", allQuestions[0].value,  "Email address");
  assertEqual("X.sharp", allQuestions[1].value,  "Password");
  assertEqual("c#", allQuestions[2].value,  "Any coding qualifications");
  assertEqual("13 New st", allQuestions[3].value,  "Client Address");
  
  assertEqual("Coffee", allQuestions[4].value,  "Better vibes and vibe coding");
  assertEqual("<div>", allQuestions[5].value,  "JavaScript HTML Input Examples");
  assertEqual("We we'll wait here so you can check", allQuestions[6].value,  "Do you own your home?");
  assertEqual("Yes", allQuestions[7].value,  "Do any children under the age of 16 live with you?");
  
  assertEqual("No", allQuestions[8].value,  "Have you continuously lived in the UK since birth?");
  assertEqual("Mr", allQuestions[9].value,  "Title");
  assertEqual("Mark", allQuestions[10].value,  "First name");
  assertEqual("1/1/2000", allQuestions[11].value,  "date of birth?");

  assertNoFailure()
})
