/*

    Serves as the base component for SVG elements

*/

import Html from './HTML';

export default class Svg extends Html {
    constructor (config) {
        // Run HTML Object Setup
        super (config);

        // Modify properties to better suit use in SVG
        this.template = '<g>Hello World!</g>';
    }
}
