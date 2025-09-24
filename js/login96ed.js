var menu;
var seleccionar_carrera;

$('document').ready(function () {
    $.ajax({
        type: "POST",
        url: rutaWeb + "api/prelogin",
        beforeSend: function () {
            $('#preloader-home').fadeIn();
        },
        success: function (result) {
            var labels = result.localizaciones;
            var labelsHome = result.Home;

            if (document.getElementsByName('user').length > 0) {
                document.getElementsByName('user')[0].placeholder = getLabels('lblUsuario', labels);
                if (document.getElementsByName('password').length > 0) {
                    document.getElementsByName('password')[0].placeholder = getLabels('lblPassword', labels);
                }

                if (document.getElementById('btnLogin') !== null) {
                    document.getElementById('btnLogin').value = getLabels('btnLogin', labels);
                }

                $('#hlinkRecupPassword').html(getLabels('hlinkRecupPassword', labels));
            }

            var opcAdicional = {
                'menu_inferior': []
            };
            opcAdicional.menu_inferior = result.data.menu_inferior;

            opcAdicional.menu_inferior["hasPhone"] = opcAdicional.menu_inferior["telefono"] !== '';
            opcAdicional.menu_inferior["hasWhats"] = opcAdicional.menu_inferior["whatsapp"] !== '';
            opcAdicional.menu_inferior["hasCorreo"] = opcAdicional.menu_inferior["correo"] !== '';

            let menInfe = opcAdicional.menu_inferior["telefono"] !== '' ||
                opcAdicional.menu_inferior["whatsapp"] !== '' ||
                opcAdicional.menu_inferior["correo"] !== '';

            if (menInfe) {
                var strSection = Mustache.render($("#tmpMenuInferior").html(), opcAdicional);
                $('#menu-inferior').html(strSection);
            }
            let lblHelpDesk = getLabels('lblHelpdesk', labels) != "" ? getLabels('lblHelpdesk', labels) : $('#lblHelpdesk').html();
            $('#lblHelpdesk').html(lblHelpDesk);


            let lblPortal = getLabels('lblPortal', labelsHome) != "" ? getLabels('lblPortal', labelsHome) : $('#lblPortal').html();
            let lblTitulo = getLabels('lblTitulo', labelsHome) != "" ? getLabels('lblTitulo', labelsHome) : $('#lblTitulo').html();

            let lblSubTitulo = getLabels('lblSubTitulo', labelsHome) != "" ? getLabels('lblSubTitulo', labelsHome) : $('#lblSubTitulo').html();
            let lblImagen1 = getLabels('lblImagen1', labelsHome) != "" ? getLabels('lblImagen1', labelsHome) : $('#lblImagen1').html();
            let lblImagen2 = getLabels('lblImagen2', labelsHome) != "" ? getLabels('lblImagen2', labelsHome) : $('#lblImagen2').html();
            let lblImagen3 = getLabels('lblImagen3', labelsHome) != "" ? getLabels('lblImagen3', labelsHome) : $('#lblImagen3').html();
            let lblImagen4 = getLabels('lblImagen4', labelsHome) != "" ? getLabels('lblImagen4', labelsHome) : $('#lblImagen4').html();

            $('#lblPortal').html(lblPortal);
            $('#lblTitulo').html(lblTitulo);

            $('#lblSubTitulo').html(lblSubTitulo);
            $('#lblImagen1').html(lblImagen1);
            $('#lblImagen2').html(lblImagen2);
            $('#lblImagen3').html(lblImagen3);
            $('#lblImagen4').html(lblImagen4);

            //if (result.data.conexiones != undefined) {
            //    if (result.data.conexiones.mensaje != undefined && result.data.conexiones.mensaje != '') {
            //        showAlert(result.data.conexiones.mensaje);
            //        $('#btnLogin').remove();
            //        $('#hlinkRecupPassword').remove();
            //    }                
            //} 
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('Error - ' + jqXHR.statusText);
        },
        complete: function () {
            if (jQuery('#preloader-home').length) {
                jQuery('#preloader-home').fadeOut('slow', function () {
                    //jQuery(this).remove();
                });
            }
        }
    });

    $('#btnLogin').click(function (e) {
        e.preventDefault();
        var usuario = $('#user').val();
        var password = $('#password').val();
        var usuarioInterfaz = uInterfaz;
        var passwordInterfaz = pInterfaz;

        if (usuario !== '' && password !== '') {
            password = hex_sha1($('#password').val());

            const data = {
                "usuario": usuario,
                "password": password,
                "usuario_interfaz": usuarioInterfaz,
                "password_interfaz": passwordInterfaz
            };

            $.ajax({
                type: "POST",
                url: rutaWeb + "api/login",
                data: JSON.stringify(data),
                contentType: 'application/json',
                beforeSend: function () {
                    $('#preloader-home').fadeIn();
                },
                success: function (result) {
                    sessionStorage.setItem("ingreso-sso", "NO");

                    if (result.administrativo == "0") {
                        if (result.estado !== "0") {
                            if (jQuery('#preloader-home').length) {
                                jQuery('#preloader-home').fadeOut('slow', function () {
                                    //jQuery(this).remove();
                                });
                            }
                            showAlert(result.detalle_mensaje);
                            if (result.claveexpirada != undefined && result.claveexpirada == 'SI') {
                                $('#alert-ok').on('click',
                                    function (e) {
                                        e.preventDefault();
                                        sessionStorage.setItem("codigo-cambio-clave", usuario);
                                        window.location.href = rutaWeb + 'cambio-clave';
                                    });
                            }
                        } else {
                            menu = result.data.menus.menu;
                            seleccionar_carrera = result.data.seleccionar_carrera;
                            sessionStorage.removeItem("CorreoHome");

                            if (seleccionar_carrera.length > 1) {
                                window.location.href = rutaWeb + 'carrera';
                            } else {
                                if (result.data.muestrapopupinicial == "SI") {
                                    sessionStorage.setItem("muestrapopupinicial", "SI");
                                }
                                window.location.href = rutaWeb;
                            }
                        }
                    }
                    else {
                        window.location.href = rutaWeb + "administrativo";
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log('Error - ' + jqXHR.statusText);
                },
                complete: function () {
                }
            });
        } else {
            showAlert('Ingrese usuario y contraseña');
        }
    });

    $('#btnLoginAdministrativo').click(function (e) {
        e.preventDefault();
        var usuario = $('#codigo_alumno').val();

        if (usuario !== '') {
            const data = {
                "usuario": usuario
            };

            $.ajax({
                type: "POST",
                url: rutaWeb + "api/loginAdministrativo",
                data: JSON.stringify(data),
                contentType: 'application/json',
                beforeSend: function () {
                    $('#preloader-home').fadeIn();
                },
                success: function (result) {
                    let ingresoSSO = sessionStorage.getItem("ingreso-sso");
                    sessionStorage.setItem("ingreso-sso", ingresoSSO);

                    if (result.administrativo == "0") {
                        if (result.estado !== "0") {
                            if (jQuery('#preloader-home').length) {
                                jQuery('#preloader-home').fadeOut('slow', function () {
                                    //jQuery(this).remove();
                                });
                            }
                            showAlert(result.detalle_mensaje);
                            if (result.claveexpirada != undefined && result.claveexpirada == 'SI') {
                                $('#alert-ok').on('click',
                                    function (e) {
                                        e.preventDefault();
                                        sessionStorage.setItem("codigo-cambio-clave", usuario);
                                        window.location.href = rutaWeb + 'cambio-clave';
                                    });
                            }
                        } else {
                            menu = result.data.menus.menu;
                            seleccionar_carrera = result.data.seleccionar_carrera;
                            sessionStorage.removeItem("CorreoHome");

                            if (seleccionar_carrera.length > 1) {
                                window.location.href = rutaWeb + 'carrera';
                            } else {
                                if (result.data.muestrapopupinicial == "SI") {
                                    sessionStorage.setItem("muestrapopupinicial", "SI");
                                }
                                window.location.href = rutaWeb;
                            }
                        }
                    }
                    else {
                        window.location.href = rutaWeb + "administrativo";
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log('Error - ' + jqXHR.statusText);
                },
                complete: function () {
                }
            });
        } else {
            showAlert('Seleccione un alumno');
        }
    });

    $('#btnForgot').on('click',
        function (e) {
            e.preventDefault();
            var usuario = $('#user').val();
            if (usuario !== '') {
                $('#user-req-field').addClass('d-none');
                const data = {
                    "usuario": usuario
                };

                $.ajax({
                    type: "POST",
                    url: rutaWeb + "api/recuperar-clave",
                    data: JSON.stringify(data),
                    contentType: 'application/json',
                    success: function (result) {
                        if (result.estado === null) {
                            $('#dvRecuperar').html(result.View);
                            $('#btnToLogin').on('click',
                                function (e) {
                                    e.preventDefault();
                                    window.location.href = rutaWeb + 'login';
                                });
                        } else {
                            if (result.estado !== "0") {
                                let str = '<i class="far fa-times-circle"></i>' + result.detalle_mensaje;
                                $('#user-no-valid').html(str);
                                $('#user-no-valid').removeClass('d-none');
                                $('#user').val('');
                            }
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        console.log('Error - ' + jqXHR.statusText);
                    }
                });
            } else {
                $('#user-req-field').removeClass('d-none');
            }
        });


});

function LoginAd(response, homeId) {
    if (ValidarResponseSSO(response)) {
        const data = {
            "Response": response
        };

        $.ajax({
            type: "POST",
            url: rutaWeb + "api/loginAd",
            data: JSON.stringify(data),
            contentType: 'application/json',
            success: function (result) {
                sessionStorage.setItem("ingreso-sso", "SI");

                if (result.administrativo != "" && result.administrativo != "0") {
                    window.location.href = rutaWeb + "administrativo";
                }
                else {
                    if (result.estado !== "0") {
                        showAlert(result.detalle_mensaje);
                    } else {
                        menu = result.data.menus.menu;
                        seleccionar_carrera = result.data.seleccionar_carrera;
                        sessionStorage.removeItem("CorreoHome");
                        sessionStorage.setItem("homeId", homeId);

                        if (seleccionar_carrera.length > 1) {
                            window.location.href = rutaWeb + 'carrera';
                        } else {
                            //sessionStorage.setItem("menu", JSON.stringify(result.data.menus.menu));
                            //sessionStorage.setItem("seleccionar_carrera",
                            //    JSON.stringify(result.data.seleccionar_carrera));
                            //sessionStorage.setItem("datos_usuario", JSON.stringify(result.data.datos_usuario));
                            if (result.data.muestrapopupinicial == "SI") {
                                sessionStorage.setItem("muestrapopupinicial", "SI");
                            }
                            window.location.href = rutaWeb;
                            //sessionStorage.clear();
                            //sessionStorage.removeItem("key");
                            //if (localStorage.getItem("username") === null) {
                            //    //...
                            //}
                        }
                    }
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log('Error - ' + jqXHR.statusText);
            }
        });
    }
    else {
        switch (msalOffice) {
            case "1":
                logoutAd(sessionStorage.getItem("homeId") == null ? "" : sessionStorage.getItem("homeId"));

                break;
            case "2":
                onSignOut();
                break;
        }
    }
}

function getLabels(id, labels) {
    if (labels != undefined) {
        let label = labels.find(function (l) {
            return l.id === id;
        });
        if (label != undefined)
            return label.valor;
    }

    return "";
}

function ValidarResponseSSO(response) {
    let valid = true;

    if (response == null ||
        response == "" ||
        response.account.username == "" ||
        response.account.username == null ||
        response.accessToken == "" ||
        response.accessToken == null) {
        valid = false;
    }

    return valid;
}