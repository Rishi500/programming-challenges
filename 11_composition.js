// pipe([
//     times(2),
//     times(3)
//   ])  
//   // x * 2 * 3
  
/**
 * @param {Array<(arg: any) => any>} funcs 
 * @return {(arg: any) => any}
 */
 function pipe(funcs) {
	// your code here
	return function(x){
		let result = x;
		for(let i=0;i<funcs.length;i++){
			const newFunction = funcs[i]
			result = newFunction(result);
		}
		return result
	}
}