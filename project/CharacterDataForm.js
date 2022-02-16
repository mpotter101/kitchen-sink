import Input from './component/Input'
import LabeledInput from './component/LabeledInput'
import Group from './component/Group'
import Dropdown from './component/Dropdown'
import TextArea from './component/TextArea'

export default class CharacterDataForm {
    constructor (data) {
        parent = data.parent;

        this.fields = {
            name: new Input ({ parent }),
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
            }),
            description: new TextArea ({
                parent,
            })
        }

        // Name
        this.nameGroup = new Group ({
            parent,
            label: { content: 'Name' }
        })

        this.nameGroup.addContent (this.fields.name.node)

        // Race
        this.raceGroup = new Group ({
            parent,
            label: { content: "Race" }
        })

        this.raceGroup.addContent (this.fields.race.node);

        // Sex
        this.sexGroup = new Group ({
            parent,
            label: { content: "Sex" }
        })

        this.sexGroup.addContent (this.fields.sex.male.node);
        this.sexGroup.addContent (this.fields.sex.female.node);

        // Description
        this.descriptionGroup = new Group ({
            parent,
            label: { content: "Description" }
        })

        this.descriptionGroup.addContent (this.fields.description.node)
    }
}
