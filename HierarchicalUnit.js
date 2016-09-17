HierarchicalUnit = function (parent, transform, root) {
    this.parent = parent;
    this.transform = transform;
    this.root = root;

    if (this.parent != this.root.container) {
        this.container.x = this.container.x + 25;
        this.container.x = this.container.x - 1000000;
        this.container.y = (this.parent.child.length - 1) * 20;
        this.container.y = this.container.y - 1000000;
        this.container.opacity = 0;
    }
    this.root.unit.push({ content: this.container, parentID: this.root.unit.map(function (e) { return e.content; }).indexOf(this.container.parent) });
}

HierarchicalUnit.prototype = {
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

HierarchicalUnit.prototype.Build = function () {
    this.container = new Container(this.parent, this.transform);
}










//function HierarchicalUnit() {
//    this.content = new Container();
//    this.expandCollapse = new ExpandCollapse();
//}

//HierarchicalUnit.prototype.Build = function (transform, root, lbl) {
//    this.content.SetContainer(Anchor(transform[0], 0, 0, 0, 0, 0, 0, transform[1] + 25, transform[2], transform[3], transform[4]));
//    if (lbl != null) this.expandCollapse.Build(Anchor(this.content.container, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21), lbl, root);
//    //this.content.container.style.top = 20 * (transform[0].children.length - 1);


//    if (transform[0] != root.content.container) {
//        this.content.container.style.opacity = 0;
//        this.content.container.style.top = this.content.container.offsetTop - 1000000;
//    }
    
//    root.unit.push(new Unit());
//    root.unit[root.unit.length - 1].content = this.content.container;
//    root.unit[root.unit.length - 1].size = this.content.container.scrollHeight;
//    root.unit[root.unit.length - 1].parentID = root.unit.map(function (e) { return e.content; }).indexOf(this.content.container.parent);




//    //root.unit.push({content: this.content.container, size: this.content.container.scrollHeight, parentID: root.unit.map(function (e) { return e.content; }).indexOf(this.content.container.parent)});
//}





////0
////20
////20
////0
////20
////40
////0
////20
////40
////20
////0
////20
////20
////60
////0
////20
////20
////80
////0
////20
////20
////0
////20
////40
////100
////20
////40
////60
