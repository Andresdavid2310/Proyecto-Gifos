
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
const viewSearch = (listen)=>{
     let elements = document.querySelector('.suggestion-Search');
     if(listen.target.value){
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
let searchTextInpunt = async(listen) =>{
     let textInput = listen.target.value;
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
function searchText(){
     let textForSearch = document.getElementById('input-Search');

}