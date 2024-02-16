//실행
window.addEventListener('load', () => {
  nav.init();
});


const nav = {
  init: ()=>{
    nav.fnNav()
    nav.onTop();
  },
  fnNav: ()=>{
    let x, y, current, prev, next;
    let arr = [];
    let arrLastIdx;

    const items = document.querySelectorAll('.gallery .items');
    const navWrap = document.querySelector('.nav-wrap');
    const navListItem = document.querySelectorAll('.nav-list ul > li')

    const gnbItems = document.querySelectorAll('.gnbMenu .list > li');
    const gnbMenu = document.querySelector('.gnbMenu');

    items.forEach(elm=> arr.push(elm.offsetLeft))

    arrLastIdx= arr[arr.length-2]

    window.addEventListener('scroll', function(e){
      navMoving();
      navShowHide();
    })

    function navMoving(){

      items.forEach((elm,index)=>{
        x = elm.getBoundingClientRect().x
        y = window.scrollY;

        if(x < 200){
          navListItem[index].classList.add('active');
          //prev = navListItem[index-1];
          //next = navListItem[index+1];
        }else{
          navListItem[index].classList.remove('active');
        }

        if(y > arr[4]){
          navListItem[6].classList.add('active');
        }else if(y < arr[5]){
          navListItem[6].classList.remove('active');
        }

        if(y > 1000){
          gnbMenu.classList.add('active')
        }else{
          gnbMenu.classList.remove('active')
        }

        if(y > 6200 && y < 8800){
          gnbMenu.classList.remove('active')
        }

        //console.log('Y:',y)

        if(prev){
          prev.classList.add('prev');
          navListItem[index-1].classList.remove('prev');
        }

        if(next){
          next.classList.add('next');
          navListItem[index].classList.remove('next');
        }
      })
    }

    function navShowHide(){
      x = items[0].getBoundingClientRect().x
      
      x < 0 ? navWrap.style.display = 'block' :navWrap.style.display = 'none'

      y > 11100 ? navWrap.style.display = 'none' :  null
    }
  },
  //시작할때 맨위로
  onTop : ()=>{
    setTimeout(()=>{
      window.scrollTo(0,0)
    },100)
  }
}






