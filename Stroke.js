Stroke = function (size, position, strokeStyle) {
    this.size = size;
    this.position = position;
    this.strokeStyle = strokeStyle;
    this.Update = function(){};
    this.Update();
}

Stroke.prototype = {
    //Size
    get size() {
        return this.newSize;
    },
    set size(val) {
        if (this.newSize == null) {
            this.newSize = val;

        } else {
            this.newSize = val;
            this.Update();
        }
    },

    //Position
    get position() {
        return this.newPosition;
    },
    set position(val) {
        if (this.newPosition == null) {
            this.newPosition = val;

        } else {
            this.newPosition = val;
            this.Update();
        }
    },

    //Stroke Style
    get strokeStyle() {
        return this.newStrokeStyle;
    },
    set strokeStyle(val) {
        if (this.newStrokeStyle == null) {
            this.newStrokeStyle = val;

        } else {
            this.newStrokeStyle = val;
            this.Update();
        }
    }
}
