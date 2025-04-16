import { Dom } from 'dom_craft';

const QuadrantsItem = (data) => {
    const Article = Dom.article;

    Article.set({
        class: 'quadrants_item',
        style: {
            top: `${50 + data.top * -10}%`,
            left: `${50 + data.left * 10}%`,
        },
        children: [Dom.div, Dom.span.set(data.name)],
    });

    return Article;
};

export default QuadrantsItem;
