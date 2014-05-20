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
  xian_code = 0，
  flag_zxs = false;

rl.on('line', function(line) {
  var arr = line.split(/\s+/);
  var sheng = arr[0].substring(0, 2);
  var shi = arr[0].substring(2, 4);
  var xian = arr[0].substring(4);

  if (u.indexOf(['北京市', '上海市', '天津市', '重庆市'], arr[1]) != -1) {
    flag_zxs = true;
  } else {
    flag_zxs = false;
  }

  if (flag_zxs && xian === '00') {
    return;
  }

  if (!flag_zxs && xian === '01') {
    return;
  }

  if (shi === '00' && xian === '00') {
    sheng_code++;
    shi_code = 0;
    xian_code = 0;
  }

  if (shi != '00' && xian === '00') {
    shi_code++;
    xian_code = 0;
  }

  if (shi != '00' && xian != '00') {
    xian_code++;
  }

  shi_code_str = shi_code >= 10 ? shi_code : '0' + shi_code;
  xian_code_str = xian_code >= 10 ? xian_code : '0' + xian_code;

  outstream.write(sheng_code + shi_code_str + xian_code_str + '      ' + arr[1] + '\n');


  if (u.indexOf(['北京市', '上海市', '天津市', '重庆市'], arr[1]) != -1) {
    // console.log(arr[1]);
  } else {
    // i>=10?i:'0'+i
  }

});