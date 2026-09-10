$(function () {
    $(".alert").hide();

    $("form").on("submit", function (event) {
        var sendFlag = true;

        if (!$("#text").val().trim()) {
            $("#textSection .alert").stop(true, true).fadeIn(150);
            sendFlag = false;
        } else {
            $("#textSection .alert").hide();
        }

        var radioChk = $('input[name="radio"]:checked').length;
        if (radioChk === 0) {
            $("#radioSection .alert").stop(true, true).fadeIn(150);
            sendFlag = false;
        } else {
            $("#radioSection .alert").hide();
        }

        var chkboxChk = $('input[name="checkbox"]:checked').length;
        if (chkboxChk < 3) {
            $("#checkboxSection .alert").stop(true, true).fadeIn(150);
            sendFlag = false;
        } else {
            $("#checkboxSection .alert").hide();
        }

        if ($("#select").val() === "none") {
            $("#selectSection .alert").stop(true, true).fadeIn(150);
            sendFlag = false;
        } else {
            $("#selectSection .alert").hide();
        }

        if (!$("#textarea").val().trim()) {
            $("#textareaSection .alert").stop(true, true).fadeIn(150);
            sendFlag = false;
        } else {
            $("#textareaSection .alert").hide();
        }

        if (!sendFlag) {
            event.preventDefault();

            var firstAlert = $(".alert:visible").first();
            if (firstAlert.length) {
                $("html, body").animate({
                    scrollTop: firstAlert.closest(".form-section").offset().top - 24
                }, 250);
            }
        }
    });
});
