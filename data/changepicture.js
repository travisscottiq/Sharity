$(function() {
    var picList = [
        "../data/heatmap1.jpg",
        "../data/heatmap2.jpg"
    ];

    $('.pic-chooser').change(function () {
        var val = parseInt($('.pic-chooser').val());
        $('#heat-map-img').attr("src",picList[val]);
    });
});
