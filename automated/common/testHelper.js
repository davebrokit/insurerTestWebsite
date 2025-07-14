
let failed = false;
function setupTest(){
  divTestResults.innerHTML = "";
  failed = false;
}

function assertNoFailure(){
  if(failed === true){
    setFailed();
  } else {
    success("Test Passed")
  }
}
function assertEqual(expected,actual){
  assertEqual(expected, actual, "Failed")
}

function assertEqual(expected,actual, message){
  if(actual !== expected){
    createMsgElem(`${message}. Expected ${expected}, Actual: ${actual}`);
    failed = true;
    return false;
  }

  return true;
}

function assertEmpty(actual, message){
  if(actual !== ""){
    createMsgElem(`${message}. Expected to be empty but was: ${actual}`);
    failed = true;
    return false;
  }

  return true;
}

function setFailed(){
  divTestResults.className = "alert alert-danger m-3";
}

function fail(expected, message){
  createMsgElem(message)
  divTestResults.className = "alert alert-danger m-3";
}

function success(message){
  createMsgElem(message)
  divTestResults.className = "alert alert-success m-3";
}

function createMsgElem(message){
  let textElm = document.createElement("p")
  textElm.innerHTML = message
  divTestResults.appendChild(textElm);
}


function localStorageField(fieldEl, key){
  let val = localStorage.getItem(key);
  if(val){
    fieldEl.value = val;
  }
  fieldEl.addEventListener("change", (e) => {
    localStorage.setItem(key, e.target.value)
  })
}