//-----Variables-----//
let  ENDPOINT = 'https://api.giphy.com/v1/gifs/';
const APY_KEY = 'api_key=P9hhr5BQGgN5rn5sa4pUU8CPGHpIabhm';

//---- capture value input and botton------///
let searchActive = document.getElementById('input-Search');
let btnSearch = document.getElementById('btn-Search');

//----Variable input Search-----///
let inputSearch = document.getElementById('input-Search');

//----Variable text suggestion----//
let textSuggestion = document.querySelector('.suggestion-Search');


//------Function load Suggestions-----------//
const HASTAG = ['Goku' , 'The Walking Dead', 'Yoda' , 'Avengers'];
let  numImg = Math.trunc(Math.random() * (24));


//---- varables for theme page-----//
let theme = document.getElementById('theme');
let imgLogo = document.getElementById('logo');
console.log(theme)
console.log(imgLogo)


     