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
        const animation = await Title.animate(
            [
                {
                    opacity: 0,
                    transform: 'translateY(10px)',
                },
                {
                    opacity: 1,
                    transform: 'translateY(0)',
                },
            ],
            {
                duration: 600,
                fill: 'forwards',
            }
        );
        animation.cancel();
        Title.set({
            html: areaInfor[selectedQuadrant()].text,
        });
        animation.play();
    },
});

export default QuadrantsTitle;
