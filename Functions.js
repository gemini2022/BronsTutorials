shiftKeyDown = false;
documentMouseDown = false;
documentMouseUp = false;
documentKeyDown = false;
documentKeyUp = false;

document.onmousedown = function (e) {
    documentEventMouseDown = e;
    documentMouseDown = true;
    documentMouseUp = false;
}

document.onmouseup = function (e) {
    documentEventMouseUp = e;
    documentMouseUp = true;
    documentMouseDown = false;
}


document.onmousemove = function (e) {
    documentEventMove = e;
    mouseX = e.clientX;
    mouseY = e.clientY;
}

document.onkeydown = function (e) {
    if (e.keyCode == 16) shiftKeyDown = true;

    documentEventKeyDown = e;
    documentKeyDown = true;
    documentKeyUp = false;
}

document.onkeyup = function (e) {
    if (e.keyCode == 16) shiftKeyDown = false;
    documentEventKeyUp = e;
    documentKeyUp = true;
    documentKeyDown = false;
}




function MouseInArea(e, x, y, w, h) {
    var area =
	e.clientX >= x &&
	e.clientX < x + w &&
	e.clientY >= y &&
	e.clientY < y + h;

    return area;
}



GetParentNodeList = function (node, arry) {
    //As long as the parent node's position style property is set to either 'absolute', 'relative' or 'static'.
    if (node.parentNode.offsetParent != null) {
        //Add the node's parent node to the list
        arry.push(node.parentNode);
        //Check to see if the node's parent node has a parent node
        GetParentNodeList(node.parentNode, arry)
    }
}




GetParentNodeX = function (node) {
    var xPos = 0;
    var arry = [];

    GetParentNodeList(node.container, arry);

    for (var i = 0; i < arry.length; i++) {
        xPos += arry[i].offsetLeft;
    }
    return xPos
}

GetParentNodeY = function (node) {
    var yPos = 0;
    var arry = [];

    GetParentNodeList(node.container, arry);

    for (var i = 0; i < arry.length; i++) {
        yPos += arry[i].offsetTop;
    }
    return yPos
}



function hsbToHsl(h, s, b) {
    // determine the lightness in the range [0,100]
    var l = (2 - s / 100) * b / 2;

    // store the HSL components
    hsl =
	{
	    'h': h,
	    's': s * b / (l < 50 ? l * 2 : 200 - l * 2),
	    'l': l
	};

    // correct a division-by-zero error
    if (isNaN(hsl.s)) hsl.s = 0;
    return hsl;
}






function rgbToHsb() {
    var rr, gg, bb,
		red = arguments[0] / 255,
		green = arguments[1] / 255,
		blue = arguments[2] / 255,
		h, s,
		b = Math.max(red, green, blue),
		diff = b - Math.min(red, green, blue),
		diffc = function (c) {
		    return (b - c) / 6 / diff + 1 / 2;
		};

    if (diff == 0) {
        h = s = 0;
    } else {
        s = diff / b;
        rr = diffc(red);
        gg = diffc(green);
        bb = diffc(blue);

        if (red === b) {
            h = bb - gg;
        } else if (green === b) {
            h = (1 / 3) + rr - bb;
        } else if (blue === b) {
            h = (2 / 3) + gg - rr;
        }
        if (h < 0) {
            h += 1;
        } else if (h > 1) {
            h -= 1;
        }
    }
    return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        b: Math.round(b * 100)
    };
}







function hslToRgb(h, s, l) {
    var r, g, b;

    if (s == 0) {
        r = g = b = l; // achromatic
    } else {
        var hue2rgb = function hue2rgb(p, q, t) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        }

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}


function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return componentToHex(r) + componentToHex(g) + componentToHex(b);
}


function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}


function rgbToHsl(r, g, b) {
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if (max == min) {
        h = s = 0; // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return [h, s, l];
}


function rgbaToHex(rgb) {
    rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return (rgb && rgb.length === 4) ?
	("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
	("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
	("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
}


function rgbaToOpacity(rgba) {
    a = rgba.lastIndexOf(",");
    b = rgba.indexOf(")");
    return parseFloat(rgba.slice(a + 1, b));
}




//backspace	8
//tab	9
//enter	13
//shift	16
//ctrl	17
//alt	18
//pause/break	19
//caps lock	20
//escape	27
//(space)	32
//page up	33
//page down	34
//end	35
//home	36
//left arrow	37
//up arrow	38
//right arrow	39
//down arrow	40
//insert	45
//delete	46
//0	48
//1	49
//2	50
//3	51
//4	52
//5	53
//6	54
//7	55
//8	56
//9	57
//a	65
//b	66
//c	67
//d	68	 	
//Key	Code
//e	69
//f	70
//g	71
//h	72
//i	73
//j	74
//k	75
//l	76
//m	77
//n	78
//o	79
//p	80
//q	81
//r	82
//s	83
//t	84
//u	85
//v	86
//w	87
//x	88
//y	89
//z	90
//left window key	91
//right window key	92
//select key	93
//numpad 0	96
//numpad 1	97
//numpad 2	98
//numpad 3	99
//numpad 4	100
//numpad 5	101
//numpad 6	102
//numpad 7	103	 	
//Key	Code
//numpad 8	104
//numpad 9	105
//multiply	106
//add	107
//subtract	109
//decimal point	110
//divide	111
//f1	112
//f2	113
//f3	114
//f4	115
//f5	116
//f6	117
//f7	118
//f8	119
//f9	120
//f10	121
//f11	122
//f12	123
//num lock	144
//scroll lock	145
//semi-colon	186
//equal sign	187
//comma	188
//dash	189
//period	190
//forward slash	191
//grave accent	192
//open bracket	219
//back slash	220
//close braket	221
//single quote	222
