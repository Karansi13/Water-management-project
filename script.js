

function scrollToSection(Home) {
    const section = document.getElementsById('#Home');
    section.scrollIntoView({ behavior: 'auto' });
}
  function scrollToSection(About) {
    const section = document.getElementById('#About');
    section.scrollIntoView({ behavior: 'auto' });
}
  function scrollToSection(Services) {
    const section = document.getElementById('#Services');
    section.scrollIntoView({ behavior: 'auto' });
}
  function scrollToSection(Contact) {
    const section = document.getElementById('#Contact');
    section.scrollIntoView({ behavior: 'auto' });
}



let mybutton = document.getElementById("backtotopbutton");
window.onscroll = function(){
  scrollFunction()
};

function scrollFunction(){
  if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400)
  {
    mybutton.style.display = "block";
  }
   else{
      mybutton.style.display = "none";
     
      }
}

function scrolltoTopfunction(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}