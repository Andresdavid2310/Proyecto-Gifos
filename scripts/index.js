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

//----------------- search tags for suggestion-----------------------//
HASTAG.forEach(async (suggest, index)=>{

     let cardSuggestions = document.querySelectorAll('.card-Suggestion .gif-Suggestion');
     let textSuggestion = document.querySelectorAll('.card-Suggestion .tittle-Suggestion p');
     
     let category = 'search';
     let urlResponse = (`${URL}${category}?${APY_KEY}&q=${suggest}, { method: 'GET' }`); 
     let dates = await loadUrl(urlResponse);
     
     cardSuggestions[index].setAttribute('src', `${dates.data[numImg].images.downsized_medium.url}`);
     textSuggestion[index].innerHTML = `#${HASTAG[index]}`;
})

//-----Function load trending-----//
let loadTrends = async(urlTrending) => {
     
     cardTrends = document.querySelectorAll('.container-Gif .card-Gif')
     
     let dates = await loadUrl(urlTrending);
     
     let GifRandom = dates.data.sort(()=> Math.random()-0.6);
     
     for(let i = 0; i<cardTrends.length; i++){
          cardTrends[i].setAttribute('src', `${dates.data[i].images.fixed_width.webp}`);
          cardTrends[i].setAttribute('id', `ImgSearch_${i}`);
          cardTrends[i].nextElementSibling.innerHTML = `<p># ${dates.data[i].title}</p>`;
     }
} 

let category = 'trending';
let urlResponse =(`${URL}${category}?${APY_KEY}&q=limit200, {method:'GET' }`);
loadTrends(urlResponse);

//_---- Function see More Suggestion ----//
let seeMoreSuggestion = async(hasTag)=>{
     let category = 'search';
     let urlResponse =(`${URL}${category}?${APY_KEY}&q=${hasTag.substr(1)}, {method:'GET' }`);
     loadTrends(urlResponse);
     setTimeout(()=>{
          location.href = `#section-Trends`;
     }, 200)     

}


let changeSuggestion = async (element, suggest) =>{
     console.log(element);
     let c = (element.parentNode).parentNode;
     console.log(c);
     let clon = c.cloneNode(true);
     suggest=clon.querySelector('.tittle-Suggestion p').innerHTML
     cardChange = clon.querySelector('.gif-Suggestion')
     console.log(cardChange);
     console.log(suggest);
     let category = 'search';
     let urlResponse = (`${URL}${category}?${APY_KEY}&q=${suggest.substr(1)}, { method: 'GET' 
     }`);
     let dates = await loadUrl(urlResponse);
     console.log(dates.data)
     let  numI = Math.trunc(Math.random() * (24));
     cardChange.setAttribute('src', `${dates.data[numI].images.downsized_medium.url}`);
     console.log(`${dates.data[numI].images.downsized_medium.url}`)
     console.log(cardChange);
     document.querySelector('.card-Suggestion').remove(element);
     document.querySelector('.suggestions').appendChild(clon);
}