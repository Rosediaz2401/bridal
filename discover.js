export default function discoverMorePhotos(btn,photoOne,lessPhotos){
    const d = document
    
    d.addEventListener("click",(e)=>{
        if(e.target.matches(btn)){
            d.querySelector(btn).classList.toggle('is-active');
            d.querySelector(photoOne).classList.toggle("is-active");
            d.querySelector(lessPhotos).classList.remove('is-active')
            d.querySelector(photoOne).style.display ='inline-block'
            d.querySelector(lessPhotos).style.display ='inline-block'
            d.querySelector(btn).style.display ='none'
        }

        if(e.target.matches(lessPhotos)){
                d.querySelector(btn).classList.remove('is-active')
                d.querySelector(photoOne).classList.remove("is-active");
                d.querySelector(lessPhotos).classList.toggle('is-active')
                d.querySelector(photoOne).style.display ='none'
                d.querySelector(lessPhotos).style.display ='none'
                d.querySelector(btn).style.display='inline-block'
        }
    })
    }
