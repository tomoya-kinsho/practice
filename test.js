function execCallback(callback) {
    console.log('I call callback tomoooooooooooo');
    callback();
  }
  
  // execCallback()に渡されるコールバック関数
  var myCallback = function() {
    console.log('This is my callback kinsho');
  }
  
  // execCallback()にコールバック関数を渡して実行する
  execCallback(myCallback);  // => 'I call callback'
                             //    'This is my callback'
