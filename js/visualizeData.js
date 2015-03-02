var render = function(numberOfData){
  this.create = new createData(numberOfData);
  this.data = create.dataSet;
  var list = $('#data-list');
  var parent = list.parent();
  list.detach().empty().each(function(i){
    for (var x = 0; x < data.length; x++){
        $(this).append('<li class="sampleData light-yellow">' + data[x] + '</li>');
        if (x == data.length - 1){
            $(this).appendTo(parent).fadeIn('slow');
      }
    }
  });
}
