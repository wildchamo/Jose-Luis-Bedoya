const userLanguage = navigator.language;
const aboutme= document.querySelector('#aboutme');
const contact= document.querySelector('#contacto');
const marquee= document.querySelector('#marquee');

console.log('Idioma del usuario:', userLanguage);

if(userLanguage ==="en"){
    marquee.innerText= 'HELLO, WELCOME TO THE WEB PAGE OF THE INTERNET ASTRO AND THUG @WILDCHAMO. HERE GOES A POEM BY JOHN DONNE: NO MAN IS AN ILAND, INTIRE OF IT SELFE; EVERY MAN IS A PEACE OF THE CONTINENT, A PART OF THE MAINE; IF A CLOD BEE WASHED AWAY BY THE SEA, EUROPE IS THE LESSE, AS WELL AS IF A PROMONTORIE WERE, AS WELL AS IF A MANNOR OF THY FRIENDS OR OF THINE OWNE WERE; ANY MANS DEATH DIMINISHES ME, BECAUSE I AM INVOLVED IN MANKINDE; AND THEREFORE NEVER SEND TO KNOW FOR WHOM THE BELL TOLLS; IT TOLLS FOR THEE...';
    aboutme.innerHTML = '  <img src="user.png" class="iconuser" alt="" />About me';
    contact.innerHTML = '<img src="mail.png" class="iconuser" alt="" /> Contact';
}