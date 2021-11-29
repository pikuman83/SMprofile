import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-img-loader',
  templateUrl: './img-loader.component.html',
  styleUrls: ['./img-loader.component.css']
})
export class ImgLoaderComponent {

  @Output() fileEvent:EventEmitter<any> = new EventEmitter(); // Globally available, read file and emits its url.

  /**
   * Function fired on input type[file]'s change event.
   * @param input > represents event.target
   * @returns if valid & not null, emit the file to the parent component else log the error.
   */
  uploadFile(input: any): void {
    if (input && input.files.length) {
      const file = input.files[0];
      if(file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/webp' ){
        alert('Invalid file types, Please select an image');
        return;
      }
      else {
        try {
          let reader: FileReader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
          this.fileEvent.emit(reader.result)
        }
        } catch (error) {
          console.error(error)
        }
      }
    }
    else{
      console.log('Empty or invalid file')
    }
  }

}
