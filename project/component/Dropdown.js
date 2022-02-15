/*

    Creates an input field
    Handles changes to input and enter key press

*/

import Html from './HTML';
import DropdownOption from './DropdownOption';

export default class Input extends Html {
    constructor (config) {
        // Run HTML object setup
        super (config);

        // Make sure the config has certain properties
        config = this.setConfigDefaults ({
            onChange: (e) => { console.log ('Dropdown was changed') },
            template: '<select></select>',
            class: 'ui select',
            options: ['one', 'two', 'three'],
        })

        // Assign properties from config and render our dom
        this.assignConfig (config);
        this.renderToParent ();


        this._options = this.options;
        this._options.forEach ((item, index) => {
            this.options [index] = new DropdownOption ({
                parent: this.node,
                value: item,
                content: item
            })
        })

        this.node.change ((e) => { this.OnChangeHandler (e); })
    }

    OnChangeHandler (e) {
        this.onChange ();
    }
}
