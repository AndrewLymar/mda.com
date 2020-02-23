var $buoop = {
    required: {
        e: 16,
        f: 63,
        o: 56,
        s: 10,
        c: 70
    },
    api: 2020.01
};

function $buo_f() {
    var e = document.createElement("script");
    e.src = "//browser-update.org/update.min.js";
    document.body.appendChild(e);
};
try {
    document.addEventListener("DOMContentLoaded", $buo_f, false)
} catch (e) {
    window.attachEvent("onload", $buo_f)
}

var hellopreloader = document.getElementById("hellopreloader_preload");

function fadeOutnojquery(el) {
    el.style.opacity = 1;

    var interhellopreloader = setInterval(function () {
            el.style.opacity = el.style.opacity - 0.05;
            if (el.style.opacity <= 0.05) {
                clearInterval(interhellopreloader);
                hellopreloader.style.display = "none";
            }
        }

        , 16);
}

window.onload = function () {
    setTimeout(function () {
            fadeOutnojquery(hellopreloader);
        }

        , 1000);
};

$(function () {

    $("nav").mobileMenu({
        menuIconClassName: ".menu-icon",
        mobileResolution: 768,
        menuType: "sticky",
        offsetToSticky: 50,
        closeIconClassName: ".close-menu-icon"
    });

    $("#modal").iziModal({});
    $(".banner__button").on("click", function (event) {
        event.preventDefault();
        $('#modal').iziModal('open');
    });

    $projectForm = document.getElementsByClassName("project__form");
    $buttonNext = $(".project__button-next");
    $buttonPrev = $(".project__button-prev");
    $buttonMore = $(".project__button-more");
    $buttonSend = $(".project__button-send");

    var currentTabNum = 1;

    $tab1 = $(".tab-1");
    $tab2 = $(".tab-2");
    $tab3 = $(".tab-3");
    $tab4 = $(".tab-4");
    $tab5 = $(".tab-5");
    $tab6 = $(".tab-6");
    $tab7 = $(".tab-7");
    $tab8 = $(".tab-8");
    $tab9 = $(".tab-9");
    $tab10 = $(".tab-10");
    $tab11 = $(".tab-11");
    $tab12 = $(".tab-12");
    $tab13 = $(".tab-13");
    $tab14 = $(".tab-14");
    $tab15 = $(".tab-15");

    $buttonMore.on("click", showNext);
    $buttonNext.on("click", showNext);
    $buttonPrev.on("click", showPrev);

    function showNext() {
        if ($projectForm[0].checkValidity()) {
            $buttonPrev.show(300);
            switch (currentTabNum) {
                case 1:
                    $tab1.hide(300);
                    $tab2.show(300);
                    $buttonPrev.show(300);
                    $buttonNext.show(300);
                    $buttonSend.hide(300);
                    $buttonMore.hide(300);
                    break;
                case 2:
                    $tab2.hide(300);
                    $tab3.show(300);
                    break;
                case 3:
                    $tab3.hide(300);
                    $tab4.show(300);
                    break;
                case 4:
                    $tab4.hide(300);
                    $tab5.show(300);
                    break;
                case 5:
                    $tab5.hide(300);
                    $tab6.show(300);
                    break;
                case 6:
                    $tab6.hide(300);
                    $tab7.show(300);
                    break;
                case 7:
                    $tab7.hide(300);
                    $tab8.show(300);
                    break;
                case 8:
                    $tab8.hide(300);
                    $tab9.show(300);
                    break;
                case 9:
                    $tab9.hide(300);
                    $tab10.show(300);
                    break;
                case 10:
                    $tab10.hide(300);
                    $tab11.show(300);
                    break;
                case 11:
                    $tab11.hide(300);
                    $tab12.show(300);
                    break;
                case 12:
                    $tab12.hide(300);
                    $tab13.show(300);
                    break;
                case 13:
                    $tab13.hide(300);
                    $tab14.show(300);
                    $buttonNext.hide(300);
                    $buttonSend.show(300);
                    $buttonSend.css("order", 3);
                    break;
            }
            currentTabNum++;
        } else {
            $errorMessage = $(".error-message");
            $errorMessage.show(300);
            setTimeout(function () {
                $errorMessage.hide(300);
            }, 3000);
        }
    }

    function showPrev() {
        switch (currentTabNum) {
            case 14:
                $tab14.hide(300);
                $tab13.show(300);
                $buttonNext.show(300);
                $buttonSend.hide(300);
                break;
            case 13:
                $tab13.hide(300);
                $tab12.show(300);
                break;
            case 12:
                $tab12.hide(300);
                $tab11.show(300);
                break;
            case 11:
                $tab11.hide(300);
                $tab10.show(300);
                break;
            case 10:
                $tab10.hide(300);
                $tab9.show(300);
                break;
            case 9:
                $tab9.hide(300);
                $tab8.show(300);
                break;
            case 8:
                $tab8.hide(300);
                $tab7.show(300);
                break;
            case 7:
                $tab7.hide(300);
                $tab6.show(300);
                break;
            case 6:
                $tab6.hide(300);
                $tab5.show(300);
                break;
            case 5:
                $tab5.hide(300);
                $tab4.show(300);
                break;
            case 4:
                $tab4.hide(300);
                $tab3.show(300);
                break;
            case 3:
                $tab3.hide(300);
                $tab2.show(300);
                break;
            case 2:
                $tab2.hide(300);
                $tab1.show(300);
                $buttonPrev.hide(300);
                $buttonMore.show(300);
                $buttonNext.hide(300);
                $buttonSend.show(300);
                $buttonMore.css("order", 3);
                $buttonSend.css("order", 1);
                break;
        }
        currentTabNum--;
    }
    var currentLanguage = "ru";
    var $language = $(".language");
    var $languageSwitcher = $(".language__switcher");
    var $languageCh = $(".language__ch");
    $language.on("click", function (event) {
        $languageCh.toggle();
        if ($languageSwitcher.hasClass("arrow-left")) {
            $languageSwitcher.removeClass("arrow-left");
            $languageSwitcher.addClass("arrow-right");
        } else {
            $languageSwitcher.removeClass("arrow-right");
            $languageSwitcher.addClass("arrow-left");
        }
    });
    $(".banner__form").submit(function (e) {
        e.preventDefault();
        var $form = $(this);
        $(".success-banner").fadeIn(0);
        $.post(
            $form.attr("action"), $form.serialize()).then(function () {
            $form.trigger('reset');
            setTimeout(function () {
                $(".icon-close").trigger('click');
                $(".success-banner").fadeOut();
                Swal.fire(
                    'Спасибо!',
                    'Мы получили Ваш запрос и свяжемся с Вами в ближайшее время',
                    'success'
                );
            }, 1000);
            /*
            setTimeout(function () {
                $(".success-banner").fadeOut();
            }, 5000);
            */
        });
    });
    $(".project__form").submit(function (e) {
        e.preventDefault();
        var $form = $(this);
        $(".success").fadeIn(0);
        $tab14.hide(300);
        $tab1.show(300);
        $buttonPrev.hide(300);
        $buttonMore.show(300);
        $buttonNext.hide(300);
        $buttonSend.show(300);
        $buttonMore.css("order", 3);
        $buttonSend.css("order", 1);
        currentTabNum = 1;
        $.post(
            $form.attr("action"), $form.serialize()).then(function () {
            $form.trigger('reset');
            currentTabNum = 1;
            $tab14.hide(300);
            $tab1.show(300);
            $buttonPrev.hide(300);
            $buttonMore.show(300);
            $buttonNext.hide(300);
            $buttonSend.show(300);
            $buttonMore.css("order", 3);
            $buttonSend.css("order", 1);
            setTimeout(function () {
                /*
                $(".success").text("Мы получили Ваш запрос и свяжемся с Вами в ближайшее время");*/
                $(".success ").fadeOut();
                Swal.fire(
                    'Спасибо!',
                    'Мы получили Ваш запрос и свяжемся с Вами в ближайшее время',
                    'success'
                );
            }, 1000);
            /*
            setTimeout(function () {
                $(".success ").fadeOut();
            }, 5000);
            */
        });
    });
});
