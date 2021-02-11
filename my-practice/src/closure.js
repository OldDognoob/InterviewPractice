// closure Example
//  function OuterFunction(){
//      var outerVariable = 100;
//      function InnerFunction(){
//          alert(outerVariable);
//      }
//      return InnerFunction;
//  }
//  var innerFunc = OuterFunction();

 function makeFunc(){
     var name = 'Dimos';
     function displayName(){
         alert(name);
     }
     return displayName;
 }
 var myFunc = makeFunc();
 myFunc();