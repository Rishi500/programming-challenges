 function throttle(func, wait) {
    // your code here
    let timer = null;
    let lastArgs = null;
    return function throttled(...args){
      if(!timer){
        func(...args);
        timer = setTimeout(()=>{
          timer = null;
          if(lastArgs){
            func(...lastArgs)
            lastArgs = null;
          }
        }, wait)
      } else {
        lastArgs = args;
      }
      
    }
  }
  
  