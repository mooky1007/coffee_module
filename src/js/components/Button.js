import { Dom } from 'dom_craft';
import Box from './Box';

const Button = (text) => {
    return Dom.button.set({
        text,
        children: [Box(1),Box(2),Box(3),Box(4),Box(5)],
    });
};

export default Button;
