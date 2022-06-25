const d=document;
d.addEventListener("DOMContentLoaded",e=>{
    hamburgerMenu(".panel-btn",".panel", ".menu a");
    shareIcons(".share",".social-wrap",".media-icons")
    discoverMorePhotos("#discover-btn",".show-more","#show-less-btn")
});

const test = Array.from(d.getElementsByClassName('faq-text'))
    test.forEach(item =>{
        item.addEventListener('click',(e) =>{
            e.target.parentElement.classList.toggle('my-active')
        })
    })

    function hamburgerMenu(panelBtn,panel,menuLink) {
        d.addEventListener("click",(e)=>{
            if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
               
                d.querySelector(panel).classList.toggle("is-active");
                d.querySelector(panelBtn).classList.toggle("is-active");
            }
        
            if(e.target.matches(menuLink)){
                d.querySelector(panel).classList.remove("is-active");
                d.querySelector(panelBtn).classList.remove("is-active")
            }
        });
    }

    function shareIcons(share,socialWrap,mediaIcons) {
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

    function discoverMorePhotos(btn,photoOne,lessPhotos){
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
    
    
    
        