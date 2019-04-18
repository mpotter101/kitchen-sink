// Import objects
import Button from './component/Button'
import Label from './component/Label'
import Slider from './component/Slider'

// Variables shared across instances

// The starting point for the application
export default class App {
    constructor (config) {
        console.log ('App is starting! Config:', config)

        console.log ('Button')
        console.log ('\tCreating bare-minimum button')
        let button = new Button ({
            parent: $ ('#left-sidebar-body')
        })

        console.log ('\tCreating complex button')
        let complexButton = new Button ({
            label: 'Complex Button',
            class: 'ui button circular',
            parent: $ ('#left-sidebar-body'),
            prop: { dataValue: 43 },
            onClick: this.onComplexButtonClick
        })

        // console.log ('Rendering a button twice?')
        // complexButton.render ()

        console.log ('Label')
        console.log ('\tCreating bare-minimum label')
        let label = new Label ({
            parent: $ ('#left-sidebar-body')
        })

        console.log ('\tCreating complex label')
        let complexLabel = new Label ({
            parent: $ ('#left-sidebar-body'),
            prefix: 'Distooonce:',
            content: 10000,
            suffix: '<sup>BU</sup>',
            class: 'ui label complex',
        })

        console.log ('\tTesting label to make sure it updates its dom')
        complexLabel.setPrefix ('Distance:');
        complexLabel.setContent (10);
        complexLabel.setSuffix ('<sub>AU</sub>');

        console.log ('Slider')
        console.log ('\tCreating bare-minimum slider')
        let slider = new Slider ({
            parent: $ ('#left-sidebar-body'),
        })

        console.log ('\tTesting setting slider value')
        slider.setValue (99);
        slider.setValue ('2');

        console.log ('\tTesting getting slider value')
        console.log ('\t', slider.getValue ())

        console.log ('\tCreating complex slider')
        let complexSlider = new Slider ({
            parent: $ ('#left-sidebar-body'),
            prop: {
                max: 1000,
                min: 0.001,
                step: 0.0001,
                value: 100,
                id: 'complex-slider'
            },
            class: 'ui slider complex',
            onInput: (data) => { this.onComplexSliderInput (data) }
        })
    }

    onComplexButtonClick (data) {
        console.log ('App is handling complex button click.')
        console.log ('Data:', data)
        console.log (data.node.prop ('dataValue'))
    }

    onComplexSliderInput (data) {
        console.log ('App is handling complex slider input');
        console.log ('Data:', data);
        console.log (data.target.getValue ())
    }
}
