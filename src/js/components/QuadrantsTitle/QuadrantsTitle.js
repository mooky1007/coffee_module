import { Dom } from 'dom_craft';
import { areaInfor, selectedQuadrant, setSelectedQuadrant } from '../../lib/_state';

const Title = Dom.h2;
const QuadrantsTitle = Dom.ul.set({
    children: [
        Title.set({ text: areaInfor[selectedQuadrant()].text }),
        Dom.button.set({
            children: [Dom.span.set('⏎')],
            on: {
                click: () => setSelectedQuadrant('all'),
            },
        }),
    ],
    update: () => {
        Title.text(areaInfor[selectedQuadrant()].text);
    },
});

export default QuadrantsTitle;
