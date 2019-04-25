/*

    Handles visualization of data

*/

import Svg from './SVG';

export default class SvgGraph extends Svg {
    constructor (config) {
        super (config);

        config = this.setConfigDefaults ({
            element: 'g',
            xAxis: {
                minValue: 0,
                maxValue: 12,
                labelList: [
                    'January', 'Febuary',
                    'March', 'April',
                    'May', 'June',
                    'July', 'August',
                    'September', 'October',
                    'November', 'December',
                ]
            },
            yAxis: {
                left: {
                    minValue: 0,
                    maxValue: 100,
                    title: 'Left Y Axis Title'
                },
                right: {
                    minValue: 0,
                    maxValue: 100,
                    title: 'Right Y Axis Title'
                },
            },
        })
    }
}
