var app = 0;
var px = $(window).width();
var device = '';
var getDevice = {
    type: function () {
        window.mobileAndTabletcheck = function () {
            var check = false;
            (function (a) {
                if (
                    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i
                        .test(a) ||
                    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
                        .test(a.substr(0, 4))) check = true;
            })(navigator.userAgent || navigator.vendor || window.opera);
            return check;

        };
        var confirmDevice = window.mobileAndTabletcheck();
        //alert(confirmDevice);

        if ((px <= 480) && (confirmDevice)) {
            device = 'phone';

        } else if ((px <= 800) && (px > 480) && (confirmDevice)) {
            device = 'tablet';

        } else if (px > 800) {
            device = 'desktop';

        }
    }
};

var check_options = {
    go: function (x) {
        x.forEach(function (z) {
            $(z).on('click',
                function () {
                    $(z).removeClass('on');
                    $(this).addClass('on');
                    var preg = "" + $(this).data('pregunta') + "";
                    var rpta = "" + $(this).data('codigo') + "";
                    setRespuestas(preg, rpta);
                    $(this).prev().prev().addClass('on');
                });
        });
    }
};

var check_box = {
    go: function (x) {
        x.forEach(function (z) {
            $(z).on('click',
                function () {
                    $(this).toggleClass('on');
                    $(this).prev().prev().toggleClass('on');
                });
        });
    }
};

var openQuestions = {
    go: function () {
        $('.open-close-cuest').on('click',
            function (e) {
                e.preventDefault();
                if ($(this).hasClass('on')) {
                    $(this).parent().next().slideUp(600);
                    $(this).removeClass('on');
                    $(this).closest(".cont-cuestionario").removeClass("activo");
                } else {
                    $(this).parent().next().slideDown(600);
                    $(this).addClass('on');
                    $(this).closest(".cont-cuestionario").addClass("activo");
                }
            });
    }
};

var openCloseMenu = {
    go: function () {
        $('.open-close-menu').on('click',
            function (e) {
                e.stopPropagation();
                if ($('body').hasClass('menu-closed')) {
                    $('body,header.main-header').removeClass('menu-closed');
                } else {
                    $('body,header.main-header').addClass('menu-closed');
                    $('#bottom-menu').removeAttr('style');
                    $('.bottom-menu-icon').removeClass('on');
                }
            });
    },
    goMobile: function () {
        $('.open-close-menu').on('touchend',
            function (e) {
                e.stopPropagation();
                if ($(this).hasClass('on')) {
                    $('nav.main-nav').slideUp();
                    $(this).removeClass('on');
                } else {
                    $('nav.main-nav').slideDown();
                    $(this).addClass('on');
                }
            });
    },
    goMobilemenu: function () {
        $('.top-menu li a').on('touchend',
            function (e) {
                e.stopPropagation();
                if ($('.open-close-menu').hasClass('on')) {
                    $('nav.main-nav').slideUp();
                    $('.open-close-menu').removeClass('on');
                } else {
                    $('nav.main-nav').slideDown();
                    $('.open-close-menu').addClass('on');

                }

            });

        $('.bottom-menu li a').on('touchend',
            function (e) {
                e.stopPropagation();
                if ($('.open-close-menu').hasClass('on')) {
                    $('nav.main-nav').slideUp();
                    $('.open-close-menu').removeClass('on');
                } else {
                    $('nav.main-nav').slideDown();
                    $('.open-close-menu').addClass('on');

                }

            });
    },
    bottomMenu: function () {
        $('.bottom-menu-icon').on('click',
            function (e) {
                e.stopPropagation();

                if ($(this).hasClass('on')) {
                    $('#bottom-menu').hide(300);
                    $(this).removeClass('on');
                } else {
                    $('#bottom-menu').show(300);
                    $(this).addClass('on');
                }

            });

        $(window).click(function () {
            if ($('.bottom-menu-icon').hasClass('on')) {
                $('#bottom-menu').hide(300);
                $('.bottom-menu-icon').removeClass('on');
            }
        });
    },
    bottomMenuMobile: function () {
        $('.user-image').on('touchend',
            function (e) {
                e.stopPropagation();
                if ($(this).hasClass('on')) {
                    $('.user-profile-info').slideUp();
                    $(this).removeClass('on');
                } else {
                    $('.user-profile-info').slideDown();
                    $(this).addClass('on');
                }

            });
        $(window).on('touchend',
            function () {
                if ($('.user-image').hasClass('on')) {
                    $('.user-profile-info').slideUp();
                    $('.user-image').removeClass('on');
                }
                if ($('.open-close-menu').hasClass('on')) {
                    $('nav.main-nav').slideUp();
                    $('.open-close-menu').removeClass('on');
                }
            });
    }
};

var fakeFields = {
    selects: function () {
        $('.wrap_fakeselect').on('click',
            function (e) {
                e.stopPropagation();
                var options = $(this).find('ul.filters-select');
                if ($(this).hasClass('on')) {
                    $(this).removeClass('on');
                    options.slideUp(400);
                } else {
                    $(this).addClass('on');
                    options.slideDown(400);
                }
            });

        $('ul.filters-select li').on('click',
            function () {
                var valOption = $(this).text();
                var valParent = $(this).parent().parent();
                valParent.find('.option-selected').text(valOption);
                valParent.find('input[type=hidden]').val(valOption);
            });

        jQuery(window).click(function () {
            $('ul.filters-select').slideUp(400);
            $('.wrap_fakeselect').removeClass('on');
        });

    },
    placeholders: function () {
        $('fieldset label').on('click',
            function () {
                $(this).parent().find('input').focus();
            })
        $('input[type=text],input[type=email]').on('focus',
            function () {
                if ($(this).val() === '') {
                    //console.log('');
                }
                $(this).parent().addClass('onfocus');
            })
        $('input[type=text],input[type=email]').on('focusout',
            function () {
                if ($(this).val() === '') {
                    $(this).parent().removeClass('onfocus');
                }
            });
    }
};

var fakeFields_perfil = {
    selects: function () {
        $('.wrap_fakeselect').on('click',
            function (e) {
                e.stopPropagation();
                var options = $(this).find('ul.filters-select');
                if ($(this).hasClass('on')) {
                    $(this).removeClass('on');
                    options.slideUp(400);
                } else {
                    $(this).addClass('on');
                    options.slideDown(400);
                }
            });

        $('ul.filters-select li').on('click',
            function () {
                let valText = $(this).text();
                let valOption = $(this).data().value;
                let valParent = $(this).parent().parent();
                valParent.find('.option-selected').text(valText);
                valParent.find('input[type=hidden]').val(valOption);
            });

        jQuery(window).click(function () {
            $('ul.filters-select').slideUp(400);
            $('.wrap_fakeselect').removeClass('on');
        });

    },
    placeholders: function () {
        $('fieldset label').on('click',
            function () {
                $(this).parent().find('input').focus();
            });
    }
};


var fakeFields_bolsa = {
    selects: function () {
        $('.wrap_fakeselect').on('click',
            function (e) {
                e.stopPropagation();
                var options = $(this).find('ul.filters-select');
                if ($(this).hasClass('on')) {
                    $(this).removeClass('on');
                    options.slideUp(400);
                } else {
                    $(this).addClass('on');
                    options.slideDown(400);
                }
            });

        $('ul.filters-select li').on('click',
            function () {
                var valOption = $(this).data().value;
                var desOption = $(this).data().desc;
                var valParent = $(this).parent().parent();

                valParent.find('.option-selected').text(desOption);
                valParent.find('input[type=hidden]').val(valOption);
            });

        jQuery(window).click(function () {
            $('ul.filters-select').slideUp(400);
            $('.wrap_fakeselect').removeClass('on');
        });
    },
    placeholders: function () {
        $('fieldset label').on('click',
            function () {
                $(this).parent().find('input').focus();
            })
        $('input[type=text],input[type=email]').on('focus',
            function () {
                if ($(this).val() === '') {
                    //console.log('');
                }
                $(this).parent().addClass('onfocus');
            })
        $('input[type=text],input[type=email]').on('focusout',
            function () {
                if ($(this).val() === '') {
                    $(this).parent().removeClass('onfocus');
                }
            });
    }
};

var tipo_sol = {
    selects: function () {
        $('.wrap_fakeselect').on('click',
            function (e) {
                e.stopPropagation();

                var options = $(this).find('ul.filters-select');
                if ($(this).hasClass('on')) {
                    $(this).removeClass('on');
                    options.slideUp(400);
                } else {
                    $(this).addClass('on');
                    options.slideDown(400);
                }
            });
    }
}

var fakeFields_codigo = {
    selects: function () {
        $('.wrap_fakeselect').on('click',
            function (e) {
                e.stopPropagation();
                var options = $(this).find('ul.filters-select');
                if ($(this).hasClass('on')) {
                    $(this).removeClass('on');
                    options.slideUp(400);
                } else {
                    $(this).addClass('on');
                    options.slideDown(400);
                }
            });

        $('ul.filters-select li').on('click',
            function () {
                var valText = $(this).text();
                var valOption = $(this).data().value;
                var valTipo = $(this).data().tipo;
                if (valTipo === 'tipsol') {
                    var usaSedeDes = $(this).data().usasededes;
                    $('#sedesol').html('Seleccione una sede');
                    $('#sede_sol').val('');
                    if (usaSedeDes === 'SI') {
                        $('#UsaSedeDes').val('SI');
                        $('#sedes').removeClass('d-none');
                    } else {
                        $('#UsaSedeDes').val('NO');
                        $('#sedes').addClass('d-none');
                    }

                    var usaCarreraDes = $(this).data().usacarrerades;
                    $('#carrsol').html('Seleccione una carrera');
                    $('#carrera_sol').val('');
                    if (usaCarreraDes === 'SI') {
                        $('#UsaCarreraDes').val('SI');
                        $('#carreras').removeClass('d-none');
                    } else {
                        $('#UsaCarreraDes').val('NO');
                        $('#carreras').addClass('d-none');
                    }

                    var usaElimina = $(this).data().elimina;
                    var usaExamen = $(this).data().examen;

                    $('#codramo').html('Seleccione una asignatura');
                    $('#cod_ramo').val('');
                    $('#cod_seccion').val('');
                    if (usaElimina === 'SI') {
                        $('#UsaElimina').val('SI');
                        if (usaExamen == 'SI') {
                            $('.lst-asignaturas').addClass('d-none');
                            $('.asig-status-R').removeClass('d-none');
                        }
                        else {
                            $('.lst-asignaturas').removeClass('d-none');
                        }
                        $('#asignatura').removeClass('d-none');
                    } else {
                        $('#UsaElimina').val('NO');
                        $('.lst-asignaturas').removeClass('d-none');
                        $('#asignatura').addClass('d-none');
                    }

                } else if (valTipo === 'selsol') {
                    $('#carrsol').html('Seleccione una carrera');
                    $('#carrera_sol').val('');
                    var sedes = JSON.parse($('#dataResult').val()).data.Sedes;
                    let carreras;
                    sedes.forEach(function (opc, ind) {
                        if (opc.CodSede === valOption) {
                            carreras = opc.Carreras;
                        }
                    });
                    var lstCarreras = setCarreras(carreras);
                    $('#lstCarrera').html(lstCarreras);

                    $('#lstCarrera li').on('click',
                        function (e) {
                            let valText = $(this).text();
                            let valOption = $(this).data().value;
                            let valParent = $(this).parent().parent();
                            valParent.find('.option-selected').text(valText);
                            valParent.find('input[type=hidden]').val(valOption);
                        });
                }

                var valParent = $(this).parent().parent();

                valParent.find('.option-selected').text(valText);
                valParent.find('input[type=hidden]').val(valOption);

                if (valTipo === 'motivo') {
                    $('#motivo').val(valText);
                } else if (valTipo === 'selasig') {
                    var valCodsecc = $(this).data().secc;
                    $('#cod_seccion').val(valCodsecc);
                }

            });

        jQuery(window).click(function () {
            $('ul.filters-select').slideUp(400);
            $('.wrap_fakeselect').removeClass('on');
        });
    },
    placeholders: function () {
        $('fieldset label').on('click',
            function () {
                $(this).parent().find('input').focus();
            })
        $('input[type=text],input[type=email]').on('focus',
            function () {
                if ($(this).val() === '') {
                    //console.log('');
                }
                $(this).parent().addClass('onfocus');
            })
        $('input[type=text],input[type=email]').on('focusout',
            function () {
                if ($(this).val() === '') {
                    $(this).parent().removeClass('onfocus');
                }
            });
    }
};

var fakeFields_solEspecial = {
    selects: function () {
        $('.wrap_fakeselect').on('click', function (e) {
            $('.wrap_fakeselect, .wrap_fakeselect_search, .wrap_fakeselect_search_check, .wrap_fakeselect_check_text').not(this).removeClass('on');
            $('.wrap_fakeselect ul.filters-select, .wrap_fakeselect_search .wrap-list, .wrap_fakeselect_search_check .wrap-list, .wrap_fakeselect_check_text .wrap-list').not(this).slideUp(400);
            //e.stopPropagation();
            var options = $(this).find('ul.filters-select');
            if ($(this).hasClass('on')) {
                $(this).removeClass('on');
                options.slideUp(400);
            } else {
                $(this).addClass('on');
                options.slideDown(400);
            }
            e.stopPropagation();
        })
        $('.wrap_fakeselect ul.filters-select li').on('click', function () {
            var valOption = $(this).text();
            var valParent = $(this).parent().parent();
            valParent.find('.option-selected').text(valOption);
            valParent.find('input[type=hidden]').val(valOption);
        })
        jQuery(window).click(function () {
            $('.wrap_fakeselect ul.filters-select').slideUp(400);
            $('.wrap_fakeselect').removeClass('on');
        });

    },
    selectSearch: function () {
        $(".wrap_fakeselect_search").on("click", function (e) {
            $('.wrap_fakeselect, .wrap_fakeselect_search, .wrap_fakeselect_search_check, .wrap_fakeselect_check_text').not(this).removeClass('on');
            $('.wrap_fakeselect ul.filters-select, .wrap_fakeselect_search .wrap-list, .wrap_fakeselect_search_check .wrap-list, .wrap_fakeselect_check_text .wrap-list').not(this).slideUp(400);
            //e.stopPropagation();
            var options = $(this).find(".wrap-list");
            if ($(this).hasClass("on")) {
                $(this).removeClass("on");
                options.slideUp(400);
            } else {
                $(this).addClass("on");
                options.slideDown(400);
            }
            e.stopPropagation();
        });
        $(".wrap_fakeselect_search .wrap-list .search input").on("click", function (e) {
            e.stopPropagation();
        });
        $(".wrap_fakeselect_search .wrap-list .search input").on("input", function (e) {
            e.stopPropagation();
            let texto = this.value;
            let origen = this.dataset.origen;
            getListaAsignaturas(origen, texto);
        });
        $(".wrap_fakeselect_search .wrap-list ul.filters-selectx li").on("click", function () {
            var valOption = $(this)[0].dataset.value;
            var valText = $(this).text();
            var valParent = $(this).parent().parent().parent();
            var divParent = $(this).parent().parent().parent().parent();
            //console.log(divParent[0].dataset.value);
            valParent.find('.option-selected').text(valText);
            valParent.find('input[type=hidden]').val(valOption);
        });
        jQuery(window).click(function () {
            $(".wrap_fakeselect_search .wrap-list").slideUp(400);
            $(".wrap_fakeselect_search").removeClass("on");
        });
    },
    selectSearchCheck: function () {
        $(".wrap_fakeselect_search_check .option-selected").on("click", function (e) {
            $('.wrap_fakeselect, .wrap_fakeselect_search, .wrap_fakeselect_search_check, .wrap_fakeselect_check_text').not($(this).parent()).removeClass('on');
            $('.wrap_fakeselect ul.filters-select, .wrap_fakeselect_search .wrap-list, .wrap_fakeselect_search_check .wrap-list, .wrap_fakeselect_check_text .wrap-list').not($(this).parent().find(".wrap-list")).slideUp(400);

            var options = $(this).parent().find(".wrap-list");
            $(this).parent().toggleClass("on");
            options.slideToggle(400);
            e.stopPropagation();
        });
        $(".wrap_fakeselect_search_check .wrap-list .search input, .wrap_fakeselect_search_check").on("click", function (e) {
            e.stopPropagation();
            console.log("search");
        });
        $(".wrap_fakeselect_search_check .wrap-list .checkbox").change(function (e) {
            var selectedCheckboxes = $(this).closest('.wrap_fakeselect_search_check').find('.checkbox:checked');
            var resultText = "";
            var valHidden = $(this).closest('.wrap_fakeselect_search_check').find("input[type=hidden]");
            var elem_result = $(this).closest('.wrap_fakeselect_search_check').find('#result');
            var values = $.map(selectedCheckboxes, function (element) {
                return $(element).val();
            });

            if (values.length == 0) {
                resultText = "Seleccione";
            }

            if (values.length > 0) {
                resultText = "<span>" + values[0] + "</span>";
            }
            if (values.length > 1) {
                resultText += "<span> ... </span><span>" + (values.length - 1) + "</span>";
            }

            elem_result.html(resultText);
            valHidden.val(values);
        });
        $(".wrap_fakeselect_search_check .wrap-list .select-all").change(function () {
            var isChecked = $(this).prop("checked");
            var elem_result = $(this).closest('.wrap_fakeselect_search_check').find('#result');
            var valHidden = $(this).closest('.wrap_fakeselect_search_check').find("input[type=hidden]");
            if (isChecked) {
                elem_result.html("<span> Seleccionado todos </span>");
            } else {
                elem_result.html("");
            }
            $(this).closest('.wrap_fakeselect_search_check').find('.checkbox').prop("checked", isChecked);
            var selectedCheckboxes = $(this).closest('.wrap_fakeselect_search_check').find('.checkbox:checked');
            var values = $.map(selectedCheckboxes, function (element) {
                return $(element).val();
            });
            valHidden.val(values);
        });
        $("body").on('click', function () {
            $(".wrap_fakeselect_search_check .wrap-list").slideUp(400);
            $(".wrap_fakeselect_search_check").removeClass("on");
        });
    },
    selectCheckText: function () {
        var valOr = "";
        var valCus = "";
        $(".wrap_fakeselect_check_text .option-selected").on("click", function (e) {
            $('.wrap_fakeselect, .wrap_fakeselect_search, .wrap_fakeselect_search_check, .wrap_fakeselect_check_text').not($(this).parent()).removeClass('on');
            $('.wrap_fakeselect ul.filters-select, .wrap_fakeselect_search .wrap-list, .wrap_fakeselect_search_check .wrap-list, .wrap_fakeselect_check_text .wrap-list').not($(this).parent().find(".wrap-list")).slideUp(400);

            var options = $(this).parent().find(".wrap-list");
            $(this).parent().toggleClass("on");
            options.slideToggle(400);
            e.stopPropagation();
        });
        $(".wrap_fakeselect_check_text .wrap-list .search input, .wrap_fakeselect_check_text").on("click", function (e) {
            e.stopPropagation();
            console.log("search");
        });
        $(".wrap_fakeselect_check_text .wrap-list .checkbox").change(function (e) {
            var selectedCheckboxes = $(this).closest('.wrap_fakeselect_check_text').find('.checkbox:checked');
            var selectedCheckboxSpan = $(this).closest('.wrap_fakeselect_check_text').find('.checkbox:checked').next('span');
            var selectedInputText = $(this).parent().find('input[type=text]');
            var valHidden = $(this).closest('.wrap_fakeselect_check_text').find("input[type=hidden]");
            var elem_result = $(this).closest('.wrap_fakeselect_check_text').find('#result');

            if (this.checked) {
                selectedInputText.prop('disabled', false).val(0);
            } else {
                selectedInputText.prop('disabled', true).val("");
            }

            var values = $.map(selectedCheckboxSpan, function (element) {
                return $(element).text();
            });
            var elemvalues = $.map(selectedCheckboxes, function (element, i) {
                return $(element).val();
            });

            var resultInput = "";
            var itemsInputs = $(this).closest('.wrap_fakeselect_check_text').find('input[type=text]:enabled');
            var valueSpan = $.map(itemsInputs, function (element, i) {
                var el = "<span>" + values[i] + ";" + $(element).val() + "</span>";
                return el;
            });
            var textValues = $.map(itemsInputs, function (element, i) {
                var conca = elemvalues[i] + ";" + $(element).val();
                return conca;
            });
            if (valueSpan.length == 0) {
                resultInput = "<span class='selec'>Seleccione</span>";
            }
            if (valueSpan.length > 3) {
                resultInput = valueSpan[0] + "," + valueSpan[1] + "," + valueSpan[2] + "<span class='sus'> ... </span>";
            } else {
                resultInput += valueSpan;
            }

            valOr = values;
            valCus = elemvalues;

            elem_result.html(resultInput);
            valHidden.val(textValues);
        });
        $(".wrap_fakeselect_check_text .wrap-list input[type=text]").on('focus', function () {

        }).on('blur', function () {
            var resultInput = "";
            var itemsInputs = $(this).closest('.wrap_fakeselect_check_text').find('input[type=text]:enabled');
            var valHidden = $(this).closest('.wrap_fakeselect_check_text').find("input[type=hidden]");
            var elem_result = $(this).closest('.wrap_fakeselect_check_text').find('#result');

            var valueSpan = $.map(itemsInputs, function (element, i) {
                var el = "<span>" + valOr[i] + ";" + $(element).val() + "</span>";
                return el;
            });
            var textValues = $.map(itemsInputs, function (element, i) {
                var conca = valCus[i] + ";" + $(element).val();
                return conca;
            });

            if (valueSpan.length > 0) {
                resultInput += valueSpan;
            }

            elem_result.html(resultInput);
            valHidden.val(textValues);
        });
        $("body").on('click', function () {
            $(".wrap_fakeselect_check_text .wrap-list").slideUp(400);
            $(".wrap_fakeselect_check_text").removeClass("on");
        });
    },
    placeholders: function () {
        $('fieldset label').on('click', function () {
            $(this).parent().find('input').focus();
        })
        $('input[type=text],input[type=email]').on('focus', function () {
            if ($(this).val() == '') {

            }
            $(this).parent().addClass('onfocus');
        })
        $('input[type=text],input[type=email]').on('focusout', function () {
            if ($(this).val() == '') {
                $(this).parent().removeClass('onfocus');
            }

        })
    }
}

var fakeFields_ingresoFalta = {
    selectSearch: function () {
        $(".wrap_fakeselect_search").on("click", function (e) {
            $('.wrap_fakeselect, .wrap_fakeselect_search, .wrap_fakeselect_search_check, .wrap_fakeselect_check_text').not(this).removeClass('on');
            $('.wrap_fakeselect ul.filters-select, .wrap_fakeselect_search .wrap-list, .wrap_fakeselect_search_check .wrap-list, .wrap_fakeselect_check_text .wrap-list').not(this).slideUp(400);
            //e.stopPropagation();
            var options = $(this).find(".wrap-list");
            if ($(this).hasClass("on")) {
                $(this).removeClass("on");
                options.slideUp(400);
            } else {
                $(this).addClass("on");
                options.slideDown(400);
            }
            e.stopPropagation();
        });
        $(".wrap_fakeselect_search .wrap-list .search input").on("click", function (e) {
            e.stopPropagation();
        });
        $(".wrap_fakeselect_search .wrap-list .search input").on("input", function (e) {
            e.stopPropagation();
            let texto = this.value;
            getAlumnosEscuadron(texto);
        });
        $(".wrap_fakeselect_search .wrap-list ul.filters-selectx li").on("click", function () {
            var valOption = $(this)[0].dataset.value;
            var valText = $(this).text();
            var valParent = $(this).parent().parent().parent();
            var divParent = $(this).parent().parent().parent().parent();
            //console.log(divParent[0].dataset.value);
            valParent.find('.option-selected').text(valText);
            valParent.find('input[type=hidden]').val(valOption);
            getDatosAlumno(valOption);
        });
        jQuery(window).click(function () {
            $(".wrap_fakeselect_search .wrap-list").slideUp(400);
            $(".wrap_fakeselect_search").removeClass("on");
        });
    }
}

var setLightbox = {
    go: function () {
        $('#set_confirm').on('click',
            function (e) {
                e.preventDefault();
                if (usagrabadoparcial === '0') {
                    $('#enviar-encuesta').addClass('on');
                } else {
                    if (allComplete()) {
                        $('#enviar-encuesta').addClass('on');
                    } else {
                        let quest = JSON.parse($('#respuestas').val());
                        let resp = [];
                        quest.forEach(function (x) {
                            if (x.DepPregunta !== '' && x.pregunta !== '000' && x.respuesta === '') {
                                let dep = quest.filter(function (c) {
                                    return c.pregunta == x.DepPregunta;
                                });

                                if (dep[0].respuesta == x.DepRespuesta) {
                                    resp.push(x.NroPregunta);
                                }
                            } else {
                                if (x.respuesta === '' && x.pregunta !== '000') {
                                    resp.push(x.NroPregunta);
                                }
                            }
                        });
                        showAlert('Debe completar todas las preguntas, complete las preguntas: ' + resp.join());
                    }
                }
            });
        $('.close-lb').on('click',
            function (e) {
                e.preventDefault();
                if (jQuery(this).closest('.wrap-salir')[0] != null) {
                    if (jQuery(this).closest('.wrap-salir')[0].id == 'lb-mensaje-error') {
                        $('#lb-mensaje-error').removeClass('on');
                    } else {
                        $('.wrap-confirm').removeClass('on');
                    }
                }

                if ($('#btnag') != null) {
                    $('.wrap-confirm').removeClass('on');
                }

                if (app == 1) {
                    limpiarRequeridos();
                    limpiarSeleccionados();
                }
            });
        $('#alert-ok').on('click',
            function (e) {
                e.preventDefault();
                jQuery(this).closest('.wrap-salir').removeClass('on');

                let inicioSso = sessionStorage.getItem("ingreso-sso");

                if (inicioSso == "SI") {
                    logoutAd(sessionStorage.getItem("homeId"));
                }
            });
        $('#alert-office').on('click',
            function (e) {
                e.preventDefault();
                jQuery(this).closest('.wrap-salir').removeClass('on');
                logoutAd(sessionStorage.getItem("homeId"));
            });
    }
};

var setLightboxsalir = {
    go: function () {
        $('#sign-out').on('click',
            function (e) {
                e.preventDefault();
                $('#lb-salir').addClass('on');
            });
        $('#sign-out-movil').on('click',
            function (e) {
                e.preventDefault();
                $('#lb-salir').addClass('on');
            });
        //$('.close-lb').on('click',
        //    function (e) {
        //        e.preventDefault();
        //        jQuery(this).closest('.wrap-salir').removeClass('on');
        //    });
        $('.cancel-log-out').on('click',
            function (e) {
                e.preventDefault();
                jQuery(this).closest('.wrap-salir').removeClass('on');
            });
        $('.ok-log-out').on('click',
            function (e) {
                e.preventDefault();
                CerrarSesion();
            });
    }
};

var tablesOpenClose = {
    go: function (x) {
        $('.close-open-as').on('click',
            function (e) {
                e.preventDefault();
                var closethis = $(this).parent().find(x);
                var textthis = $(this).text();
                if ($(this).hasClass('on')) {
                    closethis.slideUp();
                    $(this).parent().removeClass('on');
                    $(this).removeClass('on');
                    $(this).html('<i></i><span>Ver encuesta</span> <span class="icon">+</span>');
                } else {
                    closethis.slideDown();
                    $(this).parent().addClass('on');
                    $(this).addClass('on');
                    $(this).html('<i></i><span>Ocultar</span> <span class="icon">-</span>');
                }

            });
    }
};

var closeAlerts = {
    go: function () {
        jQuery('.alert-wrapper a.close-alert').on('click',
            function (e) {
                e.preventDefault();
                jQuery(this).parent().fadeOut();
            });
    }
};

var btnmore = {
    go: function () {
        jQuery('.btn-more, .texlee').on('click', function (e) {
            e.preventDefault();
            //jQuery(this).toggleClass('activo');
            //jQuery(this).closest('tr').next('.deta').slideToggle();
            if (jQuery(this).hasClass("activo")) {
                jQuery(this).removeClass('activo');
                jQuery(this).closest('tr').next('.deta').css({ "display": "none" })
            }
            else {
                jQuery(this).addClass('activo');
                jQuery(this).closest('tr').next('.deta').css({ "display": "table-row" })
            }
        });
    }
};

var btnmoredesk = {
    go: function () {
        jQuery(".btn-more-desk").on("click", function (e) {
            e.preventDefault();
            jQuery(this).toggleClass("activo");
            var screenWidth = $(window).width();
            if (screenWidth <= 768) {
                //jQuery(this).closest("tr").next(".deta-desk").next(".deta").slideToggle();
                if (jQuery(this).hasClass("activo")) {
                    jQuery(this).closest("tr").next(".deta-desk").next(".deta").css({ "display": "table-row" })
                } else {
                    jQuery(this).closest("tr").next(".deta-desk").next(".deta").css({ "display": "none" })
                }
            } else {
                //jQuery(this).closest("tr").next(".deta-desk").slideToggle();
                if (jQuery(this).hasClass("activo")) {
                    jQuery(this).closest("tr").next(".deta-desk").css({ "display": "table-row" })
                } else {
                    jQuery(this).closest("tr").next(".deta-desk").css({ "display": "none" })
                }
            }
        });
    },
};

var btnarrow = {
    go: function () {
        jQuery('.btn-arrow').on('click',
            function (e) {
                e.preventDefault();
                jQuery(this).toggleClass('open');
                jQuery(this).closest('tr').addClass('viewed').next('.descrip').slideToggle('fast');
            });
    }
};

var openclosedocsem = {
    go: function () {
        jQuery('.open-close-docsem').on('click',
            function (e) {
                e.preventDefault();
                if ($(this).hasClass('on')) {
                    $(this).parent().next().slideUp(600);
                    $(this).removeClass('on');
                } else {
                    $(this).parent().next().slideDown(600);
                    $(this).addClass('on');
                }
            });
    }
};

var downloadfile = {
    go: function () {
        $('.btn-pdf, .btn-des, .btn-ver-doc, .btn-eli, .btn-doc, .btn-historial, .texver').on('click',
            function (e) {
                e.preventDefault();
                window.open(e.target.dataset.urlfile, '_blank');
                return false;
            });
    }
};

var inputfilebox = {
    go: function () {
        jQuery('.inputfile').on('change',
            function () {
                var id = this.id.replace('file_', '');
                var eleid = jQuery(this).attr('id');
                if (jQuery(this)[0].files.length > 0) {
                    var value = jQuery(this)[0].files[0].name;

                    jQuery('#' + eleid).next().find('#file-name_' + id).text(value);
                    var file;
                    if ((file = this.files[0])) {
                        var reader = new FileReader();
                        reader.onloadend = function () {
                            // Since it contains the Data URI, we should remove the prefix and keep only Base64 string
                            var b64 = reader.result.replace(/^data:.+;base64,/, '');
                            $('#fileb64_' + id).val(b64);
                        };
                        reader.readAsDataURL(file);
                    }
                }
            });
    }
};

var liscur = {
    go: function () {
        jQuery('.liscur').on('click',
            function (e) {
                if (jQuery(this).hasClass("activo")) {
                    jQuery(this).removeClass("activo")
                    $(this).parent().parent().next().css({ "display": "none" })
                } else {
                    jQuery(this).addClass("activo")
                    $(this).parent().parent().next().css({ "display": "table-row" })
                }
                //jQuery(this).toggleClass('activo');
                //jQuery(this).closest('tr').next('.deta').slideToggle();
            });
    }
};

var popuprev = {
    go: function () {
        jQuery('.btn-opsins a, .btn-env, .pagapc, .btnag, .btn-cuota').on('click',
            function (e) {
                e.preventDefault();
                var dataid = jQuery(this).attr('data-id');
                jQuery('#' + dataid).addClass('on');
            });
    }
};

function showAlert(message) {
    $('#lb-titulo-error').html(message);
    $('#lb-mensaje-error').addClass('on');
}

function download(link) {
    window.location = link;
    return false;
}

function setCarreras(carrera) {
    let carreras = '<li data-value="">Seleccione una carrera</li>';
    carrera.forEach(function (c, i) {
        carreras += '<li data-value="' + c.Carrer + '">' + c.Nombre + '</li>';
    });
    return carreras;
}

var sliderdias = {
    go: function () {
        $(".dias").slick({
            slidesToShow: 1,
            infinite: false,
            prevArrow: '<a href="#" class="slick-prev"><i class="far fa-chevron-left"></i></a>',
            nextArrow: '<a href="#" class="slick-next"><i class="far fa-chevron-right"></i></a>',
        });
    },
};

var solEspecialDesplegable = {
    go: function () {
        $(document).on("click", ".item .cabecera .btn-detalle .btn-detalle-inactivo", function () {
            $(this).css({ "display": "none" })
            $(this).parent().find(".btn-detalle-activo").css({ "display": "flex" })
            $(this).parent().parent().next().slideDown();
        })

        $(document).on("click", ".item .cabecera .btn-detalle .btn-detalle-activo", function () {
            $(this).css({ "display": "none" })
            $(this).parent().find(".btn-detalle-inactivo").css({ "display": "flex" })
            $(this).parent().parent().next().slideUp();
        })
    }
}

var openReg = {
    go: function () {
        $(".open-close-reg").on("click", function (e) {
            e.preventDefault();
            if ($(this).hasClass("clos")) {
                $(this).parent().siblings().eq(1).css({ "font-weight": "normal" })
                $(this).closest(".wrap-reg>div:first-child").next().slideUp();
                $(this).removeClass("clos");
                $(this).closest(".wrap-reg").removeClass("activo");
            } else {
                $(this).parent().siblings().eq(1).css({ "font-weight": "600" })
                $(this).closest(".wrap-reg>div:first-child").next().slideDown();
                $(this).addClass("clos");
                $(this).closest(".wrap-reg").addClass("activo");
            }
        });
    },
};

var historico = {
    go: function () {
        //Google Chart
        google.charts.load('current', { 'packages': ['corechart'] });

        $(document).on("click", "div.historico-grafico div.cerrar-historico-grafico svg", function () {
            $("div.historico-overlay").fadeOut();
            $("div.historico-grafico").fadeOut();
        })

        $(document).on("click", ".item-tabla > .cabecera > .cabecera-desplegable > svg", function () {
            if ($(this).hasClass("plus")) {
                $(this).hide();
                $(this).siblings().show();
                $(this).parent().parent().siblings().slideDown();
            }
            else {
                $(this).hide();
                $(this).siblings().show();
                $(this).parent().parent().siblings().slideUp();
            }
        })

        $(document).on("click", ".item-tabla > .cuerpo .cuerpo-desplegable > svg", function () {
            if ($(this).hasClass("inactivo")) {
                $(this).hide();
                $(this).siblings().show();
                $(this).parent().parent().siblings(".cuerpo-lista").slideDown();
                $(this).parent().parent().siblings(".cuerpo-lista-movil").slideDown();
            }
            else {
                $(this).hide();
                $(this).siblings().show();
                $(this).parent().parent().siblings(".cuerpo-lista").slideUp();
                $(this).parent().parent().siblings(".cuerpo-lista-movil").slideUp();
            }
        })
    }
}

var replicaFaltas = {
    go: function () {
        $(document).on("click", "div.replica-de-faltas a.verDetalle", function (e) {
            e.preventDefault();
            $("div.overlay-detalle-replica-de-faltas").fadeIn();
            $("div.detalle-replica-de-faltas").fadeIn();

            var scrollY = $(window).scrollTop();
            var modalOffset = $('div.detalle-replica-de-faltas').offset().top;
            var nuevaPosicion = scrollY + modalOffset;
            //console.log("scrollY", scrollY, "nuevaPosicion", nuevaPosicion)
            if (nuevaPosicion > scrollY) {
                nuevaPosicion = scrollY + 65
                //console.log("nuevaPosicion", nuevaPosicion);
            }
            else {
                nuevaPosicion = 65
                //console.log("nuevaPosicion", nuevaPosicion);
            }
            $("div.detalle-replica-de-faltas").css('top', nuevaPosicion + 'px');
        })

        $(document).on("click", "div.detalle-replica-de-faltas svg.cerrarDetalle", function () {
            $("div.overlay-detalle-replica-de-faltas").fadeOut();
            $("div.detalle-replica-de-faltas").fadeOut();
        })

        $(document).on("click", "div.detalle-replica-de-faltas #cancelar", function (e) {
            e.preventDefault();
            $("div.overlay-detalle-replica-de-faltas").fadeOut();
            $("div.detalle-replica-de-faltas").fadeOut();
        })

        //$(document).on("click", "div.detalle-replica-de-faltas #enviar", function (e) {
        //    e.preventDefault();
        //    $("div.detalle-replica-de-faltas").fadeOut();
        //    $("div.detalle-replica-de-faltas-final").fadeIn();
        //})

        $(document).on("click", "div.detalle-replica-de-faltas-final #btnFinal, div.detalle-replica-de-faltas-final svg.cerrarFinal", function (e) {
            e.preventDefault();
            $("div.overlay-detalle-replica-de-faltas").fadeOut();
            $("div.detalle-replica-de-faltas-final").fadeOut();
            //$("html, body").animate({ scrollTop: 0 }, 600);
        })
    }
}

var evaluacionReplicaFaltas = {
    go: function () {
        $(document).on("click", "tr.item-movil svg", function () {
            if ($(this).hasClass("plus")) {
                $(this).hide();
                $(this).siblings().show();
                $(this).parent().parent().siblings().find("div.desplegable").addClass("activado")
                $(this).parent().parent().siblings().find("div.desplegable").slideDown();
            }
            else {
                $(this).hide();
                $(this).siblings().show();
                $(this).parent().parent().siblings().find("div.desplegable").removeClass("activado")
                $(this).parent().parent().siblings().find("div.desplegable").slideUp();
            }
        })

        $(document).on("click", "a.btnEditar, a.btnEditarMovil", function (e) {
            e.preventDefault();

            var scrollY = $(window).scrollTop();
            var modalOffset = $('div.detalle-evaluacion-de-replica-de-falta').offset().top;
            var nuevaPosicion = scrollY + modalOffset;
            //console.log("scrollY", scrollY, "nuevaPosicion", nuevaPosicion)
            if (nuevaPosicion > scrollY) {
                nuevaPosicion = scrollY + 65
                //console.log("nuevaPosicion", nuevaPosicion);
            }
            else {
                nuevaPosicion = 65
                //console.log("nuevaPosicion", nuevaPosicion);
            }
            $("div.detalle-evaluacion-de-replica-de-falta").css('top', nuevaPosicion + 'px');
        })

        $(document).on("click", "div.detalle-evaluacion-de-replica-de-falta svg.cerrarDetalle", function () {
            $("div.overlay-evaluacion-de-replica-de-falta").fadeOut();
            $("div.detalle-evaluacion-de-replica-de-falta").fadeOut();
        })

        $(document).on("click", "#rechazar", function (e) {
            e.preventDefault();
            $("div.detalle-evaluacion-de-replica-de-falta").fadeOut();
            $("div.overlay-evaluacion-de-replica-de-falta").fadeOut();
        })

        $(document).on("click", "div.detalle-evaluacion-de-replica-de-falta-final, div.detalle-evaluacion-de-replica-de-falta-final svg.cerrarFinal", function () {
            $("div.overlay-evaluacion-de-replica-de-falta").fadeOut();
            $("div.detalle-evaluacion-de-replica-de-falta-final").fadeOut();
            //$("html, body").animate({ scrollTop: 0 }, 600);
        })
    }
}

var resumenFaltasValores = {
    go: function () {
        //Google Chart
        google.charts.load('current', { 'packages': ['corechart'] });

        //function drawChart() {
        //    var data = new google.visualization.DataTable();
        //    data.addColumn('string', 'Valor �tico');
        //    data.addColumn('number', 'Cantidad');
        //    data.addRows([
        //        ['C�digo - Nombre valor 1', 29.41],
        //        ['C�digo - Nombre valor 2', 29.41],
        //        ['C�digo - Nombre valor 3', 49.18]
        //    ]);

        //    var options = {
        //        //title: 'Popularity of Types of Pizza',
        //        //sliceVisibilityThreshold: .2,
        //        legend: "none",
        //        tooltip: { trigger: 'none' },
        //        colors: ['#2D4EA2', '#7080bb', '#d6dbeb'],
        //        pieSliceText: 'value',
        //        /*pieSliceTextStyle: {
        //          color: 'blue'
        //        }*/
        //    };

        //    var chart = new google.visualization.PieChart(document.querySelector(".diagrama"));
        //    chart.draw(data, options);

        //    var chartMovil = new google.visualization.PieChart(document.querySelector(".diagrama-movil"));
        //    chartMovil.draw(data, options);
        //}

        $(document).on("click", "div.resumen-faltas-valores div.lista div.item-lista > table tbody td a", function (e) {
            e.preventDefault();
            let dataset = e.currentTarget.dataset;
            if ($(this).find("svg.mas").is(":visible")) {
                $(this).find("svg.mas").hide();
                $(this).find("svg.menos").show();
                $(this).find("span").html("Ver menos")
                $(this).parent().parent().parent().parent().siblings().slideDown();
            }
            else {
                $(this).find("svg.mas").show();
                $(this).find("svg.menos").hide();
                $(this).find("span").html("Ver m&aacutes")
                $(this).parent().parent().parent().parent().siblings().slideUp();
            }

            google.charts.setOnLoadCallback(drawChart(dataset.year, dataset.periodo));
        })

        $(document).on("click", "div.resumen-faltas-valores div.lista-movil div.item-movil > table a", function (e) {
            e.preventDefault();
            let dataset = e.currentTarget.dataset;
            if ($(this).find("svg.mas").is(":visible")) {
                $(this).find("svg.mas").hide();
                $(this).find("svg.menos").show();
                $(this).find("span").html("Ver menos")
                $(this).parent().parent().parent().parent().siblings().slideDown();
            }
            else {
                $(this).find("svg.mas").show();
                $(this).find("svg.menos").hide();
                $(this).find("span").html("Ver m&aacutes")
                $(this).parent().parent().parent().parent().siblings().slideUp();
            }

            google.charts.setOnLoadCallback(drawChart(dataset.year, dataset.periodo));
        })
    }
}
var detalleAsistencia = {
    go: function () {
        $("svg.detalle-ass-mas").on("click", function (e) {
            e.preventDefault();
            $(this).hide();
            $(this).siblings().show();
            $(this).parent().parent().next().css({ "display": "table-row" })
        });

        $("svg.detalle-ass-menos").on("click", function (e) {
            e.preventDefault();
            $(this).hide();
            $(this).siblings().show();
            $(this).parent().parent().next().css({ "display": "none" })
        });
    },
};

var inscripcionNormalAsignaturas = {
    go: function () {
        $(document).on("click", "a[data-id='revsec']", function () {
            $("#revsec").addClass("on")
        })
        $(document).on("click", "#revsec .close-lb", function () {
            $("#revsec").removeClass("on")
        })

        $(document).on("click", "a[data-id='terins']", function () {
            $("#terins").addClass("on")
        })
        $(document).on("click", "#terins input[name='cancel'], #terins .close-lb", function (e) {
            e.preventDefault();
            $("#terins").removeClass("on")
        })

        $(document).on("click", "#revsec .liscur", function () {
            if (jQuery(this).hasClass("activado")) {
                jQuery(this).removeClass("activado")
                $(this).parent().parent().next().css({ "display": "none" })
            }
            else {
                jQuery(this).addClass("activado")
                $(this).parent().parent().next().css({ "display": "table-row" })
            }
        })

        $(document).on("click", "a[data-id='oasig']", function () {
            $("#oasig").addClass("on")
        })
        $(document).on("click", "#oasig .close-lb", function () {
            $("#oasig").removeClass("on")
        })

        $(document).on("click", "#oasig .liscur", function () {
            if (jQuery(this).hasClass("activado")) {
                jQuery(this).removeClass("activado")
                $(this).parent().parent().next().css({ "display": "none" })
            }
            else {
                jQuery(this).addClass("activado")
                $(this).parent().parent().next().css({ "display": "table-row" })
            }
        })

        $(document).on("click", ".cont-cuestionario.inscur .btn-more", function (e) {
            e.preventDefault();
            if (jQuery(this).hasClass("activado")) {
                jQuery(this).removeClass("activado")
                $(this).parent().parent().next().css({ "display": "none" })
            }
            else {
                jQuery(this).addClass("activado")
                $(this).parent().parent().next().css({ "display": "table-row" })
            }
        })
    }
}

var popup = {
    go: function () {

        $(document).on("click", "#popup a", function (e) {
            e.preventDefault();
            if (jQuery("#popup").hasClass("on")) {
                jQuery("#popup").removeClass("on")
            }
        })

    }
}

var tacometro = {
    go: function () {
        google.charts.load('current', { 'packages': ['gauge'] });
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            //var data = google.visualization.arrayToDataTable([
            //    ['Label', 'Value'],
            //    ['', 65]
            //]);

            var options = {
                width: 120, height: 120,
                redFrom: 0, redTo: 40,
                yellowFrom: 40, yellowTo: 70,
                greenFrom: 70, greenTo: 100,
                minorTicks: 5,
                max: 100,
                min: 0,
                majorTicks: ['0', '20', '40', '60', '80', '100'],
                animation: { duration: 1000, easing: 'out' },
                forceIFrame: true,
                startAngle: -90,
                endAngle: 90
            };

            $('.grafico-tacometro').map(function (e, x) {
                let valor = $('#' + x.id)[0].dataset.valor;
                if (valor != '') {
                    let data = google.visualization.arrayToDataTable([
                        ['Label', 'Value'],
                        ['', parseInt(valor)]
                    ]);

                    let chart = new google.visualization.Gauge(document.getElementById(x.id));
                    chart.draw(data, options);

                    let gaugeChart = document.getElementById(x.id);
                }                
            });

            //var chart = new google.visualization.Gauge(document.getElementById('gauge_chart'));
            //chart.draw(data, options);

            //var gaugeChart = document.getElementById('gauge_chart');

            //var chart = new google.visualization.Gauge(document.getElementById('gauge_chart_2'));
            //chart.draw(data, options);

            //var gaugeChart = document.getElementById('gauge_chart_2');

            //var chart = new google.visualization.Gauge(document.getElementById('gauge_chart_3'));
            //chart.draw(data, options);

            //var gaugeChart = document.getElementById('gauge_chart_3');


            //var chart = new google.visualization.Gauge(document.getElementById('gauge_chart_mobile'));
            //chart.draw(data, options);

            //var gaugeChart = document.getElementById('gauge_chart_mobile');

            //var chart = new google.visualization.Gauge(document.getElementById('gauge_chart_mobile_2'));
            //chart.draw(data, options);

            //var gaugeChart = document.getElementById('gauge_chart_mobile_2');

            //var chart = new google.visualization.Gauge(document.getElementById('gauge_chart_mobile_3'));
            //chart.draw(data, options);

            //var gaugeChart = document.getElementById('gauge_chart_mobile_3');

            removeGreyCircles();
        }

        function removeGreyCircles() {
            var circles = document.querySelectorAll('#gauge_chart svg circle, #gauge_chart_2 svg circle, #gauge_chart_3 svg circle');
            circles.forEach(function (circle) {
                var strokeColor = circle.getAttribute('stroke');
                var fillColor = circle.getAttribute('fill');

                if ((strokeColor === '#333333' && fillColor === '#cccccc') ||
                    (strokeColor === '#e0e0e0' && fillColor === '#f7f7f7')) {
                    circle.style.display = 'none'; // Ocultamos el círculo
                }
            });
        }
    }
}

var expApre = {
    go: function () {
        $(".result-head").on("click", function () {
            if ($(this).hasClass("on")) {
                $(this).next().slideUp(600);
                $(this).find("div").css({ "transform": "rotate(180deg)" })
                $(this).removeClass("on");
            }
            else {
                $(this).next().slideDown(600);
                $(this).find("div").css({ "transform": "rotate(0deg)" })
                $(this).addClass("on");
            }
        })

        $(".result-content-criterio-header").on("click", function () {
            if ($(this).hasClass("on")) {
                $(this).next().slideUp(600);
                $(this).find("div").css({ "transform": "rotate(180deg)" })
                $(this).removeClass("on");
            }
            else {
                $(this).next().slideDown(600);
                $(this).find("div").css({ "transform": "rotate(0deg)" })
                $(this).addClass("on");
            }
        })

        $(".result-head-icon-mov").on("click", function () {
            if ($(this).hasClass("on")) {
                $(this).parent().parent().next().slideUp(600);
                $(this).removeClass("on");
            }
            else {
                $(this).parent().parent().next().slideDown(600);
                $(this).addClass("on");
            }
        })
    }
}

var ranking = {
    go: function () {
        //Desk
        $(".ranking-merito-estudiantes .sec-desk .cabecera button.btn-plus").click(function (e) {
            e.preventDefault();
            $(this).parent().siblings().slideDown()
            $(this).hide()
            $(this).siblings(".btn-minus").show()
        })
        $(".ranking-merito-estudiantes .sec-desk .cabecera button.btn-minus").click(function (e) {
            e.preventDefault();
            $(this).parent().siblings().slideUp()
            $(this).hide()
            $(this).siblings(".btn-plus").show()
        })

        $(".ranking-merito-estudiantes .sec-desk .cuerpo .sub-cuerpo button.btn-plus").click(function (e) {
            e.preventDefault();
            $(this).parent().parent().siblings().slideDown()
            $(this).hide()
            $(this).siblings(".btn-minus").show()
        })
        $(".ranking-merito-estudiantes .sec-desk .cuerpo .sub-cuerpo button.btn-minus").click(function (e) {
            e.preventDefault();
            $(this).parent().parent().siblings().slideUp()
            $(this).hide()
            $(this).siblings(".btn-plus").show()
        })

        //Mov
        $(".ranking-merito-estudiantes .sec-mov .cabecera button.btn-plus").click(function (e) {
            e.preventDefault();
            $(this).parent().siblings().slideDown()
            $(this).hide()
            $(this).siblings(".btn-minus").show()
        })
        $(".ranking-merito-estudiantes .sec-mov .cabecera button.btn-minus").click(function (e) {
            e.preventDefault();
            $(this).parent().siblings().slideUp()
            $(this).hide()
            $(this).siblings(".btn-plus").show()
        })

        $(".ranking-merito-estudiantes .sec-mov .cuerpo .sub-cuerpo button.btn-plus").click(function (e) {
            e.preventDefault();
            $(this).parent().parent().siblings().slideDown()
            $(this).hide()
            $(this).siblings(".btn-minus").show()
        })
        $(".ranking-merito-estudiantes .sec-mov .cuerpo .sub-cuerpo button.btn-minus").click(function (e) {
            e.preventDefault();
            $(this).parent().parent().siblings().slideUp()
            $(this).hide()
            $(this).siblings(".btn-plus").show()
        })

        $(".ranking-merito-estudiantes .sec-mov .cuerpo .sub-cuerpo .registro-cuerpo button.btn-plus").click(function (e) {
            e.preventDefault();
            $(this).parent().parent().siblings().slideDown()
            $(this).hide()
            $(this).siblings(".btn-minus").show()
        })
        $(".ranking-merito-estudiantes .sec-mov .cuerpo .sub-cuerpo .registro-cuerpo button.btn-minus").click(function (e) {
            e.preventDefault();
            $(this).parent().parent().siblings().slideUp()
            $(this).hide()
            $(this).siblings(".btn-plus").show()
        })
    }
}

var cronograma = {
    go: function () {
        //Desk
        $(".cronograma-actividades .sec-desk .cabecera button.btn-plus").click(function (e) {
            e.preventDefault();
            $(this).parent().siblings().slideDown()
            $(this).hide()
            $(this).siblings(".btn-minus").show()
        })
        $(".cronograma-actividades .sec-desk .cabecera button.btn-minus").click(function (e) {
            e.preventDefault();
            $(this).parent().siblings().slideUp()
            $(this).hide()
            $(this).siblings(".btn-plus").show()
        })

        $(".cronograma-actividades .sec-desk .cuerpo .sub-cuerpo button.btn-plus").click(function (e) {
            e.preventDefault();
            $(this).parent().parent().siblings().slideDown()
            $(this).hide()
            $(this).siblings(".btn-minus").show()
        })
        $(".cronograma-actividades .sec-desk .cuerpo .sub-cuerpo button.btn-minus").click(function (e) {
            e.preventDefault();
            $(this).parent().parent().siblings().slideUp()
            $(this).hide()
            $(this).siblings(".btn-plus").show()
        })

        //Mov
        $(".cronograma-actividades .sec-mov .cabecera button.btn-plus").click(function (e) {
            e.preventDefault();
            $(this).parent().siblings().slideDown()
            $(this).hide()
            $(this).siblings(".btn-minus").show()
        })
        $(".cronograma-actividades .sec-mov .cabecera button.btn-minus").click(function (e) {
            e.preventDefault();
            $(this).parent().siblings().slideUp()
            $(this).hide()
            $(this).siblings(".btn-plus").show()
        })

        $(".cronograma-actividades .sec-mov .cuerpo .sub-cuerpo button.btn-plus").click(function (e) {
            e.preventDefault();
            $(this).parent().parent().siblings().slideDown()
            $(this).hide()
            $(this).siblings(".btn-minus").show()
        })
        $(".cronograma-actividades .sec-mov .cuerpo .sub-cuerpo button.btn-minus").click(function (e) {
            e.preventDefault();
            $(this).parent().parent().siblings().slideUp()
            $(this).hide()
            $(this).siblings(".btn-plus").show()
        })

        $(".cronograma-actividades .sec-mov .cuerpo .sub-cuerpo .registro-cuerpo button.btn-plus").click(function (e) {
            e.preventDefault();
            $(this).parent().parent().siblings().slideDown()
            $(this).hide()
            $(this).siblings(".btn-minus").show()
        })
        $(".cronograma-actividades .sec-mov .cuerpo .sub-cuerpo .registro-cuerpo button.btn-minus").click(function (e) {
            e.preventDefault();
            $(this).parent().parent().siblings().slideUp()
            $(this).hide()
            $(this).siblings(".btn-plus").show()
        })
    }
}

$(document).ready(function () {
    //check_options.go(['.pres','.expo','.expl','.prep']);
    popup.go();
    openQuestions.go();
    fakeFields.selects();
    fakeFields.placeholders();
    setLightbox.go();
    getDevice.type();
    if (device !== "desktop") {
        openCloseMenu.goMobile();
        //openCloseMenu.goMobilemenu();
        openCloseMenu.bottomMenuMobile();
        tablesOpenClose.go('.plegable-mobile');
    } else {
        openCloseMenu.go();
        openCloseMenu.bottomMenu();
        tablesOpenClose.go('.plegable');
    }
    closeAlerts.go();
});