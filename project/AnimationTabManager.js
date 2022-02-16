/*

    Controls content in animation Tab

*/

import Input from './component/Input'
import LabeledInput from './component/LabeledInput'
import InputSlider from './component/InputSlider'
import Dropdown from './component/Dropdown'
import Group from './component/Group'
import Button from './component/Button'

export default class AnimationTabManager {
    constructor (data) {
        var parent = data.parent;
        this.parent = parent;
        this.ctx = data.ctx;
        this.uploadedImages = {};

        this.animationSelector = new Dropdown ({
            parent,
            options: ['idle', 'walk']
        })

        this.animationDataGroup = new Group ({
            parent,
            label: { content: 'Animation Data' }
        })

        var animParent = this.animationDataGroup.node;

        this.frameCountInput = new LabeledInput ({
            parent: animParent,
            label: { content: 'Frame Count'}
        })

        this.facingCountInput = new LabeledInput ({
            parent: animParent,
            label: { content: 'Facing Count' }
        })

        this.frameDataGroup = new Group ({
            parent,
            label: { content: 'Frame Data' }
        })

        var frameParent = this.frameDataGroup.node;

        this.currentFrameInput = new InputSlider ({
            parent: frameParent,
            label: { content: 'Current Frame' }
        })

        this.currentFacingInput = new InputSlider ({
            parent: frameParent,
            label: { content: 'Current Facing' }
        })

        this.frameDuration = new LabeledInput ({
            parent: frameParent,
            label: { content: 'Duration (Ms)' }
        })

        this.mirrorSpriteInput = new LabeledInput ({
            parent: frameParent,
            label: { content: 'Flip Horizontal' },
            input: { prop: { type: 'checkbox' } }
        })

        this.imageLoader = new Input ({
            parent: $ (document.body),
            class: 'hide',
            prop: { type: 'file' },
        })

        this.imageLoader.node [0].addEventListener ('change', (e) => { this.HandleImage (e); }, false)

        this.uploadSpriteButton = new Button ({
            parent: frameParent,
            label: 'Upload Sprite',
            onClick: (e) => { this.PromptForFile (); }
        })

        this.playPauseButton = new Button ({
            parent,
            label: 'Play',
            onClick: (e) => { this.TogglePlay(); }
        })
    }

    TogglePlay () {
        console.log ('playing or pausing animation')
    }

    PopulateImageData (img) {
        this.uploadedImages [this.curAnimation + '-' + this.curFrame] = {
            source: img,
            duration: this.curFrameDurMs
        }
    }

    PromptForFile () {
        this.imageLoader.node [0].value = null;
        this.imageLoader.node.click ();
    }

    HandleImage (e) {
        console.log ("here?")
        var reader = new FileReader();
        reader.onload = (event) => {
            var img = new Image();
            img.onload = () => {
                this.ctx.drawImage(img,0,0);
                this.PopulateImageData (img);
            }
            img.src = event.target.result;
        }
        reader.readAsDataURL(e.target.files[0]);
    }
}
