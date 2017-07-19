/**
 * Created by Deepak on 7/19/2017.
 */
$(document).ready(function() {
    $('#ClientForm').validator();
    $('#client-hearingdate').daterangepicker({
        singleDatePicker: true,
        startDate: moment()
    });
});