/*

    Draws a line between two coordinates
    Renders labels and can plot items
    based on given values instead of
    coordinates

*/

import Svg from './SVG';

import SvgLabel from './SvgLabel';

export default class SvgAxis extends Svg {
    constructor (config) {
        super (config);

        // Make sure the config has certain properties
        config = this.setConfigDefaults ({
            element: 'g',
            minValue: 0,
            maxValue: 100,
            labels: [],
            labelCount: 5,
            type: 'x',
            svg: {
                x: 10, y: 10,
                height: 100,
                width: 100,
                fill: '#bebbc1',
                stroke: '#bebbc1',
                'stroke-width': 1,
            }
        });

        // Assign config and render to parent
        this.assignConfig (config);
        this.renderToParent ();

        // If no labels are given, use label count to auto generate
        // labels between  the min and max values
        if (!this.labels.length) { this.generateLabels (); }

        // Create a series of labels across either the width or height
        // Based on which type of axis we are making

        switch (this.type) {
            case 'x': this.createXAxis (); break;
            case 'y': this.createYAxis (); break;
            default: console.warn ('Invalid axis type given. Accepted values: x, y');
        }
    }

    createXAxis () {
        let increment = this.svg.width / this.labels.length;
        this.labels.forEach ((item, index) => {
           this.labels [index] = new SvgLabel ({
               content: item,
               parent: this.node,
               svg: {
                   x: (increment * index) + this.svg.x,
                   y: this.svg.y
               }
           })
        });

        console.log (this.labels)
    }

    createYAxis () {

    }

    generateLabels () {
        let endLabel = this.maxValue;

        let end, increment, index;

        increment = (this.maxValue - this.minValue) / this.labelCount;
        index = 0;
        end = this.labelCount - 2;

        while (index < end) {
            this.labels.push ( (increment * index) + this.minValue );

            index++
        }

        this.labels.push (endLabel);
    }
}
