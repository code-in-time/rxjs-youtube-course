<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  <button>click me</button>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/rxjs/5.0.0-rc.1/Rx.js"></script>
  <script>
// https://www.youtube.com/watch?v=tk5x8By3yYk&list=PL55RiY5tL51pHpagYcrN9ubNLVXF8rGVi&index=5

    var observable = Rx.Observable.interval(1000);
    observable
      .filter(x => x===5)
      .subscribe({
      next: (v) => console.log(v),
      error: (v) => console.log('error', v)
    })
  </script>
</body>
</html>
