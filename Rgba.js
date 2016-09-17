Rgba = function (rgb, a) {
    this.rgb = rgb;
    this.a = a;
    this.Update = function () { };
    this.SetValue();
}

Rgba.prototype = {
    //RGB
    get rgb() {
        return this.newRgb;
    },
    set rgb(val) {
        if (this.newRgb == null) {
            this.newRgb = val;

        } else {
            this.newRgb = val;
            this.SetValue();
        }
    },

    //Alpha
    get a() {
        return this.newAlpha;
    },
    set a(val) {
        if (this.newAlpha == null) {
            //If this color is constructed with alpha
            if (val != null) {
                this.newAlpha = val;

                //If this color is NOT constructed with alpha
            } else {
                this.newAlpha = 1;
            }

        } else {
            this.newAlpha = val;
            this.SetValue();
        }
    }
}

Rgba.prototype.SetValue = function () {
    this.rgba = "rgba(" + hexToRgb(this.rgb).r + ", " + hexToRgb(this.rgb).g + ", " + hexToRgb(this.rgb).b + ", " + this.a + ")";
    //Call the Update function on a gradient color
    this.Update();
}
