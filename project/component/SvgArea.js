/*

    Creates an SVG element for other svg elements to render onto

*/

import Svg from './SVG';

export default class SvgArea extends Svg {
    constructor (config) {
        // Run SVG Object setup
        super (config);

        // Make sure config has certain properties
        config = this.setConfigDefaults ({
            prop: {
                width: 200,
                height: 200
            },
            template: '<svg></svg>'
        })

        // Assign config and render
        this.assignConfig (config);
        this.renderToParent ();
    }
}
