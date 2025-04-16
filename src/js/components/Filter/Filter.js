import { Dom } from 'dom_craft';
import { filter, filterData, setFilter } from '../../lib/_state';

const filterButton = (data) => {
    return Dom.li.set({
        class: `filter_list_item_${data.color.replace('#', '')}`,
        children: [
            Dom.label.set({
                attr: {
                    for: data.key,
                },
                children: [
                    Dom.input.set({
                        type: 'checkbox',
                        id: data.key,
                        on: {
                            change: function () {
                                const filterData = filter();
                                if (this.el.checked) {
                                    setFilter([...filterData, data]);
                                } else {
                                    setFilter([
                                        ...filterData.filter((el) => {
                                            return el.key !== data.key;
                                        }),
                                    ]);
                                }
                            },
                        },
                    }),
                    Dom.span,
                    Dom.p.set(data.name),
                ],
            }),
        ],
    });
};

Dom.injectCss(`
  ${filterData
      .map((data) => {
          return `
          .filter_list_item_${data.color.replace('#', '')}:has(input:checked) {
            border-color: ${data.color} !important;
          }

          .filter_list_item_${data.color.replace('#', '')}:has(input:checked) input:checked + span {
            border-color: ${data.color} !important;
          }

          .filter_list_item_${data.color.replace('#', '')}:has(input:checked) input:checked + span::after {
            background: ${data.color} !important;
          }
          `
      })
      .join(`\n`)}
`);

export const [filterFold, setFilterFold] = Dom.state(false);

const FilterHeader = Dom.div.set({
    class: 'filter_header',
    on: {
        click: function () {
            setFilterFold(!filterFold());
        },
    },
    children: [
        Dom.h3.set({
            text: '추가 취향 및 기호 선택',
        }),
        Dom.div.set({
            children: [Dom.span.class('arrow')],
        }),
    ],
});

const FilterBody = Dom.ul.set({
    class: 'filter_section',
    children: filterData.map((data) => filterButton(data)),
});

const Filter = [FilterHeader, FilterBody];
Filter.reset = () => {
    setFilter([]);
    FilterBody.config.children.forEach((li) => {
        li.config.children[0].config.children[0].el.checked = false;
    });
};

export default Filter;
