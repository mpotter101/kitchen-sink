/*

    Draws a grid of lines over an area

*/

import Svg from './SVG';

import SvgLine from './SvgLine';

export default class SvgGrid extends Svg {
    constructor (config) {
        super (config);

        config = this.setConfigDefaults ({
            element: 'g',
            segments: 3,
        })

        this.assignConfig (config);
        this.renderToParent ();

        // Figure out some coordinates to make child creation easier
        this.top = this.node [0].getBoundingClientRect ().y;
        this.bottom = this.node [0].getBoundingClientRect ().y + this.node.height ();
        this.left = this.node [0].getBoundingClientRect ().x;
        this.right = this.node [0].getBoundingClientRect ().x + this.node.width ();

        // Create child objects
        this.createRows ();
    }

    createRows () {
        // Rows only need to space out their Y coordinates
        this.rows = [];

        let end, height, increment, index, line, width, x1, x2, y1, y2;
        x1 = this.left;
        x2 = this.right;

        increment = this.height / this.segments;

        index = 1;
        end = this.segments + 1;
        while (index < end) {
            y1 = index * increment;
            y2 = y1;

            line = new SvgLine ({
                parent: this.node,
                svg: {
                    fill: this.svg.fill,
                    stroke: this.svg.stroke,
                    'stroke-width': this.svg ['stroke-width'],
                    x1, x2, y1, y2
                }
            })
            index++;
        }

    }

    createColumns () {

    }
}
