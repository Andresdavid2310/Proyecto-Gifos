let video = document.getElementById('video');
let gifRecorder;
let gifSrc;
let gifNewId;

async function initStream() {
     document.querySelector('.create-Gifs').style.display = "none";
     document.querySelector('.video-Recording').style.display = "block";

     const stream = await navigator.mediaDevices.getUserMedia({
          audio: false,
          video: {
               height: { max: 480 }
          }
     });
     video.srcObject = stream;
     await video.play();
}

async function startRecording() {
     myStopwatch.start();
     const stream = video.srcObject;
     gifRecorder = new RecordRTCPromisesHandler(stream, {
          disableLogs: true,
          type: "gif",
          frameRate: 1,
          quality: 10,
          width: 360,
          hidden: 240
     });
     
     await gifRecorder.startRecording();
     loadTimer();
}

async function stopRecording() {
     myStopwatch.stop();
     await gifRecorder.stopRecording();
     const gifBlob = await gifRecorder.getBlob();
     await gifRecorder.reset();
     await gifRecorder.destroy();

     let containerGif = document.querySelector('.container-Gif-Preview');
     let imgPreview = document.createElement('img');
     imgPreview.setAttribute('id', 'gif-Preview');
     imgPreview.setAttribute('alt', 'vista prelimar GIF');
     containerGif.appendChild(imgPreview);

     preview = document.getElementById("gif-Preview");

     gifSrc = await gifBlob;
     preview.src = URL.createObjectURL(await gifBlob);
     
     gifRecorder = null;
     loadBtns();   

     // formulario para enviar a la API de giphy
    let form = new FormData();
    form.append("file", gifSrc, "myGif.gif");

    document.getElementById("upload").addEventListener("click", () => {
     uploadGif(form);
    });
       
}

//--Function charge page principal crear guifos--//
let loadCreateGuipos = ()=>{
     if (localStorage.getItem("theme") == 2) {
          theme.setAttribute('class', 'Body-SailorNight');
          imgLogo.setAttribute('src' ,'../../img/gifOF_logo_dark.png')
     }
}

loadCreateGuipos();

//--Function for back page principal gifos--//
let backIndexP = () =>{
     window.location.href = "../../index.html"
}

let loadTimer = () =>{
     document.getElementById("title-create").innerHTML = "Capturando Tu Guifo"; 
     document.getElementById("startRecording").style.display = "none";
     document.querySelector(".stop").style.display = "block"; 
     document.querySelector(".btns-Upload-Gifs").style.display="block";
     document.getElementById("timer").setAttribute('class', 'activetimer');
     document.querySelector(".upload").style.display="none";
     document.querySelector(".repeat").style.display="none";
}

let loadBtns = () => {
     video.style.display = "none";
     document.querySelector(".container-Gif-Preview").style.display = 
     "block";
     document.querySelector(".stop").style.display = "none";
     document.getElementById("timer").removeAttribute('class', 
     'activetimer');
     document.querySelector(".upload").style.display="block";
     document.querySelector(".repeat").style.display="block";
     document.querySelector(".btns-Upload-Gifs").style.display = "flex";
     document.getElementById("title-create").innerHTML="Vista Previa"; 
}

let uploadGif = (form) =>{
     createLoadGif();
     postApiGiphos(form);
}

let createLoadGif =()=>{
     document.querySelector('.container-Gif-Preview').innerHTML = `
     <div class='uploading-gif'>
          <img src="../..//img/globe_img.png">
          <p class='uploading-gif-title'>Estamos subiendo tu guifo...<p>
          
          <div class="progress-bar" id="progress-bar">
               <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
               </ul>
          </div>
          <p class='time-left'>Tiempo restante: <span style='text-decoration: line-through'>38 años</span> algunos segundos</p>
     </div>`;

     animateProgressBar();
     document.querySelector('.btns-Upload-Gifs').innerHTML = `
     <button class="btn-Create-Gif repeat push cancel" onclick="location.href='createGuifos.html'"><span>Cancelar</span></button>`;
}

let animateProgressBar = () =>{
     document.querySelector('.progress-bar').style.display = 'inline-block';
     let progressBar = document.getElementById('progress-bar');
     let liCounter = 0;
     setInterval(function() {
          progressBar.querySelectorAll('li')[liCounter].style.display =  'inline-block';
          if (liCounter >= 15) {
               progressBar.querySelectorAll('li').forEach(element => {
               element.style.display = 'none';
          })
               liCounter = 0;
          }else{
            liCounter++;
          }
     }, 400);
}

let postApiGiphos = (gif) =>{
     const URLPOST = `https://upload.giphy.com/v1/gifs?${APY_KEY}`;

     fetch(URLPOST,{
          method:"POST",
          body: gif
     })

     .then(response => {
          if (response.status === 200) {
            console.log('Gif load!');
            return response.json();
          } else {
            console.log('Error load gif');
          }
     })

     .then(data => {
          console.log(data);
          fetch(
            `https://api.giphy.com/v1/gifs/${data.data.id}?${APY_KEY}`
          )

          .then(response => {
               return response.json();
          })

          .then(data => {
               gifNewId = data.data.id;
               console.log(gifNewId)
               localStorage.setItem(
                 `mygif-${data.data.id}`,
                 JSON.stringify(data.data)
               );

               confirmloadGif(data);
          });
     });
};


let confirmloadGif = (data)=>{
     document.getElementById("title-create").innerHTML="Guifo subido con éxito";
     let alertGif = document.createElement('div');

     alertGif.className = 'alert-gif';
     alertGif.innerHTML = 
     `<div class='content-modal'>
          <div class="gif-Create">
               <img class='gif-modal' src='${data.data.images.original.url}'>
          </div>

          <div class ="btns-gif-create">
               <p> Guifo subido con éxito!</p>
               <button class="copy btn-Create-Gif repeat push cancel" onclick="copyUrlGifNew()">Copiar Enlace Guifo</button>
               <button class="copy btn-Create-Gif repeat push cancel" onclick ="downloadGifNew()">Descargar Guifo</button>

               <div class="btn-listo">
                    <a href = "./createGuifos.html">
                    <button class = "btn-Create-Gif upload confirm">Listo</button></a>
               </div>
          </div>  
     <div>`;
     
     document.querySelector(".container-Gif-Preview").append(alertGif);
     document.querySelector('.uploading-gif').style.display  = "none"; 
     document.querySelector('.btns-Upload-Gifs').style.display = "none"; 
  
}

function copyUrlGifNew() {
     const tempElement = document.createElement("textarea");
     tempElement.value = `https://giphy.com/gifs/${gifNewId}`;
     tempElement.setAttribute("readonly", "");
     tempElement.style = 'display: "none"';
     document.body.appendChild(tempElement);
     tempElement.select();
     document.execCommand("copy");
     const popupContent =  `Se ha copiado el enlace ${tempElement.value} al portapapeles`;
     alert(popupContent);
     console.log("Copied data to clipboard!");
     document.body.removeChild(tempElement);
}

async function downloadGifNew() {
     const GifuyUrl = `https://media.giphy.com/media/${gifNewId}/giphy.gif`; 
     const gifgenerate = fetch(GifuyUrl);
     const gifBlob = (await gifgenerate).blob();
     const urlGif = URL.createObjectURL(await gifBlob);
     const saveImg = document.createElement("a");
     saveImg.href = urlGif;
     saveImg.download = "downloaded-guifo.gif";
     saveImg.style = 'display: "none"';
     document.body.appendChild(saveImg);
     saveImg.click();
     document.body.removeChild(saveImg);
}

cancelCreateGifos = ()=>{
     window.location.href = "../../index.html"
}