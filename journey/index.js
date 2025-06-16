let email = localStorage.getItem("email");
let pwd = localStorage.getItem("password");

if(email){
    exampleInputEmail1.value = email;
}
if(pwd){
    exampleInputPassword1.value = pwd;
}
localStorage.clear();


btnPgC.addEventListener("click", function(){
    pgC.hidden= false;
    mainEntry.hidden= true;
}) 

btnPgCBack.addEventListener("click", function(){
    pgC.hidden = true;
    mainEntry.hidden= false;
}) 

let page6 = false;
btnPgShared.addEventListener("click", function(){
    if(page6){
        pg7Load();
    }else{
        pg6Load();
    }
}) 

btnPgD.addEventListener("click", function(){
    pgD.style.display = 'block';
    mainEntry.style.display = 'none';
}) 


btnPgDBack.addEventListener("click", function(){
    pgD.style.display = 'none';
    mainEntry.style.display = 'block';
})


btnPgF.addEventListener("click", pg6Load);
function pg6Load(){
    page6 = true;
    mainInner.innerHTML = "";

    addQuestion(mainInner, "Better vibes and vibe coding", "pg5in1")
    addQuestion(mainInner, "JavaScript HTML Input Examples", "pg5in2")
    addQuestion(mainInner, "Do you own your home?", "pg5in3")
    addQuestion(mainInner, "Do any children under the age of 16 live with you?", "pg5in4")
}

btnPgG.addEventListener("click", pg7Load);
function pg7Load(){
    page6 = false;
    mainInner.innerHTML = "";

    addQuestion(mainInner, "Have you continuously lived in the UK since birth?", "pg7in1")
    addQuestion(mainInner, "Title", "pg7in2")
    addQuestion(mainInner, "First name", "pg7in3")
    addQuestion(mainInner, "date of birth?", "pg7in4")
}

function addQuestion(parent, text, inputId){
    var label = document.createElement('label');
    label.innerHTML = text; 
    const el = document.createElement("input");
    el.className = "form-control";
    el.id = inputId;

    parent.appendChild(label)
    parent.appendChild(el)
}

btnReload.addEventListener("click", function(){
    location.reload()
});

btnAddError.addEventListener("click", function(){
    exampleInputEmail1.classList.add("is-invalid");
});

exampleCheck1.addEventListener('change', function() {
  if (this.checked) {
    console.log("Checkbox is checked..");
    localStorage.setItem("email", exampleInputEmail1.value);
    localStorage.setItem("password", exampleInputPassword1.value);
    location.reload()
  } else {
    console.log("Checkbox is not checked..");
  }
});