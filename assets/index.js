import './sass/timekeeper.scss';
import Timekeeper from './Timekeeper';
import {on, q} from './js/util';

const t = new Timekeeper().attach(document.querySelector('form'));

q(document, 'a[href$="#alarm"]', el => on(el, 'click', e => t.toggleAlarm(e)));
q(document, 'a[href^="#start:"]', el => on(el, 'click', () => t.start(el.href.split('#start:')[1])));
q(document, 'a[href^="#stop"]', el => on(el, 'click', () => t.stop()));

//Event listeners for Pause and Resume buttons
q(document, '#pauseButton', el => on(el, 'click', () => t.pause()));
q(document, '#resumeButton', el => on(el, 'click', () => t.resume()));
