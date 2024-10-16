// our url is ?name=Test

let searchParams = new URLSearchParams(window.location.search)
if(searchParams.has('name')) {
    let param = searchParams.get('name')
    console.log("name parameter is:" + param);
    document.getElementById('demoName').textContent = param;
}


setTimeout(function(){
    let space = document.getElementById("addSpace")
    var newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.id = 'inputField' + (space.children.length + 1);

    space.appendChild(newInput)
}, 10*1000);
