var fs = require('fs'),
  readline = require('readline'),
  stream = require('stream'),
  u = require("underscore");

var instream = fs.createReadStream('xxx.txt');
var outstream = fs.createWriteStream('file.txt');

var rl = readline.createInterface({
  input: instream,
  output: outstream,
  terminal: false
});

var sheng_code = 10,
  shi_code = 0,
  xian_code = 0;


rl.on('line', function(line) {
  var arr = line.split(/\s+/)
  var sheng = arr[0].substring(0, 2)
  var shi = arr[0].substring(2, 4)
  var xian = arr[0].substring(4)
  // outstream.write(arr[0] + '  ' + arr[0].substring(0, 2) + '  ' +
  //   arr[0].substring(2, 4) + '  ' + arr[0].substring(4) + '  ' + arr[1] + '  ' +
  //   '\n');


  if (shi === '00' && xian === '00') {
    console.log(sheng_code + '  ' + arr[1]);
    sheng_code++;
  }


  if (u.indexOf(['北京市', '上海市', '天津市', '重庆市'], arr[1]) != -1) {
    // console.log(arr[1]);
  } else {
    // i>=10?i:'0'+i
  }

});