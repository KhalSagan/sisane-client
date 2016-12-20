/*
 * Copyright (c) 2015 by Rafael Angel Aznar Aparici (rafaaznar at gmail dot com)
 *
 * escalamio: The stunning micro-library that helps you to develop easily
 *             AJAX web applications by using Angular.js 1.x & zylkanexy
 * escalamio is distributed under the MIT License (MIT)
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

moduloAnalitica.controller('AnaliticaPListController', ['$scope', '$routeParams', 'serverService', '$location', 'analiticaService', '$uibModal',
    function ($scope, $routeParams, serverService, $location, analiticaService, $uibModal) {
        $scope.fields = analiticaService.getFields();
        $scope.obtitle = analiticaService.getObTitle();
        $scope.icon = analiticaService.getIcon();
        $scope.ob = analiticaService.getTitle();
        $scope.title = "Listado de " + $scope.obtitle;
        $scope.op = "plist";
        $scope.numpage = serverService.checkDefault(1, $routeParams.page);
        $scope.rpp = serverService.checkDefault(10, $routeParams.rpp);
        $scope.neighbourhood = serverService.getGlobalNeighbourhood();
        $scope.order = "";
        $scope.ordervalue = "";
        $scope.filter = "id";
        $scope.filteroperator = "like";
        $scope.filtervalue = "";
        $scope.filterParams = serverService.checkNull($routeParams.filter)
        $scope.orderParams = serverService.checkNull($routeParams.order)
        $scope.sfilterParams = serverService.checkNull($routeParams.sfilter)
        $scope.filterExpression = serverService.checkEmptyString($routeParams.filter) + '+' + serverService.checkEmptyString($routeParams.sfilter);
        $scope.status = null;
        $scope.debugging = serverService.debugging();
        function getDataFromServer() {
            serverService.promise_getCount($scope.ob, $scope.filterExpression).then(function (response) {
                if (response.status == 200) {
                    $scope.registers = response.data.message;
                    $scope.pages = serverService.calculatePages($scope.rpp, $scope.registers);
                    if ($scope.numpage > $scope.pages) {
                        $scope.numpage = $scope.pages;
                    }
                    return serverService.promise_getPage($scope.ob, $scope.rpp, $scope.numpage, $scope.filterExpression, $routeParams.order);
                } else {
                    $scope.status = "Error en la recepción de datos del servidor";
                }
            }).then(function (response) {
                if (response.status == 200) {
                    $scope.page = response.data.message;
                    $scope.status = "";
                } else {
                    $scope.status = "Error en la recepción de datos del servidor";
                }
            }).catch(function (data) {
                $scope.status = "Error en la recepción de datos del servidor";
            });
        }
        $scope.pop = function (id, foreignObjectName, foreignContollerName, foreignViewName) {
            var modalInstance = $uibModal.open({
                templateUrl: 'js/' + foreignObjectName + '/' + foreignViewName + '.html',
                controller: foreignContollerName,
                size: 'lg',
                resolve: {
                    id: function () {
                        return id;
                    }
                }
            }).result.then(function (modalResult) {
                if (modalResult) {
                    getDataFromServer();
                }

            });
        };
        getDataFromServer();
    }]);