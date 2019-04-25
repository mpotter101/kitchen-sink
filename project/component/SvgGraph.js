/*

    Handles visualization of data

*/

import Svg from './SVG';

import SvgBox from './SvgBox';
import SvgLine from './SvgLine';
import SvgLabel from './SvgLabel';

import SvgAxis from './SvgAxis';
import SvgGrid from './SvgGrid';

export default class SvgGraph extends Svg {
    constructor (config) {
        super (config);

        config = this.setConfigDefaults ({
            element: 'g',
            xAxis: {
                bottom: {
                    title: 'Advanced D&D Classes',
                    minValue: 1,
                    maxValue: 5,
                    labelList: [
                        'Fighter',
                        'Wizard',
                        'Rogue',
                        'Dwarf',
                        'Elf'
                    ],
                }
            },
            yAxis: {
                left: {
                    title: 'Play Time (hrs)',
                    minValue: 0,
                    maxValue: 100,
                },
                right: {
                    title: 'Monsters defeated',
                    minValue: 1,
                    maxValue: 10,
                    labelList: [
                        'none', 'just one',
                        'a few', 'several',
                        'plenty', 'bunches',
                        'hundreds', 'too many to count',
                        'literaly all'
                    ]
                },
            },
            svg: {
                width: 100,
                height: 100,
                x: 10, y: 10,
            },
            box: {
                svg: {
                    fill: 'black',
                    stroke: '#bebbc1',
                    'stroke-width': 2
                }
            },
            grid: {
                segments: 5,
                svg: {
                    fill: '#bebbc1',
                    stroke: '#bebbc1',
                    'stroke-width': 1
                }
            }
        });

        // Assign config and render to parent
        this.assignConfig (config);
        this.renderToParent ();

        // Modify sub-component configs to work as proper configs

        // Create child objects

            // Create background
        this._box = this.box;
        this._box.parent = this.node;
        this._box.svg.x = this.svg.x;
        this._box.svg.y = this.svg.y;
        this._box.svg.width = this.svg.width;
        this._box.svg.height = this.svg.height;
        this.box = new SvgBox (this._box);

            // Create grid
        this._grid = this.grid;
        this._grid.parent = this.node
        this.grid = new SvgGrid (this._grid);

            // Create Axes
        this._yAxis = this.yAxis;
        this._xAxis = this.xAxis;

        this._yAxis.left.parent = this.node;
        this._yAxis.right.parent = this.node;
        this._xAxis.bottom.parent = this.node;

        this.yAxis = { left: {}, right: {} };
        this.xAxis = { bottom: {} };

        this.yAxis.left = new SvgAxis (this._yAxis.left);
        this.yAxis.right = new SvgAxis (this._yAxis.right);
        this.xAxis.bottom = new SvgAxis (this._xAxis.bottom);
    }
}
