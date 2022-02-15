// add color by js 15/2/2022

const topPlayer = document.getElementById('top-player');
topPlayer.style.color = 'rgb(250,255,20)';

const topBlog = document.getElementById('top-blog');
topBlog.style.color = 'rgb(20,155,2)';

const players = document.getElementsByClassName('player');

for (const player of players) {
    console.log(player);


    player.style.backgroundColor = 'rgba(20,50,150,.1)';
}