import { doApi } from "./updateInfoUI.js";

export const declareEvents = () => {
    let id_input = document.querySelector("#id_input");
    let search_btn = document.querySelector("#btn_Search");

    search_btn.addEventListener("click", () => {
        doApi(id_input.value)
    })

    id_input.addEventListener("keyup", (e) => {
        if (e.key === 'Enter') {
            doApi(id_input.value);
        }
    })
}

let nav1 = document.querySelector("#nav1");
let nav2 = document.querySelector("#nav2");
let nav3 = document.querySelector("#nav3");
let nav4 = document.querySelector("#nav4");

nav1.addEventListener("click", () => {
    doApi(nav1.innerHTML);
})
nav2.addEventListener("click", () => {
    doApi(nav2.innerHTML);
})
nav3.addEventListener("click", () => {
    doApi(nav3.innerHTML);
})
nav4.addEventListener("click", () => {
    doApi(nav4.innerHTML);
})


