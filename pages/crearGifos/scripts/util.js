//------function changeTheme--------//
function changeTheme(themeApply){
     if(themeApply.toLowerCase().trim() === 'sailornight'){
          theme.setAttribute('class', 'Body-SailorNight');
          imgLogo.setAttribute('src' ,'../../img/gifOF_logo_dark.png');   
     }else{
          theme.setAttribute('class', 'Body-SailorDay');
          imgLogo.setAttribute('src' ,'../../img/gifOF_logo.png');
     }   
}

//-----Function for open Menu-----//
function openMenu() {
     document.getElementById('menu').classList.toggle('view');
}

//-----Function for Close Menu----//
function closeMenu() {
     document.getElementById('menu').classList.remove('view');
}

//------fecth api giphy-----//
let loadUrl = async(urlResponse) => {
     try{ 
          let response = await fetch(urlResponse);
          let data = await response.json();
          return data;        
     }
     catch(exeption){
          console.log(exeption);
          return exeption;
     }    
}

//---Function for reload page principal----//
reloadIndex = () =>{
     location.assign('./index.html');
     document.getElementById('input-Search').value = '';
}

//--Function for back page principal gifos--//

backIndexP = () =>{
     window.location.href = "../../index.html"
}

const createHtmlGifos = () =>{
     let container = document.querySelector('.container-Create-Gifos')   
     
     let c= document.createElement('div');
     containerBarText.setAttribute('class', container-Bar-Text);
     container.appendChild(containerBarText);

     let barText = document.createElement('div');


}
/* //------Function create card dinamic---------// */
/* const createCard = (elements, classContainer,father) => { */
/*      let container = document.createElement('div'); */
/*      container.setAttribute('class', classContainer); */
/*      container.setAttribute('id', classContainer); */
/*      father.appendChild(container); */
/*       */
/*      for(let i=0;i<elements;i++){ */
/*           let viewGifs = document.createElement('div'); */
/*           if(i === 4 || i === 9 ){ */
/*                viewGifs.setAttribute('class','view-Gifs wide'); */
/*           }else{ */
/*                viewGifs.setAttribute('class','view-Gifs'); */
/*           } */
/*           container.appendChild(viewGifs); */
/*  */
/*           let cardGif = document.createElement('img'); */
/*           cardGif.setAttribute('class','card-Gif'); */
/*           viewGifs.appendChild(cardGif); */
/*   */
/*           let message = document.createElement('p'); */
/*           message.setAttribute('class','message'); */
/*           viewGifs.appendChild(message); */
/*      }    */
/* } */
/*  */
/*  */
/* const createTrends = (elements,classContainer,father )=>{ */
/*      let container = document.createElement('div'); */
/*      container.setAttribute('class', classContainer); */
/*      father.appendChild(container); */
/*  */
/*      for(let i=0;i<elements;i++){ */
/*  */
/*           let cardSuggestion = document.createElement('div'); */
/*           cardSuggestion.setAttribute('class','card-Suggestion'); */
/*           container.appendChild(cardSuggestion); */
/*  */
/*           let tittleSuggestion = document.createElement('div'); */
/*           tittleSuggestion.setAttribute('class','tittle-Suggestion'); */
/*           cardSuggestion.appendChild(tittleSuggestion); */
/*  */
/*           let hasTag = document.createElement('p'); */
/*           hasTag.setAttribute('class',`has-Tag-${i}`); */
/*           hasTag.setAttribute('id',`has-Tag-${i}`); */
/*           hasTag.innerText='#titulo'; */
/*           tittleSuggestion.appendChild(hasTag); */
/*  */
/*           let closeSugges = document.createElement('button'); */
/*           closeSugges.setAttribute('class','close-Sugges'); */
/*           closeSugges.setAttribute('id',`closeSugges-${i}`); */
/*           closeSugges.setAttribute('onclick',`changeSuggestion(this,'has-Tag-${i}')`); */
/*           tittleSuggestion.appendChild(closeSugges); */
/*  */
/*           let imgClose = document.createElement('img'); */
/*           imgClose.setAttribute('src', './img/close.svg'); */
/*           imgClose.setAttribute('alt', 'buttonclose'); */
/*           closeSugges.appendChild(imgClose); */
/*            */
/*           let gifSuggestion = document.createElement('img'); */
/*           gifSuggestion.setAttribute('class', 'gif-Suggestion'); */
/*           gifSuggestion.setAttribute('src', './img/gifOF_logo.png'); */
/*           gifSuggestion.setAttribute('alt', `sugges-gif-${i}`); */
/*           cardSuggestion.appendChild(gifSuggestion); */
/*  */
/*           let btnSeeMore = document.createElement('button'); */
/*           btnSeeMore.setAttribute('class','btn-See-More'); */
/*           btnSeeMore.setAttribute('id',`btn-See-More-${i}`); */
/*           btnSeeMore.setAttribute('onclick',`seeMoreSuggestion('has-Tag-${i}')`) */
/*           btnSeeMore.innerText='Ver más...'; */
/*           cardSuggestion.appendChild(btnSeeMore); */
/*  */
/*      }     */
/*       */
/* } */
/*  */
/* createTrends(4, 'suggestions', document.querySelector('.container-Trends')) */
/*  */