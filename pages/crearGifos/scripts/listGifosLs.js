// obtienes los Gifs almacenados en el Local Storage

const myGifos = document.getElementById("my-Gifos");
(function displayGifs() {
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i).startsWith('mygif-')) {
        gifObj = JSON.parse(localStorage.getItem(localStorage.key(i)));
        gif = document.createElement("img");
        gif.id = gifObj.id;
        gif.src = `${gifObj.images.original.url}`;
        gif.className = 'img-gif';
        myGifos.appendChild(gif);
      }
    }

    if(myGifos.innerHTML === ''){
      myGifos.innerHTML = 'Aun no creaste gifs';
    }
    
})();