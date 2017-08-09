Link = function (parent, transform, lbl, url) {
    this.parent = parent;
    this.lbl = lbl;
    this.url = url;
    this.transform = transform;
    this.clicked;
    var _this = this;


    this.container.OnMouseOver = function () {
        if (!_this.clicked) {
            this.child[0].child[0].color.rgb = "#aacbfc";
            this.child[1].color.rgb = "#aacbfc";
        }
    }

    this.container.OnMouseOut = function () {
        if (!_this.clicked) {
            this.child[0].child[0].color.rgb = "#3350fe";
            this.child[1].color.rgb = "#3350fe";
        }
    }


    this.container.OnMouseUp = function () {

        if (_this.url != null) {

            if (!_this.clicked) {
                _this.clicked = true;

                if (selectedLink != null) {
                    selectedLink.clicked = false;
                    selectedLink.container.child[0].height = 1;
                    selectedLink.container.child[0].y = 12;
                    selectedLink.container.child[0].child[0].color.rgb = "#3350fe";
                    selectedLink.container.child[1].color.rgb = "#3350fe";
                    selectedLink.container.child[1].transform = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                    selectedLink.container.container.style.cursor = "hand";
                }

                selectedLink = _this;
                titleIFrame.iframe.src = url + "/Title.htm";
                viewWindowIFrame.iframe.src = url + "/Content.htm";
                this.child[0].height = 17;
                this.child[0].y = 0;
                this.child[0].child[0].color.rgb = "#6379ff";
                this.child[1].color.rgb = "#ffffff";
                this.child[1].transform = [0, 0, 0, 0, 0, 0, 0, 3, 0, 0];
                this.container.style.cursor = "default";
            }

        }
    }

    this.container.OnReleaseOutside = function () {
        if (!_this.clicked) {
            this.child[0].child[0].color.rgb = "#3350fe";
            this.child[1].color.rgb = "#3350fe";
        }
    }
}

Link.prototype = {
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

Link.prototype.Build = function () {
    this.container = new Container(this.parent, this.transform, true, true, false, true, true);
    this.container.height = 20;
    


    new Container(this.container, [0, 1, 0, 0, 0, 0, 0, 12, 0, 1]);

    if (this.url != null) {
        new Shape(rectangle, this.container.child[0], [0, 1, 0, 0, 1, 0, 0, 0, 0, 0], new Rgba("#3350fe"));
        this.container.container.style.cursor = "hand";

    }


    new Label(this.container, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], new Rgba("#3350fe"), this.lbl, new Font(FontFamily.Arial, 12), Alignment.Left, LabelBaseline.Middle);
    this.container.width = this.container.child[1].label.canvas.width;
}



















//Link = function (lbl) {
//    this.lbl = lbl;
//}

//Link.prototype = {
//    //Parent
//    get parent() {
//        return this.newParent;
//    },
//    set parent(val) {
//        this.newParent = val;
       
//        this.Build();
//    }
//}

//Link.prototype.Build = function () {
//    this.parent.child.push(this.container = new Label(this.parent, [0, 0, 0, 0, 0, 0, 15, 0, 0, 0], new Rgba("#3350fe"), this.lbl, new Font(FontFamily.Arial, 12), Alignment.Left, LabelBaseline.Middle));
//}










//function Link() {
//    this.url = new Container(false, false, false, true);
//}

//Link.prototype.Build = function (transform, name, titleIFrame, contentIFrame, titleURL, contentURL) {
//    this.name = name;
//    this.titleIFrame = titleIFrame;
//    this.contentIFrame = contentIFrame;
//    this.titleURL = titleURL;
//    this.contentURL = contentURL;
//    this.url.SetContainer(Anchor(transform[0], 0, 0, 0, 0, 0, 0, transform[1] + 5, transform[2], transform[3], transform[4]));
//    this.url.container.innerHTML = '<a style="text-decoration:underline; color:#3350fe; font-size:14px; font-family:Arial" href="#">' + name + '</a>';


//    var _this = this;
//    this.url.OnMouseUp = function () {
//        _this.titleIFrame.iframe.src = _this.titleURL;
//        _this.contentIFrame.iframe.src = _this.contentURL;

//        if (selectedLink != _this) {
//            if (selectedLink != null) {
//                selectedLink.url.container.innerHTML = '<a style="text-decoration:underline; color:#3350fe; font-size:14px; font-family:Arial" href="#">' + selectedLink.name + '</a>';
//            }
//            selectedLink = _this;
//            _this.url.container.innerHTML = '<a style="text-decoration:none; color:white; font-size:14px; font-family:Arial" href="#"><span style="background-color: #536bfe">' + _this.name + '</span></a>';
//        }
//    }
//}
