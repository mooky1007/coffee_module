import { Dom } from 'dom_craft';
import { filter, filterData } from '../../lib/_state';

const filterDom = {};
filterData.forEach((el) => {
    filterDom[el.name] = Dom.li;

    filterDom[el.name].animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 300,
        fill: 'forwards',
    }),
        filterDom[el.name].set({
            style: {
                background: el.color,
            },
            children: [Dom.span.set(`#${el.name}`)],
        });
});

let prevFilter = [];
export const QuadrantsFilter = Dom.ul.set({
    class: 'selected_filter',
    update: function () {
        this.replace(
            filter().map((el) => {
                if (filterDom[el.name]) {
                    if (prevFilter.find((el2) => el2.name === el.name)) return filterDom[el.name];
                    filterDom[el.name].ani.play();
                    return filterDom[el.name];
                }
            })
        );
        prevFilter = filter();
    },
});

export default QuadrantsFilter;
