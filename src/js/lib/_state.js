import { Dom } from 'dom_craft';

export const [filter, setFilter] = Dom.state([]);
export const [machine, setMachine] = Dom.state('버츄오');

export const machineData = ['버츄오', '오리지널'];
export const filterData = [
    {
        key: 'decaf',
        name: '디카페인',
        color: '#94473C99',
    },
    {
        key: 'ice',
        name: '아이스',
        color: '#4BADD199',
    },
    {
        key: 'milk',
        name: '밀크',
        color: '#D3AB8999',
    },
    {
        key: 'starbucks',
        name: '스타벅스',
        color: '#0D624399',
    },
];

export const areaInfor = {
    all: {
        text: '당신의 취향에 맞는 <br>영역을 선택해주세요.',
        style: { transition: '0.5s', transform: 'scale(1) translate(0,0)' },
    },
    quadrant_1: {
        text: `당신은 <strong style="color:#e68658aa;">부드럽고 고소한</strong> 커피를 <br>좋아하는 <strong style="color:#e68658;">"음유시인"</strong>입니다.`,
        style: { transition: '0.5s', transform: 'scale(1.8) translate(22%, 22%)' },
    },
    quadrant_2: {
        text: `당신은 <strong style="color:#68b3a7aa;">부드럽고 산뜻한</strong> 커피를 <br>좋아하는 <strong style="color:#68b3a7;">"로맨티스트"</strong>입니다.`,
        style: { transition: '0.5s', transform: 'scale(1.8) translate(-22%, 22%)' },
    },
    quadrant_3: {
        text: `당신은 <strong style="color:#687ba2aa;">강렬하고 산뜻한</strong> 커피를 <br>좋아하는 <strong style="color:#687ba2;">"자연인"</strong>입니다.`,
        style: { transition: '0.5s', transform: 'scale(1.8) translate(-22%, -22%)' },
    },
    quadrant_4: {
        text: `당신은 <strong style="color:#a26868aa;">강렬하고 고소한</strong> 커피를 <br>좋아하는 <strong style="color:#a26868;">"모험가"</strong>입니다.`,
        style: { transition: '0.5s', transform: 'scale(1.8) translate(22%, -22%)' },
    },
};

export const quadrants = [1, 2, 3, 4];

export const [selectedQuadrant, setSelectedQuadrant] = Dom.state('all');

export const coffeeData = [
    {
        top: 3,
        left: -2,
        name: '커피A',
        filter: ['ice'],
    },
    {
        top: 1,
        left: 1,
        name: '커피B',
    },
    {
        top: 2,
        left: 2,
        name: '커피C',
        filter: ['decaf'],
    },
    {
        top: -1,
        left: -2,
        name: '커피D',
        filter: ['decaf', 'milk'],
    },
    {
        top: -2,
        left: -1,
        name: '커피E',
        filter: ['milk'],
    },
    {
        top: -3.5,
        left: 2,
        name: '커피F',
        filter: ['starbucks'],
    },
];
