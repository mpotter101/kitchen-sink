// Base Components
import Canvas from './component/Canvas'
import Input from './component/Input'
import Button from './component/Button'

// Managers
import CharacterDataForm from './CharacterDataForm'

// Upload an image
// https://stackoverflow.com/questions/10906734/how-to-upload-image-into-html5-canvas

// Export an image
// https://stackoverflow.com/questions/923885/capture-html-canvas-as-gif-jpg-png-pdf

export default class App {
    constructor () {
        this.canvas = new Canvas ({
            parent: $('#stage')
        })
        this.ctx = this.canvas.GetContext();

        this.imageDownloaderNode = $( document.createElement ('a') );

        var leftSidebar = $('#left-sidebar-body');
        var rightSidebar = $('#right-sidebar-body');

        this.imageLoader = new Input ({
            parent: rightSidebar,
            prop: {type: 'file'}
        })
        this.exportButton = new Button ({
            parent: rightSidebar,
            label: 'Export',
            onClick: () => { this.ExportImage (); }
        })

        this.animations = ['idle', 'walk'];
        this.curAnimation = 'idle';
        this.curFrame = 0;
        this.curFrameDurMs = 300; //ms
        this.maxFrame = 1;
        this.uploadedImages = {};

        this.imageLoader.node [0].addEventListener('change', (e) => this.HandleImage (e), false);

        this.characterDataForm = new CharacterDataForm ({
            targetNode: leftSidebar
        });

    }

    PopulateImageData (img) {
        this.uploadedImages [this.curAnimation + '-' + this.curFrame] = {
            source: img,
            duration: this.curFrameDurMs
        }
    }

    HandleImage (e) {
        var reader = new FileReader();
        reader.onload = (event) => {
            var img = new Image();
            img.onload = () => {
                //canvas.width = img.width;
                //canvas.height = img.height;
                this.ctx.drawImage(img,0,0);
                this.PopulateImageData (img);
            }
            img.src = event.target.result;
        }
        reader.readAsDataURL(e.target.files[0]);
    }

    ExportImage () {
        var img = this.canvas.ToDataURL ('image/png');
        this.imageDownloaderNode [0].href = img;
        this.imageDownloaderNode [0].download = "Chara.png";
        console.log (img);
        this.imageDownloaderNode [0].click ();
    }
}
