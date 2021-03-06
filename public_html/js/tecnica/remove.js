'use strict';

moduloTecnica.controller('TecnicaRemoveController', ['$scope', '$routeParams', '$location', 'serverService', 'tecnicaService',
    function ($scope, $routeParams, $location, serverService, tecnicaService) {
        $scope.fields = tecnicaService.getFields();
        $scope.obtitle = tecnicaService.getObTitle();
        $scope.icon = tecnicaService.getIcon();
        $scope.ob = tecnicaService.getTitle();
        $scope.title = "Borrado de " + $scope.obtitle;
        $scope.id = $routeParams.id;
        $scope.status = null;
        $scope.debugging=serverService.debugging();
        serverService.promise_getOne($scope.ob, $scope.id).then(function (response) {
            if (response.status == 200) {
                if (response.data.status == 200) {
                    $scope.status = null;
                    $scope.bean = response.data.message;
                } else {
                    $scope.status = "Error en la recepción de datos del servidor";
                }
            } else {
                $scope.status = "Error en la recepción de datos del servidor";
            }
        }).catch(function (data) {
            $scope.status = "Error en la recepción de datos del servidor";
        });
        $scope.remove = function () {
            serverService.promise_removeOne($scope.ob, $scope.id).then(function (response) {
                if (response.status == 200) {
                    if (response.data.status == 200) {
                        if (response.data.message == 1) {
                            $scope.status = "El registro " +  $scope.obtitle + " se ha eliminado." ;  
                        } else {
                            $scope.status = "Error en el borrado de datos del servidor";
                        }
                    } else {
                        $scope.status = "Error en la recepción de datos del servidor";
                    }
                } else {
                    $scope.status = "Error en la recepción de datos del servidor";
                }
            }).catch(function (data) {
                $scope.status = "Error en la recepción de datos del servidor";
            });
        }
        $scope.back = function () {
            window.history.back();
        };
        $scope.close = function () {
            $location.path('/home');
        };
    }]);