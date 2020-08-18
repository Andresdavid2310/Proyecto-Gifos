createGifos = ()=>{
     window.location.href = "../../pages/crearGifos/createGuifos.html"
}

//-----Function for open Menu-----//
function openMenu() {
     document.getElementById('menu').classList.toggle('view');
}

//-----Function for Close Menu----//
function closeMenu() {
     document.getElementById('menu').classList.remove('view');
}

//------function changeTheme--------//
function changeTheme(themeApply){
     if(themeApply.toLowerCase().trim() === 'sailornight'){
          theme.setAttribute('class', 'Body-SailorNight');
          imgLogo.setAttribute('src' ,'../../img/gifOF_logo_dark.png');   
          localStorage.setItem("theme", 2);
     }else{
          theme.setAttribute('class', 'Body-SailorDay');
          imgLogo.setAttribute('src' ,'../../img/gifOF_logo.png');
          localStorage.setItem("theme", 1);
     }   
}

//--Function charge page principal crear guifos--//
let loadCreateGuipos = ()=>{
     if (localStorage.getItem("theme") == 2) {
          theme.setAttribute('class', 'Body-SailorNight');
          imgLogo.setAttribute('src' ,'../../img/gifOF_logo_dark.png')
     }
}
loadCreateGuipos();

//---Function for reload page principal----//
reloadIndex = () =>{
     location.assign('../../index.html');
     document.getElementById('input-Search').value = '';
}
