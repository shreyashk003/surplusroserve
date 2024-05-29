$(document).ready(function() {
    const apiUrl = "http://localhost:3000"; // Change this to your backend URL

    // Load surplus food list
    function loadSurplusList() {
        $.get(apiUrl + "/surplus", function(data) {
            $('#surplusList').empty();
            data.forEach(item => {
                $('#surplusList').append(
                    `<li class="list-group-item">
                        <strong>${item.restaurantName}:</strong> ${item.surplusFood}
                    </li>`
                );
            });
        });
    }

    // Restaurant form submission
    $('#restaurantForm').submit(function(e) {
        e.preventDefault();
        const restaurantName = $('#restaurantName').val();
        const surplusFood = $('#surplusFood').val();
        $.post(apiUrl + "/addSurplus", { restaurantName, surplusFood }, function() {
            loadSurplusList();
            $('#restaurantForm')[0].reset();
        });
    });

    // NGO form submission
    $('#ngoForm').submit(function(e) {
        e.preventDefault();
        const ngoName = $('#ngoName').val();
        const requestFood = $('#requestFood').val();
        $.post(apiUrl + "/requestFood", { ngoName, requestFood }, function() {
            alert('Request submitted successfully');
            $('#ngoForm')[0].reset();
        });
    });

    loadSurplusList();
});
