function kolorTla(color){
    document.getElementById("style_content").style.backgroundColor = color;
}

const chbox_ramka = document.getElementById("chbox_ramka");

chbox_ramka.addEventListener("change", ()=>{
    if(chbox_ramka.checked) document.getElementById("style_content").style.border = "solid 2px black";
    else document.getElementById("style_content").style.border = "none";
});

const select_kolor = document.getElementById("kolor_czcionki");
select_kolor.addEventListener("change", (e)=>{
    document.getElementById("style_content").style.color = e.value;
});


