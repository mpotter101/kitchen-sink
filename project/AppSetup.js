// Base Components
import Canvas from './component/Canvas'
import Button from './component/Button'
import Tabber from './component/Tabber'

// Managers
import CharacterDataForm from './CharacterDataForm'
import AnimationTabManager from './AnimationTabManager'

export default class AppSetup {
    constructor () {
        this.canvas = new Canvas ({ parent: $('#stage') });
        this.ctx = this.canvas.GetContext();

        var leftSidebar = $('#left-sidebar-body');
        var rightSidebar = $('#right-sidebar-body');

        this.rightSidebarTabber = new Tabber ({
            parent: rightSidebar,
            tabs: ['Animation', 'Sprite', 'Meta']
        })

        this.exportButton = new Button ({
            parent: rightSidebar,
            label: 'Export',
            onClick: () => { this.ExportImage (); }
        })

        this.animationTabManager = new AnimationTabManager ({
            parent: this.rightSidebarTabber.tabs [0].content.node,
            ctx: this.ctx
        })

        this.characterDataForm = new CharacterDataForm ({
            parent: leftSidebar
        });

        this.animations = ['idle', 'walk'];
        this.curAnimation = 'idle';
        this.curFrame = 0;
        this.curFrameDurMs = 300; //ms
        this.maxFrame = 1;
        this.uploadedImages = {};


    }
}
