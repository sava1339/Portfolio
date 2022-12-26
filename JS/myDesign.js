function previewFile() {
    var preview = document.querySelector('.img-disign');
    var file    = document.querySelector('.input-img[type="file"]').files[0];
    var reader  = new FileReader();
  
    reader.onloadend = function () {
      preview.src = reader.result;
    }
  
    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = "";
    }
  }
  