<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  <button>click me</button>
  <input type="text">
  <script src="https://unpkg.com/@reactivex/rxjs@5.3.0/dist/global/Rx.js"></script>
  <script>
// https://www.youtube.com/watch?v=QbNUD5ca99A&list=PL55RiY5tL51pHpagYcrN9ubNLVXF8rGVi&index=6

var input = document.querySelector('input');
var o = Rx.Observable.fromEvent(input, 'input');
    //o.throttle(ev => Rx.Observable.interval(1000))
    //o.throttleTime(1000)
    o
    .map(e => e.target.value)
    .debounceTime(1000)
    .distinctUntilChanged()
      .subscribe({
        next: v => console.log(v)
    })
    
    
  </script>
</body>
</html>
