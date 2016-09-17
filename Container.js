Container = function (parent, transform, over, out, down, up, outside, wheel) {
    this.container = document.createElement('div');
    this.container.style.position = 'absolute';
    this.parent = parent;
    this.transform = transform;
    this.over = over;
    this.out = out;
    this.down = down;
    this.up = up;
    this.outside = outside;
    this.wheel = wheel;
    this.mouseOver;
    this.mouseDown;
    this.dontScroll;
    this.containerUpListener;
    this.interactable = true;
    this.child = [];
    var _this = this;

    if (this.over) {
        this.container.onmouseover = function (e) {
            if (!_this.mouseDown && _this.interactable) {
                if (!_this.mouseOver) {
                    _this.mouseOver = true;
                    _this.OnMouseOver(e);
                }
            }
        }
    }

    if (this.out) {
        this.container.onmouseout = function (e) {
            if (!_this.mouseDown && _this.interactable) {
                if (!MouseInArea(e, GetParentNodeX(_this) + _this.container.offsetLeft, GetParentNodeY(_this) + _this.container.offsetTop, _this.container.clientWidth, _this.container.clientHeight)) {
                    _this.mouseOver = false;
                    _this.OnMouseOut(e);
                }
            }
        }
    }

    if (this.down || this.up || this.outside) {
        this.container.onmousedown = function (e) {
            if (_this.interactable) {
                if (_this.down) _this.OnMouseDown(e);
                if (_this.up || _this.outside) {
                    _this.mouseDown = true;
                    _this.containerUpListener = setInterval(_this.container.ContainerUp, 0);
                }
            }
        }
    }

    if (this.up || this.outside) {
        this.container.ContainerUp = function () {
            if (documentMouseUp) {
                _this.mouseDown = false;
                _this.mouseOver = false;
                clearInterval(_this.containerUpListener);
                if (MouseInArea(documentEventMouseUp, GetParentNodeX(_this) + _this.container.offsetLeft, GetParentNodeY(_this) + _this.container.offsetTop, _this.container.clientWidth, _this.container.clientHeight)) {
                    if (_this.up) _this.OnMouseUp(documentEventMouseUp);
                } else {
                    if (_this.outside) _this.OnReleaseOutside(documentEventMouseUp);
                }
            }
        }
    }



    if (this.wheel) {
        this.container.onmouseover = function () {
            var node = _this.container;


            while (node.parentNode.offsetParent != null) {
                node.parentNode.dontScroll = true;
                node = node.parentNode;
            }
        }

        this.container.onmouseout = function () {
            var node = _this.container;
            while (node.parentNode.offsetParent != null) {
                node.parentNode.dontScroll = false;
                node = node.parentNode;
            }
        }

        this.container.MouseWheelHandler = function (e) {
            if (_this.interactable && !_this.dontScroll) {
                var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
                _this.OnMouseWheel(delta);
            }
        }
        this.container.addEventListener("mousewheel", this.container.MouseWheelHandler);
        this.container.addEventListener("DOMMouseScroll", this.container.MouseWheelHandler);
    }
}

Container.prototype = {
    //Parent
    get parent() {
        return this.newParent;
    },
    set parent(val) {
        if (this.newParent == null) {
            this.newParent = val;
            this.newParent.child.push(this);
            this.newParent.container.appendChild(this.container);

        } else {
            this.newParent = val;
            this.newParent.container.appendChild(this.container);
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

            for (var i = 0; i < this.child.length; i++) {
                this.child[i].transform = this.child[i].transform;
            }
        }
    },

    //X
    get x() {
        return this.container.offsetLeft;
    },
    set x(val) {
        this.newX = val;
        this.transform[6] = this.newX;

        //If we're NOT in stretch mode
        if (this.transform[0] == this.transform[1]) {
            //Just move the container
            this.container.style.left = this.newX;

            //If we are in strech mode
        } else {
            //Transform the container
            this.transform = this.transform;
        }
    },


    //Y
    get y() {
        return this.container.offsetTop;
    },
    set y(val) {
        this.newY = val;
        this.transform[7] = this.newY;

        //If we're NOT in stretch mode
        if (this.transform[3] == this.transform[4]) {
            //Just move the container
            this.container.style.top = this.newY;

            //If we are in strech mode
        } else {
            //Transform the container
            this.transform = this.transform;
        }
    },


    //Width
    get width() {
        return this.container.clientWidth;
    },
    set width(val) {
        this.newWidth = val;
        this.transform[8] = this.newWidth;
        this.transform = this.transform;
    },


    //Height
    get height() {
        return this.container.clientHeight;
    },
    set height(val) {
        this.newHeight = val;
        this.transform[9] = this.newHeight;
        this.transform = this.transform;
    },



    //Visible
    get visible() {
        return this.isVisible;
    },
    set visible(val) {
        this.isVisible = val;

        if (this.isVisible) {
            this.container.style.visibility = "visible";
        } else {
            this.container.style.visibility = "hidden";
        }
    },

    //Opacity
    get opacity() {
        return this.newOpacity;
    },
    set opacity(val) {
        this.newOpacity = val;
        this.container.style.opacity = this.newOpacity;
    }
}

Container.prototype.SetTransform = function () {
    var anchor = Anchor(this.parent.container, this.transform[0], this.transform[1], this.transform[2], this.transform[3], this.transform[4], this.transform[5], this.transform[6], this.transform[7], this.transform[8], this.transform[9])
    this.container.style.left = anchor[0];
    this.container.style.top = anchor[1];
    this.container.style.width = anchor[2];
    this.container.style.height = anchor[3];
}
