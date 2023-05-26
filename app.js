const sections = document.querySelector('.section');
// parent of the btns
const sectBtns = document.querySelector('.controls');
const sectBtn = document.querySelector('control');
const allbtn = document.querySelector.apply('.main-content')



function PageTransitions(){
    for(let i =0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', () =>{
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].classList = currentBtn[0].className.replace('active-btn', "");
            this.className += 'active-btn'
        })
    }
}

PageTransitions()

