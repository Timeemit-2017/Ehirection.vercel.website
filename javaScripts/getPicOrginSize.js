function getPicOrginSize(img) {
    var image = new Image();
    image.src = img.src;
    var orginWidth = image.width;
    return orginWidth;
}