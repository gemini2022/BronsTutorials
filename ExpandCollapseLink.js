ExpandCollapseLink = function (parent, transform, lbl, root, url) {
    this.parent = parent;
    this.lbl = lbl;
    this.url = url;
    this.transform = transform;
    this.root = root;
    var _this = this;


    this.container.child[0].OnMouseOver = function () {
        this.child[0].color.rgb = "#aacbfc";
    }

    this.container.child[0].OnMouseOut = function () {
        this.child[0].color.rgb = "#536bfe";
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

ExpandCollapseLink.prototype = {
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

ExpandCollapseLink.prototype.Build = function () {
    this.container = new Container(this.parent, this.transform);
    this.container.height = 20;
    new Container(this.container, [0, 0, 0, 0, 0, 0, 0, 0, 9, 11], true, true, true);
    new Shape(triangleRight, this.container.child[0], [0, 1, 0, 0, 1, 0, 0, 0, 0, 0], new Rgba("#536bfe"));
    new Link(this.container, [0, 0, 0, 0, 0, 0, 13, 0, 0, 0], this.lbl, this.url);
}



















//ExpandCollapseLink = function (parent, transform, lbl, root) {
//    this.parent = parent;
//    this.lbl = lbl;
//    this.transform = transform;
    
//    this.root = root;
//    var _this = this;


//    this.container.child[0].OnMouseOver = function () {
//        this.child[0].color.rgb = "#3350fe";
//    }

//    this.container.child[0].OnMouseOut = function () {
//        this.child[0].color.rgb = "#0000c0";
//    }

//    this.container.child[0].OnMouseDown = function () {
//        var index = _this.root.unit.map(function (e) { return e.content; }).indexOf(_this.parent);
//        if (!_this.root.unit[index].expand) {

//            this.child[0].points = triangleDown;
//            this.child[0].transform = [0, 0, 0, 0, 0, 0, -2, 2, 11, 9];

//            _this.root.Expand(index);
//        } else {

//            this.child[0].points = triangleRight;
//            this.child[0].transform = [0, 0, 0, 0, 0, 0, 0, 0, 9, 11];

//            _this.root.Collapse(index);
//        }




//    }
//}

//ExpandCollapseLink.prototype = {
//    //Transform
//    get transform() {
//        return this.newTransform;
//    },
//    set transform(val) {
//        if (this.newTransform == null) {
//            this.newTransform = val;
//            this.Build();

//        } else {
//            this.newTransform = val;
//            this.container.transform = this.newTransform;
//        }
//    }
//}

//ExpandCollapseLink.prototype.Build = function () {
//    this.parent.child.push(this.container = new Container(this.parent, this.transform));
//    this.container.height = 21;
//    this.container.child[0] = new Container(this.container, [0, 0, 0, 0, 0, 0, 0, 0, 9, 11], true, true, true);
//    this.container.child[0].child[0] = new Shape(triangleRight, this.container.child[0], [0, 1, 0, 0, 1, 0, 0, 0, 0, 0], new Rgba("#0000c0"));
//    this.container.child[1] = new Link(this.container, [0, 0, 0, 0, 0, 0, 15, 0, 0, 0], this.lbl);
//}
















//function ExpandCollapse() {
//    this.expandCollapse = new Container();
//    this.header = new Container();
//    this.arrowButton = new Container(true, true, true);
//    this.arrow = new Shape();
//    this.label = new Label();
//    this.arrowColor = "#0000c0";
//    this.arrowPoints;
//    this.expand;

//    this.temp = document.createElement('canvas');

//    this.ctxTemp = this.temp.getContext("2d");
//    this.ctxTemp.font = "13px Arial";


//}

//ExpandCollapse.prototype.Build = function (transform, lbl, root) {
//    this.transform = transform;
//    this.root = root;
//    this.expandCollapse.SetContainer(Anchor(transform[0], 0, 0, 0, 0, 0, 0, transform[1], transform[2], transform[3], transform[4]));
//    var lblWidth = this.ctxTemp.measureText(lbl).width
//    this.arrowButton.SetContainer(Anchor(this.expandCollapse.container, 0, 0, 0, 0, 0, 0, 2, 0, 17, 17));
//    this.label.Label(Anchor(this.expandCollapse.container, 0, 0, 0, 0, 0, 0, 20, 0, lblWidth, 17), lbl, "13px Arial", "#0000c0", "left", "middle");
//    this.arrowPoints = [0.23, 0.17, 0.77, 0.5, 0.23, 0.83];
//    this.arrow.Draw(this.arrowPoints, Anchor(this.arrowButton.container, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0), this.arrowColor);


//    var _this = this;
//    this.arrowButton.OnMouseOver = function () {
//        _this.arrowColor = "#3350fe";
//        _this.arrow.Draw(_this.arrowPoints, Anchor(_this.arrowButton.container, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0), _this.arrowColor);
//    }
//    this.arrowButton.OnMouseOut = function () {
//        _this.arrowColor = "#0000c0";
//        _this.arrow.Draw(_this.arrowPoints, Anchor(_this.arrowButton.container, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0), _this.arrowColor);
//    }
//    this.arrowButton.OnMouseDown = function () {
//        var index = _this.root.unit.map(function (e) { return e.content; }).indexOf(_this.transform[0]);

//        if (!_this.root.unit[index].expand) {
//            _this.arrowPoints = [0.11, 0.29, 0.77, 0.29, 0.45, 0.83];
//            _this.arrow.Draw(_this.arrowPoints, Anchor(_this.arrowButton.container, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0), _this.arrowColor);
//            _this.root.Expand(index);
//        } else {
//            _this.arrowPoints = [0.23, 0.17, 0.77, 0.5, 0.23, 0.83];
//            _this.arrow.Draw(_this.arrowPoints, Anchor(_this.arrowButton.container, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0), _this.arrowColor);
//            _this.root.Collapse(index);
//        }
//    }
//}
