/*
 * Copyright (c) 2015 by Rafael Angel Aznar Aparici (rafaaznar at gmail dot com)
 *
 * sisane: The stunning micro-library that helps you to develop easily
 *             AJAX web applications by using Angular.js 1.x & sisane-server
 * sisane is distributed under the MIT License (MIT)
 * Sources at https://github.com/rafaelaznar/sisane
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

'use strict';
//-------------
var sisane = angular.module('myApp', [
    'ngRoute',
    'Filters',
    'Services',
    'Directives',
    'systemControllers',
    'usuarioControllers',
    'tipousuarioControllers',
    'medicamentoControllers',
    'medicoControllers',
    'documentoControllers',
    'viaControllers',
    'importanciaControllers',
    'tipodocumentoControllers',
    'tipodiagnosticoControllers',
    'posologiaControllers',
    'prioridadControllers',
    'anticoagulanteControllers',
    'tipomuestraControllers',
    'episodioControllers',
    'zonaControllers',
    'tipoControllers',
    'imagenControllers',
    'pruebaControllers',
    'especialidadControllers',
    'servicioControllers',
    'pacienteControllers',
    'diagnosticoControllers',
    'zonaimagenControllers',
    'tecnicaControllers',
    'tratamientoControllers',
    'analiticaControllers',
    'ui.bootstrap',
    'ngSanitize'
]);
//-------------
//---html5 mode off; setting up pushState needs server urlrewritting, so quitting...-------
sisane.config(['$locationProvider', function ($locationProvider) {
        $locationProvider.html5Mode({
            //requireBase: false,
            enabled: true
        });
    }]);
//-------------
sisane.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.withCredentials = true;
    }]);
//-------------
sisane.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'js/system/home.html', controller: 'HomeController'});
        //------------
        $routeProvider.when('/login', {templateUrl: 'js/system/login.html', controller: 'LoginController'});
        $routeProvider.when('/logout', {templateUrl: 'js/system/logout.html', controller: 'LogoutController'});
        $routeProvider.when('/home', {templateUrl: 'js/system/home.html', controller: 'HomeController'});
        $routeProvider.when('/license', {templateUrl: 'js/system/license.html', controller: 'LicenseController'});
        $routeProvider.when('/passchange', {templateUrl: 'js/system/passchange.html', controller: 'PasschangeController'});
        //------------
        $routeProvider.when('/usuario/view/:id', {templateUrl: 'js/usuario/view.html', controller: 'UsuarioViewController'});
        $routeProvider.when('/usuario/new/:id?', {templateUrl: 'js/usuario/new.html', controller: 'UsuarioNewController'});
        $routeProvider.when('/usuario/edit/:id', {templateUrl: 'js/usuario/edit.html', controller: 'UsuarioEditController'});
        $routeProvider.when('/usuario/remove/:id', {templateUrl: 'js/usuario/remove.html', controller: 'UsuarioRemoveController'});
        $routeProvider.when('/usuario/plist/:page?/:rpp?', {templateUrl: 'js/usuario/plist.html', controller: 'UsuarioPListController'});
        $routeProvider.when('/usuario/selection/:page?/:rpp?', {templateUrl: 'js/usuario/selection.html', controller: 'UsuarioSelectionController'});
        //------------
        $routeProvider.when('/posologia/view/:id', {templateUrl: 'js/posologia/view.html', controller: 'PosologiaViewController'});
        $routeProvider.when('/posologia/new/:id?', {templateUrl: 'js/posologia/new.html', controller: 'PosologiaNewController'});
        $routeProvider.when('/posologia/edit/:id', {templateUrl: 'js/posologia/edit.html', controller: 'PosologiaEditController'});
        $routeProvider.when('/posologia/remove/:id', {templateUrl: 'js/posologia/remove.html', controller: 'PosologiaRemoveController'});
        $routeProvider.when('/posologia/plist/:page?/:rpp?', {templateUrl: 'js/posologia/plist.html', controller: 'PosologiaPListController'});
        $routeProvider.when('/posologia/selection/:page?/:rpp?', {templateUrl: 'js/posologia/selection.html', controller: 'PosologiaSelectionController'});
        //------------
        $routeProvider.when('/tipousuario/view/:id', {templateUrl: 'js/tipousuario/view.html', controller: 'TipousuarioViewController'});
        $routeProvider.when('/tipousuario/new/:id?', {templateUrl: 'js/tipousuario/new.html', controller: 'TipousuarioNewController'});
        $routeProvider.when('/tipousuario/edit/:id', {templateUrl: 'js/tipousuario/edit.html', controller: 'TipousuarioEditController'});
        $routeProvider.when('/tipousuario/remove/:id', {templateUrl: 'js/tipousuario/remove.html', controller: 'TipousuarioRemoveController'});
        $routeProvider.when('/tipousuario/plist/:page?/:rpp?', {templateUrl: 'js/tipousuario/plist.html', controller: 'TipousuarioPListController'});
        $routeProvider.when('/tipousuario/selection/:page?/:rpp?', {templateUrl: 'js/tipousuario/selection.html', controller: 'TipousuarioSelectionController'});
        //------------
        $routeProvider.when('/medicamento/view/:id', {templateUrl: 'js/medicamento/view.html', controller: 'MedicamentoViewController'});
        $routeProvider.when('/medicamento/new/:id?', {templateUrl: 'js/medicamento/new.html', controller: 'MedicamentoNewController'});
        $routeProvider.when('/medicamento/edit/:id', {templateUrl: 'js/medicamento/edit.html', controller: 'MedicamentoEditController'});
        $routeProvider.when('/medicamento/remove/:id', {templateUrl: 'js/medicamento/remove.html', controller: 'MedicamentoRemoveController'});
        $routeProvider.when('/medicamento/plist/:page?/:rpp?', {templateUrl: 'js/medicamento/plist.html', controller: 'MedicamentoPListController'});
        $routeProvider.when('/medicamento/selection/:page?/:rpp?', {templateUrl: 'js/medicamento/selection.html', controller: 'MedicamentoSelectionController'});
        //------------
        //------------
        $routeProvider.when('/imagen/view/:id', {templateUrl: 'js/imagen/view.html', controller: 'ImagenViewController'});
        $routeProvider.when('/imagen/new/:id?', {templateUrl: 'js/imagen/new.html', controller: 'ImagenNewController'});
        $routeProvider.when('/imagen/edit/:id', {templateUrl: 'js/imagen/edit.html', controller: 'ImagenEditController'});
        $routeProvider.when('/imagen/remove/:id', {templateUrl: 'js/imagen/remove.html', controller: 'ImagenRemoveController'});
        $routeProvider.when('/imagen/plist/:page?/:rpp?', {templateUrl: 'js/imagen/plist.html', controller: 'ImagenPListController'});
        $routeProvider.when('/imagen/selection/:page?/:rpp?', {templateUrl: 'js/imagen/selection.html', controller: 'ImagenSelectionController'});

        //-------------------
        $routeProvider.when('/prueba/view/:id', {templateUrl: 'js/prueba/view.html', controller: 'PruebaViewController'});
        $routeProvider.when('/prueba/new/:id?', {templateUrl: 'js/prueba/new.html', controller: 'PruebaNewController'});
        $routeProvider.when('/prueba/edit/:id', {templateUrl: 'js/prueba/edit.html', controller: 'PruebaEditController'});
        $routeProvider.when('/prueba/remove/:id', {templateUrl: 'js/prueba/remove.html', controller: 'PruebaRemoveController'});
        $routeProvider.when('/prueba/plist/:page?/:rpp?', {templateUrl: 'js/prueba/plist.html', controller: 'PruebaPListController'});
        $routeProvider.when('/prueba/selection/:page?/:rpp?', {templateUrl: 'js/prueba/selection.html', controller: 'PruebaSelectionController'});

        //-------------------
        $routeProvider.when('/medico/view/:id', {templateUrl: 'js/medico/view.html', controller: 'MedicoViewController'});
        $routeProvider.when('/medico/new/:id?', {templateUrl: 'js/medico/new.html', controller: 'MedicoNewController'});
        $routeProvider.when('/medico/edit/:id', {templateUrl: 'js/medico/edit.html', controller: 'MedicoEditController'});
        $routeProvider.when('/medico/remove/:id', {templateUrl: 'js/medico/remove.html', controller: 'MedicoRemoveController'});
        $routeProvider.when('/medico/plist/:page?/:rpp?', {templateUrl: 'js/medico/plist.html', controller: 'MedicoPListController'});
        $routeProvider.when('/medico/selection/:page?/:rpp?', {templateUrl: 'js/medico/selection.html', controller: 'MedicoSelectionController'});
        //------------

        $routeProvider.when('/zona/view/:id', {templateUrl: 'js/zona/view.html', controller: 'ZonaViewController'});
        $routeProvider.when('/zona/new/:id?', {templateUrl: 'js/zona/new.html', controller: 'ZonaNewController'});
        $routeProvider.when('/zona/edit/:id', {templateUrl: 'js/zona/edit.html', controller: 'ZonaEditController'});
        $routeProvider.when('/zona/remove/:id', {templateUrl: 'js/zona/remove.html', controller: 'ZonaRemoveController'});
        $routeProvider.when('/zona/plist/:page?/:rpp?', {templateUrl: 'js/zona/plist.html', controller: 'ZonaPListController'});
        $routeProvider.when('/zona/selection/:page?/:rpp?', {templateUrl: 'js/zona/selection.html', controller: 'ZonaSelectionController'});

        $routeProvider.when('/via/view/:id', {templateUrl: 'js/via/view.html', controller: 'ViaViewController'});
        $routeProvider.when('/via/new/:id?', {templateUrl: 'js/via/new.html', controller: 'ViaNewController'});
        $routeProvider.when('/via/edit/:id', {templateUrl: 'js/via/edit.html', controller: 'ViaEditController'});
        $routeProvider.when('/via/remove/:id', {templateUrl: 'js/via/remove.html', controller: 'ViaRemoveController'});
        $routeProvider.when('/via/plist/:page?/:rpp?', {templateUrl: 'js/via/plist.html', controller: 'ViaPListController'});
        $routeProvider.when('/via/selection/:page?/:rpp?', {templateUrl: 'js/via/selection.html', controller: 'ViaSelectionController'});
        //------------
        $routeProvider.when('/importancia/view/:id', {templateUrl: 'js/importancia/view.html', controller: 'ImportanciaViewController'});
        $routeProvider.when('/importancia/new/:id?', {templateUrl: 'js/importancia/new.html', controller: 'ImportanciaNewController'});
        $routeProvider.when('/importancia/edit/:id', {templateUrl: 'js/importancia/edit.html', controller: 'ImportanciaEditController'});
        $routeProvider.when('/importancia/remove/:id', {templateUrl: 'js/importancia/remove.html', controller: 'ImportanciaRemoveController'});
        $routeProvider.when('/importancia/plist/:page?/:rpp?', {templateUrl: 'js/importancia/plist.html', controller: 'ImportanciaPListController'});
        $routeProvider.when('/importancia/selection/:page?/:rpp?', {templateUrl: 'js/importancia/selection.html', controller: 'ImportanciaSelectionController'});
        //------------
        $routeProvider.when('/tipodocumento/view/:id', {templateUrl: 'js/tipodocumento/view.html', controller: 'TipodocumentoViewController'});
        $routeProvider.when('/tipodocumento/new/:id?', {templateUrl: 'js/tipodocumento/new.html', controller: 'TipodocumentoNewController'});
        $routeProvider.when('/tipodocumento/edit/:id', {templateUrl: 'js/tipodocumento/edit.html', controller: 'TipodocumentoEditController'});
        $routeProvider.when('/tipodocumento/remove/:id', {templateUrl: 'js/tipodocumento/remove.html', controller: 'TipodocumentoRemoveController'});
        $routeProvider.when('/tipodocumento/plist/:page?/:rpp?', {templateUrl: 'js/tipodocumento/plist.html', controller: 'TipodocumentoPListController'});
        $routeProvider.when('/tipodocumento/selection/:page?/:rpp?', {templateUrl: 'js/tipodocumento/selection.html', controller: 'TipodocumentoSelectionController'});
        //------------
        $routeProvider.when('/prioridad/view/:id', {templateUrl: 'js/prioridad/view.html', controller: 'PrioridadViewController'});
        $routeProvider.when('/prioridad/new/:id?', {templateUrl: 'js/prioridad/new.html', controller: 'PrioridadNewController'});
        $routeProvider.when('/prioridad/edit/:id', {templateUrl: 'js/prioridad/edit.html', controller: 'PrioridadEditController'});
        $routeProvider.when('/prioridad/remove/:id', {templateUrl: 'js/prioridad/remove.html', controller: 'PrioridadRemoveController'});
        $routeProvider.when('/prioridad/plist/:page?/:rpp?', {templateUrl: 'js/prioridad/plist.html', controller: 'PrioridadPListController'});
        $routeProvider.when('/prioridad/selection/:page?/:rpp?', {templateUrl: 'js/prioridad/selection.html', controller: 'PrioridadSelectionController'});
        //------------
        $routeProvider.when('/tipodiagnostico/view/:id', {templateUrl: 'js/tipodiagnostico/view.html', controller: 'TipodiagnosticoViewController'});
        $routeProvider.when('/tipodiagnostico/new/:id?', {templateUrl: 'js/tipodiagnostico/new.html', controller: 'TipodiagnosticoNewController'});
        $routeProvider.when('/tipodiagnostico/edit/:id', {templateUrl: 'js/tipodiagnostico/edit.html', controller: 'TipodiagnosticoEditController'});
        $routeProvider.when('/tipodiagnostico/remove/:id', {templateUrl: 'js/tipodiagnostico/remove.html', controller: 'TipodiagnosticoRemoveController'});
        $routeProvider.when('/tipodiagnostico/plist/:page?/:rpp?', {templateUrl: 'js/tipodiagnostico/plist.html', controller: 'TipodiagnosticoPListController'});
        $routeProvider.when('/tipodiagnostico/selection/:page?/:rpp?', {templateUrl: 'js/tipodiagnostico/selection.html', controller: 'TipodiagnosticoSelectionController'});
         //------------
        $routeProvider.when('/episodio/view/:id', {templateUrl: 'js/episodio/view.html', controller: 'EpisodioViewController'});
        $routeProvider.when('/episodio/new/:id?', {templateUrl: 'js/episodio/new.html', controller: 'EpisodioNewController'});
        $routeProvider.when('/episodio/edit/:id', {templateUrl: 'js/episodio/edit.html', controller: 'EpisodioEditController'});
        $routeProvider.when('/episodio/remove/:id', {templateUrl: 'js/episodio/remove.html', controller: 'EpisodioRemoveController'});
        $routeProvider.when('/episodio/plist/:page?/:rpp?', {templateUrl: 'js/episodio/plist.html', controller: 'EpisodioPListController'});
        $routeProvider.when('/episodio/selection/:page?/:rpp?', {templateUrl: 'js/episodio/selection.html', controller: 'EpisodioSelectionController'});
        //------------
        $routeProvider.when('/tipo/view/:id', {templateUrl: 'js/tipo/view.html', controller: 'TipoViewController'});
        $routeProvider.when('/tipo/new/:id?', {templateUrl: 'js/tipo/new.html', controller: 'TipoNewController'});
        $routeProvider.when('/tipo/edit/:id', {templateUrl: 'js/tipo/edit.html', controller: 'TipoEditController'});
        $routeProvider.when('/tipo/remove/:id', {templateUrl: 'js/tipo/remove.html', controller: 'TipoRemoveController'});
        $routeProvider.when('/tipo/plist/:page?/:rpp?', {templateUrl: 'js/tipo/plist.html', controller: 'TipoPListController'});
        $routeProvider.when('/tipo/selection/:page?/:rpp?', {templateUrl: 'js/tipo/selection.html', controller: 'TipoSelectionController'});

        //------------
        $routeProvider.when('/documento/view/:id', {templateUrl: 'js/documento/view.html', controller: 'DocumentoViewController'});
        $routeProvider.when('/documento/new/:id?', {templateUrl: 'js/documento/new.html', controller: 'DocumentoNewController'});
        $routeProvider.when('/documento/edit/:id', {templateUrl: 'js/documento/edit.html', controller: 'DocumentoEditController'});
        $routeProvider.when('/documento/remove/:id', {templateUrl: 'js/documento/remove.html', controller: 'DocumentoRemoveController'});
        $routeProvider.when('/documento/plist/:page?/:rpp?', {templateUrl: 'js/documento/plist.html', controller: 'DocumentoPListController'});
        $routeProvider.when('/documento/selection/:page?/:rpp?', {templateUrl: 'js/documento/selection.html', controller: 'DocumentoSelectionController'});
        //------------
        $routeProvider.when('/servicio/view/:id', {templateUrl: 'js/servicio/view.html', controller: 'ServicioViewController'});
        $routeProvider.when('/servicio/new/:id?', {templateUrl: 'js/servicio/new.html', controller: 'ServicioNewController'});
        $routeProvider.when('/servicio/edit/:id', {templateUrl: 'js/servicio/edit.html', controller: 'ServicioEditController'});
        $routeProvider.when('/servicio/remove/:id', {templateUrl: 'js/servicio/remove.html', controller: 'ServicioRemoveController'});
        $routeProvider.when('/servicio/plist/:page?/:rpp?', {templateUrl: 'js/servicio/plist.html', controller: 'ServicioPListController'});
        $routeProvider.when('/servicio/selection/:page?/:rpp?', {templateUrl: 'js/servicio/selection.html', controller: 'ServicioSelectionController'});

        //------------
        $routeProvider.when('/anticoagulante/view/:id', {templateUrl: 'js/anticoagulante/view.html', controller: 'AnticoagulanteViewController'});
        $routeProvider.when('/anticoagulante/new/:id?', {templateUrl: 'js/anticoagulante/new.html', controller: 'AnticoagulanteNewController'});
        $routeProvider.when('/anticoagulante/edit/:id', {templateUrl: 'js/anticoagulante/edit.html', controller: 'AnticoagulanteEditController'});
        $routeProvider.when('/anticoagulante/remove/:id', {templateUrl: 'js/anticoagulante/remove.html', controller: 'AnticoagulanteRemoveController'});
        $routeProvider.when('/anticoagulante/plist/:page?/:rpp?', {templateUrl: 'js/anticoagulante/plist.html', controller: 'AnticoagulantePListController'});
        $routeProvider.when('/anticoagulante/selection/:page?/:rpp?', {templateUrl: 'js/anticoagulante/selection.html', controller: 'AnticoagulanteSelectionController'});

        //------------
        $routeProvider.when('/especialidad/view/:id', {templateUrl: 'js/especialidad/view.html', controller: 'EspecialidadViewController'});
        $routeProvider.when('/especialidad/new/:id?', {templateUrl: 'js/especialidad/new.html', controller: 'EspecialidadNewController'});
        $routeProvider.when('/especialidad/edit/:id', {templateUrl: 'js/especialidad/edit.html', controller: 'EspecialidadEditController'});
        $routeProvider.when('/especialidad/remove/:id', {templateUrl: 'js/especialidad/remove.html', controller: 'EspecialidadRemoveController'});
        $routeProvider.when('/especialidad/plist/:page?/:rpp?', {templateUrl: 'js/especialidad/plist.html', controller: 'EspecialidadPListController'});
        $routeProvider.when('/especialidad/selection/:page?/:rpp?', {templateUrl: 'js/especialidad/selection.html', controller: 'EspecialidadSelectionController'});

        //------------
        $routeProvider.when('/paciente/view/:id', {templateUrl: 'js/paciente/view.html', controller: 'PacienteViewController'});
        $routeProvider.when('/paciente/new/:id?', {templateUrl: 'js/paciente/new.html', controller: 'PacienteNewController'});
        $routeProvider.when('/paciente/edit/:id', {templateUrl: 'js/paciente/edit.html', controller: 'PacienteEditController'});
        $routeProvider.when('/paciente/remove/:id', {templateUrl: 'js/paciente/remove.html', controller: 'PacienteRemoveController'});
        $routeProvider.when('/paciente/plist/:page?/:rpp?', {templateUrl: 'js/paciente/plist.html', controller: 'PacientePListController'});
        $routeProvider.when('/paciente/selection/:page?/:rpp?', {templateUrl: 'js/paciente/selection.html', controller: 'PacienteSelectionController'});

        //------------
        $routeProvider.when('/tipomuestra/view/:id', {templateUrl: 'js/tipomuestra/view.html', controller: 'TipomuestraViewController'});
        $routeProvider.when('/tipomuestra/new/:id?', {templateUrl: 'js/tipomuestra/new.html', controller: 'TipomuestraNewController'});
        $routeProvider.when('/tipomuestra/edit/:id', {templateUrl: 'js/tipomuestra/edit.html', controller: 'TipomuestraEditController'});
        $routeProvider.when('/tipomuestra/remove/:id', {templateUrl: 'js/tipomuestra/remove.html', controller: 'TipomuestraRemoveController'});
        $routeProvider.when('/tipomuestra/plist/:page?/:rpp?', {templateUrl: 'js/tipomuestra/plist.html', controller: 'TipomuestraPListController'});
        $routeProvider.when('/tipomuestra/selection/:page?/:rpp?', {templateUrl: 'js/tipomuestra/selection.html', controller: 'TipomuestraSelectionController'});

        //------------        
        $routeProvider.when('/zonaimagen/view/:id', {templateUrl: 'js/zonaimagen/view.html', controller: 'ZonaimagenViewController'});
        $routeProvider.when('/zonaimagen/new/:id?', {templateUrl: 'js/zonaimagen/new.html', controller: 'ZonaimagenNewController'});
        $routeProvider.when('/zonaimagen/edit/:id', {templateUrl: 'js/zonaimagen/edit.html', controller: 'ZonaimagenEditController'});
        $routeProvider.when('/zonaimagen/remove/:id', {templateUrl: 'js/zonaimagen/remove.html', controller: 'ZonaimagenRemoveController'});
        $routeProvider.when('/zonaimagen/plist/:page?/:rpp?', {templateUrl: 'js/zonaimagen/plist.html', controller: 'ZonaimagenPListController'});
        $routeProvider.when('/zonaimagen/selection/:page?/:rpp?', {templateUrl: 'js/zonaimagen/selection.html', controller: 'ZonaimagenSelectionController'});

        //------------        
        $routeProvider.when('/tratamiento/view/:id', {templateUrl: 'js/tratamiento/view.html', controller: 'TratamientoViewController'});
        $routeProvider.when('/tratamiento/new/:id?', {templateUrl: 'js/tratamiento/new.html', controller: 'TratamientoNewController'});
        $routeProvider.when('/tratamiento/edit/:id', {templateUrl: 'js/tratamiento/edit.html', controller: 'TratamientoEditController'});
        $routeProvider.when('/tratamiento/remove/:id', {templateUrl: 'js/tratamiento/remove.html', controller: 'TratamientoRemoveController'});
        $routeProvider.when('/tratamiento/plist/:page?/:rpp?', {templateUrl: 'js/tratamiento/plist.html', controller: 'TratamientoPListController'});
        //------------
        $routeProvider.when('/diagnostico/view/:id', {templateUrl: 'js/diagnostico/view.html', controller: 'DiagnosticoViewController'});
        $routeProvider.when('/diagnostico/new/:id?', {templateUrl: 'js/diagnostico/new.html', controller: 'DiagnosticoNewController'});
        $routeProvider.when('/diagnostico/edit/:id', {templateUrl: 'js/diagnostico/edit.html', controller: 'DiagnosticoEditController'});
        $routeProvider.when('/diagnostico/remove/:id', {templateUrl: 'js/diagnostico/remove.html', controller: 'DiagnosticoRemoveController'});
        $routeProvider.when('/diagnostico/plist/:page?/:rpp?', {templateUrl: 'js/diagnostico/plist.html', controller: 'DiagnosticoPListController'});
        $routeProvider.when('/diagnostico/selection/:page?/:rpp?', {templateUrl: 'js/diagnostico/selection.html', controller: 'DiagnosticoSelectionController'});

        //------------        
        
        $routeProvider.when('/tecnica/view/:id', {templateUrl: 'js/tecnica/view.html', controller: 'TecnicaViewController'});
        $routeProvider.when('/tecnica/new/:id?', {templateUrl: 'js/tecnica/new.html', controller: 'TecnicaNewController'});
        $routeProvider.when('/tecnica/edit/:id', {templateUrl: 'js/tecnica/edit.html', controller: 'TecnicaEditController'});
        $routeProvider.when('/tecnica/remove/:id', {templateUrl: 'js/tecnica/remove.html', controller: 'TecnicaRemoveController'});
        $routeProvider.when('/tecnica/plist/:page?/:rpp?', {templateUrl: 'js/tecnica/plist.html', controller: 'TecnicaPListController'});
        $routeProvider.when('/tecnica/selection/:page?/:rpp?', {templateUrl: 'js/tecnica/selection.html', controller: 'TecnicaSelectionController'});

        //------------
        
        $routeProvider.when('/analitica/view/:id', {templateUrl: 'js/analitica/view.html', controller: 'AnaliticaViewController'});
        $routeProvider.when('/analitica/new/:id?', {templateUrl: 'js/analitica/new.html', controller: 'AnaliticaNewController'});
        $routeProvider.when('/analitica/edit/:id', {templateUrl: 'js/analitica/edit.html', controller: 'AnaliticaEditController'});
        $routeProvider.when('/analitica/remove/:id', {templateUrl: 'js/analitica/remove.html', controller: 'AnaliticaRemoveController'});
        $routeProvider.when('/analitica/plist/:page?/:rpp?', {templateUrl: 'js/analitica/plist.html', controller: 'AnaliticaPListController'});
        $routeProvider.when('/analitica/selection/:page?/:rpp?', {templateUrl: 'js/analitica/selection.html', controller: 'AnaliticaSelectionController'});

        //------------

        $routeProvider.otherwise({redirectTo: '/'});
    }]);
//-------------
sisane.run(function ($rootScope, $location, serverService, sessionService) {
    $rootScope.$on("$routeChangeStart", function (event, next, current) {
        sessionService.setSessionInactive();
        sessionService.setUsername('');
        serverService.getSessionPromise().then(function (response) {
            if (response['status'] == 200) {
                sessionService.setSessionActive();
                sessionService.setUsername(response.data.message.login);
                sessionService.setId(response.data.message.id);
            } else {
                sessionService.setSessionInactive();
                sessionService.setUsername('');
                var nextUrl = next.$$route.originalPath;
                if (nextUrl == '/home' || nextUrl == '/login' || nextUrl == '/license') {

                } else {
                    $location.path("/login");
                }
            }
        }).catch(function (data) {
            sessionService.setSessionInactive();
            sessionService.setUsername('');
            var nextUrl = next.$$route.originalPath;
            if (nextUrl == '/home' || nextUrl == '/login' || nextUrl == '/license') {
            } else {
                $location.path("/login");
            }
        });
    });
});
//-------------
var moduloSistema = angular.module('systemControllers', []);
var moduloUsuario = angular.module('usuarioControllers', []);
var moduloPrioridad = angular.module('prioridadControllers', []);
var moduloPosologia = angular.module('posologiaControllers', []);
var moduloTipousuario = angular.module('tipousuarioControllers', []);
var moduloVia = angular.module('viaControllers', []);
var moduloImportancia = angular.module('importanciaControllers', []);
var moduloTipodocumento = angular.module('tipodocumentoControllers', []);
var moduloTipodiagnostico = angular.module('tipodiagnosticoControllers', []);
var moduloMedicamento = angular.module('medicamentoControllers', []);
var moduloMedico = angular.module('medicoControllers', []);
var moduloZona = angular.module('zonaControllers', []);
var moduloTipo = angular.module('tipoControllers', []);
var moduloImagen = angular.module('imagenControllers', []);
var moduloPrueba = angular.module('pruebaControllers', []);
var moduloEspecialidad = angular.module('especialidadControllers', []);
var moduloAnticoagulante = angular.module('anticoagulanteControllers', []);
var moduloDocumento = angular.module('documentoControllers', []);
var moduloServicio = angular.module('servicioControllers', []);
var moduloPaciente = angular.module('pacienteControllers', []);
var moduloTipomuestra = angular.module('tipomuestraControllers', []);
var moduloEpisodio = angular.module('episodioControllers', []);
var moduloZonaimagen = angular.module('zonaimagenControllers', []);
var moduloDiagnostico = angular.module('diagnosticoControllers', []);
var moduloTecnica = angular.module('tecnicaControllers', []);
var moduloTratamiento = angular.module('tratamientoControllers', []);
var moduloAnalitica = angular.module('analiticaControllers', []);

//-------------
var moduloDirectivas = angular.module('Directives', []);
var moduloServicios = angular.module('Services', []);
var moduloFiltros = angular.module('Filters', []);
