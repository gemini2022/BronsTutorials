GradientColor = function (rgba, stop) {
    this.rgba = rgba;
    this.stop = stop;
    this.Update = function () { };
    var _this = this;

    this.rgba.Update = function () {
        console.log("Gradient Color");
        //Call the Update function on a gradient
        _this.Update();
    }
}

GradientColor.prototype = {
    //Stop
    get stop() {
        return this.newStop;
    },
    set stop(val) {
        if (this.newStop == null) {
            this.newStop = val;

        } else {
            this.newStop = val;
            //Call the rgba update function
            this.rgba.Update();
        }
    }
}
