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
    // <!-- https://www.youtube.com/watch?v=Tux1nhBPl_w&list=PL55RiY5tL51pHpagYcrN9ubNLVXF8rGVi&index=2 -->
    var button = document.querySelector('button');
    var observer ={
      next: (v) => console.log('next'),
      error: () => console.log('error'),
      complete: () => console.log('complete'),
    }

   
    // Rx.Observable.fromEvent(button, 'click')
      //.throttleTime(5000)
    var mySubscription =  Rx.Observable.create(function(obs) {
        //obs.next('A value');
        //setTimeout(() => {
        //  obs.complete();
        //}, 2000);
        //obs.next('a second value');
        //obs.err(),
        button.onclick = (e) => {
          obs.next(e);
        } 
      })
      .subscribe(observer);
    
    
    setTimeout(() => {
      mySubscription.unsubscribe();
    }, 2000);
  </script>
</body>
</html>
