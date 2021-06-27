const fonts = [
    'Kirang Haerang',
    'Indie Flower',
    'Rye',
     'Amatic SC',
    'Bangers',
    'Fredericka the Great',
    'Viaoda Libre',
    'Kirang Haerang',
    'Akaya Kanadaka',
    'Almarai'
];

const colors = [
    '#075E1B',
    '#078F26',
    '#48FD8E',
    '#2ED363'
]

const clocks = [
    '&#128336',
    '&#128337',
    '&#128338',
    '&#128339',
    '&#128340',
    '&#128341',
    '&#128342',
    '&#128343',
    '&#128344',
    '&#128345',
    '&#128346',
    '&#128347'
]
  
  const letters = document.querySelectorAll('.letter');
  const clock = document.querySelector('.clock')

  let count=0;
  let clockCount = 0.

  const rollIntro = () => {
    letters.forEach(letter => {
      
    let randomFontIndex = Math.floor(Math.random() * fonts.length);
    let randomColorIndex = Math.floor(Math.random() * colors.length);
    let randomFont = fonts[randomFontIndex];
    let randomColor = colors[randomColorIndex]
    
    console.log(clockCount <= clocks.length - 1)
    if(clockCount <= clocks.length - 1){
       
        clock.innerHTML = clocks[clockCount]
        clockCount ++ 

    }else{
        clockCount = 0
    }

   letter.style.fontFamily=randomFont;
   letter.style.color = randomColor;
  });
  }
  
  let introAnimation = setInterval(function() {
    rollIntro();
    count++;
  },350);