function mouse() {
    document.getElementById("name").focus();
}

function add() {
    let name = document.getElementById("name").value;
    let number = document.getElementById("number").value;
    let email = document.getElementById("email").value;
    
    document.getElementById("table").innerHTML += "<tr><td>" + name + "</td><td>" + number + "</td><td>" + email + "</td><td class='delbtn'><input type='button' value='Delete' onclick='del(this)'></td></tr>";

    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
    document.getElementById("email").value = "";
    mouse();
}

function del(r) {
    let i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(i);

    mouse();
}



