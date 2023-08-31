// our url is ?name=Test

let searchParams = new URLSearchParams(window.location.search)
if(searchParams.has('name')) {
    let param = searchParams.get('name')
    console.log("name parameter is:" + param);
    document.getElementById('demoName').textContent = param;
}
