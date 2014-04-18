module.exports = function(segments, x, y) {
  // y is optional
  y = y || 0

  return segments.map(function(segment) {
    var cmd = segment[0]

    // Shift coords only for commands with absolute values
    if ('ACHLMRQSTVZ'.indexOf(cmd) === -1) {
      return segment
    }

    var name  = cmd.toLowerCase()

    // V is the only command, with shifted coords parity
    if (name === 'v') {
      segment[1] += y
      return segment
    }

    // ARC is: ['A', rx, ry, x-axis-rotation, large-arc-flag, sweep-flag, x, y]
    // touch x, y only
    if (name === 'a') {
      segment[6] += x
      segment[7] += y
      return segment
    }

    // All other commands have [cmd, x1, y1, x2, y2, x3, y3, ...] format
    return segment.map(function(val, i) {
      if (!i) {
        return val
      }
      return i % 2 ? val + x : val + y
    })
  })
}
