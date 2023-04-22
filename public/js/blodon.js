window.onload=function(){

    var today = new Date().toISOString().split('T')[0];
    document.getElementsByName("donationdate")[0].setAttribute('min', today);

    date      = new Date();
    next_date = new Date(date.setDate(date.getDate() + 30));
    var IncrementedDate = next_date.toISOString().slice(0, 10);

    document.getElementsByName("donationdate")[0].setAttribute('max', IncrementedDate);
    
}


function prev() {
    var ele = document.getElementsByName('previously');
    if(ele[0].checked)
    {
        alert("Sorry, you are not eligible to donate blood.");
        document.getElementById("sbtn").disabled = true;
    }
    else if(ele[1].checked)
    {
        document.getElementById("sbtn").disabled = false;
    }
}

function infec() {
    var ele = document.getElementsByName('infected');
    if(ele[0].checked)
    {
        alert("Sorry, you are not eligible to donate blood.");
        document.getElementById("sbtn").disabled = true;
    }
    else if(ele[1].checked)
    {
        document.getElementById("sbtn").disabled = false;
    }
}

//code for cities input

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
  
  function validatedonar()
  {
 
    var age = document.getElementById("age").value  
    var weight = document.getElementById("weight").value;

    var wtLos = document.getElementById("wtLoss"); 
    var reDi = document.getElementById("reDi"); 
    var swGl = document.getElementById("swGl"); 
    var fev = document.getElementById("fev"); 

    var tatto = document.getElementById("tatto"); 
    var erPi = document.getElementById("erPi"); 
    var deEx = document.getElementById("deEx"); 

    var hiDi = document.getElementById("heDi"); 
    var luDi = document.getElementById("luDi"); 
    var kiDi = document.getElementById("kiDi"); 
    var caDi = document.getElementById("caDi"); 
    var eiDi = document.getElementById("eiDi"); 
    var diDi = document.getElementById("diDi"); 
    var tuDi = document.getElementById("tuDi"); 
    var abDi = document.getElementById("abDi");
    var heDi = document.getElementById("hepDi"); 
    var alDi = document.getElementById("alDi");
    var jaDi = document.getElementById("jaDi");
    var seDi = document.getElementById("seDi"); 
    var maDi = document.getElementById("maDi"); 
    var tyDi = document.getElementById("tyDi"); 
    var faDi = document.getElementById("faDi");

    var maSur = document.getElementById("maSur"); 
    var blTrans = document.getElementById("blTrans"); 
    var miSur = document.getElementById("miSur");
    console.log("age : " + age);
    console.log("weight : " + weight);

    if(weight <= 50 || age <= 18 || age >= 60 ||  wtLos.checked == true || reDi.checked == true || swGl.checked == true || fev.checked == true)
    {
        alert("Sorry, you are not eligible to donate blood.");
        return false;
    }
    else if(tatto.checked == true || erPi.checked == true || deEx.checked == true)
    {
        alert("Sorry, you are not eligible to donate blood.");
        return false;
    }
    else if(hiDi.checked == true || luDi.checked == true || kiDi.checked == true || caDi.checked == true || alDi.checked == true)
    {
        alert("Sorry, you are not eligible to donate blood.");
        return false;
    }
    else if(eiDi.checked == true || diDi.checked == true || tuDi.checked == true || abDi.checked == true || heDi.checked == true)
    {
        
        alert("Sorry, you are not eligible to donate blood.");
        return false;
    }
    else if(jaDi.checked == true || seDi.checked == true || maDi.checked == true || tyDi.checked == true || faDi.checked == true)
    {
        alert("Sorry, you are not eligible to donate blood.");
        return false;
    }
    else if(maSur.checked == true || blTrans.checked == true || miSur.checked == true)
    {
        alert("Sorry, you are not eligible to donate blood.");
        return false;
    }
    else{
        return true;
    }

  }