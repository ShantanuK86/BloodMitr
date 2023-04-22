$(document).ready(function() {
    $.getJSON("js/cities", function(data) {
      var state_select = $('#state');
      var city_select = $('#city'); 
  
      // Populate State Dropdown
      $.each(data, function(key, value) {
        state_select.append($('<option></option>').attr('value', key).text(key));
      });
  
      // Populate City Dropdown based on selected state
      state_select.on('change', function() {
        var state = $(this).val();
        city_select.empty();
        $.each(data[state], function(index, value) {
          city_select.append($('<option></option>').attr('value', value).text(value));
        });
      });
    });
  });