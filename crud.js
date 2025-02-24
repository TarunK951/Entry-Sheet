let tbody = document.querySelector("tbody");



let url = 'mongodb+srv://crud:<db_password>@cluster0.fg7ns.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
let mobile = [];

function getMobiles() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            mobiles = data;
            updateTable();
            console.log(data);
    })
}

getMobiles();

function updateTable() {
    let data = '';
    if (mobile.length > 0) {
        for (i = 0; i < mobile.length; i++){
            data += `
            <tr id='${mobiles[i]['id']}'>
            <td>${mobile[i]['name']}</td>
            <td>${mobile[i]['price']}</td>
            <td>${mobile[i]['ram']+"Gb"}</td>
            <td>${mobile[i]['storage']+"Gb"}</td>
            <td><button class="btn btn-primary" onclick='edit()'>edit</button></td>
            <td><button class="btn btn-danger" onclick='delete()'>delete</button></td>
            </tr>
            `
        }
        tbody.innerHTML = data;
    }
}


function edit() {
    
}

function delet() {
    
}
function f() {
    
}