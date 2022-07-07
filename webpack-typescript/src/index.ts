import func from './module/index';
import './assets/img/rs_school.svg';
import image from './assets/img/image.png';
import './global.scss';

let body: HTMLElement = document.querySelector('body')!;
let img: HTMLImageElement = document.createElement('img');
let info: HTMLElement = document.createElement('div');

img.src = image;
img.height = 400;
info.innerHTML = `<div>${func()}</div><div>SCSS compiler works!</div><div>Webpack version 8.4.0</div>`;

body.append(img);
body.append(info);
