<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  <button>Click me</button>
  <div></div>
  <script src="https://unpkg.com/@reactivex/rxjs@5.3.0/dist/global/Rx.js"></script>
  <script>
    
  // https://www.youtube.com/watch?v=-mwNLRbfKmU&list=PL55RiY5tL51pHpagYcrN9ubNLVXF8rGVi&index=11
  var clickEmitted = new Rx.BehaviorSubject('not');
  var button = document.querySelector('button');
  var div = document.querySelector('div');

  button.addEventListener('click', () => clickEmitted.next('Clicked!'));

  clickEmitted.subscribe(
      (value) => div.textContent = value
  );


  </script>
</body>
</html>
