/*
 * Copyright (c) 2015 by Rafael Angel Aznar Aparici (rafaaznar at gmail dot com)
 *
 * sisane: The stunning micro-library that helps you to develop easily
 *             AJAX web applications by using Angular.js 1.x & sisane-server
 * sisane is distributed under the MIT License (MIT)
 * Sources at https://github.com/rafaelaznar/
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
 *
 */

'use strict';

moduloAnalitica.controller('AnaliticaNewController', ['$scope', '$routeParams', '$location', 'serverService', 'analiticaService', '$filter', '$uibModal',
    function ($scope, $routeParams, $location, serverService, analiticaService, $filter, $uibModal) {
        $scope.fields = analiticaService.getFields();
        $scope.obtitle = analiticaService.getObTitle();
        $scope.icon = analiticaService.getIcon();
        $scope.ob = analiticaService.getTitle();
        $scope.title = "Creando un nuevo " + $scope.obtitle;
        $scope.op = "plist";
        $scope.status = null;
        $scope.debugging = serverService.debugging();
        $scope.bean = {};
        $scope.bean.id = 0;
        //---
        $scope.bean.obj_tipomuestra = {"id": 0};
        $scope.bean.obj_anticoagulante = {"id": 0};
        $scope.bean.obj_prioridad = {"id": 0};
        $scope.bean.obj_episodio = {"id": 0};
        //----
        if ($routeParams.id_tipomuestra) {
            serverService.promise_getOne('tipomuestra', $routeParams.id_tipomuestra).then(function (response) {
                if (response.data.message.id != 0) {
                    $scope.bean.obj_tipomuestra = response.data.message;
                    $scope.show_obj_tipomuestra = false;
                    $scope.title = "Nuevo analitica con el tipomuestra " + $scope.bean.obj_tipomuestra.descripcion;
                }
            });
        } else {
            $scope.show_obj_tipomuestra = true;
        }
        //----
        if ($routeParams.id_prioridad) {
            serverService.promise_getOne('prioridad', $routeParams.id_prioridad).then(function (response) {
                if (response.data.message.id != 0) {
                    $scope.bean.obj_prioridad = response.data.message;
                    $scope.show_obj_prioridad = false;
                    $scope.title = "Nuevo analitica con la prioridad " + $scope.bean.obj_prioridad.descripcion;
                }
            });
        } else {
            $scope.show_obj_prioridad = true;
        }
        //----
        if ($routeParams.id_anticoagulante) {
            serverService.promise_getOne('anticoagulante', $routeParams.id_anticoagulante).then(function (response) {
                if (response.data.message.id != 0) {
                    $scope.bean.obj_anticoagulante = response.data.message;
                    $scope.show_obj_anticoagulante = false;
                    $scope.title = "Nuevo analitica con la anticoagulante " + $scope.bean.obj_anticoagulante.descripcion;
                }
            });
        } else {
            $scope.show_obj_anticoagulante = true;
        }
        //----
        if ($routeParams.id_episodio) {
            serverService.promise_getOne('episodio', $routeParams.id_episodio).then(function (response) {
                if (response.data.message.id != 0) {
                    $scope.bean.obj_episodio = response.data.message;
                    $scope.show_obj_episodio = false;
                    $scope.title = "Nuevo analitica con el episodio " + $scope.bean.obj_episodio.informe;
                }
            });
        } else {
            $scope.show_obj_episodio = true;
        }
        //----

        $scope.save = function () {
            $scope.bean.fecha_peticion = $filter('date')($scope.bean.fecha_peticion, "dd/MM/yyyy");
            var jsonToSend = {json: JSON.stringify(serverService.array_identificarArray($scope.bean))};
            serverService.promise_setOne($scope.ob, jsonToSend).then(function (response) {
                if (response.status == 200) {
                    if (response.data.status == 200) {
                        $scope.response = response;
                        $scope.status = "El registro " + $scope.obtitle + " se ha creado con id = " + response.data.message;
                        $scope.bean.id = response.data.message;
                    } else {
                        $scope.status = "Error en la recepción de datos del servidor";
                    }
                } else {
                    $scope.status = "Error en la recepción de datos del servidor";
                }
            }).catch(function (data) {
                $scope.status = "Error en la recepción de datos del servidor";
            });
            ;
        };
        $scope.back = function () {
            window.history.back();
        };
        $scope.close = function () {
            $location.path('/home');
        };
        $scope.plist = function () {
            $location.path('/' + $scope.ob + '/plist');
        };
        $scope.chooseOne = function (nameForeign, foreignObjectName, contollerName) {
            var modalInstance = $uibModal.open({
                templateUrl: 'js/' + foreignObjectName + '/selection.html',
                controller: contollerName,
                size: 'lg'
            }).result.then(function (modalResult) {
                $scope.bean[nameForeign].id = modalResult;
            });
        };
        
        $scope.$watch('bean.obj_tipomuestra.id', function () {
            if ($scope.bean) {
                if ($scope.bean.obj_tipomuestra.id) {
                    serverService.promise_getOne('tipomuestra', $scope.bean.obj_tipomuestra.id).then(function (response) {
                        var old_id = $scope.bean.obj_tipomuestra.id;
                        if (response.data.message.id != 0) {
                            $scope.outerForm.obj_tipomuestra.$setValidity('exists', true);
                            $scope.bean.obj_tipomuestra = response.data.message;
                        } else {
                            $scope.outerForm.obj_tipomuestra.$setValidity('exists', false);
                            $scope.bean.obj_tipomuestra.id = old_id;
                            $scope.bean.obj_tipomuestra.descripcion = "";
                        }
                    });
                }
            }
        });
        
        $scope.$watch('bean.obj_anticoagulante.id', function () {
            if ($scope.bean) {
                if ($scope.bean.obj_anticoagulante.id) {
                    serverService.promise_getOne('anticoagulante', $scope.bean.obj_anticoagulante.id).then(function (response) {
                        var old_id = $scope.bean.obj_anticoagulante.id;
                        if (response.data.message.id != 0) {
                            $scope.outerForm.obj_anticoagulante.$setValidity('exists', true);
                            $scope.bean.obj_anticoagulante = response.data.message;
                        } else {
                            $scope.outerForm.obj_anticoagulante.$setValidity('exists', false);
                            $scope.bean.obj_anticoagulante.id = old_id;
                            $scope.bean.obj_anticoagulante.descripcion = "";
                        }
                    });
                }
            }
        });
        
        $scope.$watch('bean.obj_prioridad.id', function () {
            if ($scope.bean) {
                if ($scope.bean.obj_prioridad.id) {
                    serverService.promise_getOne('prioridad', $scope.bean.obj_prioridad.id).then(function (response) {
                        var old_id = $scope.bean.obj_prioridad.id;
                        if (response.data.message.id != 0) {
                            $scope.outerForm.obj_prioridad.$setValidity('exists', true);
                            $scope.bean.obj_prioridad = response.data.message;
                        } else {
                            $scope.outerForm.obj_prioridad.$setValidity('exists', false);
                            $scope.bean.obj_prioridad.id = old_id;
                            $scope.bean.obj_prioridad.descripcion = "";
                        }
                    });
                }
            }
        });
        
        $scope.$watch('bean.obj_episodio.id', function () {
            if ($scope.bean) {
                if ($scope.bean.obj_episodio.id) {
                    serverService.promise_getOne('episodio', $scope.bean.obj_episodio.id).then(function (response) {
                        var old_id = $scope.bean.obj_episodio.id;
                        if (response.data.message.id != 0) {
                            $scope.outerForm.obj_episodio.$setValidity('exists', true);
                            $scope.bean.obj_episodio = response.data.message;
                        } else {
                            $scope.outerForm.obj_episodio.$setValidity('exists', false);
                            $scope.bean.obj_episodio.id = old_id;
                            $scope.bean.obj_episodio.descripcion = "";
                        }
                    });
                }
            }
        });
        
        $scope.dateOptions = {
            formatYear: 'yyyy',
            startingDay: 1
        };
        //datepicker 1 fecha_peticion
        $scope.open1 = function () {
            $scope.popup1.opened = true;
            $scope.outerForm.fecha_peticion.$pristine = true;
        };
        $scope.popup1 = {
            opened: false
        };
        $scope.popup2 = {
            opened: false
        };
    }]);

