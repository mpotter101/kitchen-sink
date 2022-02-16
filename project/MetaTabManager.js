import Button from './component/Button'
import LabeledInput from './component/LabeledInput'
import Group from './component/Group'
import InputSlider from './component/InputSlider'

export default class MetaTabManager {
    constructor (data) {
        var parent = data.parent;
        this.parent = parent;

        this.fileSystemGroup = new Group ({
            parent,
            label: { content: 'File System' }
        })

        var fileParent = this.fileSystemGroup.node;

        this.exportButton = new Button ({
            parent: fileParent,
            label: 'Export',
            onClick: () => { this.ExportData (); }
        })

        this.exportButton = new Button ({
            parent: fileParent,
            label: 'Import',
            onClick: () => { this.ImportData (); }
        })

        this.canvasSizeGroup = new Group ({
            parent,
            label: { content: 'Canvas Size' }
        })

        var canvasParent = this.canvasSizeGroup.node;

        this.widthInput = new LabeledInput ({
            parent: canvasParent,
            label: { content: 'Width' }
        })

        this.heightInput = new LabeledInput ({
            parent: canvasParent,
            label: { content: 'Height' }
        })

        this.canvasResolutionGroup = new Group ({
            parent,
            label: { content: 'Canvas Resolution' }
        })

        var resolutionParent = this.canvasResolutionGroup.node

        this.canvasResX = new LabeledInput ({
            parent: resolutionParent,
            label: { content: 'Width' }
        })

        this.canvasResY = new LabeledInput ({
            parent: resolutionParent,
            label: { content: 'Height' }
        })

        this.guideGroup = new Group ({
            parent,
            label: { content: 'Guides' }
        })

        this.toggleGuidesInput = new LabeledInput ({
            parent: this.guideGroup.node,
            label: { content: 'Toggle Visible' },
            input: { prop: { type: 'checkbox' } }
        })

        this.guideOpacity = new InputSlider ({
            parent: this.guideGroup.node,
            label: { content: 'Opacity' }
        })

        this.imageDownloaderNode = $( document.createElement ('a') );
    }

    ImportData () {
        console.log ("Accepting zip file?");
    }

    ExportData () {
        console.log ("Exporting all data")
    }

    ExportImage ({img, imgName}) {
        var img = this.canvas.ToDataURL ('image/png');
        this.imageDownloaderNode [0].href = img;
        this.imageDownloaderNode [0].download = imgName;
        this.imageDownloaderNode [0].click ();
    }
}
