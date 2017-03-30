$(function() {

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: 'Customer',
            a: 23500
        }, {
            y: 'Store',
            a: 11500
        }],
        xkey: 'y',
        ykeys: ['a'],
        labels: ['Amount Contributed'],
        hideHover: 'auto',
        resize: true
    });
});
