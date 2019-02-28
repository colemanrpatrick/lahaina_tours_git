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
// icon toggling
var toolTipBtn = document.getElementsByClassName("tool-tip-btn");

var toolTip = document.getElementsByClassName("tool-tip");

function toggleTip(){
  for (var i = 0; i < toolTip.length; i++) {
    toolTip[i].className = "tool-tip";
  };

  for (var i = 0; i < toolTipBtn.length; i++) {
    toolTipBtn[i].className = "tool-tip-btn";
  };

  toggleThis(this,'active');

  nextSiblingToggle(this,'active');

}

function closeTip(){

  for (var i = 0; i < toolTip.length; i++) {
    toolTip[i].className = "tool-tip";
  };

  for (var i = 0; i < toolTipBtn.length; i++) {
    toolTipBtn[i].className = "tool-tip-btn";
  };

}

for (var i = 0; i < toolTipBtn.length; i++) {

  toolTipBtn[i].addEventListener("click",toggleTip,false);

}
for (var i = 0; i < toolTip.length; i++) {

  toolTip[i].addEventListener("click",closeTip,false);

}
