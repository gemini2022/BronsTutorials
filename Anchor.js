function Anchor(parent, xMin, xMax, xPivot, yMin, yMax, yPivot, x, y, w, h) {
    var anchor = [];

    if (xMax == xMin) {
        anchorXmin = parent.clientWidth * xMin;
        anchorXmax = parent.clientWidth * xMax;
        if (w >= 0) {
            posX = x + anchorXmin + (w * -xPivot);
            width = w;
        } else {
            posX = w + x + anchorXmin + (w * -xPivot);
            width = -w;
        }
    }

    if (xMax > xMin) {
        anchorXmin = Math.round(parent.clientWidth * xMin);
        anchorXmax = Math.round(parent.clientWidth * xMax);
        posX = x + anchorXmin;
        width = anchorXmax - w - anchorXmin - x;
    }

    if (xMax < xMin) {
        anchorXmin = Math.round(parent.clientWidth * xMin);
        anchorXmax = Math.round(parent.clientWidth * xMax);
        posX = x + anchorXmax - x + w;
        width = anchorXmin - w - anchorXmax - x;
    }

    if (yMax == yMin) {
        anchorYmin = parent.clientHeight * yMin;
        anchorYmax = parent.clientHeight * yMax;
        if (h >= 0) {
            posY = y + anchorYmin + (h * -yPivot);
            height = h;
        } else {
            posY = h + y + anchorYmin + (h * -yPivot);
            height = -h;
        }
    }

    if (yMax > yMin) {
        anchorYmin = Math.round(parent.clientHeight * yMin);
        anchorYmax = Math.round(parent.clientHeight * yMax);
        posY = y + anchorYmin;
        height = anchorYmax - h - anchorYmin - y;
    }

    if (yMax < yMin) {
        anchorYmin = Math.round(parent.clientWidth * yMin);
        anchorYmax = Math.round(parent.clientWidth * yMax);
        posY = y + anchorYmax - y + w;
        width = anchorYmin - w - anchorYmax - y;
    }

    anchor[0] = posX;
    anchor[1] = posY;
    anchor[2] = width;
    anchor[3] = height;

    return anchor;
}
