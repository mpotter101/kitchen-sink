// Base Components
import Canvas from './component/Canvas'
import Button from './component/Button'
import Tabber from './component/Tabber'

// Managers
import CharacterDataForm from './CharacterDataForm'
import AnimationTabManager from './AnimationTabManager'
import SpriteTabManager from './SpriteTabManager'
import MetaTabManager from './MetaTabManager'

export default class AppSetup {
    constructor () {
        this.canvas = new Canvas ({ parent: $('#stage') });
        this.ctx = this.canvas.GetContext();

        var leftSidebar = $('#left-sidebar-body');
        var rightSidebar = $('#right-sidebar-body');


        // Left Sidebar Managers
        this.characterDataForm = new CharacterDataForm ({
            parent: leftSidebar
        });

        // Right Sidebar Managers
        this.rightSidebarTabber = new Tabber ({
            parent: rightSidebar,
            tabs: ['Animation', 'Sprite', 'Meta']
        })

        this.animationTabManager = new AnimationTabManager ({
            parent: this.rightSidebarTabber.tabs [0].content.node,
            ctx: this.ctx
        })

        this.spriteTabManager = new SpriteTabManager ({
            parent: this.rightSidebarTabber.tabs [1].content.node,
        })

        this.metaTabManager = new MetaTabManager ({
            parent: this.rightSidebarTabber.tabs [2].content.node,
        })
    }
}
