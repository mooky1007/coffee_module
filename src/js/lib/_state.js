import { Dom } from 'dom_craft';

export const [filter, setFilter] = Dom.state([]);
export const [machine, setMachine] = Dom.state('버츄오');

export const machineData = ['버츄오', '오리지널'];
export const filterData = [
    {
        key: 'decaf',
        name: '디카페인',
        color: '#94473Cco',
    },
    {
        key: 'ice',
        name: '아이스',
        color: '#4BADD1co',
    },
    {
        key: 'milk',
        name: '밀크',
        color: '#D3AB89co',
    },
    {
        key: 'starbucks',
        name: '스타벅스',
        color: '#0D6243co',
    },
];

export const areaInfor = {
    all: {
        text: '취향에 맞는 영역을 선택해주세요.',
        style: { transition: '0.5s', transform: 'scale(1) translate(0,0)' },
    },
    quadrant_1: {
        text: '부드럽고 산뜻한 커피',
        style: { transition: '0.5s', transform: 'scale(1.8) translate(22%, 22%)' },
    },
    quadrant_2: {
        text: '부드럽고 고소한 커피',
        style: { transition: '0.5s', transform: 'scale(1.8) translate(-22%, 22%)' },
    },
    quadrant_3: {
        text: '강렬하고 고소한 커피',
        style: { transition: '0.5s', transform: 'scale(1.8) translate(-22%, -22%)' },
    },
    quadrant_4: {
        text: '강렬하고 산뜻한 커피',
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
