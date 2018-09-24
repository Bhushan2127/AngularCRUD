angular
    .module('myApp', [])
    .controller('mycontrol1', ['$scope', function($scope){
            
            $scope.showError = false;
            $scope.showSuccess =false;
            
            $scope.submitFunc = () => {
                // console.log($scope.uname)
                $scope.showError = false;
                $scope.showSuccess = false;
                
                if($scope.uname && $scope.uname.length >= 6 && $scope.uname.length <= 10 && $scope.pword.length == 4){
                    $scope.showSuccess = true;
                }else{
                    $scope.showError = true;
                }
            }

        }])