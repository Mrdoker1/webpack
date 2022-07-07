import func from './module/index';
import './assets/img/rs_school.svg';
import image1 from './assets/img/image.png';
import './global.scss';

let img: HTMLImageElement = document.createElement('img');
img.src = image1;
img.height = 400;
let body: HTMLElement = document.querySelector('body')!;
let info: HTMLElement = document.createElement('div');
info.innerHTML = `<div>${func()}</div><div>SCSS compiler works!</div><div>Webpack version 8.4.0</div>`;
body.append(img);
body.append(info);
