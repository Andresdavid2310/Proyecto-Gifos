let dateSearch;

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
          let limit=10;
          let urlResponse = (`${ENDPOINT}${category}?q=${textInput.trim()}&${APY_KEY}&limit=${limit}`)
          console.log(urlResponse);
          let dates = await loadUrl(urlResponse);
          dateSearch = dates;
          if(dates.data.length>0){
               for(let i=0; i<3;i++){
                    textSuggestion.children[i].innerHTML = dates.data[i].title;
               }        
          }     
     }
     else{
          console.log('busqueda Vacía')
     }
} 

//-----Function search Text-----//
let searchText = async(text) => { 
     let textForSearch = text;    
     if(textForSearch){   
          if(!(document.querySelector('.section-Search .result-Search')))
          {
               createCard(10,'result-Search',document.querySelector('.section-Search'));
          }
          searchGif(textForSearch)
          localStorage.setItem(textForSearch,'' );
     }else{
          alert('Debes Ingresar un texto para realizar la búsqueda')
     }
     document.querySelector('.suggestion-Search').style.visibility = 'hidden';
     document.getElementById('input-Search').value = '';
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

let searchGif = async(textForSearch) =>{

     createSearchText();

     barResult = document.querySelector('.bar-result-search');
     barResult.style.display = "block";
     textResult = document.querySelector('.bar-result-search p');
     textResult.innerHTML = `Resultados de busqueda: ${textForSearch}`
               
     cardTrends = document.querySelectorAll('.section-Search .result-Search .card-Gif');
     cardSearchSuggest = document.querySelectorAll('.section-Search .result-Search.card-Gif');  

     let category = 'search';
     let urlResponse =(`${ENDPOINT}${category}?${APY_KEY}&q=${textForSearch} , {method:'GET' }`); 
     loadTrends(urlResponse,cardTrends);
     btnSearch.classList.remove('btn-search-active'); 
}

let createBtnsSearch = (text,nameClass,nameId) =>{    
     let resultSearch = document.querySelector('.btns-result-search');
     btnResultSearch = document.createElement('button');
     btnResultSearch.setAttribute('class', nameClass);
     btnResultSearch.setAttribute('id', nameId);
     btnResultSearch.setAttribute('onclick', 'searchText(this.innerHTML)');
     resultSearch.appendChild(btnResultSearch);
     btnResultSearch.innerHTML = text
}

//----change text input----//
let createSearchText = async() =>{ 
     
     if(document.getElementById('btnResultSearch')){   
          btnResultSearch = document.querySelectorAll('.btnResultSearch'); 
          console.log(btnResultSearch)  
          if(btnResultSearch.classList = 'btnResultSearch'){
               for(let i=0; i<dateSearch.data.length;i++){  
                    console.log(btnResultSearch[i].classList)
                    btnResultSearch[i].innerHTML = dateSearch.data[i].title; 
               }  
          }  
     }
     else{  
          for(let i=0; i<dateSearch.data.length;i++){
               createBtnsSearch(dateSearch.data[i].title,'btnResultSearch','btnResultSearch')     
          }   
     }    
} 

(function listTextSearchLs() {
    for (let i = 0; i < localStorage.length; i++) {
      if (!localStorage.key(i).includes('mygif-')) { 
        createBtnsSearch(localStorage.key(i),'btnLsSearch btnResultSearch', 'btnLsSearch');
      }
    }
})();

