const il_x = 10;
const il_y = 10;

const table = document.getElementById("tabela");
const input = document.getElementById("editor");
const info = document.getElementById("info");
const infoWynik = document.getElementById("infoWynik");
let chosen = null;

let structure='';
structure+='<tr>'
for(let i=0; i<=il_x;i++){
    structure+=`<td class="num">${i}</td>`;
}
structure+='</tr>';

for (let i = 1; i <= il_x; i++) {
    structure += '<tr>';
    structure += `<td class="num">${i}</td>`;
    for (let j = 0; j < il_y; j++) {
        structure += `<td data-row="${i}" data-col="${j+1}"></td>`;
    }
    structure += '</tr>';
}
table.innerHTML = structure;

table.addEventListener("click", (e)=>{
    if (e.target.tagName === "TD"){
        if (chosen){
            chosen.classList.remove('active');
        }
        chosen = e.target;
        chosen.classList.add("active");
    }
    document.getElementById("infoActive").innerText = "X:"+e.target.dataset.col+"Y:"+e.target.dataset.row
});
function sendInput(){
    let textInput = input.value;
    
    if (chosen || textInput !== "") {
        if (textInput[0] !== "=") {
            chosen.innerText = textInput;
        } 
        else {
            // usuwanie bialuch znakow
            let cleanInput = textInput.replace(/\s+/g, "");
            
            let separator = "";
            if (cleanInput.includes(";")) {
                separator = ";";
            } else if (cleanInput.includes(":")) {
                separator = ":";
            }

            if (separator !== "") {
                // let formula = cleanInput.replace("=sum", "");
                let formula = "";
                if(cleanInput.includes("sum")) { formula = cleanInput.replace("=sum", ""); }
                else if (cleanInput.includes("sub")) { formula = cleanInput.replace("=sub", ""); }
                else if (cleanInput.includes("min")) { formula = cleanInput.replace("=min", ""); }
                else if (cleanInput.includes("max")) { formula = cleanInput.replace("=max", ""); }


                let parts = formula.split(separator); 
                
                if (parts.length === 2 && parts[0].includes(",") && parts[1].includes(",")) {
                let coords1 = parts[0].split(",");
                let c1 = Number(coords1[0]); 
                let r1 = Number(coords1[1]); 

                let coords2 = parts[1].split(",");
                let c2 = Number(coords2[0]);
                let r2 = Number(coords2[1]);
                    
                let cell1_instance = document.querySelector(`td[data-row="${r1}"][data-col="${c1}"]`);
                let cell2_instance = document.querySelector(`td[data-row="${r2}"][data-col="${c2}"]`);

                if (cell1_instance && cell2_instance) {
                    if (cleanInput.includes("sum")) {
                        if (separator === ";") {
                            try {
                                let val1 = Number(cell1_instance.innerText) || 0;
                                let val2 = Number(cell2_instance.innerText) || 0;
                                    
                                let wynik = val1 + val2;
                                infoWynik.innerText = wynik;
                            } catch (error) {
                                infoWynik.innerText = "Błąd podczas wykonywania polecenia -> " + error;
                            }
                        } 
                        else if (separator === ":") {
                            try{
                                let wynik = 0;
                                for(let i=cell1_instance.dataset.row; i<=cell2_instance.dataset.row; i++){
                                    for(let j = cell1_instance.dataset.col; j<=cell2_instance.dataset.col; j++){
                                        wynik+=Number(document.querySelector(`td[data-row="${i}"][data-col="${j}"]`).innerText);
                                    }
                                }
                                infoWynik.innerText=wynik;
                            }
                            catch (error){
                                infoWynik.innerText = "Błąd podczas wykonywania polecenia -> " + error;
                            }
                        }
                    }
                    if(cleanInput.includes("sub")){
                        if (separator === ";") {
                            try {
                                let val1 = Number(cell1_instance.innerText) || 0;
                                let val2 = Number(cell2_instance.innerText) || 0;
                                    
                                let wynik = val1 - val2;
                                infoWynik.innerText = wynik;
                            } catch (error) {
                                infoWynik.innerText = "Błąd podczas wykonywania polecenia -> " + error;
                            }
                        } 
                        else if (separator === ":") {
                            try{
                                let wynik = 0;
                                for(let i=cell1_instance.dataset.row; i<=cell2_instance.dataset.row; i++){
                                    for(let j = cell1_instance.dataset.col; j<=cell2_instance.dataset.col; j++){
                                        wynik-=Number(document.querySelector(`td[data-row="${i}"][data-col="${j}"]`).innerText);
                                    }
                                }
                                infoWynik.innerText=wynik;
                            }
                            catch (error){
                                infoWynik.innerText = "Błąd podczas wykonywania polecenia -> " + error;
                            }
                        }
                    }
                    if(cleanInput.includes("min")){
                        if (separator === ":"){
                            try{
                                let min=Number.MAX_SAFE_INTEGER;
                                for(let i=cell1_instance.dataset.row; i<=cell2_instance.dataset.row; i++){
                                    for(let j = cell1_instance.dataset.col; j<=cell2_instance.dataset.col; j++){
                                        if(Number(document.querySelector(`td[data-row="${i}"][data-col="${j}"]`).innerText) < min){
                                            if (Number(document.querySelector(`td[data-row="${i}"][data-col="${j}"]`).innerText) != 0){
                                                min = Number(document.querySelector(`td[data-row="${i}"][data-col="${j}"]`).innerText);
                                            }
                                        }
                                    }
                                }
                                infoWynik.innerText=min;
                            }
                            catch (error){
                                infoWynik.innerText = "Błąd podczas wykonywania polecenia -> " + error;
                            }

                        }
                        else{
                            infoWynik.innerText="Błąd składni! Polecenie min posiada jedynie wyszukiwanie obszarowe";
                        }
                    }
                    // row-y
                    // col-x
                } else {
                    info.innerText = "Błąd: Podane komórki nie istnieją.";
                }
            } else {
                info.innerText = "Błąd składni! Brak rozdzielenia komórek bądz brak przecinków";
            }
        } else {
            info.innerText = "Błąd składni! Brak ; lub :";
        }
    }
    } else {
        info.innerText = "Należy wprowadzić dane";
    }
}