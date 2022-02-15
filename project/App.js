// Primary component
import AppSetup from './AppSetup'

// Upload an image
// https://stackoverflow.com/questions/10906734/how-to-upload-image-into-html5-canvas

// Export an image
// https://stackoverflow.com/questions/923885/capture-html-canvas-as-gif-jpg-png-pdf

export default class App extends AppSetup {
    

    ExportImage () {
        var img = this.canvas.ToDataURL ('image/png');
        this.imageDownloaderNode [0].href = img;
        this.imageDownloaderNode [0].download = "Chara.png";
        console.log (img);
        this.imageDownloaderNode [0].click ();
    }
}
