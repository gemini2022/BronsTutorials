ParentContainer = function () {
    this.container = document.createElement('div');
    this.container.style.position = 'absolute';
    this.container.style.left = 0;
    this.container.style.top = 0;
    this.container.style.width = window.innerWidth;
    this.container.style.height = window.innerHeight;
    this.child = [];
    document.body.appendChild(this.container);
}
