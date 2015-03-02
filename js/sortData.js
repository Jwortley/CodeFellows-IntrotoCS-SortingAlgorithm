var sortTime = 0;
/*---------------Bubble Sort Algorithm-----------------*/
var bubbleSort = function(){
  var start = new Date().getTime();
  for (var i = 0; i < $('.sampleData').length ; i++)
   {
      for (var j = 0; j < $('.sampleData').length - 1; j++)
        {
          var currentElement = $('.sampleData').eq(j)
          var compareElement = $('.sampleData').eq(j+1);
          var currentValue = parseInt(currentElement.text());
          var compareValue = parseInt(compareElement.text());
          if (currentValue > compareValue)
          {
            var tempCurrent = $(currentElement).clone();
            var tempCompare = $(compareElement).clone();
            $(currentElement).replaceWith(tempCompare);
            $(compareElement).replaceWith(tempCurrent);
          }
        }
    }

    var end = new Date();
    sortTime = end - start;
}

/*---------------Insertion Sort Algorithm---------------*/
var insertionSort = function(){
  var start = new Date().getTime();
  for(i = 1; i < $('.sampleData').length; i++){
    for(k = i; k > 0; k--){
      var tempCurrent = $('.sampleData').eq(k).clone();
      var tempPrev = $('.sampleData').eq(k-1).clone();
      if(parseInt($('.sampleData').eq(k).text()) < parseInt($('.sampleData').eq(k-1).text())){
        $('.sampleData').eq(k).replaceWith(tempPrev);
        $('.sampleData').eq(k-1).replaceWith(tempCurrent);
      }
    }
  }
  var end = new Date();
  sortTime = end - start;
}

