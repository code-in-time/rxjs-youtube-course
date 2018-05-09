<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  <button>click me</button>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/rxjs/5.0.0-rc.1/Rx.min.js"></script>
  <script>
   // https://www.youtube.com/watch?v=-nYQJkMpOHU&index=2&list=PL55RiY5tL51pHpagYcrN9ubNLVXF8rGVi
  var observable = Rx.Observable.interval(1000);
    var observer ={
      next: function (value) {
        console.log(value);
      }
    }
    
    observable.map(v => {
      return v + 'a';
    }).throttleTime(2000).subscribe(observer);
    
  </script>
</body>
</html>
