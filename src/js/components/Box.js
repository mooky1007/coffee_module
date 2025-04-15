import { Dom } from 'dom_craft';

const Box = (text) => {
    return Dom.div.set({
        text,
    });
};

export default Box;
