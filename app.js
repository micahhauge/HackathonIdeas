

function ProjectController($scope) {
    $scope.projects = [
        { name: "HelloWorld", leader: "Micah Hauge", description: "This is an app to print 'hello world'."},
        { name: "Another app", leader: "Micah Hauge", description: "This is an app to print 'hello world'."}
    ];

    $scope.addProject = function() {
        $scope.projects.push({ name: "NEW PROJECT", leader: "new", description: "new"});
    };

}
