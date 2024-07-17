var input = document.getElementById("input");
var ul = document.getElementById("list");

function add() {
    var newlist = document.createElement("li");
    newlist.className = 'list-item';
    newlist.innerHTML = "<span>" + input.value + "</span> <button onclick='deleteitem(event)' class='delete-btn'>delete</button>";
    ul.append(newlist);
}

function deleteitem(event) {
    event.target.parentNode.remove();
}