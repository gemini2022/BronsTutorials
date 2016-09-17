ExpandCollapse = function (parent, transform, lbl, root) {
    this.parent = parent;
    this.lbl = lbl;
    this.transform = transform;
    this.root = root;
    var _this = this;


    this.container.child[0].OnMouseOver = function () {
        this.child[0].color.rgb = "#afafaf";
    }

    this.container.child[0].OnMouseOut = function () {
        this.child[0].color.rgb = "#000000";
    }

    this.container.child[0].OnMouseDown = function () {
        var index = _this.root.unit.map(function (e) { return e.content; }).indexOf(_this.parent);

        if (!_this.root.unit[index].expand) {
            this.child[0].points = triangleDown;
            this.child[0].transform = [0, 0, 0, 0, 0, 0, -2, 2, 11, 9];
            _this.root.Expand(index);
        } else {
            this.child[0].points = triangleRight;
            this.child[0].transform = [0, 0, 0, 0, 0, 0, 0, 0, 9, 11];
            _this.root.Collapse(index);
        }
    }
}

ExpandCollapse.prototype = {
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
    }
}

ExpandCollapse.prototype.Build = function () {
    this.container = new Container(this.parent, this.transform);
    this.container.height = 20;
    new Container(this.container, [0, 0, 0, 0, 0, 0, 0, 0, 9, 11], true, true, true);
    new Shape(triangleRight, this.container.child[0], [0, 1, 0, 0, 1, 0, 0, 0, 0, 0], new Rgba("#000000"));
    new Label(this.container, [0, 0, 0, 0, 0, 0, 13, 0, 0, 0], new Rgba("#000000"), this.lbl, new Font(FontFamily.Arial, 12), Alignment.Left, LabelBaseline.Middle);
}
