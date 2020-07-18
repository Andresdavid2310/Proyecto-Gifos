
//-----Variables-----//
const URL = 'https://api.giphy.com/v1/gifs/';
const APY_KEY = 'api_key=P9hhr5BQGgN5rn5sa4pUU8CPGHpIabhm'

//-----Function for open Menu-----//
function openMenu() {
     document.getElementById('menu').classList.toggle('view');
}

//-----Function for Close Menu----//
function closeMenu() {
     document.getElementById('menu').classList.remove('view');
}


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

//----Listen Events input-----///
let inputSearch = document.getElementById('input-Search');
inputSearch.addEventListener('input' , viewSearch);     


//----change text input----//
let searchTextInpunt = async(e) =>{
     let textInput = e.target.value;
     if(textInput){
          try{
               let category = 'search';
               let response = await fetch(`${URL}${category}/tags?${APY_KEY}&q=${textInput.trim()}`, {method: 'GET'});
               let data = await response.json();
               console.log(data);
               if(data.data.length>0){
                    textSuggestion.children[0].innerHTML = data.data[0].name;
                    textSuggestion.children[1].innerHTML = data.data[1].name;
                    textSuggestion.children[2].innerHTML = data.data[2].name;
               }     
          }
          catch{

               console.log('Error al llamar a la Api')
          }
     }
     else{
          console.log('busqueda Vacía')
     }
} 

inputSearch.addEventListener('input', searchTextInpunt);
let textSuggestion = document.querySelector('.suggestion-Search');
let childs = textSuggestion.children.length; 

//-----Function search Text-----//
let searchText = async() => { 
     clonar();
     let textForSearch = document.getElementById('input-Search');
     cardSearchSuggest = document.querySelectorAll('.section-Search .container-Gif .card-Gif');  

     if(textForSearch.value.length > 0){
          try{
               let category = 'search';
               let response = await fetch(`${URL}${category}?${APY_KEY}&q=${textForSearch.value} `, { method: 'GET' }); 
               let data = await response.json();
               console.log(data)
              
               for(let i = 0; i<cardSearchSuggest.length; i++){
                    cardSearchSuggest[i].setAttribute('src', `${data.data[i].images.downsized_medium.url}`);
               } 

          }catch{
               console.log('Error al llamar a la Api de busqueda')
          }
     }else{
          alert('Debes Ingresar un texto para realizar la búsqueda')
     }
     
}

function clonar(){
     if(!(document.querySelector('.section-Search .container-Gif'))){
          let c = document.querySelector(".container-Gif");
          let clon = c.cloneNode(true);
          document.querySelector('.section-Search').appendChild(clon);   
     }
}