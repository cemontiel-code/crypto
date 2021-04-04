function mediaChange() {
    let elmnt = document.getElementById('headertext');

        if (window.innerWidth<768) {
         elmnt.classList.remove('display-1')   
         elmnt.classList.add('display-4')   
        }
        if (window.innerWidth>768) {
            elmnt.classList.remove('display-4')   
            elmnt.classList.add('display-1')   
           }
    }