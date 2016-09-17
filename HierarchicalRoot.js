HierarchicalRoot = function (parent, transform) {
    this.parent = parent;
    this.transform = transform;
    this.unit = [];
}

HierarchicalRoot.prototype = {
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

HierarchicalRoot.prototype.Build = function () {
    this.parent.child.push(this.container = new Container(this.parent, this.transform));
}



HierarchicalRoot.prototype.Expand = function (index) {
    var distance = 0;
    this.unit[index].expand = true;


    for (var i = index; i < this.unit.length; i++) {

        

        if (this.unit[i].parentID > this.unit[index].parentID) {
            if (this.unit[i].parentID == index || (this.unit[this.unit[i].parentID].expand && this.unit[this.unit[i].parentID].content.opacity == 1)) {


                distance += this.unit[i].content.child[0].container.scrollHeight;

                

                this.unit[i].content.opacity = 1;
                this.unit[i].content.x = this.unit[i].content.x + 1000000;
                this.unit[i].content.y = this.unit[i].content.y + 1000000;
            }
        } else {
            if (i != index) {
                var newIndex = i;
                break;
            }
        }
    }
    var moveList = [];

    for (var i = newIndex; i < this.unit.length; i++) {
        if (this.unit[i].parentID <= this.unit[newIndex].parentID) {
            moveList.push(i);
        }
    }

    for (var i = 0; i < moveList.length; i++) {
        this.unit[moveList[i]].content.y = this.unit[moveList[i]].content.y + distance;
    }
}

HierarchicalRoot.prototype.Collapse = function (index) {
    var distance = 0;
    this.unit[index].expand = false;

    for (var i = index; i < this.unit.length; i++) {
        if (this.unit[i].parentID > this.unit[index].parentID) {

            if (this.unit[i].parentID == index || (this.unit[this.unit[i].parentID].expand && this.unit[i].content.opacity == 1)) {
                distance += this.unit[i].content.child[0].container.scrollHeight;
                this.unit[i].content.opacity = 0;
                this.unit[i].content.x = this.unit[i].content.x - 1000000;
                this.unit[i].content.y = this.unit[i].content.y - 1000000;
            }
        } else {
            if (i != index) {
                var newIndex = i;
                break;
            }
        }
    }
    var moveList = [];

    for (var i = newIndex; i < this.unit.length; i++) {
        if (this.unit[i].parentID <= this.unit[newIndex].parentID) {
            moveList.push(i);
        }
    }

    for (var i = 0; i < moveList.length; i++) {
        this.unit[moveList[i]].content.y = this.unit[moveList[i]].content.y - distance;
    }
}












//function HierarchicalRoot() {
//    this.unit = [];
//    this.content = new Container();
//}

//HierarchicalRoot.prototype.Build = function (transform) {
//    this.content.SetContainer(Anchor(transform[0], 0, 0, 0, 0, 0, 0, transform[1] - 25, transform[2], transform[3], transform[4]));
//}

//HierarchicalRoot.prototype.Expand = function (index) {
//    var distance = 0;
//    this.unit[index].expand = true;

//    for (var i = index; i < this.unit.length; i++) {
//        if (this.unit[i].parentID > this.unit[index].parentID) {
//            if (this.unit[i].parentID == index || (this.unit[this.unit[i].parentID].expand && this.unit[this.unit[i].parentID].content.style.opacity == 1)) {
//                distance += this.unit[i].size;
//                this.unit[i].content.style.opacity = 1;
//                this.unit[i].content.style.top = this.unit[i].content.offsetTop + 1000000;
//            }
//        } else {
//            if (i != index) {
//                var newIndex = i;
//                break;
//            }
//        }
//    }
//    var moveList = [];

//    for (var i = newIndex; i < this.unit.length; i++) {
//        if (this.unit[i].parentID <= this.unit[newIndex].parentID) {
//            moveList.push(i);
//        }
//    }

//    for (var i = 0; i < moveList.length; i++) {
//        this.unit[moveList[i]].content.style.top = this.unit[moveList[i]].content.offsetTop + distance;
//    }
//}

//HierarchicalRoot.prototype.Collapse = function (index) {
//    var distance = 0;
//    this.unit[index].expand = false;

//    for (var i = index; i < this.unit.length; i++) {
//        if (this.unit[i].parentID > this.unit[index].parentID) {

//            if (this.unit[i].parentID == index || (this.unit[this.unit[i].parentID].expand && this.unit[i].content.style.opacity == 1)) {
//                distance += this.unit[i].size;
//                this.unit[i].content.style.opacity = 0;
//                this.unit[i].content.style.top = this.unit[i].content.offsetTop - 1000000;
//            }
//        } else {
//            if (i != index) {
//                var newIndex = i;
//                break;
//            }
//        }
//    }
//    var moveList = [];

//    for (var i = newIndex; i < this.unit.length; i++) {
//        if (this.unit[i].parentID <= this.unit[newIndex].parentID) {
//            moveList.push(i);
//        }
//    }

//    for (var i = 0; i < moveList.length; i++) {
//        this.unit[moveList[i]].content.style.top = this.unit[moveList[i]].content.offsetTop - distance;
//    }
//}
