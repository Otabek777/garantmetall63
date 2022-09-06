$(".header__burgir").click(function() {
    $(this).toggleClass("active");
    $(".header__bottom").toggleClass("open");
});
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
if(document.querySelector('.input_phone')) {
    window.addEventListener("DOMContentLoaded", function() {
        [].forEach.call( document.querySelectorAll('.tel'), function(input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function(a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function(a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5)  this.value = ""
        }
    
        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)
    
      });
    
    });
};
$("body").click(function() {
    $(".header__phone").removeClass("active");
    $(".footer__phone .link").removeClass("active");
});
$(".header__phone").click(function() {
    setTimeout(function() {
        $(".header__phone").addClass("active");
    }, 001);
});
$(".footer__phone .link").click(function() {
    setTimeout(function() {
        $(".footer__phone .link").addClass("active");
    }, 001);
});