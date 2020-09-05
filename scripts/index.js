//----------------- search tags for suggestion-----------------------//
HASTAG.forEach(async (suggest, index)=>{

     let cardSuggestions = document.querySelectorAll('.card-Suggestion .gif-Suggestion');
     let textSuggestion = document.querySelectorAll('.card-Suggestion .tittle-Suggestion p');
     
     
     let category = 'search';
     let urlResponse = (`${ENDPOINT}${category}?${APY_KEY}&q=${suggest}, { method: 'GET' }`); 
     let dates = await loadUrl(urlResponse);

     let GifRandom = dates.data.sort(()=> Math.random()-0.6);
     let aleatorio = Math.floor(Math.random()*(GifRandom.length));
     cardSuggestions[index].setAttribute('src', `${GifRandom[aleatorio].images.original.url}`);
     textSuggestion[index].innerHTML = `#${HASTAG[index]}`;
})

//-----Function load trending-----//
let loadTrends = async(urlTrending, cardTrends) => {

     let dates = await loadUrl(urlTrending);
     let GifRandom = dates.data.sort(()=> Math.random()-0.5);
     
     
     for(let i = 0; i<cardTrends.length; i++){
          cardTrends[i].setAttribute('src', `${GifRandom[i].images.original.url}`);
          cardTrends[i].setAttribute('id', `ImgSearch_${i}`);
          cardTrends[i].nextElementSibling.innerHTML = `<p># ${GifRandom[i].title}</p>`;
     }
}

let loadPagePrincipal = ()=>{
     
     if (localStorage.getItem("theme") == 2) {
          theme.setAttribute('class', 'Body-SailorNight');
          imgLogo.setAttribute('src' ,'./img/gifOF_logo_dark.png')
     }

     category = 'trending';
     urlResponse =(`${ENDPOINT}${category}?${APY_KEY}&q=limit200, 
     {method:'GET' }`);
     createCard(10,'container-Gif',document.querySelector('.container-Gifs'));
     card = document.querySelectorAll('.container-Gif .card-Gif');
     loadTrends(urlResponse, card);
}
loadPagePrincipal();

//_---- Function see More Suggestion ----//
let seeMoreSuggestion = async(id)=>{
     hasTag = document.getElementById(id).innerHTML
     cardSuggesion = document.querySelectorAll('#container-Gif .card-Gif')
     let category = 'search';
     let urlResponse =(`${ENDPOINT}${category}?${APY_KEY}&q=${hasTag.substr(1)}, {method:'GET' }`);
     await loadTrends(urlResponse, cardSuggesion);
     setTimeout(()=>{
          location.href = `#section-Trends`;
     }, 200)     
}

let searchCategories = async() =>{
     let category = 'categories';
     let urlResponse = (`${ENDPOINT}${category}?${APY_KEY}`);
     let dates = await loadUrl(urlResponse);
     return GifRandom = dates.data.sort(()=> Math.random()-0.6);
}

let searchImgCategories =async() =>{
     category = 'search';
     urlResponse = (`${ENDPOINT}${category}?${APY_KEY}&q=${categorySearch.substr(1)}, {method: 
     'GET' }`);
     dates = await loadUrl(urlResponse);
     return gifImg = dates.data.sort(()=> Math.random()-0.6);
}

let changeSuggestion = async (element, id) =>{

     let c = (element.parentNode).parentNode;
     let clon = c.cloneNode(true);
     c.remove();
     
     let suggest=clon.querySelector('.tittle-Suggestion p').innerHTML; 
     let GifRandom = await searchCategories();
     let aleatorio = Math.floor(Math.random()*(GifRandom.length));
     categorySearch = `#${GifRandom[aleatorio].name}`;
     clon.querySelector('.tittle-Suggestion p').innerText = categorySearch;
     
     let cardChange = clon.querySelector('.gif-Suggestion');
     let gifImg = await searchImgCategories();
     cardChange.setAttribute('src', `${gifImg[aleatorio].images.original.url}`); 
     document.querySelector('.suggestions').appendChild(clon);
}

//---Function for reload page principal----//
reloadIndex = () =>{
     location.assign('./index.html');
     document.getElementById('input-Search').value = '';
}