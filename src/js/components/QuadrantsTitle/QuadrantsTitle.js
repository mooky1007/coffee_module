import { Dom } from 'dom_craft';
import { areaInfor, selectedQuadrant, setSelectedQuadrant } from '../../lib/_state';

const Title = Dom.h2;
const QuadrantsTitle = Dom.ul.set({
    children: [
        Title.set({
            html: areaInfor[selectedQuadrant()].text,
        }),
        Dom.button.set({
            children: [Dom.span.set('⏎')],
            on: {
                click: () => {
                    if (selectedQuadrant() !== 'all') setSelectedQuadrant('all');
                },
            },
        }),
    ],
    update: async () => {
        Title.set({
            html: areaInfor[selectedQuadrant()].text,
        });
        Title.animations({
            keyframe: [
                {
                    opacity: 0,
                    transform: 'translateY(10px)',
                },
                {
                    opacity: 1,
                    transform: 'translateY(0)',
                },
            ],
            options: {
                duration: 600,
                fill: 'both',
            },
        });
    },
});

export default QuadrantsTitle;
