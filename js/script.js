// # Descrizione
// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:

// # Milestone 1
// Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore (potrebbe mancare a qualcuno),
// - data in formato americano (mm-gg-yyyy),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.
// *Non è necessario creare date casuali, inventatele*
// *Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=3)*

// #Milestone 2
// Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

// #Milestone 3
// Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.

// # ****BONUS**
//  1. Formattare le date in formato italiano (gg/mm/aaaa)
//  2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola  => LF).
//  3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.
// # Consigli del giorno:
//  Ragioniamo come sempre a step.
//  Prima scriviamo nei commenti la logica in italiano e poi traduciamo in codice.
//  console.log() è nostro amico.
//  Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.

    
// ---------FUNZIONI-----------
    const postGen= (i) =>{
      postElement.innerHTML+=`
        <div class="post">
        <div class="post__header">
          <div class="post-meta">
            <div class="post-meta__icon">
              <img class="profile-pic" src="${post[i].profile} " alt="Phil Mangione" />
            </div>
            <div class="post-meta__data">
              <div id="nome" class="post-meta__author">${post[i].name} </div>
              <div class="post-meta__time">4 mesi fa</div>
            </div>
          </div>
        </div>
        <div class="post__text"> ${post[i].text}
        </div>
        <div class="post__image">
          <img src="${post[i].photo} " alt="" />
        </div>
        <div class="post__footer">
          <div class="likes js-likes">
            <div class="likes__cta">
              <button class="like-button js-like-button" href="#" data-postid="1">
                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                <span class="like-button__label">Mi Piace</span>
              </button>
            </div>
            <div class="likes__counter">Piace a <b id="like-counter-1" class="js-likes-counter">80</b> persone</div>
          </div>
        </div>
      </div>
      `
    }

    const nameElement=document.querySelector(".post-meta__author");
    const profilePic=document.querySelector(".profile-pic");
    const dateElement=document.querySelector(".post-meta__data");
    const textElement=document.querySelector(".post__text");
    const imageElement=document.querySelector(".post__image");
    const postElement=document.querySelector(".post");
    const postListElement=document.querySelector(".post-list");
    const likeCounter=document.getElementById("like-counter-1");
    const buttonLike=document.querySelector(".like-button")


const post=[
    {id: "1", name:"Pippo", photo:"img/pippo-post.webp ", date:"mm-gg-yyyy", text:"Placeat libero ipsa nobis ipsum quibusdam quas harum ut", profile:"img/pippo.jpg"},

    {id: "2", name:"Pluto", photo:"img/pluto-post.jpg ", date:"mm-gg-yyyy", text:"Placeat libero ipsa nobis ipsum quibusdam quas harum ut", profile:"img/pluto.jpg"},

    {id: "3", name:"Paperino", photo:"img/paperino-post.png ", date:"mm-gg-yyyy", text:"Placeat libero ipsa nobis ipsum quibusdam quas harum ut", profile:"img/paperino.jpg"},

    {id: "4", name:"Zio Paperone", photo:"img/zio-paperone -post.jpg ", date:"mm-gg-yyyy", text:"Placeat libero ipsa nobis ipsum quibusdam quas harum ut", profile:"img/zio-paperone.webp"},
  
   
]



for(let i=0; i<post.length; i++){
    postGen(i)

}

buttonLike.addEventListener("click", function(){
  likeCounter.innerHTML+=`81`
})

