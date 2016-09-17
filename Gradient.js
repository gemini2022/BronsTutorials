Gradient = function (gradientStyle, gradient, gradientAngle, gradientPosX, gradientPosY, gradientScale) {
    this.gradientStyle = gradientStyle;
    this.gradient = gradient;
    this.gradientAngle = gradientAngle;
    this.gradientPosX = gradientPosX;
    this.gradientPosY = gradientPosY;
    this.gradientScale = gradientScale;
    this.Update = function () { };
    this.SetGradient();
    var _this = this;




    for (var i = 0; i < this.gradient.length; i++) {
        this.gradient[i].Update = function () {

            //console.log("gradient")

            //Call the Update function on a shape
            _this.Update();
        }
    }


}


Gradient.prototype = {
    //Style
    get gradientStyle() {
        return this.newGradientStyle;
    },
    set gradientStyle(val) {
        if (this.newGradientStyle == null) {
            this.newGradientStyle = val;

        } else {
            this.newGradientStyle = val;
            this.SetGradient();
        }
    },

    //Gradient
    get gradient() {
        return this.newGradientColors;
    },
    set gradient(val) {
        if (this.newGradientColors == null) {
            this.newGradientColors = val;

        } else {
            this.newGradientColors = val;
            this.SetGradient();
        }
    },


    //Angle
    get gradientAngle() {
        return this.newGradientAngle;
    },
    set gradientAngle(val) {
        if (this.newGradientAngle == null) {
            this.newGradientAngle = val;

        } else {
            this.newGradientAngle = val;
            this.SetGradient();
        }
    },


    //Pos X
    get gradientPosX() {
        return this.newGradientPosX;
    },
    set gradientPosX(val) {
        if (this.newGradientPosX == null) {
            this.newGradientPosX = val;

        } else {
            this.newGradientPosX = val;
            this.SetGradient();
        }
    },

    //Pos Y
    get gradientPosY() {
        return this.newGradientPosY;
    },
    set gradientPosY(val) {
        if (this.newGradientPosY == null) {
            this.newGradientPosY = val;

        } else {
            this.newGradientPosY = val;
            this.SetGradient();
        }
    },

    //Pos Scale
    get gradientScale() {
        return this.newGradientScale;
    },
    set gradientScale(val) {
        if (this.newGradientScale == null) {
            this.newGradientScale = val;

        } else {
            this.newGradientScale = val;
            this.SetGradient();
        }
    }
}

Gradient.prototype.SetGradient = function () {
    //If the gradient is a linear gradient
    if (this.gradientStyle == GradientStyle.Linear) {
        var gradientMultiplierX = (1 / 2) / 45;
        var gradientMultiplierY = (1 / 2) / 45;

        if (this.gradientAngle >= 0 && this.gradientAngle < 45) {
            this.grdX = 0;
            this.grdY = (1 / 2) + (this.gradientAngle * gradientMultiplierY);
            this.grdW = 1;
            this.grdH = (1 / 2) - (this.gradientAngle * gradientMultiplierY);
        }

        if (this.gradientAngle >= 45 && this.gradientAngle < 90) {
            this.grdX = (this.gradientAngle - 45) * gradientMultiplierX;
            this.grdY = 1;
            this.grdW = 1 - ((this.gradientAngle - 45) * gradientMultiplierX);
            this.grdH = 0;
        }

        if (this.gradientAngle >= 90 && this.gradientAngle < 135) {
            this.grdX = (1 / 2) + ((this.gradientAngle - 90) * gradientMultiplierX);
            this.grdY = 1;
            this.grdW = (1 / 2) - ((this.gradientAngle - 90) * gradientMultiplierX);
            this.grdH = 0;
        }

        if (this.gradientAngle >= 135 && this.gradientAngle < 180) {
            this.grdX = 1;
            this.grdY = 1 - ((this.gradientAngle - 135) * gradientMultiplierY);
            this.grdW = 0;
            this.grdH = (this.gradientAngle - 135) * gradientMultiplierY;
        }

        if (this.gradientAngle >= -180 && this.gradientAngle < -135) {
            this.grdX = 1;
            this.grdY = (1 / 2) - ((this.gradientAngle - -180) * gradientMultiplierY);
            this.grdW = 0;
            this.grdH = (1 / 2) + ((this.gradientAngle - -180) * gradientMultiplierY);
        }

        if (this.gradientAngle >= -135 && this.gradientAngle < -90) {
            this.grdX = 1 - ((this.gradientAngle - -135) * gradientMultiplierX);
            this.grdY = 0;
            this.grdW = (this.gradientAngle - -135) * gradientMultiplierX;
            this.grdH = 1;
        }

        if (this.gradientAngle >= -90 && this.gradientAngle < -45) {
            this.grdX = (1 / 2) - ((this.gradientAngle - -90) * gradientMultiplierX);
            this.grdY = 0;
            this.grdW = (1 / 2) + ((this.gradientAngle - -90) * gradientMultiplierX);
            this.grdH = 1;
        }

        if (this.gradientAngle >= -45 && this.gradientAngle < 0) {
            this.grdX = 0;
            this.grdY = (this.gradientAngle - -45) * gradientMultiplierY;
            this.grdW = 1;
            this.grdH = 1 - ((this.gradientAngle - -45) * gradientMultiplierY);
        }

        //If the gradient is a radial gradient
    } else {
        this.grdX = this.gradientPosX;
        this.grdY = this.gradientPosY;
        this.grdScale = this.gradientScale;
    }

    //Call the Update function on a shape
    this.Update();
}



Gradient.prototype.GetGradient = function (_this) {
    //If the gradient is a linear gradient
    if (this.gradientStyle == GradientStyle.Linear) {

        //If the linear gradient is for a label
        if (_this instanceof Label) {
            var newGradient = _this.label.cntx.createLinearGradient((this.grdX * _this.textWidth) + _this.textX, (this.grdY * _this.textHeight) + _this.textY, (this.grdW * _this.textWidth) + _this.textX, (this.grdH * _this.textHeight) + _this.textY);

            //If the linear gradient is for a Shape
        } else {

            var newGradient = _this.shape.cntx.createLinearGradient(this.grdX * _this.shape.canvas.clientWidth, this.grdY * _this.shape.canvas.clientHeight, this.grdW * _this.shape.canvas.clientWidth, this.grdH * _this.shape.canvas.clientHeight);
        }

        //If the gradient is a radial gradient
    } else {

        //If the radial gradient is for a label
        if (_this instanceof Label) {
            var newGradient = _this.label.cntx.createRadialGradient((this.grdX * _this.textWidth) + _this.textX, (this.grdY * _this.textHeight) + _this.textY, 0, (this.grdX * _this.textWidth) + _this.textX, (this.grdY * _this.textHeight) + _this.textY, this.grdScale * Math.min(_this.textWidth, _this.textHeight));

            //If the radial gradient is for a Shape
        } else {
            var newGradient = _this.shape.cntx.createRadialGradient(this.grdX * _this.shape.canvas.clientWidth, this.grdY * _this.shape.canvas.clientHeight, 0, this.grdX * _this.shape.canvas.clientWidth, this.grdY * _this.shape.canvas.clientHeight, this.grdScale * Math.min(_this.shape.canvas.clientWidth, _this.shape.canvas.clientHeight));
        }
    }

    //Add the color stops
    for (var i = 0; i < this.gradient.length; i++) {
        newGradient.addColorStop(this.gradient[i].stop, this.gradient[i].rgba.rgba);
    }
    return newGradient;
}


Gradient.prototype.AddGradientColor = function (newGradientColor) {

    var _this = this;

    var index = this.gradient.length;

    for (var i = 0; i < this.gradient.length; i++) {




        if (this.gradient[i].stop > newGradientColor.stop) {

            index = i;
            break;
        }
    }



    this.gradient.splice(index, 0, newGradientColor);




    this.gradient[index].Update = function () {
        //Set this new gradient color to call the Update function on a shape
        _this.Update();
    }


    //Call the Update function on a shape
    this.Update();
}


Gradient.prototype.RemoveGradientColor = function (index) {
    this.gradient.splice(index, 1);


    //Call the Update function on a shape
    this.Update();
}
