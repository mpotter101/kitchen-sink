/*

    Draws a line between two coordinates
    Renders labels and can plot items
    based on given values instead of
    coordinates

*/

import Svg from './SVG';

export default class SvgAxis extends Svg {
    constructor (config) {
        super (config);
        console.log ('Creating axis...')
    }
}
