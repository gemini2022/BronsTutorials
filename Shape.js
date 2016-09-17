Shape = function (points, parent, transform, color, stroke, roundness, blurriness) {
    this.shape = new Canvas();
    this.parent = parent;
    this.stroke = stroke;
    this.blurriness = blurriness;
    this.transform = transform;
    this.roundness = roundness;
    this.points = points;
    this.color = color;
    this.Update = function () { };
    this.SetShape();

    var _this = this;

    this.color.Update = function () {
        //console.log("Shape");
        _this.color = _this.color;
    }


    this.stroke.Update = function () {
        _this.stroke = _this.stroke;
    }
}

Shape.prototype = {
    //Parent
    get parent() {
        return this.newParent;
    },
    set parent(val) {
        if (this.newParent == null) {
            this.newParent = val;
            this.newParent.child.push(this);
            this.newParent.container.appendChild(this.shape.canvas);

        } else {
            this.newParent = val;
            this.newParent.container.appendChild(this.shape.canvas);
        }
    },


    //Stroke
    get stroke() {
        return this.newStroke;
    },
    set stroke(val) {
        //If this is being set by the constructor
        if (this.newStroke == null) {

            //If this shape is constructed as a stroke
            if (val != null) {
                this.newStroke = val;

                //If this shape is NOT constructed as a stroke
            } else {
                this.newStroke = { size: 0, position: 0 };
            }

            //If this is NOT being set by the constructor
        } else {

            //If this is being set with a value
            if (val != null) {
                this.newStroke = val;
                this.SetTransform();
                this.SetPoints();
                this.SetColor();
                this.SetShape();

                //If this is being set as null
            } else {
                this.newStroke = { size: 0, position: 0 };
            }
        }
    },

    //Blurriness
    get blurriness() {
        return this.newBlurriness;
    },
    set blurriness(val) {
        //If this is being set by the constructor
        if (this.newBlurriness == null) {

            //If this shape is constructed with blur
            if (val != null) {
                this.newBlurriness = val;

                //If this shape is NOT constructed with blur
            } else {
                this.newBlurriness = 0;
            }

            //If this is NOT being set by the constructor
        } else {

            //If this is being set with a value
            if (val != null) {
                this.newBlurriness = val;
                this.SetTransform();
                this.SetBlurriness();
                this.SetPoints();
                this.SetColor();
                this.SetShape();

                //If this is being set as null
            } else {
                this.newBlurriness = 0;
            }
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
            if (this.blurriness > 0) this.SetBlurriness();

        } else {
            this.newTransform = val;
            this.SetTransform();
            if (this.blurriness > 0) this.SetBlurriness();
            this.SetPoints();
            this.SetColor();
            this.SetShape();
        }
    },




    //Roundness
    get roundness() {
        return this.newRoundness;
    },
    set roundness(val) {
        //If this is being set by the constructor
        if (this.newRoundness == null) {

            //If this shape is constructed with roundness
            if (val != null) {
                this.newRoundness = val;

                //If this shape is NOT constructed with roundness
            } else {
                this.newRoundness = [];
            }

            //If this is NOT being set by the constructor
        } else {

            //If this is being set with a value
            if (val != null) {
                this.newRoundness = val;
                this.SetPoints();
                this.SetShape();

                //If this is being set as null
            } else {
                this.newRoundness = [];
            }
        }
    },


    //Points
    get points() {
        return this.newPoints;
    },
    set points(val) {

        //If this is being set by the constructor
        if (this.newPoints == null) {

            this.newPoints = [];
            for (var i = 0; i < val.length; i++) {
                this.newPoints.push({ x: val[i].x, y: val[i].y, roundness: val[i].roundness });
            }
            this.SetPoints();

            //If this is NOT being set by the constructor
        } else {

            this.newPoints = [];
            for (var i = 0; i < val.length; i++) {
                this.newPoints.push({ x: val[i].x, y: val[i].y, roundness: val[i].roundness });
            }
            this.SetPoints();
            this.SetShape();
        }
    },

    //Color
    get color() {
        return this.newColor;
    },
    set color(val) {
        if (this.newColor == null) {
            this.newColor = val;
            this.SetColor();

        } else {
            this.newColor = val;
            this.SetColor();
            this.SetShape();
        }
    },

    //Visible
    get visible() {
        return this.isVisible;
    },
    set visible(val) {
        this.isVisible = val;

        if (this.isVisible) {
            this.shape.canvas.style.visibility = "visible";
        } else {
            this.shape.canvas.style.visibility = "hidden";
        }
    }
}


Shape.prototype.SetTransform = function () {
    var anchor = Anchor(this.parent.container, this.transform[0], this.transform[1], this.transform[2], this.transform[3], this.transform[4], this.transform[5], this.transform[6], this.transform[7], this.transform[8], this.transform[9])
    this.shape.canvas.style.left = anchor[0] - (this.stroke.size * (this.stroke.position / 2));
    this.shape.canvas.style.top = anchor[1] - (this.stroke.size * (this.stroke.position / 2));
    this.shape.canvas.width = anchor[2] + (this.stroke.size * this.stroke.position);
    this.shape.canvas.height = anchor[3] + (this.stroke.size * this.stroke.position);

    if (this.blurriness > 0) {
        this.shape.canvas.style.left = this.shape.canvas.offsetLeft - this.blurriness;
        this.shape.canvas.style.top = this.shape.canvas.offsetTop - this.blurriness;
        this.shape.canvas.width = this.shape.canvas.clientWidth + (this.blurriness * 2);
        this.shape.canvas.height = this.shape.canvas.clientHeight + (this.blurriness * 2);
    }
}



Shape.prototype.SetBlurriness = function () {
    var blurSizePercentX = (this.blurriness * 2) / this.shape.canvas.clientWidth;
    this.blurMultiplierX = 1 - blurSizePercentX;
    var blurSizePercentY = (this.blurriness * 2) / this.shape.canvas.clientHeight;
    this.blurMultiplierY = 1 - blurSizePercentY;
}


Shape.prototype.SetPoints = function () {
    //Define the drawoffset if we're bluring this shape
    this.drawOffset = this.blurriness > 0 ? 7000 : 0;
    
    //Define the percentage of what the stroke size is to the width of the shape
    var strokeSizePercentX = this.stroke.size / this.shape.canvas.clientWidth;
    var strokeMultiplierX = 1 - strokeSizePercentX;
    //Define the percentage of what the stroke size is to the height of the shape
    var strokeSizePercentY = this.stroke.size / this.shape.canvas.clientHeight;
    var strokeMultiplierY = 1 - strokeSizePercentY;
    
    points = [];
    for (var i = 0; i < this.points.length; i++) {
        this.points[i].roundness = this.roundness.length > 0 ? this.roundness[i] : this.points[i].roundness;
        points.push({ x: this.points[i].x, y: this.points[i].y, roundness: this.points[i].roundness });
    }

    this.tempPoints = [];
    for (var i = 0; i < this.points.length; i++) {
        points[i].x -= 0.5;
        points[i].x *= strokeMultiplierX;
        if (this.blurriness > 0) points[i].x *= this.blurMultiplierX;
        points[i].x += 0.5;
        this.tempPoints.push(points[i].x * this.shape.canvas.clientWidth);

        points[i].y -= 0.5;
        points[i].y *= strokeMultiplierY;
        if (this.blurriness > 0) points[i].y *= this.blurMultiplierY;
        points[i].y += 0.5;
        this.tempPoints.push(points[i].y * this.shape.canvas.clientHeight);
        this.tempPoints.push(points[i].roundness);
    }

    this.CreateDrawPoints();
    this.shape.cntx.beginPath();


    for (var i = 0; i < this.drawPoints.length; i += 6) {
        this.shape.cntx.lineTo(this.drawPoints[i], this.drawPoints[i + 1]);
        this.shape.cntx.bezierCurveTo(this.drawPoints[i + 2], this.drawPoints[i + 3], this.drawPoints[i + 4], this.drawPoints[i + 5], this.drawPoints[i + 4], this.drawPoints[i + 5]);
    }

    this.shape.cntx.lineTo(this.drawPoints[0], this.drawPoints[1]);
    this.shape.cntx.bezierCurveTo(this.drawPoints[2], this.drawPoints[3], this.drawPoints[4], this.drawPoints[5], this.drawPoints[4], this.drawPoints[5]);
    this.shape.cntx.lineTo(this.drawPoints[6], this.drawPoints[7]);



}


Shape.prototype.CreateDrawPoints = function () {
    this.drawPoints = [];
    var _this = this;

    function SetPoint(x1, x2, y1, y2, size) {
        //Get the difference between the highest X value and the lowest X value
        var xDifference = x2 - x1;
        //Get the difference between the highest Y value and the lowest Y value
        var yDifference = y2 - y1;
        //Now take those diferences and get the square root
        var sqrrt = Math.sqrt((xDifference * xDifference) + (yDifference * yDifference));
        //Normalize the xDifference value by dividing it by the square root
        var normX = xDifference / sqrrt;
        //Normalize the yDifference value by dividing it by the square root
        var normY = yDifference / sqrrt;
        //Set the point using the size and normal
        _this.drawPoints.push((x1 + (size * normX)) - _this.drawOffset);//X Coordinate
        _this.drawPoints.push((y1 + (size * normY)) - _this.drawOffset);//Y Coordinate
    }
    //---------------lineTo---------------
    SetPoint(this.tempPoints[0], this.tempPoints[this.tempPoints.length - 3], this.tempPoints[1], this.tempPoints[this.tempPoints.length - 2], this.tempPoints[2]);

    //------------bezierCurveTo-----------
    //This is for the bezier function's frist two parameters 
    //(We grab the actual x and y coordinants of the shape's first corner)
    this.drawPoints.push(this.tempPoints[0] - this.drawOffset);
    this.drawPoints.push(this.tempPoints[1] - this.drawOffset);

    //This is for the bezier function's last four parameters 
    SetPoint(this.tempPoints[0], this.tempPoints[3], this.tempPoints[1], this.tempPoints[4], this.tempPoints[2]);

    //Loop through all the points between the first and last corner of the shape
    for (var i = 3; i < this.tempPoints.length - 3; i += 3) {
        //---------------lineTo---------------
        SetPoint(this.tempPoints[i], this.tempPoints[i - 3], this.tempPoints[i + 1], this.tempPoints[i - 2], this.tempPoints[i + 2]);

        //------------bezierCurveTo-----------
        //This is for the bezier function's frist two parameters 
        //(We grab the actual x and y coordinants that lies between the first and last corner of the shape)
        this.drawPoints.push(this.tempPoints[i] - this.drawOffset);
        this.drawPoints.push(this.tempPoints[i + 1] - this.drawOffset);

        //This is for the bezier function's last four parameters 
        SetPoint(this.tempPoints[i], this.tempPoints[i + 3], this.tempPoints[i + 1], this.tempPoints[i + 4], this.tempPoints[i + 2]);
    }

    //---------------lineTo---------------
    SetPoint(this.tempPoints[this.tempPoints.length - 3], this.tempPoints[this.tempPoints.length - 6], this.tempPoints[this.tempPoints.length - 2], this.tempPoints[this.tempPoints.length - 5], this.tempPoints[this.tempPoints.length - 1]);

    //------------bezierCurveTo-----------
    //This is for the bezier function's frist two parameters 
    //(We grab the actual x and y coordinants of the shape's last corner)
    this.drawPoints.push(this.tempPoints[this.tempPoints.length - 3] - this.drawOffset);
    this.drawPoints.push(this.tempPoints[this.tempPoints.length - 2] - this.drawOffset);

    //This is for the bezier function's last four parameters 
    SetPoint(this.tempPoints[this.tempPoints.length - 3], this.tempPoints[0], this.tempPoints[this.tempPoints.length - 2], this.tempPoints[1], this.tempPoints[this.tempPoints.length - 1]);
}

Shape.prototype.SetColor = function () {

    //If the color is rgba
    if (this.color instanceof Rgba) {

        //If blur is applied to the shape
        if (this.blurriness > 0) {
            this.shape.cntx.shadowOffsetX = this.drawOffset;
            this.shape.cntx.shadowOffsetY = this.drawOffset;
            this.shape.cntx.shadowColor = this.color.rgba;
            this.shape.cntx.shadowBlur = this.blurriness;

            //If blur is NOT applied to the shape
        } else {

            //If the rgba is for a stroke
            if (this.stroke.size > 0) {
                this.shape.cntx.strokeStyle = this.color.rgba;

                //If the rgba is for a fill
            } else {

                this.shape.cntx.fillStyle = this.color.rgba;
            }
        }

        //Or, if the color is a gradient
    } else if (this.color instanceof Gradient) {

        //If the rgba is for a stroke
        if (this.stroke.size > 0) {
            this.shape.cntx.strokeStyle = this.color.GetGradient(this);

            //If the rgba is for a fill
        } else {
            this.shape.cntx.fillStyle = this.color.GetGradient(this);
        }

        //Or, if the color is a pattern
    } else {

    }
}


Shape.prototype.SetShape = function () {
    //Clear the canvas
    this.shape.canvas.Clear();

    //if it's a stroke
    if (this.stroke.size > 0) {
        //Define the stroke size
        this.shape.cntx.lineWidth = this.stroke.size
        //Draw the stroke
        this.shape.cntx.stroke();

        //But, if it's a fill
    } else {
        //draw the fill
        this.shape.cntx.fill();
    }
    this.Update();
}
