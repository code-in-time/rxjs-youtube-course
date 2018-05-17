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
// https://www.youtube.com/watch?v=6lKoLwGlglE&list=PL55RiY5tL51pHpagYcrN9ubNLVXF8rGVi&index=10
var button = document.querySelector('button');
var obs1 = Rx.Observable.fromEvent(button, 'click'); 
var obs2 = Rx.Observable.interval(1000);
    
    //obs1.subscribe(
    //  (ev) => obs2.subscribe(
    //    (value) => console.log(value)
    //  )
    //);
    
    obs1.switchMap(
      (event) => {
       return obs2
      }
    ).subscribe(v => console.log(v));
  </script>
</body>
</html>
