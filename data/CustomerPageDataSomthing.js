$(function() {
      Morris.Donut({
        element: 'socialMediaDonut',
        data: [{
            label: "Twitter",
            value: 12
        }, {
            label: "Facebook",
            value: 30
        }, {
            label: "Instagram",
            value: 55
        }],
        resize: true
    });
});
