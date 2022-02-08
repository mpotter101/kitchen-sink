import Canvas from './component/Canvas'
import Input from './component/Input'

// https://stackoverflow.com/questions/10906734/how-to-upload-image-into-html5-canvas
// https://stackoverflow.com/questions/923885/capture-html-canvas-as-gif-jpg-png-pdf

export default class App {
    constructor () {
        this.canvas = new Canvas ({
            parent: $('#stage')
        })
        this.ctx = this.canvas.GetContext();

        this.imageLoader = new Input ({
            parent: $('#right-sidebar-body'),
            prop: {type: 'file'}
        })

        this.animations = ['idle', 'walk'];
        this.curAnimation = 'idle';
        this.curFrame = 0;
        this.curFrameDurMs = 300; //ms
        this.maxFrame = 1;
        this.uploadedImages = {};

        this.imageLoader.node [0].addEventListener('change', (e) => this.HandleImage (e), false);
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
}
