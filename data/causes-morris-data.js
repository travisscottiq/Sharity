$(function() {
    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 2028,
        }, {
            y: '2007',
            a: 2517,
        }, {
            y: '2008',
            a: 3187,
        }, {
            y: '2009',
            a: 2830,
        }, {
            y: '2010',
            a: 4127,
        }, {
            y: '2011',
            a: 3654,
        }, {
            y: '2012',
            a: 4632,
        }],
        xkey: 'y',
        ykeys: ['a'],
        labels: ['Amount Contributed'],
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "H&S Foundation",
            value: 27
        }, {
            label: "Humane Society",
            value: 30
        }, {
            label: "Alzheimer Society",
            value: 7
        },
        {
            label: "Homeless Foundation",
            value: 4
        }],
        resize: true
    });

});
