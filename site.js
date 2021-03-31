$( document ).ready(function() {
    $("#phone").mask("+7 (999) 999-9999");

    $(".pdn__open").click(function () {
        $(".pdn").toggle();
    })

    $(".pdn__close").click(function () {
        $(".pdn").hide();
    })

    $(document).mouseup(function (e){
        var div = $(".pdn");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            div.hide();
        }
    });

});