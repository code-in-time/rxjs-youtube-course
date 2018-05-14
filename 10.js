<script src="https://unpkg.com/@reactivex/rxjs@5.3.0/dist/global/Rx.js"></script>

<input type="text" id="input1">
<input type="text" id="input2">

<p>Combined value: <span></span></p>

<script>
// https://www.youtube.com/watch?v=b59tcUwfpWU&list=PL55RiY5tL51pHpagYcrN9ubNLVXF8rGVi&index=9

var input1 = document.querySelector('#input1');
var input2 = document.querySelector('#input2');

var span = document.querySelector('span');

var obs1 = Rx.Observable.fromEvent(input1, 'input');
var obs2 = Rx.Observable.fromEvent(input2, 'input');

obs1.mergeMap(
	event1 => {
  	return obs2.map(event2 => event1.target.value + ' ' + event2.target.value)
  }).subscribe(
	combinedValue => span.textContent = combinedValue
)

//r obs1= Rx.Observable.fromEvent(input1, 'input')
//.subscribe(
//	event => span.textContent = event.target.value
//)
//var obs2= Rx.Observable.fromEvent(input2,'input')
//.subscribe(
//	event => span.textContent = event.target.value
//)
</script>
