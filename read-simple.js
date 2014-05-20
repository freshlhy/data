var fs = require('fs'),
  readline = require('readline'),
  stream = require('stream');

var instream = fs.createReadStream('xxx.txt');
var outstream = fs.createWriteStream('file.txt');

var rl = readline.createInterface({
  input: instream,
  output: outstream,
  terminal: false
});

rl.on('line', function(line) {
  var arr = line.split(/\s+/)
  var sheng = arr[0].substring(0, 2)
  var shi = arr[0].substring(2, 4)
  var xian = arr[0].substring(4)
  outstream.write(arr[0] + '  ' + arr[0].substring(0, 2) + '  ' + arr[0].substring(2, 4) + '  ' + arr[0].substring(4) + '  ' + arr[1] + '  ' +
    '\n');


  if (_.indexOf(['北京市', '上海市', '天津市', '重庆市'], arr[1]))
});