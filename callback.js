    

    // callback function : ackta function parameter arackta function ke pass kra 

    const function1 = (a,b,callback) =>{
    
        // console.log(typeof callback);
       callback(a,b);
    };

    const callback = (x,y)=>{
          console.log("Sum = ", x+y ); 
    };
    function1(10,5,callback);



    const function2 =(a,b,c, callback) =>{
         callback(a,b,c);
    };
    const add =  (x,y,z) =>{
        console.log("Sum = ", x*y*z);
    };
     function2(10,10,10,add);