import { Dom } from 'dom_craft';
import { coffeeData, filter, machine, selectedQuadrant, setSelectedQuadrant } from './lib/_state';
import Filter, { filterFold } from './components/Filter/Filter';
import QuadrantsTitle from './components/QuadrantsTitle/QuadrantsTitle';
import MachineSelector from './components/MachineSelector/MachineSelector';
import QuadrantsArea from './components/QuadrantsArea/QuadrantsArea';
import QuadrantsFilter from './components/QuadrantsFilter/QuadrantsFilter';
import QuadrantsItem from './components/QuadrantsItem/QuadrantsItem';
import { scrollTo } from './lib/_utils';

window.addEventListener('DOMContentLoaded', () => {
    const MachineWrap = Dom.qs('[data-js=machine]');
    const TitleWrap = Dom.qs('[data-js=quadrants_header]');
    const QuadrantsWrap = Dom.qs('[data-js=quadrants_body]');
    const FilterWrap = Dom.qs('[data-js=filter]');

    const QuadrantsItemContainer = Dom.section.style({
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
    });
    QuadrantsItemContainer.update = function () {
        this.replace(
            coffeeData
                .filter((data) => {
                    if (filter().length === 0) return true;
                    else if ('filter' in data) {
                        return data.filter.some((el) => {
                            return filter().find((filterData) => filterData.key === el);
                        });
                    } else {
                        return false;
                    }
                })
                .map((el) => QuadrantsItem(el))
        );
    };

    MachineWrap.replace(MachineSelector);
    TitleWrap.replace([QuadrantsTitle, QuadrantsFilter]);
    FilterWrap.replace(Filter);
    QuadrantsWrap.replace(QuadrantsArea);

    QuadrantsArea.append(QuadrantsItemContainer);

    Dom.effect(() => {
        if (filterFold()) FilterWrap.class('fold');
        else FilterWrap.removeClass('fold');
    }, [filterFold]);

    QuadrantsWrap.reset = () => {};
    QuadrantsWrap.update = () => {
        QuadrantsTitle.update();
        QuadrantsArea.update();
    };
    QuadrantsWrap.mode = Dom.state('all');
    const [quadrantsMode, setQuadrantsMode] = QuadrantsWrap.mode;

    Dom.effect(() => {
        if (quadrantsMode() === 'all') {
            TitleWrap.removeClass('scale_up');
            QuadrantsArea.removeClass('scale_up');
        } else {
            TitleWrap.class('scale_up');
            QuadrantsArea.class('scale_up');
        }
    }, [quadrantsMode]);

    Dom.effect(() => {
        QuadrantsFilter.update();
        QuadrantsItemContainer.update();
    }, [filter]);

    Dom.effect(() => {
        setQuadrantsMode(selectedQuadrant());

        QuadrantsWrap.update();
        if (selectedQuadrant() !== 'all') scrollTo(TitleWrap);
    }, [selectedQuadrant]);

    let firstInit = true;

    Dom.effect(async () => {
        MachineSelector.forEach((button) => button.update());
        Filter.reset();

        await Dom.delay(200);
        if (selectedQuadrant() !== 'all') setSelectedQuadrant('all');
        if (!firstInit) scrollTo(TitleWrap);
        else firstInit = false;
    }, [machine]);
});
