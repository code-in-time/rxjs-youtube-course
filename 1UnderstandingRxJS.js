<!-- https://www.youtube.com/watch?v=T9wOu11uU6U&list=PL55RiY5tL51pHpagYcrN9ubNLVXF8rGVi -->
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
    var button = document.querySelector('button');

    // button.addEventListener('click', (e) => console.log(e));

    Rx.Observable.fromEvent(button, 'click')
      .throttleTime(5000)
      .subscribe(e => console.log('click'));
  </script>
</body>
</html>
