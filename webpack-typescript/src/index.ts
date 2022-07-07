import func from './module/index';
import './assets/img/rs_school.svg';
import image from './assets/img/image.png';
import background from './assets/img/background.png';
import './global.scss';

let body: HTMLElement = document.querySelector('body')!;
let img: HTMLImageElement = document.createElement('img');
let bg: HTMLImageElement = document.createElement('img');
let info: HTMLElement = document.createElement('div');
let logo: HTMLElement = document.createElement('div');

bg.src = background;
bg.classList.add('rotating');
bg.height = 400;

img.src = image;

logo.append(bg);
logo.append(img);

info.innerHTML = `<div>${func()}</div><div>SCSS compiler works!</div><div>Webpack version 8.4.0</div>`;

body.append(logo);
body.append(info);
