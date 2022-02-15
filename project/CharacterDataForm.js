import Input from './component/Input'
import LabeledInput from './component/LabeledInput'
import Group from './component/Group'
import Dropdown from './component/Dropdown'

export default class CharacterDataForm {
    constructor (data) {
        parent = data.parent;

        /*
            Managed fields:
                Name,
                Sex,
                Race,
                Description
        */

        this.fields = {
            name: new LabeledInput ({ parent, label: {content: "Name"} }),
            sex: {
                male: new LabeledInput ({
                    parent,
                    label: {content: "Male"},
                    input: {prop: { type: "checkbox" }}
                }),
                female: new LabeledInput ({
                    parent,
                    label: {content: "Female"},
                    input: {prop: { type: "checkbox" }}
                })
            },
            race: new Dropdown ({
                parent,
                options: ['Scaper', 'Horn Dog', 'Cyclops', 'Stalios']
            })
        }

        this.sexGroup = new Group ({
            parent,
            label: { content: "Sex" }
        })

        this.sexGroup.addContent (this.fields.sex.male.node);
        this.sexGroup.addContent (this.fields.sex.female.node);
    }
}
