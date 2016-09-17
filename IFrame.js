IFrame = function(parent, transform, src) {
    this.iframe = document.createElement('iframe');
    this.iframe.style.position = 'absolute';
    this.iframe.frameBorder = "0";
    this.iframe.src = src;
    this.parent = parent;
    this.transform = transform;
}


IFrame.prototype = {
    //Parent
    get parent() {
        return this.newParent;
    },
    set parent(val) {
        if (this.newParent == null) {
            this.newParent = val;
            this.newParent.child.push(this);
            this.newParent.container.appendChild(this.iframe);

        } else {
            this.newParent = val;
            this.newParent.container.appendChild(this.iframe);
        }
    },

    //Transform
    get transform() {
        return this.newTransform;
    },
    set transform(val) {
        this.newTransform = val;
        this.SetTransform();
    }
}

IFrame.prototype.SetTransform = function () {
    var anchor = Anchor(this.parent.container, this.transform[0], this.transform[1], this.transform[2], this.transform[3], this.transform[4], this.transform[5], this.transform[6], this.transform[7], this.transform[8], this.transform[9])
    this.iframe.style.left = anchor[0];
    this.iframe.style.top = anchor[1];
    this.iframe.style.width = anchor[2];
    this.iframe.style.height = anchor[3];
}
