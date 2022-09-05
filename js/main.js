if(document.querySelector(".product__description")) {
    $("#tab-btn1").click(function () {
        $(this).addClass("active");
        $("#tab-btn2").removeClass("active");
        $("#tab-block1").addClass("active");
        $("#tab-block2").removeClass("active");
    });
    $("#tab-btn2").click(function () {
        $(this).addClass("active");
        $("#tab-btn1").removeClass("active");
        $("#tab-block2").addClass("active");
        $("#tab-block1").removeClass("active");
    });
};