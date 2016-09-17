Font = function (family, size, style) {
    this.family = family;
    this.size = size;
    this.style = style;
    this.Update = function () { };
    this.SetValue();
}

Font.prototype = {
    //Family
    get family() {
        return this.newFamily;
    },
    set family(val) {
        if (this.newFamily == null) {
            this.newFamily = val;
            this.SetFamily();

        } else {
            this.newFamily = val;
            this.SetFamily();
            this.SetValue();
        }
    },

    //Size
    get size() {
        return this.newSize;
    },
    set size(val) {
        if (this.newSize == null) {
            this.newSize = val;

        } else {
            this.newSize = val;
            this.SetValue();
        }
    },

    //Style
    get style() {
        return this.newStyle;
    },
    set style(val) {
        if (this.newStyle == null) {
            //If this font is being defined with a style
            if (val != null) {
                this.newStyle = val;

                //If this font is NOT being defined with a style
            } else {
                this.newStyle = FontStyle.Normal;
            }
            this.SetStyle();

        } else {
            this.newStyle = val;
            this.SetStyle();
            this.SetValue();
        }
    }





}

Font.prototype.SetFamily = function () {
    switch (this.family) {
        case 0:
            this.fontFamily = "arial";
            break;
        case 1:
            this.fontFamily = "verdana";
            break;
        case 2:
            this.fontFamily = "impact";
            break;
    }
}

Font.prototype.SetStyle = function () {
    switch (this.style) {
        case 0:
            this.fontStyle = "normal ";
            break;
        case 1:
            this.fontStyle = "bold ";
            break;
        case 2:
            this.fontStyle = "italic ";
            break;
        case 3:
            this.fontStyle = "bold italic ";
            break;
    }
}

Font.prototype.SetValue = function () {
    this.value = this.fontStyle + this.size + "px " + this.fontFamily;
    this.Update();
}
