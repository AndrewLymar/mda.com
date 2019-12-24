$(function () {
    dynamicGradient();

    $("nav").mobileMenu({
        menuIconClassName: ".menu-icon",
        mobileResolution: 768,
        menuType: "sticky",
        offsetToSticky: 50,
        closeIconClassName: ".close-menu-icon"
    });

    function dynamicGradient() {
        var colors = new Array(

  [62, 35, 255],
  [60, 255, 60],
  [255, 35, 98],
  [45, 175, 230],
  [255, 0, 255],
  [255, 128, 0]);

        /*
        [0, 0, 0],
        [239, 79, 179];
        */
        var step = 0;
        //color table indices for: 
        // current color left
        // next color left
        // current color right
        // next color right
        var colorIndices = [0, 1, 2, 3];

        //transition speed
        var gradientSpeed = 0.002;

        function updateGradient() {

            if ($ === undefined) return;

            var c0_0 = colors[colorIndices[0]];
            var c0_1 = colors[colorIndices[1]];
            var c1_0 = colors[colorIndices[2]];
            var c1_1 = colors[colorIndices[3]];

            var istep = 1 - step;
            var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
            var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
            var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
            var color1 = "rgba(" + r1 + "," + g1 + "," + b1 + ", 1.0)";

            var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
            var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
            var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
            var color2 = "rgba(" + r2 + "," + g2 + "," + b2 + ", 1.0)";

            $('.gradient').css({
                background: "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))"
            }).css({
                background: "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)"
            });

            step += gradientSpeed;
            if (step >= 1) {
                step %= 1;
                colorIndices[0] = colorIndices[1];
                colorIndices[2] = colorIndices[3];

                //pick two new target color indices
                //do not pick the same as the current one
                colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
                colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;

            }
        }
        setInterval(updateGradient, 10);
    }

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
});
