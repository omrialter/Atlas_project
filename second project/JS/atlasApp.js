import { doApi } from "./updateInfoUI.js";
import { declareEvents } from "./atlasForm.js";

const init = () => {
    doApi("israel");
    declareEvents();
}




init();