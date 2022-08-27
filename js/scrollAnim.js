
const animItems = document.querySelectorAll('.main-1__earned-line-color,.graph-all');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(){
        for(let index = 0; index < animItems.length; index++){
            const animItem = animItems[index];
            const animItemHeigth = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeigth / animStart;
            if(animItemHeigth > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeigth)){
                animItem.classList.add('_active');
            }
            else{
                animItem.classList.remove('_active');
            }
        }

    }
function offset(el){
    const rect = el.getBoundingClientRect();
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageXOffset || document.documentElement.scrollTop;
    return{ top: rect.top + scrollTop, left: rect.left + scrollLeft}
}

animOnScroll();
}