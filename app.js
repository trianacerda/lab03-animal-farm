

//const playCat = document.getElementById('play-cat');
const cat = document.getElementById('cat');
const catSound = document.getElementById('cat-sound');
const dog = document.getElementById('dog');
const dogSound = document.getElementById('dog-sound');
const horse = document.getElementById('horse');
const horseSound = document.getElementById('horse-sound');

cat.addEventListener('click', ()=>{
    catSound.play();
});

dog.addEventListener('click', ()=>{
    dogSound.play();
});

horse.addEventListener('click', ()=>{
    horseSound.play();
});