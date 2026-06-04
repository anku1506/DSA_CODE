//debounce method print

function debounce(fn,delay){
	let timerID;
	
	return function(...args){
		clearTimeout(timerID);//it cancel the previous call/timer
		timerID =setTimeout(()=>{
			fn(...args);			
		},delay)
	};
	
}
const SearchText=(value)=>{
	console.log("Searching "+value);
}

const searchwithDebounce=debounce(SearchText,1000)



searchwithDebounce("A");
searchwithDebounce('An');
searchwithDebounce('Ank');
searchwithDebounce('Anku');


