Fieldset = function (parent, transform, lbl, fontSize) {
    this.parent = parent;
    this.lbl = lbl;
    this.fontSize = fontSize;
    this.transform = transform;
}

Fieldset.prototype = {
    //Transform
    get transform() {
        return this.newTransform;
    },
    set transform(val) {
        if (this.newTransform == null) {
            this.newTransform = val;
            this.Build();

        } else {
            this.newTransform = val;
            this.container.transform = this.newTransform;
        }
    },

    //Interactable
    get interactable() {
        return this.isInteractable;
    },
    set interactable(val) {
        this.isInteractable = val;

        if (this.interactable) {
            this.container.opacity = 1;
        } else {
            this.container.opacity = 0.3;
        }
    }
}

Fieldset.prototype.Build = function () {
    this.container = new Container(this.parent, this.transform);
    new Label(this.container, [0, 0, 0, 0, 0, 0, 14, -6, 0, 0], new Rgba("#6b6969"), this.lbl, new Font(FontFamily.Arial, this.fontSize), Alignment.Left, LabelBaseline.Middle);
    new Shape(rectangle, this.container, [0, 0, 0, 0, 0, 0, 0, 0, this.lbl == "" ? 22 : 7, 1], new Rgba("#adacac"));
    new Shape(rectangle, this.container, [0, 1, 0, 0, 0, 0, 7 + 8 + this.container.child[0].label.canvas.width + 6, 0, 0, 1], new Rgba("#adacac"));
    new Shape(rectangle, this.container, [0, 0, 0, 0, 1, 0, 0, 0, 1, 0], new Rgba("#adacac"));
    new Shape(rectangle, this.container, [0, 1, 0, 1, 1, 1, 2, -1, 1, 1], new Rgba("#adacac"));
    new Shape(rectangle, this.container, [1, 1, 1, 0, 1, 0, -1, 2, 1, 1], new Rgba("#adacac"));
    new Shape(rectangle, this.container, [0, 0, 0, 0, 0, 0, 1, 1, this.lbl == "" ? 22 : 6, 1], new Rgba("#ffffff"));
    new Shape(rectangle, this.container, [0, 1, 0, 0, 0, 0, 7 + 8 + this.container.child[0].label.canvas.width + 6, 1, 0, 1], new Rgba("#ffffff"));
    new Shape(rectangle, this.container, [0, 0, 0, 0, 1, 0, 1, 1, 1, 0], new Rgba("#ffffff"));
    new Shape(rectangle, this.container, [0, 1, 0, 1, 1, 1, 1, 0, 0, 1], new Rgba("#ffffff"));
    new Shape(rectangle, this.container, [1, 1, 1, 0, 1, 0, 0, 1, 1, 0], new Rgba("#ffffff"));
}
