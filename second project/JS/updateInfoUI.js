export const doApi = async (_search) => {
    let url = `https://restcountries.com/v3.1/name/${_search}`;
    url += (_search.toLowerCase() == "china" || _search.toLowerCase() == "niger") ? "?fullText=true" : "";
    let resp = await axios.get(url);
    updateUI(resp.data[0]);
}

const updateUI = async (json) => {
    let id_name = document.querySelector("#id_name");
    let id_img = document.querySelector("#id_img");
    let id_pop = document.querySelector("#id_pop");
    let id_reg = document.querySelector("#id_reg");
    let id_lang = document.querySelector("#id_lang");
    let id_coin = document.querySelector("#id_coin");
    let id_cap = document.querySelector("#id_cap");
    let iframe = document.querySelector("iframe");
    id_name.innerHTML = json.name.common;
    id_img.src = json.flags.svg;
    id_pop.innerHTML = json.population.toLocaleString();
    id_reg.innerHTML = json.region;
    id_lang.innerHTML = Object.values(json.languages);
    id_coin.innerHTML = Object.keys(json.currencies) + ", " +
        Object.values(json.currencies)[0].name + ", " +
        Object.values(json.currencies)[0].symbol;
    id_cap.innerHTML = json.capital;
    await borderList(json.borders);
    iframe.src = `https://maps.google.com/maps?q=${json.latlng[0]},${json.latlng[1]}&z=6&ie=UTF8&iwloc=&output=embed`;
}


const borderList = async (_ar) => {
    let borders_div = document.querySelector("#id_borders");
    borders_div.innerHTML = "";
    for (let i = 0; i < _ar.length; i++) {
        let border = document.createElement("button");
        let countryName = await stateBorders(_ar[i]);
        border.className = "btn btn-success m-2"
        border.innerHTML = countryName;
        borders_div.append(border);

        border.addEventListener("click", () => {
            doApi(countryName);
        });
    }
}

const stateBorders = async (x) => {
    let url = `https://restcountries.com/v3.1/alpha/${x}`;
    let resp = await fetch(url);
    let data = await resp.json();
    let countryName = await (data[0].name.common);
    return countryName;
}
