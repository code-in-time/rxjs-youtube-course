<script src="https://unpkg.com/@reactivex/rxjs@5.3.0/dist/global/Rx.js"></script>

<input type="text">

<script>

// https://www.youtube.com/watch?v=IVBJ3-M_YsQ&index=8&list=PL55RiY5tL51pHpagYcrN9ubNLVXF8rGVi
var input = document.querySelector('input');
var observable = Rx.Observable.fromEvent(input, 'input');

observable
 .pluck('target', 'value')
 //.map(event => event.target.value)
 .debounceTime(500)
 .distinctUntilChanged()
.subscribe({

	next: function(v) {
  	console.log(v);
  }
});
</script>

