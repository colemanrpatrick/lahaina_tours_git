var menuBtn = document.getElementById("menu-btn");
function menuEvent(){
  toggleThis(this,'active');
  nextSiblingToggle(menuBtn,'active');
}
menuBtn.addEventListener("click",menuEvent,false);
function scrollDown(element,num){
  $('html,body').animate({
    scrollTop: $('.' + element).offset().top - num
  },'slow');
}
