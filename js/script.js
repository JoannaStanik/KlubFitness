// $(document).ready(function(){
//     $('.slider').slick({
//         slidesToShow: 3, // Wyświetla trzy slajdy naraz
//         slidesToScroll: 1, // Przewija po jednym slajdzie
//         autoplay: true, // Automatyczne przewijanie slajdów
//         autoplaySpeed: 2000, // Prędkość automatycznego przewijania (w milisekundach)
//         arrows: true, // Pokazuje strzałki nawigacyjne
//         dots: false, // Ukrywa punkty nawigacyjne
//         centerMode: true, // Tryb center mode
//         centerPadding: '60px' // Dodatkowy padding dla środkowego slajdu
//     });
// });




// document.addEventListener('DOMContentLoaded', function() {
//     var myVideo = document.getElementById("myVideo");
//     var playBtn = document.getElementById("playBtn");
//     var pauseBtn = document.getElementById("pauseBtn");
//     var stopBtn = document.getElementById("stopBtn");

//     playBtn.onclick = function() {
//         myVideo.play();
//     }

//     pauseBtn.onclick = function() {
//         myVideo.pause();
//     }

//     stopBtn.onclick = function() {
//         myVideo.pause();
//         myVideo.currentTime = 0;
//     }

//     const btn = document.querySelector('.container .menu .DROP .btn');
//     const zawartosc = document.querySelector('.container .menu .DROP .content');

//     let isOpen = false;

//     btn.addEventListener('click', () => {
//         if (!isOpen) {
//             zawartosc.style.display = 'block';
//         } else {
//             zawartosc.style.display = 'none';
//         }
//         isOpen = !isOpen;
//     });
// });