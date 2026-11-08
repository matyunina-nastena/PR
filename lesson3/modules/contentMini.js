import Element from "../constructor/Element.js";

const carDatas = [
    'Same Card 1',
    'Same Card 2',
    'Same Card 3',
    'Same Card 4',
    'Same Card 5',
];

const cards = carDatas.map(el => new Element('div', 'cardMini', el).get());

const contentMini = new Element('div','contentMini',cards);

export default contentMini;