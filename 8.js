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
// https://www.youtube.com/watch?v=myEeo2rZc3g&index=7&list=PL55RiY5tL51pHpagYcrN9ubNLVXF8rGVi

var input = document.querySelector('input');
var o = Rx.Observable.of(1,2,3,4,5,6);
    //o.throttle(ev => Rx.Observable.interval(1000))
    //o.throttleTime(1000)
    o
      .reduce((t,v) => t +v, 0)
      .subscribe({
        next: v => console.log(v)
    })    
    
    
  </script>
</body>
</html>
