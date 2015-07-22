var displayText = function(){
  var text = document.getElementById("example");
  text.innerHTML = "Girls Who Code is amazing!"
}

window.onload = function() { init() };

  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1sWiaHJtsvHD5bCUSYXje-SraDkdKCYk59Fe4LxuVQGw/pubhtml';

  function init() {
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: showInfo,
                     simpleSheet: true } )
  }

  function showInfo(data, tabletop) {
    console.log(JSON.stringify(data));
    displayAllResponse(data);
  }

var displayAllResponse = function(responselist){
  console.log(JSON.stringify(responselist));
  for(var i = 0; i < responselist.length; i++){
    var response = responselist[i];
    displayResponse(response);
  }
};

var displayResponse = function(response){
  var responseString = "Name: " + response.person; //+ "     Number: " + contact.number;
  var htmlString = '<ul data-role="collapsible-set" id="responseHolder" data-inset="true" da
  ta-filter = "true" data-autodividers="true">\
            <h2>' + response.company + ' </h2>\
            <p> Name: ' + response.name + ' </p>\
            <p> Experience: ' + response.experience + ' </p>\
           </ul>';
  $("#responseHolder").append(htmlString);
  $("#responseHolder").collapsibleset("refresh");
  console.log(responseString);
};