$(function () {

    $("nav").mobileMenu({
        menuIconClassName: ".menu-icon",
        mobileResolution: 768,
        menuType: "sticky",
        offsetToSticky: 50,
        closeIconClassName: ".close-menu-icon"
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
            case 3:
                $tab3.hide(300);
                $tab2.show(300);
                $buttonNext.show(300);
                $buttonSend.hide(300);
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


    $(".project__form").submit(function (e) {
        e.preventDefault();
        var $form = $(this);
        $(".success").fadeIn(0);
        $.post(
            $form.attr("action"), $form.serialize()).then(function () {
            setTimeout(function () {
                $(".success").text("Мы получили ваш запрос и свяжемся с вами в ближайшее время");
            }, 1000);

            setTimeout(function () {
                $(".success ").fadeOut();
            }, 4000);
        });
    });
    /*
        var form = $('project__form');
        var form_data = $(this).serialize()
        formData = qs.stringify(formData);
        event.preventDefault();
        $.ajax({
                url: "", // the endpoint
                type: "POST", // http method
                processData: false,
                contentType: false,
                data: formData,
                success: function) {
                setTimeout(function () {
                    $(".success").text("Мы получили ваш запрос и свяжемся с вами в ближайшее время");
                }, 1000);

                setTimeout(function () {
                    $(".success ").fadeOut();
                }, 4000);
            }
        });
    */
    /*
    $(document).on("submit", ".project__form", function (event) {
        event.preventDefault();

        var url = $(this).attr("action");
        $.ajax({
            url: url,
            type: $(this).attr("method"),
            dataType: "text",
            data: new FormData(this),
            processData: false,
            contentType: false,
            success: function () {
                setTimeout(function () {
                    $(".success").text("Мы получили ваш запрос и свяжемся с вами в ближайшее время");
                }, 1000);

                setTimeout(function () {
                    $(".success ").fadeOut();
                }, 4000);
            },
            error: function (xhr, desc, err) {


            }
        });
    });
    */
    /*
        $(".project__form").submit(function (event) {
            event.preventDefault(); //prevent default action 
            var post_url = $(this).attr("action"); //get form action url
            var request_method = $(this).attr("method"); //get form GET/POST method
            var form_data = $(this).serialize(); //Encode form elements for submission
            form_data = qs.stringify(formData);
            $.ajax({
                url: post_url,
                type: request_method,
                data: form_data,
                contentType: false,
                processData: false
            }).done(function (response) { //
                $("#server-results").html(response);
            });
        });
        */

});
