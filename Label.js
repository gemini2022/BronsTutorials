Label = function (parent, transform, color, text, font, alignment, baseline, stroke) {
    this.tempLabel = new Canvas();
    this.tempText = text;
    this.tempFont = font;
    this.tempStroke = stroke;
    this.tempLabel.cntx.font = this.tempFont.value;
    this.label = new Canvas();
    this.parent = parent;
    this.transform = transform;
    this.text = text;
    this.font = font;
    this.alignment = alignment;
    this.baseline = baseline;
    this.stroke = stroke;
    this.color = color;
    this.SetLabel();
    var _this = this;


    this.color.Update = function () {
        _this.color = _this.color;
    }

    this.font.Update = function () {
        _this.font = _this.font;
    }

    this.stroke.Update = function () {
        _this.stroke = _this.stroke;
    }

    this.stroke.strokeStyle.Update = function () {
        _this.stroke = _this.stroke;
    }
}



Label.prototype = {
    //Parent
    get parent() {
        return this.newParent;
    },
    set parent(val) {
        if (this.newParent == null) {
            this.newParent = val;
            this.newParent.child.push(this);
            this.newParent.container.appendChild(this.label.canvas);

        } else {
            this.newParent = val;
            this.newParent.container.appendChild(this.label.canvas);
        }
    },

    //Transform
    get transform() {
        return this.newTransform;
    },
    set transform(val) {
        if (this.newTransform == null) {
            this.newTransform = val;
            this.SetTransform();

        } else {
            this.newTransform = val;
            this.SetTransform();
            this.SetFont();
            this.SetAlignment();
            this.SetBaseline();
            this.SetStroke();
            this.SetFill();
            this.SetLabel();
        }
    },


    //Text
    get text() {
        return this.newText;
    },
    set text(val) {
        if (this.newText == null) {
            this.newText = val;

        } else {
            this.newText = val;
            this.tempText = this.newText;

            //If the label width or label height is not defined
            if (this.anchor[2] == 0 || this.anchor[3] == 0) {
                this.SetTransform();
                this.SetFont();
                this.SetAlignment();
                this.SetBaseline();
                this.SetStroke();
                this.SetFill();
            }
            this.SetLabel();
        }
    },


    //Font
    get font() {
        return this.newFont;
    },
    set font(val) {
        if (this.newFont == null) {
            this.newFont = val;
            this.SetFont();

        } else {
            this.newFont = val;
            this.tempFont = this.newFont;
            this.tempLabel.cntx.font = this.tempFont.value;
            this.SetFont();

            //If the label width or label height is not defined
            if (this.anchor[2] == 0 || this.anchor[3] == 0) {
                this.SetTransform();
                this.SetFont();
                this.SetAlignment();
                this.SetBaseline();
                this.SetStroke();
                this.SetFill();
            }
            this.SetLabel();
        }
    },



    //Alignment
    get alignment() {
        return this.newAlignment;
    },
    set alignment(val) {
        if (this.newAlignment == null) {
            this.newAlignment = val;
            this.SetAlignment();

        } else {
            this.newAlignment = val;
            this.SetAlignment();
            this.SetStroke();
            this.SetFill();
            this.SetLabel();
        }
    },


    //Baseline
    get baseline() {
        return this.newBaseline;
    },
    set baseline(val) {
        if (this.newBaseline == null) {
            this.newBaseline = val;
            this.SetBaseline();

        } else {
            this.newBaseline = val;
            this.SetBaseline();
            this.SetStroke();
            this.SetFill();
            this.SetLabel();
        }
    },



    //Stroke
    get stroke() {
        return this.newStroke;
    },
    set stroke(val) {
        //If this is being set by the constructor
        if (this.newStroke == null) {

            //If this label is constructed with a stroke
            if (val != null) {
                this.newStroke = val;
                this.SetStroke();

                //If this label is NOT constructed with a stroke
            } else {
                this.newStroke = { size: 0, position: null, strokeStyle: 0 };
            }

            //If this is NOT being set by the constructor
        } else {

            //If this is being set with a value
            if (val != null) {
                this.newStroke = val;
                this.tempStroke = this.newStroke;
                this.SetStroke();

                //If this is being set as null
            } else {
                this.tempStroke = null;
                this.newStroke = { size: 0, position: null, strokeStyle: 0 };
            }

            //If the label width or label height is not defined
            if (this.anchor[2] == 0 || this.anchor[3] == 0) {
                this.SetTransform();
                this.SetFont();
                this.SetAlignment();
                this.SetBaseline();
                this.SetStroke();
                this.SetFill();
            }
            this.SetLabel();
        }
    },


    //Color
    get color() {
        return this.newColor;
    },
    set color(val) {
        //If this is being set by the constructor
        if (this.newColor == null) {

            //If this label is constructed with a fill
            if (val != null) {
                this.newColor = val;
                this.SetFill();

                //If this label is NOT constructed with a fill
            } else {
                this.newColor = 0;
            }

            //If this is NOT being set by the constructor
        } else {

            //If this is being set with a value
            if (val != null) {
                this.newColor = val;
                this.SetFill();

                //If this is being set as null
            } else {
                this.newColor = 0;
            }
            this.SetLabel();
        }
    },

    //Interactable
    get interactable() {
        return this.isInteractable;
    },
    set interactable(val) {
        this.isInteractable = val;

        if (this.interactable) {
            this.color.a = 1;
        } else {
            this.color.a = 0.2;
        }
    }
}


Label.prototype.SetTransform = function () {
    this.anchor = Anchor(this.parent.container, this.transform[0], this.transform[1], this.transform[2], this.transform[3], this.transform[4], this.transform[5], this.transform[6], this.transform[7], this.transform[8], this.transform[9])
    this.label.canvas.style.left = this.anchor[0];
    this.label.canvas.style.top = this.anchor[1];
    this.label.canvas.width = this.anchor[2] > 0 ? this.anchor[2] : this.tempLabel.cntx.measureText(this.tempText).width + 1 + (this.tempStroke == null ? 0 : this.tempStroke.size);
    this.label.canvas.height = this.anchor[3] > 0 ? this.anchor[3] : this.tempFont.size + (this.tempStroke == null ? 0 : this.tempStroke.size);
}



Label.prototype.SetFont = function () {
    this.label.cntx.font = this.font.value;

    //Get the width and height of the text
    this.textWidth = this.tempLabel.cntx.measureText(this.tempText).width + (this.tempStroke == null ? 0 : this.tempStroke.size);
    this.textHeight = this.tempFont.size + (this.tempStroke == null ? 0 : this.tempStroke.size);
}


Label.prototype.SetAlignment = function () {
    switch (this.alignment) {
        case 0:
            this.label.cntx.textAlign = "left";
            this.startX = this.tempStroke == null ? 0 : this.tempStroke.size / 2;
            this.textX = this.startX;
            break;
        case 1:
            this.label.cntx.textAlign = "center";
            this.startX = this.label.canvas.clientWidth / 2;
            this.textX = (this.label.canvas.clientWidth / 2) - ((this.tempLabel.cntx.measureText(this.tempText).width + (this.tempStroke == null ? 0 : this.tempStroke.size)) / 2);
            break;
        case 2:
            this.label.cntx.textAlign = "right";
            this.startX = this.tempStroke == null ? this.label.canvas.clientWidth : this.label.canvas.clientWidth - (this.tempStroke.size / 2);
            this.textX = this.label.canvas.clientWidth - (this.tempLabel.cntx.measureText(this.tempText).width + (this.tempStroke == null ? 0 : this.tempStroke.size));
            break;
    }
}

Label.prototype.SetBaseline = function () {
    switch (this.baseline) {
        case 0:
            this.label.cntx.textBaseline = "top";
            this.startY = this.tempStroke == null ? 0 : this.tempStroke.size / 2;
            this.textY = this.startY;
            break;
        case 1:
            this.label.cntx.textBaseline = "middle";
            this.startY = this.label.canvas.clientHeight / 2;
            this.textY = (this.label.canvas.clientHeight / 2) - ((this.tempFont.size + (this.tempStroke == null ? 0 : this.tempStroke.size)) / 2);
            break;
        case 2:
            this.label.cntx.textBaseline = "bottom";
            this.startY = this.tempStroke == null ? this.label.canvas.clientHeight : this.label.canvas.clientHeight - (this.tempStroke.size / 2);
            this.textY = this.label.canvas.clientHeight - (this.tempFont.size + (this.tempStroke == null ? 0 : this.tempStroke.size));
            break;
    }
}


Label.prototype.SetStroke = function () {
    //Set the stroke size
    this.label.cntx.lineWidth = this.stroke.size;

    //If the stroke style for this stroke is a rgba
    if (this.stroke.strokeStyle instanceof Rgba) {
        this.label.cntx.strokeStyle = this.stroke.strokeStyle.rgba;

        //Or, if the stroke style for this stroke is a gradient
    } else if (this.stroke.strokeStyle instanceof Gradient) {
        this.label.cntx.strokeStyle = this.stroke.strokeStyle.GetGradient(this);

        //Or, if the stroke style for this stroke is a pattern
    } else {

    }
}


Label.prototype.SetFill = function () {
    //If the fill style for this fill is a rgba
    if (this.color instanceof Rgba) {
        this.label.cntx.fillStyle = this.color.rgba;

        //Or, if the fill style for this fill is a gradient
    } else if (this.color instanceof Gradient) {
        this.label.cntx.fillStyle = this.color.GetGradient(this);

        //Or, if the fill style for this fill is a pattern
    } else {

    }
}


Label.prototype.SetLabel = function () {
    //Clear the canvas
    this.label.canvas.Clear();

    //If we're drawing a stroke
    if (this.stroke.size != 0) {
        this.label.cntx.strokeText(this.text, this.startX, this.startY);
    }

    //Fill the text
    if (this.color != 0) {
        this.label.cntx.fillText(this.text, this.startX, this.startY);
    }



}
