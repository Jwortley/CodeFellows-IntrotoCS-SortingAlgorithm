$(document).ready(function(){
  generateDataButton();
  hoverSortButtons();
  sortEvent();
});

var generateDataButton = function(){
    $('.sort-button').hide();
    $('#elmArr50').click(function(){
    $('#data-list').fadeOut('slow',function(){
      render(50);
      $('.sort-button').show();
    });
  });
  $('#elmArr100').click(function(){
    $('#data-list').fadeOut('slow',function(){
      render(100);
      $('.sort-button').show();
    });
  });
  $('#elmArr200').click(function(){
    $('#data-list').fadeOut('slow',function(){
      render(200);
      $('.sort-button').show();
    });
  });
}

var hoverSortButtons = function(){
  var highlight = function(){
    $(this).addClass('light-yellow');
  };
  var unhighlight = function(){
    $(this).removeClass('light-yellow');
  }
  $('#bubbleSort').hover(highlight,unhighlight);
  $('#insertSort').hover(highlight,unhighlight);
  $('#mergeSort').hover(highlight,unhighlight);
}

var sortEvent = function(){
  $('#bubbleSort').on('click',function(){
    bubbleSort();
    $('.sort-button').hide();
    $('#sort-list').fadeIn('slow',function(){
      $(this).append('<li class="sort-button light-yellow inline"> Sort Completed.'+
      ' Time to complete sort was: '+ sortTime +'ms</li>');
    });
  });
  $('#insertSort').on('click',function(){
    insertionSort();
    $('.sort-button').hide();
    $('#sort-list').fadeIn('slow',function(){
      $(this).append('<li class="sort-button light-yellow inline"> Sort Completed.'+
      ' Time to complete sort was: '+ sortTime +'ms</li>');
    });
  });
}
