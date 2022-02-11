/*

    Creates an input field
    Handles changes to input and enter key press

*/

import Html from './HTML';

export default class Input extends Html {
    constructor (config) {
        // Run HTML object setup
        super (config);

        // Make sure the config has certain properties
        config = this.setConfigDefaults ({
            template: '<select></select>',
            class: 'ui select',
        })

        // Assign properties from config and render our dom
        this.assignConfig (config);
        this.renderToParent ();
    }
}
