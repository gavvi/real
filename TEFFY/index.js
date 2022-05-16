const yesBtn = document.querySelector('#yesBtn')

yesBtn.addEventListener('click',function () {
    alert('Shii <3 tu y nos casaremos y nos compraremos una casita kdkd ');
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover',function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
})