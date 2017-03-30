$(function() {
      Morris.Donut({
        element: 'socialMediaDonut',
        data: [{
            label: "Facebook Likes",
            value: 1200
        }, {
            label: "Twitter Likes",
            value: 3076
        }, {
            label: "Instagram Likes",
            value: 200
        }],
        resize: true
    });
});
