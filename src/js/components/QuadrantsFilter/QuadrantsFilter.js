import { Dom } from 'dom_craft';
import { filter } from '../../lib/_state';

export const QuadrantsFilter = Dom.ul.set({
    class: 'selected_filter',
    update: function () {
        this.replace(
            filter().map((el) => {
                return Dom.li.set({
                    text: `#${el.name}`,
                    style: {
                        // background: el.color,
                        // background: '#000',
                    },
                });
            })
        );
    },
});

export default QuadrantsFilter;
