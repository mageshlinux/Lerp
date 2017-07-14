/**
 * Created by Deepak on 7/14/2017.
 */
$(document).ready(function() {
    var UserData =JSON.parse(sessionStorage.getItem("UserData"));

    $("#WelcomeSpan").text(UserData.USERNAME);
    $("#Logspan").text(UserData.USERNAME);
});