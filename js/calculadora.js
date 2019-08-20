var arr = [
    ['ambiente1',100],
    ['ambiente2',150],
    ['ambiente3',50]
];

  $('#myTable').on('click', '.clickable-row', function(event) {
    if($(this).hasClass('table-primary')){
      $(this).removeClass('table-primary'); 
    } else {
      $(this).addClass('table-primary');
    }
  });