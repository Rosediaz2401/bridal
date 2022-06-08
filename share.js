export default function shareIcons(share,socialWrap,mediaIcons) {
    const d=document;
    d.addEventListener("click", (e) =>{
        if(e.target.matches(share) || e.target.matches(`${share} *`)){

            d.querySelector(socialWrap).classList.toggle("is-active");
            d.querySelector(share).classList.toggle("is-active");

        }

        if(e.target.matches(mediaIcons) || e.target.matches(`${mediaIcons} *`)){
            d.querySelector(socialWrap).classList.remove("is-active");
            d.querySelector(share).classList.remove("is-active")
        }
    })
}