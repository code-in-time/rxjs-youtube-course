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
   //https://www.youtube.com/watch?v=rdK92pf3abs&list=PL55RiY5tL51pHpagYcrN9ubNLVXF8rGVi&index=4
  
    var subject = new Rx.Subject();
    
    subject.subscribe({
        next: function (value) {
          console.log(value);
      },
        error: function (error) {
          console.log('error');
      },
       complete: function() {
          console.log('completed');
      }
    });
    
    subject.subscribe({
        next: function (value) {
          console.log(value);
      }
    });    
    
    subject.next('a new pieceof data');
     subject.complete('');
    subject.error('err')
   
    
    
    
    
    //var observable = Rx.Observable.interval(1000);
    //var observer ={
    //  next: function (value) {
    //    console.log(value);
    //  }
    //}
    
    //observable.map(v => {
    //  return v + 'a';
    //}).throttleTime(2000).subscribe(observer);
    
  </script>
</body>
</html>
