var tape = require('tape')
var parse = require('parse-svg-path')
var translate = require('../')

var straight = parse('M10 10 L15 15')
var curves = {
  relative: parse('M10 10 c15 15, 20 10, 15 15'),
  absolute: parse('M10 10 C15 15, 20 10, 15 15')
}

tape('x only', function(test) {
  var input = translate(straight, 20)
  var expected = parse('M30 10L35 15')
  test.deepEqual(input, expected)
  test.end()
})

tape('x and y', function(test) {
  var input = translate(straight, 20, 10)
  var expected = parse('M30 20L35 25')
  test.deepEqual(input, expected)
  test.end()
})

tape('x and y (relative curves)', function(test) {
  var input = translate(curves.relative, 20, 10)
  var expected = parse('M30 20c15 15 20 10 15 15')
  test.deepEqual(input, expected)
  test.end()
})

tape('x and y (absolute curves)', function(test) {
  var input = translate(curves.absolute, 20, 10)
  var expected = parse('M30 20C35 25 40 20 35 25')
  test.deepEqual(input, expected)
  test.end()
})
