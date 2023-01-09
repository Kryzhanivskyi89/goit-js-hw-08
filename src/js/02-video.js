import Player from '@vimeo/player';

const iframe = document.querySelector('iframe')
const player = new Player(iframe);

const onPlay = ({ seconds }) => {
    localStorage.setItem('videoplayer-current-time', seconds);
};
document.addEventListener('touchstart', { passive: true });
const throttle = require('lodash.throttle');
player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
