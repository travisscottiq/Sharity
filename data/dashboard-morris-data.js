$(function() {


    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Facebook Likes",
            value: 12
        }, {
            label: "Twitter Likes",
            value: 30
        }, {
            label: "Instagram Likes",
            value: 20
        }],
        resize: true
    });

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
