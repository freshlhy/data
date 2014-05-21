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
  xian_code = 0,
  flag = false,
  temp = '';

rl.on('line', function(line) {
  var arr = line.split(/\s+/);
  var sheng = arr[0].substring(0, 2);
  var shi = arr[0].substring(2, 4);
  var xian = arr[0].substring(4);

  if (shi === '00' && xian === '00') {
    sheng_code++;
    shi_code = 0;
    xian_code = 0;
    if (u.indexOf(['北京市', '上海市', '天津市', '重庆市'], arr[1]) != -1) {
      flag = true;
    } else {
      flag = false;
    }
  }

  if (flag && shi != '00' && xian === '00') {
    temp = ''
    return;
  }

  if (!flag && xian === '01' && temp != (sheng + shi)) {
    return;
  }

  if (shi != '00' && xian === '00') {
    if (arr[1] === '省直辖县级行政区划') {
      temp = sheng + shi;
      return
    };
    shi_code++;
    xian_code = 0;
  }

  if (shi != '00' && xian != '00') {
    xian_code++;
  }

  if (temp === (sheng + shi)) {
    shi_code++;
    xian_code = 0;
  };

  shi_code_str = shi_code >= 10 ? shi_code : '0' + shi_code;
  xian_code_str = xian_code >= 10 ? xian_code : '0' + xian_code;

  if (flag) {
    shi_code_str = '';
  };

  outstream.write('' + sheng_code + shi_code_str + xian_code_str + '      ' + arr[1] + '\n');

});