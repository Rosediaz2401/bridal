import hamburgerMenu from "./menu_hamburguesa.js";
import shareIcons from "./share.js";

const d=document;
d.addEventListener("DOMContentLoaded",e=>{
    hamburgerMenu(".panel-btn",".panel", ".menu a");
    shareIcons(".share",".social-wrap",".media-icons")
});

