var a=0;

function f1(){
  var a=0;
  var f2=function(){
    console.log(a);
  };
  return f2();
}

f1();