import 'normalize.css';
import './index.css';
import './../../spritesmith-generated/sprite.css';

import Menu from '../../blocks/menu';

const menu = new Menu({
  title: 'Сладости. Это меню. Отрой меня',
  items: [
    {
      title: 'Конфеты',
      href: 'candy'
    },
    {
      title: 'Пирожки',
      href: 'pie'
    },
    {
      title: 'Пряники',
      href: 'cookies'
    }
  ]
});

document.body.appendChild(menu.getElem());

menu.getElem().addEventListener('menu-select', event => {
  alert(event.detail.value);
});

menu.getElem().addEventListener('menu-open', () => {
  console.log('open');
});

menu.getElem().addEventListener('menu-close', () => {
  console.log('close');
});
