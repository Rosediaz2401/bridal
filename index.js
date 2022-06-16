import hamburgerMenu from "./menu_hamburguesa.js";
import shareIcons from "./share.js";
import discoverMorePhotos from "./discover.js";

const d=document;
d.addEventListener("DOMContentLoaded",e=>{
    hamburgerMenu(".panel-btn",".panel", ".menu a");
    shareIcons(".share",".social-wrap",".media-icons")
    discoverMorePhotos("#discover-btn",".show-more","#show-less-btn")
    // questions(".faq-text")
});

const test = Array.from(d.getElementsByClassName('faq-text'))
    test.forEach(item =>{
        item.addEventListener('click',(e) =>{
            e.target.parentElement.classList.toggle('my-active')
        })
    })