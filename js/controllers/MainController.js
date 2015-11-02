/**
 * Created by Nikola on 30-Oct-15.
 */
app.controller('MainController', ['$scope', function($scope) {
    $scope.pics = [
        {
            source: 'img/pic1.jpg',
            title: 'PIC1',
            date: new Date('2015', '00', '01'),
            likes: 0
        },
        {
            source: 'img/pic2.jpg',
            title: 'PIC2',
            date: new Date('2015', '01', '05'),
            likes: 0
        },
        {
            source: 'img/pic3.jpg',
            title: 'PIC3',
            date: new Date('2015', '02', '09'),
            likes: 0
        },
        {
            source: 'img/pic4.jpg',
            title: 'PIC4',
            date: new Date('2015', '03', '03'),
            likes: 0
        }
    ]
    $scope.plusOne = function(index) {
            $scope.pics[index].likes +=1;
    };
}]);


