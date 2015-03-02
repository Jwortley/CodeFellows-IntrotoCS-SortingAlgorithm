var createData = function(dataSetNum){
  this.dataSet=[];
  this.number=0;
    for(var i=0;i<dataSetNum;i++){
      number=Math.floor(Math.random()*dataSetNum)+1;
      this.dataSet.push(number);
    }
    return this;
  };
