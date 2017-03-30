$(function() {


    Morris.Bar({
        element: 'ongoing-campaign-chart',
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

    Morris.Bar({
        element: 'previous-campaign-chart',
        data: [{
            y: 'December',
            a: 1708,
            b: 2219
        }, {
            y: 'January',
            a: 233,
            b: 355
        }, {
            y: 'February',
            a: 2078,
            b: 2515
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Store ($)', 'Customers ($)'],
        hideHover: 'auto',
        resize: true
    });

    Morris.Bar({
        element: 'social-media-chart',
        data: [{
            // y: 'Instagram',
            y: 'Heart & Stroke',
            a: 1708,
            b: 2219,
            c: 1142
        }, {
            // y: 'Twitter',
            y: 'Cancer Care',
            a: 233,
            b: 355,
            c: 111
        }, {
            // y: 'Facebook',
            y: 'Humane Society',
            a: 2078,
            b: 2515,
            c: 123
        }],
        xkey: 'y',
        ykeys: ['a', 'b', 'c'],
        // labels: ['Heart & Stroke', 'Cancer Care', 'Humane Society'],
        labels: ['Instagram', 'Twitter', 'Facebook'],
        hideHover: 'auto',
        resize: true
    });

});
