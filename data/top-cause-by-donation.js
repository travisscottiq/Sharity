//Flot Pie Chart
$(function() {

    var data = [{
        label: "Heart and Stroke Foundation",
        data: 30
    }, {
        label: "Humane Society",
        data: 20
    }, {
        label: "Alzheimer Society",
        data: 1
    }, {
        label: "Homeless Foundation",
        data: 2
    }];

    var plotObj = $.plot($("#flot-pie-chart"), data, {
        series: {
            pie: {
                show: true
            }
        },
        grid: {
            hoverable: true
        },
        tooltip: true,
        tooltipOpts: {
            content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
            shifts: {
                x: 20,
                y: 0
            },
            defaultTheme: false
        }
    });

});
