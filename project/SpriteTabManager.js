import Input from './component/Input'
import LabeledInput from './component/LabeledInput'
import InputSlider from './component/InputSlider'

export default class SpriteTabManager {
    constructor (data) {
        var parent = data.parent;
        this.parent = parent;

        this.transformXField = new LabeledInput ({
            parent,
            label: { content: 'Transform X' }
        })

        this.transformYField = new LabeledInput ({
            parent,
            label: { content: 'Transform Y' }
        })

        this.scaleXField = new InputSlider ({
            parent,
            label: { content: 'Scale' }
        })
    }
}
