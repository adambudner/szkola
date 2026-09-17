const box = document.getElementById("statusBox")

function handleStatusBox(){
    switch (statusBoxCode) {
        case 0:
            box.style.backgroundColor = rgb(0, 253, 0);
            break;
        case 1:
            box.style.backgroundColor = rgb(253, 0, 0);
            break;
        case 2:
            box.style.backgroundColor = rgb(253, 186, 0);
            break;
        default:
            break;
    }
}