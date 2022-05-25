import _ from 'lodash';

console.log('lazy module is loading Ok!');

const out = () => {
    console.log('Button Clicked: Here\'s "some text"!');
};
export default out;

export const noDef = () => {
    console.log('no default..');
    console.log(_.fill(Array(3), 'p'));
};
