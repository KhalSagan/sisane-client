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
moduloTratamiento.controller('TratamientoEditController', ['$scope', '$routeParams', '$location', 'tratamientoService', 'serverService', '$filter', '$uibModal',
    function ($scope, $routeParams, $location, tratamientoService, serverService, $filter, $uibModal) {
        $scope.fields = tratamientoService.getFields();
        $scope.obtitle = tratamientoService.getObTitle();
        $scope.icon = tratamientoService.getIcon();
        $scope.ob = tratamientoService.getTitle();
        $scope.title = "Editando un " + $scope.obtitle;
        $scope.op = "plist";
        $scope.status = null;
        $scope.error = true;
        $scope.debugging = serverService.debugging();
        $scope.bean = {};
        //---
        $scope.bean.obj_medicamento = {"id": 0};
        $scope.show_obj_medicamento = true;
        //---
        $scope.bean.obj_via = {"id": 0};
        $scope.show_obj_via = true;
        //---
        $scope.bean.obj_posologia = {"id": 0};
        $scope.show_obj_posologia = true;
        //---
        $scope.bean.obj_diagnostico = {"id": 0};
        $scope.show_obj_diagnostico = true;
        //---
        $scope.id = $routeParams.id;
        serverService.promise_getOne($scope.ob, $scope.id).then(function (response) {
            if (response.status == 200) {
                if (response.data.status == 200) {
                    $scope.status = null;
                    $scope.bean = response.data.message;
                    $scope.bean.fecha_inicio = serverService.date_toDate($scope.bean.fecha_inicio);
                    $scope.bean.fecha_fin = serverService.date_toDate($scope.bean.fecha_fin);
                } else {
                    $scope.status = "Error en la recepción de datos del servidor1";
                }
            } else {
                $scope.status = "Error en la recepción de datos del servidor2";
            }
        }).catch(function (data) {
            $scope.status = "Error en la recepción de datos del servidor3";
        });
        $scope.save = function () {
            if (!$scope.bean.obj_medicamento.id > 0) {
                $scope.bean.obj_medicamento.id = null;
            }
            if (!$scope.bean.obj_via.id > 0) {
                $scope.bean.obj_via.id = null;
            }
            if (!$scope.bean.obj_posologia.id > 0) {
                $scope.bean.obj_posologia.id = null;
            }
            if (!$scope.bean.obj_diagnostico.id > 0) {
                $scope.bean.obj_diagnostico.id = null;
            }
            $scope.bean.fecha_inicio = $filter('date')($scope.bean.fecha_inicio, "dd/MM/yyyy");
            $scope.bean.fecha_fin = $filter('date')($scope.bean.fecha_fin, "dd/MM/yyyy");
            var jsonToSend = {json: JSON.stringify(serverService.array_identificarArray($scope.bean))};
            serverService.promise_setOne($scope.ob, jsonToSend).then(function (response) {
                if (response.status == 200) {
                    if (response.data.status == 200) {
                        $scope.response = response;
                        $scope.status = "El registro " + $scope.obtitle + " se ha modificado ... id = " + $scope.bean.id;
                        $scope.bean.id = $scope.bean.id;
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
        
        $scope.$watch('bean.obj_medicamento.id', function () {
            if ($scope.bean) {
                if ($scope.bean.obj_medicamento.id) {
                    serverService.promise_getOne('medicamento', $scope.bean.obj_medicamento.id).then(function (response) {
                        var old_id = $scope.bean.obj_medicamento.id;
                        if (response.data.message.id != 0) {
                            $scope.outerForm.obj_medicamento.$setValidity('exists', true);
                            $scope.bean.obj_medicamento = response.data.message;
                        } else {
                            $scope.outerForm.obj_medicamento.$setValidity('exists', false);
                            $scope.bean.obj_medicamento.id = old_id;
                            $scope.bean.obj_medicamento.descripcion = "";
                        }
                    });
                }
            }
        });
        
        $scope.$watch('bean.obj_via.id', function () {
            if ($scope.bean) {
                if ($scope.bean.obj_via.id) {
                    serverService.promise_getOne('via', $scope.bean.obj_via.id).then(function (response) {
                        var old_id = $scope.bean.obj_via.id;
                        if (response.data.message.id != 0) {
                            $scope.outerForm.obj_via.$setValidity('exists', true);
                            $scope.bean.obj_via = response.data.message;
                        } else {
                            $scope.outerForm.obj_via.$setValidity('exists', false);
                            $scope.bean.obj_via.id = old_id;
                            $scope.bean.obj_via.descripcion = "";
                        }
                    });
                }
            }
        });
        
        $scope.$watch('bean.obj_posologia.id', function () {
            if ($scope.bean) {
                if ($scope.bean.obj_posologia.id) {
                    serverService.promise_getOne('posologia', $scope.bean.obj_posologia.id).then(function (response) {
                        var old_id = $scope.bean.obj_posologia.id;
                        if (response.data.message.id != 0) {
                            $scope.outerForm.obj_posologia.$setValidity('exists', true);
                            $scope.bean.obj_posologia = response.data.message;
                        } else {
                            $scope.outerForm.obj_posologia.$setValidity('exists', false);
                            $scope.bean.obj_posologia.id = old_id;
                            $scope.bean.obj_posologia.descripcion = "";
                        }
                    });
                }
            }
        });
        
        $scope.$watch('bean.obj_diagnostico.id', function () {
            if ($scope.bean) {
                if ($scope.bean.obj_diagnostico.id) {
                    serverService.promise_getOne('diagnostico', $scope.bean.obj_diagnostico.id).then(function (response) {
                        var old_id = $scope.bean.obj_diagnostico.id;
                        if (response.data.message.id != 0) {
                            $scope.outerForm.obj_diagnostico.$setValidity('exists', true);
                            $scope.bean.obj_diagnostico = response.data.message;
                        } else {
                            $scope.outerForm.obj_diagnostico.$setValidity('exists', false);
                            $scope.bean.obj_diagnostico.id = old_id;
                            $scope.bean.obj_diagnostico.descripcion = "";
                        }
                    });
                }
            }
        });
        
        $scope.dateOptions = {
            formatYear: 'yyyy',
            startingDay: 1
        };
        //datepicker 1 fecha_inicio
        $scope.open1 = function () {
            $scope.popup1.opened = true;
            $scope.outerForm.fecha_inicio.$pristine = true;
        };
        $scope.popup1 = {
            opened: false
        };
        //datepicker 2 fecha_fin
        $scope.open2 = function () {
            $scope.popup2.opened = true;
            $scope.outerForm.fecha_fin.$pristine = true;
        };
        $scope.popup2 = {
            opened: false
        };
    }]);