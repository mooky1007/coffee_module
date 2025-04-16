import { Dom } from 'dom_craft';
import { areaInfor, quadrants, selectedQuadrant, setSelectedQuadrant } from '../../lib/_state';

const QuadrantsAreaItem = (idx) => {
    return Dom.div.set({
        class: `num0${idx}`,
        on: {
            click: () => {
                if (selectedQuadrant() !== `quadrant_${idx}`) {
                    setSelectedQuadrant(`quadrant_${idx}`);
                }
            },
        },
    });
};

export const clickableArea = Dom.div;

const QuadrantsArea = Dom.section.set({
    class: 'coffee_draft',
    children: [
        Dom.span.set({ class: 'top', text: '부드러운' }),
        Dom.span.set({ class: 'right', text: '산뜻한' }),
        Dom.span.set({ class: 'bottom', text: '강렬한' }),
        Dom.span.set({ class: 'left', text: '고소한' }),
        clickableArea.set({
            class: 'clickable_section',
            children: quadrants.map((idx) => {
                return QuadrantsAreaItem(idx);
            }),
        }),
    ],
    update: function () {
        this.style(areaInfor[selectedQuadrant()].style);
    },
});
export default QuadrantsArea;
