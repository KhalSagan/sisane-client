'use strict';
moduloServicios.factory('pacienteService', ['serverService', function (serverService) {
        return {
            getFields: function () {
                return [
                    {name: "id", shortname: "ID", longname: "Identificador", visible: true, type: "id"},
                    {name: "dni", shortname: "Dni", longname: "Dni", visible: true, type: "text", required: true, maxlength: 255, pattern: ""},
                    {name: "name", shortname: "Name", longname: "Name", visible: true, type: "text", required: true, maxlength: 255, pattern: ""},
                    {name: "primer_apellido", shortname: "Prim.apellido", longname: "Primer apellido", visible: true, type: "text", required: true, maxlength: 255, pattern: ""},
                    {name: "segundo_apellido", shortname: "Seg.apellido", longname: "Segundo apellido", visible: true, type: "text", required: true, maxlength: 255, pattern: ""},
                    {name: "login", shortname: "Login", longname: "Login", visible: false, type: "text", required: true, maxlength: 255, pattern: ""},
                    {name: "password", shortname: "Pass", longname: "Password", visible: false, type: "text", required: true, maxlength: 255, pattern: ""},
                    {name: "estado", shortname: "Estado", longname: "Estado", visible: true, type: "text", required: true, maxlength: 255, pattern: ""},
                    {name: "direccion", shortname: "Direcc.", longname: "Direccion", visible: false, type: "text", required: true, maxlength: 255, pattern: ""},
                    {name: "ciudad", shortname: "Ciudad", longname: "Ciudad", visible: true, type: "text", required: true, maxlength: 255, pattern: ""},
                    {name: "codigopostal", shortname: "Cod. Postal", longname: "Codigo Postal", visible: true, type: "text", required: true, maxlength: 255, pattern: ""},
                    {name: "provincia", shortname: "Prov.", longname: "Provincia", visible: true, type: "text", required: true, maxlength: 255, pattern: ""},
                    {name: "pais", shortname: "Pais", longname: "Pais", visible: false, type: "text", required: true, maxlength: 255, pattern: ""},
                    {name: "email", shortname: "Email", longname: "Email", visible: true, type: "text", required: true, maxlength: 255, pattern: ""},
                    {name: "telefono", shortname: "Tel.", longname: "Telefono", visible: true, type: "text", required: true, maxlength: 255, pattern: ""},
                    {name: "obj_servicio", shortname: "Tipo serv.", longname: "Tipo de servicio", visible: true, type: "specific", reference: "servicio"},
                    {name: "fecha_salida", shortname: "Fech. Salida", longname: "Fecha Salida", visible: true, type: "date", required: true, maxlength: 255, pattern: ""}
                ];
            },
            getIcon: function () {
                return "fa-gift";
            },
            getObTitle: function () {
                return "paciente";
            },
            getTitle: function () {
                return "paciente";
            }
        };
    }]);

