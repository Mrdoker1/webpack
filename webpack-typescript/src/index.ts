import func from './module/index';
import './assets/img/rs_school.svg';
import './global.scss';

console.log('Build works!');
func();

document.querySelector('body')!.innerHTML = `<ul><li>Webpack works!</li><li>SCSS compiler works!</li><ul>`;
