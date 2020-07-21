//----function listen events for search-----//
const viewSearch = (e)=>{
     let elements = document.querySelector('.suggestion-Search');
     if(e.target.value){
          elements.style.visibility = 'visible';
     }
     else{
          elements.style.visibility = 'hidden';
     }
}


//----change text input----//
let searchTextInpunt = async(e) =>{
     let textInput = e.target.value;
     if(textInput){
          
          let category = 'search';
          let urlResponse = (`${URL}${category}/tags?${APY_KEY}&q=${textInput.trim()}`);
          
          let dates = await loadUrl(urlResponse);
          if(dates.data.length>0){
               for(let i=0; i<3;i++){
                    textSuggestion.children[i].innerHTML = dates.data[i].name;
               }        
          }     
     }
     else{
          console.log('busqueda Vacía')
     }
} 

//-----Function search Text-----//
let searchText = async(text) => { 
     clone();
     let textForSearch = text
     cardSearchSuggest = document.querySelectorAll('.section-Search .container-Gif .card-Gif');  
     if(textForSearch){   
          
          let category = 'search';
          let urlResponse =(`${URL}${category}?${APY_KEY}&q=${textForSearch} , {method:'GET' }`); 
          console.log(urlResponse);
          let dates = await loadUrl(urlResponse);
          console.log(dates)
          
          for(let i = 0; i<cardSearchSuggest.length; i++){
               cardSearchSuggest[i].setAttribute('src', `${dates.data[i].images.downsized_medium.url}`);
               cardSearchSuggest[i].setAttribute('id', `ImgSearch_${i}`);
               cardSearchSuggest[i].nextElementSibling.innerHTML = `<p># ${dates.data[i].xtitle}</p>`;
          } 

     }else{
          alert('Debes Ingresar un texto para realizar la búsqueda')
     }
     document.querySelector('.suggestion-Search').style.visibility = 'hidden';
     document.getElementById('input-Search').value = textForSearch;
}


//-----Function Clone------///
function clone(){
     if(!(document.querySelector('.section-Search .container-Gif'))){
          let c = document.querySelector(".container-Gif");
          let clon = c.cloneNode(true);
          document.querySelector('.section-Search').appendChild(clon);   
     }
}

//-----Function Active Botton----//
const activeBtn = () =>{
     if(searchActive.value != ""){
          btnSearch.classList.add('btn-search-active');
     }
     else{
          btnSearch.classList.remove('btn-search-active'); 
     }        
}

//-------Function active input----//
const activeInput = () =>{
     if(searchActive.value){
          inputSearch.classList.add('input-Search-active');
     }
     else{
          inputSearch.classList.remove('input-Search-active');
     }    
}

