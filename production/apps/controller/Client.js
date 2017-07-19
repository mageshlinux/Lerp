/**
 * Created by Deepak on 7/19/2017.
 */
$(document).ready(function() {
    $('#ClientForm').validator();
    $('#client-hearingdate').daterangepicker({
        singleDatePicker: true,
        startDate: moment(),
        locale:{format: 'DD/MMM/YYYY'}
    });
});
function SaveClient()
{
    var data = $("#ClientForm").serialize();
    alert(data)
}