/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {

  var form = Handlebars.compile($('#form').html());
  var table = Handlebars.compile($('#table').html());
//  localStorage.setItem('tableData', JSON.stringify(['test1']));
  
  $('#addNewItem').on('click', showForm);
  
  function showForm() {
    var data = {
      label: 'Book'
    };    
    var html = form( data);
    $('#main').html(html);
    $('#submit').bind('click', showTable);
  }
  
  function showTable() {
   var tableData = JSON.parse(localStorage.getItem('tableData'));
    if (tableData === null) {
      tableData = [];
    }
    tableData.push($('#input').val());

    localStorage.setItem('tableData', JSON.stringify(tableData));
    var r;
    
    tableData.forEach(function callback(currentValue, index, array){
      r += '<tr><td>' + currentValue + '</td></tr>';
    });
      
    var data = {
      col: 'Book',
      row: r
    };
    var html = table( data);
    $('#main').html(html);
  }  
});