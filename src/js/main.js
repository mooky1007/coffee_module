import { Dom } from 'dom_craft';
import Button from './components/Button';
import Box from './components/Box';

const data = window.coffeeData || [{ name: '기본값', value: 123 }];

window.addEventListener('DOMContentLoaded', () => {
    // Dom.body.set({
    //     children: [...data.map((el) => Button(`${el.name}: ${el.value}`)), Box()],
    // });
});
