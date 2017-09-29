var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.";
function IdeaController($scope) {
    $scope.test = "This is my test message.";

    $scope.projects = [
        { name: "Android App", description: lorem, contributers: "Micah, Brian, Nathan", startdate: "11/11/2017" },
        { name: "Music Generation", description: lorem, contributers: "Micah, Brian, Nathan", startdate: "11/11/2017" },
        { name: "Another Project", description: lorem, contributers: "Micah, Brian, Nathan", startdate: "11/11/2017" },
    ];
}
