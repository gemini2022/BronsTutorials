Canvas = function () {
    this.canvas = document.createElement('canvas');
    this.canvas.style.position = 'absolute';
    this.cntx = this.canvas.getContext("2d");
    var _this = this;

    this.canvas.Clear = function () {
        _this.cntx.clearRect(0, 0, _this.canvas.width, _this.canvas.height);
    }
}
