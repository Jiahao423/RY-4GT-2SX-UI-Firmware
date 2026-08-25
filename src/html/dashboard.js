function fmtBytes(n) {
  n = Number(n);
  if (n < 1024) return n + ' B';
  var u = ['KB', 'MB', 'GB', 'TB', 'PB'];
  var i = -1;
  do { n /= 1024; i++; } while (n >= 1024 && i < u.length - 1);
  return n.toFixed(1) + ' ' + u[i];
}

function updateTiles() {
  if (!numPorts) return;
  var portsEl = document.getElementById('tile-ports');
  var speedEl = document.getElementById('tile-speed');
  var txEl = document.getElementById('tile-tx');
  var rxEl = document.getElementById('tile-rx');
  var up = 0, maxLink = 0;
  for (var i = 0; i < numPorts; i++) {
    if (pState[i] > 0) { up++; if (pState[i] > maxLink) maxLink = pState[i]; }
  }
  if (portsEl) portsEl.textContent = up + ' / ' + numPorts;
  if (speedEl) speedEl.textContent = maxLink > 0 ? linkText(maxLink + 1) : '–';
  var tx = 0n, rx = 0n;
  for (var j = 0; j < numPorts; j++) { tx += txBytes[j]; rx += rxBytes[j]; }
  if (txEl) txEl.textContent = fmtBytes(tx);
  if (rxEl) rxEl.textContent = fmtBytes(rx);
}

setInterval(updateTiles, 1500);
