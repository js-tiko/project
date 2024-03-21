 function getDotColor(quantityA, quantityB) {
    var scaleFactorX = (750 - 50) / 1000;
    var scaleFactorY = (550 - 20) / 1000;
    var scaledQuantityA = 50 + (quantityA * scaleFactorX);
    var scaledQuantityB = 550 - (quantityB * scaleFactorY);

    for (var i = 0; i < ppfData.length - 1; i++) {
        var x1 = 50 + (ppfData[i].x * scaleFactorX);
        var y1 = 550 - (ppfData[i].y * scaleFactorY);
        var x2 = 50 + (ppfData[i + 1].x * scaleFactorX);
        var y2 = 550 - (ppfData[i + 1].y * scaleFactorY);

        var ppfSlope = (y2 - y1) / (x2 - x1);
        var ppfYIntercept = y1 - ppfSlope * x1;

        var expectedQuantityB = ppfSlope * scaledQuantityA + ppfYIntercept;

        // Use a tolerance threshold for comparison
        var tolerance = 0.1; // You can adjust this tolerance as needed
        if (Math.abs(scaledQuantityB - expectedQuantityB) < tolerance) {
            return 'aqua'; // Quantities are approximately equal
        }

        if (scaledQuantityB < expectedQuantityB) {
            return 'red';
        }
    }

    return 'blue';
}
