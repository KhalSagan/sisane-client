'use strict';
moduloAnalitica.factory('analiticaService', ['serverService', function (serverService) {
        return {
            getFields: function () {
                return [
                    {name: "id", shortname: "ID", longname: "Identificador", visible: true, type: "id"},
                    {name: "obj_tipomuestra", shortname: "Tipomuestra", longname: "Tipomuestra", visible: true, type: "specific", reference: "tipomuestra"},
                    {name: "fecha_peticion", shortname: "Fecha", longname: "Fecha peticion", visible: true, type: "date", required: true, pattern: ""},
                    {name: "informe", shortname: "Informe", longname: "Informe", visible: true, type: "textarea", required: true, maxlength: 9999, pattern: ""},
                    {name: "obj_anticoagulante", shortname: "Anticoagulante", longname: "Anticoagulante", visible: true, type: "specific", reference: "anticoagulante"},
                    {name: "obj_prioridad", shortname: "Prioridad", longname: "Prioridad", visible: true, type: "specific", reference: "prioridad"},
                    {name: "importe", shortname: "Importe", longname: "Importe", visible: true, type: "decimal", required: true, pattern: serverService.getRegExpr("decimal"), help: serverService.getRegExpl("decimal")},
                    {name: "obj_episodio", shortname: "Episodio", longname: "Episodio", visible: true, type: "specific", reference: "episodio"}
                ];
            },
            getIcon: function () {
                return "fa fa-fw fa-heartbeat";
            },
            getObTitle: function () {
                return "analitica";
            },
            getTitle: function () {
                return "analitica";
            }
        };
    }]);


