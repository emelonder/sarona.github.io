// Teslimat Bilgileri
var ad = $('input[name="musteri_ad"]');
var tc = $('input[name="musteri_tc"]');
var tel = $('input[name="musteri_tel"]');
var mail = $('input[name="musteri_mail"]');
var sifre = $('input[name="musteri_sifre"]');
var teslimat_adresi = $('textarea[name="musteri_teslimat_adresi"]');
var teslimat_adresi_ilce_il = $(
    'select[name="musteri_teslimat_adresi_ilce_il"]'
);
var teslimat_adresi_posta = $(
    'input[name="musteri_teslimat_adresi_posta_kodu"]'
);
var fatura_adresi = $('textarea[name="musteri_fatura_adresi"]');
var fatura_adresi_ilce_il = $('input[name="musteri_fatura_adresi_ilce_il"]');
var fatura_adresi_posta = $('input[name="musteri_fatura_adresi_posta_kodu"]');

// İsim Kontrolü
ad.each(function () {
    $(this).focusout(function () {
        var adKelime = $.trim($(this).val()).split(" ").length;
        if (adKelime < 2) {
            alert("Adınızı ve soyadınızı doğru girdiğinizden emin olun.");
        }
        if ($(this).val() == "" || adKelime < 2) {
            $(this).removeClass("basarili-placeholder");
        $(this).addClass("basarisiz-placeholder");
        } else {
            $(this).removeClass("basarisiz-placeholder");
        $(this).addClass("basarili-placeholder");
        }
    });
    $(this).focusin(function () {
        $(this).val($.trim($(this).val()));
        console.log($(this).val());
        var adKelime = $.trim($(this).val()).split(" ").length;
        if ($(this).val() == "" || adKelime < 2) {
            $(this).removeClass("basarili-placeholder");
        $(this).addClass("basarisiz-placeholder");
        } else {
            $(this).removeClass("basarisiz-placeholder");
        $(this).addClass("basarili-placeholder");
        }
    });
});

//TC Kontrolü
tc.each(function (e) {
    $(this).keydown(function (e) {
        if (
            $.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
            (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
            (e.keyCode >= 35 && e.keyCode <= 39)
        ) {
            return;
        }
        if (
            (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) &&
            (e.keyCode < 96 || e.keyCode > 105)
        ) {
            e.preventDefault();
        }
    });
});

tc.each(function (e) {
    $(this).focusout(function () {
        if (
            $(this).val() == "" ||
            $(this)
                .val()
                .replace(/\s+/g, "").length != 11
        ) {
            $(this).removeClass("basarili-placeholder");
            $(this).addClass("basarisiz-placeholder");
        } else {
            $(this).removeClass("basarisiz-placeholder");
            $(this).addClass("basarili-placeholder");
        }
    });
    $(this).focusin(function () {
        if (
            $(this).val() == "" ||
            $(this)
                .val()
                .replace(/\s+/g, "").length != 11
        ) {
            $(this).removeClass("basarili-placeholder");
            $(this).addClass("basarisiz-placeholder");
        } else {
            $(this).removeClass("basarisiz-placeholder");
            $(this).addClass("basarili-placeholder");
        }
    });
});

//Telefon kontrolü
tel.each(function (e) {
    $(this).keydown(function (e) {
        if (
            $.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
            (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
            (e.keyCode >= 35 && e.keyCode <= 39)
        ) {
            return;
        }
        if (
            (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) &&
            (e.keyCode < 96 || e.keyCode > 105)
        ) {
            e.preventDefault();
        }
    });
});

tel.each(function (e) {
    $(this).focusout(function () {
        if ($(this).val() == "") {
            $(this).removeClass("basarili-placeholder");
            $(this).addClass("basarisiz-placeholder");
        } else {
            $(this).removeClass("basarisiz-placeholder");
            $(this).addClass("basarili-placeholder");
        }
    });
    $(this).focusin(function () {
        if ($(this).val() == "") {
            $(this).removeClass("basarili-placeholder");
            $(this).addClass("basarisiz-placeholder");
        } else {
            $(this).removeClass("basarisiz-placeholder");
            $(this).addClass("basarili-placeholder");
        }
    });
});

//Mail Kontrolü
mail.each(function (e) {
    $(this).focusout(function () {
        function validateEmail($email) {
            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailReg.test($email);
        }

        if ($(this).val() == "" || !validateEmail($(this).val())) {
            alert("E-posta adresinizi doğru girdiğinizden emin olun.");
            $(this).removeClass("basarili-placeholder");
            $(this).addClass("basarisiz-placeholder");
        } else {
            $(this).removeClass("basarisiz-placeholder");
            $(this).addClass("basarili-placeholder");
        }
    });
    $(this).focusin(function () {
        function validateEmail($email) {
            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailReg.test($email);
        }

        if ($(this).val() == "" || !validateEmail($(this).val())) {
            $(this).removeClass("basarili-placeholder");
            $(this).addClass("basarisiz-placeholder");
        } else {
            $(this).removeClass("basarisiz-placeholder");
            $(this).addClass("basarili-placeholder");
        }
    });
});

teslimat_adresi.each(function (e) {
    $(this).focusout(function () {
        if ($(this).val() == "") {
            $(this).removeClass("basarili-placeholder");
            $(this).addClass("basarisiz-placeholder");
        } else {
            $(this).removeClass("basarisiz-placeholder");
            $(this).addClass("basarili-placeholder");
        }
    });
    $(this).focusin(function () {
        if ($(this).val() == "") {
            $(this).removeClass("basarili-placeholder");
            $(this).addClass("basarisiz-placeholder");
        } else {
            $(this).removeClass("basarisiz-placeholder");
            $(this).addClass("basarili-placeholder");
        }
    });
});

teslimat_adresi_ilce_il.each(function (e) {
    $(this).change(function () {
        if ($(this).val() == "İlçe, İl") {
            $(this).removeClass("basarili-placeholder");
            $(this).addClass("basarisiz-placeholder");
            $(".select2-container .select2-choice").css({
                "background-color": "#FFF1F2",
                border: "none",
                color: "#E73D4A",
                height: "42px"
            });
        } else {
            $(this).removeClass("basarisiz-placeholder");
            $(this).addClass("basarili-placeholder");
            $(".select2-container .select2-choice").css({
                "background-color": "#e4ffd9",
                border: "none",
                color: "#5B9E40",
                height: "42px"
            });
        }
    });
});

//Posta Kodu
teslimat_adresi_posta.each(function (e) {
    $(this).keydown(function (e) {
        if (
            $.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
            (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
            (e.keyCode >= 35 && e.keyCode <= 39)
        ) {
            return;
        }
        if (
            (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) &&
            (e.keyCode < 96 || e.keyCode > 105)
        ) {
            e.preventDefault();
        }
    });
});

teslimat_adresi_posta.each(function (e) {
    $(this).focusout(function () {
        if ($(this).val() == "") {
            $(this).removeClass("basarili-placeholder");
            $(this).addClass("basarisiz-placeholder");
        } else {
            $(this).removeClass("basarisiz-placeholder");
            $(this).addClass("basarili-placeholder");
        }
    });
    $(this).focusin(function () {
        if ($(this).val() == "") {
            $(this).removeClass("basarili-placeholder");
            $(this).addClass("basarisiz-placeholder");
        } else {
            $(this).removeClass("basarisiz-placeholder");
            $(this).addClass("basarili-placeholder");
        }
    });
});

//Ödeme bilgileri butonu kontrolü
$(document).on("change", 'form[name="teslimat-bilgileri"]', function () {
    var eventhandler = function (e) {
        e.preventDefault();
    };

    alert("değişiklik yapıldı");
    var adKelimeKontrol = $.trim(ad.val()).split(" ").length;
    console.log(adKelimeKontrol);
    ad.each(function () {
        if ($(this).val() == "" || adKelimeKontrol < 2) {
            $(this).removeClass("basarili-placeholder");
            $(this).addClass("basarisiz-placeholder");
            $('form[name="teslimat-bilgileri"]').bind("submit", eventhandler);
        }
    });

    tc.each(function (e) {
        if (
            $(this).val() == "" ||
            $(this)
                .val()
                .replace(/\s+/g, "").length != 11
        ) {
            $(this).removeClass("basarili-placeholder");
            $(this).addClass("basarisiz-placeholder");
            $('form[name="teslimat-bilgileri"]').bind("submit", eventhandler);
        }
    });

    tel.each(function (e) {
        if ($(this).val() == "") {
            $(this).removeClass("basarili-placeholder");
            $(this).addClass("basarisiz-placeholder");
            $('form[name="teslimat-bilgileri"]').bind("submit", eventhandler);
        }
    });

    mail.each(function (e) {
        function validateEmail($email) {
            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailReg.test($email);
        }

        if ($(this).val() == "" || !validateEmail($(this).val())) {
            $(this).removeClass("basarili-placeholder");
            $(this).addClass("basarisiz-placeholder");
            $('form[name="teslimat-bilgileri"]').bind("submit", eventhandler);
        }
    });

    teslimat_adresi.each(function (e) {
        if ($(this).val() == "") {
            $(this).removeClass("basarili-placeholder");
            $(this).addClass("basarisiz-placeholder");
            $('form[name="teslimat-bilgileri"]').bind("submit", eventhandler);
        }
    });

    teslimat_adresi_ilce_il.each(function (e) {
        if ($(this).val() == "İlçe, İl") {
            $(this).removeClass("basarili-placeholder");
            $(this).addClass("basarisiz-placeholder");
            $(".select2-container .select2-choice").css({
                "background-color": "#FFF1F2",
                border: "none",
                color: "#E73D4A",
                height: "42px"
            });
            $('form[name="teslimat-bilgileri"]').bind("submit", eventhandler);
        }
    });

    teslimat_adresi_posta.each(function (e) {
        if ($(this).val() == "") {
            $(this).removeClass("basarili-placeholder");
            $(this).addClass("basarisiz-placeholder");
            $('form[name="teslimat-bilgileri"]').bind("submit", eventhandler);
        }
    });

    if (
        ad.val() != "" &&
        adKelimeKontrol > 1 &&
        tc.val() != "" &&
        tel.val() != "" &&
        mail.val() != "" &&
        sifre.val() != "" &&
        teslimat_adresi.val() != "" &&
        teslimat_adresi_ilce_il.val() != "İlçe, İl" &&
        teslimat_adresi_posta.val() != ""
    ) {
        alert("devam edebilir");

        $('button[name="odeme-bilgileri"]').removeAttr("disabled", "disabled");
        $('button[name="odeme-bilgileri"]').css({
            cursor: "pointer",
            opacity: "1",
            "pointer-events": "all"
        });
        $('form[name="teslimat-bilgileri"]').unbind("submit", eventhandler);
    } else {
        $('form[name="teslimat-bilgileri"]').bind("submit", eventhandler);
        $('button[name="odeme-bilgileri"]').addAttr("disabled", "disabled");
        $('button[name="odeme-bilgileri"]').css({
            cursor: "not-allowed !important",
            opacity: ".65",
            "pointer-events": "none"
        });
    }
});


var eventhandler = function (e) {
    e.preventDefault();
};
var adKelimeKontrol = $.trim(ad.val()).split(" ").length;
if (
    ad.val() != "" &&
    adKelimeKontrol > 1 &&
    tc.val() != "" &&
    tel.val() != "" &&
    mail.val() != "" &&
    sifre.val() != "" &&
    teslimat_adresi.val() != "" &&
    teslimat_adresi_ilce_il.val() != "İlçe, İl" &&
    teslimat_adresi_posta.val() != ""
) {
    alert("devam edebilir");

    $('button[name="odeme-bilgileri"]').removeAttr("disabled", "disabled");
    $('button[name="odeme-bilgileri"]').css({
        cursor: "pointer",
        opacity: "1",
        "pointer-events": "all"
    });
    $('form[name="teslimat-bilgileri"]').unbind("submit", eventhandler);
} else {
    $('form[name="teslimat-bilgileri"]').bind("submit", eventhandler);
    $('button[name="odeme-bilgileri"]').attr("disabled", "disabled");
    $('button[name="odeme-bilgileri"]').css({
        cursor: "not-allowed !important",
        opacity: ".65",
        "pointer-events": "none"
    });
}


$('form[name="odeme-bilgileri"]').submit(function () {
    $('button[name="odeme-bilgileri"]').css({
        cursor: "not-allowed !important",
        opacity: ".65",
        "pointer-events": "none"
    });
});