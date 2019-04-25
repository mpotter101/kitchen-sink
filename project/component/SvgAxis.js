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

        config = this.setConfigDefaults ({
            element: 'g',
            minValue: 0,
            maxValue: 100,
            
            svg: {
                x: 10, y: 10,
                height: 100,
                width: 100,
                fill: '#bebbc1',
                stroke: '#bebbc1',
                'stroke-width': 1,
            }
        });

        // Create a series of labels across
    }
}
