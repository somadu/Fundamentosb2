function big(x){
    for (var i=0;i<x.length;i++){
        if(x[i]>0){
            x[i]="big";
        }
    }
    return x
}

function print(x){
    var min=0
    var max=0
    for (var i=0;i<x.length;i++){
        if(max<x[i]){
            max=x[i];
        }
        if(min>=0){
            min=x[i]
        }
    }
    console.log(min);
    return max
}
function print(x){
    var imp=0
    for (var i=0;i<x.length;i++){
        if(x[i]%2>0){
          imp=x[i];
          break;
        }
    }
    console.log(x[x.length-2]);
    return imp
}
function mult(x){
    var temp=[]
      for (var i=0;i<x.length;i++){
        temp.push(x[i])
        x[i]=x[i]*2
      }
      console.log(x);
      return temp
  }
  function posi(x){
    var sum=0
      for (var i=0;i<x.length;i++){
        if(x[i]>0){
          sum++;
        }
      }
      x[x.length-1]=sum
      return x
  }
  function fack(x){
    for (var i=0;i<x.length;i++){
        if(x[i]%2>0 && x[i+1]>0 && x[i+2]>0){
          console.log("¡Qué imparcial!");
        }
        if(x[i]%2===0 && x[i+1]===0 && x[i+2]===0){
          console.log("¡Es para bien!");
        }
    }
  return("listo")
}
function fack(x){
    for (var i=0;i<x.length;i++){
        if(x[i]%2>0 
          && x[i+1]%2>0 
          && x[i+2]%2>0
          ){
          console.log("¡Qué imparcial!");
        }
        if(x[i]%2===0 && x[i+1]%2===0 && x[i+2]%2===0){
          console.log("¡Es para bien!");
        }
    }
  return("listo")
}

function sum(x){
  for (var i=0;i<x.length;i++){
    if(i%2==1){
      x[i]++;
      console.log(x[i])
    }
  }
  return x;
}

function sum1(x){
  for (var i = 0; i < x.length; i++) {
    if(i%2==1){
      x[i]++;
    }
  }
  return x
}

function sum7(x){
  for(var i=0;i<x.length;i++){
    x[i]+=7;
  }
  return x;
}

function reverse(x){
  for(var i=0;i<x.length/2;i++){
    [x[i],x[x.length-1-i]]=[x[x.length-1-i],x[i]];
  }
  return x;
}

function negative(x){
  for(var i=0;i<x.length;i++){
    if(x[i] >= 0){
      x[i] = x[i] * -1;
    }
  }
  return x;
}

function hambre(x){
  var y=0;
  for(var i=0 ; i < x.length ; i++){
    if(x[i]==("comida")){
      y+=1
      console.log("yummi") ;
    }
  }
  if(y===0){
   return "tengo hambre";
  }
}

  function reverse(x){
    for(var i=0;i<x.length/2;i+=2){
    [x[i],x[x.length-1-i]]=[x[x.length-1-i],x[i]];
  }
  return x;
}

function mult(x,y){
  for (var i = 0; i < x.length; i++) {
    x[i]=x[i]*y
  }
  return x
}


