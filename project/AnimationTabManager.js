/*

    Controls content in animation Tab

*/

import Input from './component/Input'

export default class AnimationTabManager {
    constructor (data) {
        var parent = data.parent;
        this.parent = parent;
        this.ctx = data.ctx;

        this.imageLoader = new Input ({
            parent,
            prop: {type: 'file'}
        })

        this.imageDownloaderNode = $( document.createElement ('a') );
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
