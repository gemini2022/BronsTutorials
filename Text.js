Text = function (parent, transform, color, font, alignment, characterLimit) {
    this.text = document.createElement('input');
    this.text.type = 'text';
    this.text.style.position = 'absolute';
    this.text.style.backgroundColor = "transparent";
    this.text.style.border = "none";
    this.text.style.outline = "none";
    this.parent = parent;
    this.color = color;
    this.font = font;
    this.alignment = alignment;
    this.characterLimit = characterLimit;
    this.transform = transform;
    this.currentValue = "";
    this.onChangeListener;
    this.OnBlur = function () { };
    this.OnChange = function () { };
    var _this = this;

    this.text.onclick = function () {
        _this.text.select();
    }

    this.text.onkeydown = function (e) {
        if (e.keyCode == 13) _this.text.blur();
    }

    this.text.onfocus = function () {
        _this.onChangeListener = setInterval(OnChange, 0);
    }

    this.text.onblur = function () {
        clearInterval(_this.onChangeListener);
        _this.OnBlur();
    }

    function OnChange() {
        if (_this.text.value != _this.currentValue) {
            _this.currentValue = _this.text.value;
            _this.OnChange();
        }
    }

    this.color.Update = function () {
        _this.color = _this.color;
    }

    this.font.Update = function () {
        _this.font = _this.font;
    }
}

Text.prototype = {
    //Parent
    get parent() {
        return this.newParent;
    },
    set parent(val) {
        this.newParent = val;
        this.parent.container.appendChild(this.text);
    },

    //Color
    get color() {
        return this.newColor;
    },
    set color(val) {
        this.newColor = val;
        this.text.style.color = this.newColor.rgba;
    },

    //Font
    get font() {
        return this.newFont;
    },
    set font(val) {
        this.newFont = val;
        this.text.style.font = this.newFont.value;
    },

    //Alignment
    get alignment() {
        return this.newAlignment;
    },
    set alignment(val) {
        this.newAlignment = val;
        this.SetAlignment();
    },

    //Character Limit
    get characterLimit() {
        return this.newCharacterLimit;
    },
    set characterLimit(val) {
        this.newCharacterLimit = val;
        if (this.newCharacterLimit != null) this.text.maxLength = this.newCharacterLimit;
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



Text.prototype.SetAlignment = function () {
    switch (this.alignment) {
        case 0:
            this.text.style.textAlign = "left";
            break;
        case 1:
            this.text.style.textAlign = "center";
            break;
        case 2:
            this.text.style.textAlign = "right";
            break;
    }
}



Text.prototype.SetTransform = function () {
    var anchor = Anchor(this.parent.container, this.transform[0], this.transform[1], this.transform[2], this.transform[3], this.transform[4], this.transform[5], this.transform[6], this.transform[7], this.transform[8], this.transform[9])
    this.text.style.left = anchor[0];
    this.text.style.top = anchor[1];
    this.text.style.width = anchor[2];
    this.text.style.height = anchor[3];
}
