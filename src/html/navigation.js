var currentPage = (location.pathname.split('/').pop()) || 'index.html';

function navIcon(body) {
  return "<svg class='nav-icon' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>" + body + "</svg>";
}

function navItem(href, key, label, body) {
  var cls = (currentPage === href) ? " class='active'" : "";
  var txt = key ? "<span data-i18n='" + key + "'>" + label + "</span>" : "<span>" + label + "</span>";
  return "<li><a href='" + href + "'" + cls + ">" + navIcon(body) + txt + "</a></li>";
}

var iOverview = "<path d='M3 10.5 12 3l9 7.5'/><path d='M5 9.5V21h14V9.5'/>";
var iPorts = "<rect x='3' y='3' width='7' height='7' rx='1'/><rect x='14' y='3' width='7' height='7' rx='1'/><rect x='3' y='14' width='7' height='7' rx='1'/><rect x='14' y='14' width='7' height='7' rx='1'/>";
var iStat = "<path d='M3 20h18'/><path d='M7 20v-6'/><path d='M12 20v-10'/><path d='M17 20v-4'/>";
var iVlan = "<path d='M20.6 13.4 12 22l-8-8V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z'/><circle cx='8' cy='8' r='1.6'/>";
var iL2 = "<rect x='3' y='4' width='18' height='16' rx='2'/><path d='M3 10h18'/><path d='M9 4v16'/>";
var iMirror = "<rect x='8' y='8' width='12' height='12' rx='2'/><path d='M4 16V6a2 2 0 0 1 2-2h8'/>";
var iLag = "<path d='M9 15l6-6'/><path d='M11 6 9 4a4.2 4.2 0 0 0-6 6l2 2'/><path d='M13 18l2 2a4.2 4.2 0 0 0 6-6l-2-2'/>";
var iEee = "<path d='M12 3v9'/><path d='M18.4 6.6a9 9 0 1 1-12.8 0'/>";
var iBw = "<path d='M4 18a8 8 0 1 1 16 0'/><path d='M12 18l3.5-5'/>";
var iSys = "<path d='M4 21v-7'/><path d='M4 10V3'/><path d='M12 21v-9'/><path d='M12 8V3'/><path d='M20 21v-5'/><path d='M20 12V3'/><path d='M2 14h4'/><path d='M10 8h4'/><path d='M18 16h4'/>";
var iUpd = "<path d='M12 21V9'/><path d='m7 14 5-5 5 5'/><path d='M4 3h16'/>";

var brandSwitch = "<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>"
  + "<rect x='3' y='4' width='18' height='16' rx='2'/>"
  + "<rect x='6' y='8' width='4' height='4' rx='0.8'/><rect x='14' y='8' width='4' height='4' rx='0.8'/>"
  + "<rect x='6' y='15' width='4' height='2' rx='0.8'/><rect x='14' y='15' width='4' height='2' rx='0.8'/>"
  + "</svg>";

document.getElementById('sidebar').innerHTML =
  "<div class='sidebar-brand'>" + brandSwitch + "<span>RY-4GT-2SX</span></div>"
  + "<ul>"
  + navItem('index.html', 'nav_overview', 'Overview', iOverview)
  + navItem('ports.html', 'nav_port_config', 'Port Configuration', iPorts)
  + navItem('stat.html', 'nav_port_stat', 'Port Statistics', iStat)
  + navItem('vlan.html', '', 'VLAN', iVlan)
  + navItem('l2.html', 'nav_l2', 'L2 Configuration', iL2)
  + navItem('mirror.html', 'nav_mirror', 'Mirroring', iMirror)
  + navItem('lag.html', 'nav_lag', 'Link Aggregation', iLag)
  + navItem('eee.html', 'nav_eee', 'EEE', iEee)
  + navItem('bandwidth.html', 'nav_bandwidth', 'Bandwidth Limits', iBw)
  + navItem('system.html', 'nav_system', 'System Settings', iSys)
  + navItem('update.html', 'nav_fw_update', 'Firmware Update', iUpd)
  + "</ul>";

// Keep port tooltips inside the viewport
document.addEventListener('mouseover', function(e) {
  var host = e.target && e.target.closest ? e.target.closest('.tooltip') : null;
  if (!host) return;
  var tip = host.querySelector('.tooltiptext');
  if (!tip) return;
  tip.style.top = '';
  tip.style.bottom = '';
  tip.style.left = '50%';
  tip.style.right = 'auto';
  tip.style.transform = 'translateX(-50%)';
  var r = tip.getBoundingClientRect();
  var vw = document.documentElement.clientWidth;
  var vh = document.documentElement.clientHeight;
  if (r.bottom > vh) { tip.style.top = 'auto'; tip.style.bottom = '110%'; r = tip.getBoundingClientRect(); }
  if (r.right > vw) {
    tip.style.transform = 'translateX(calc(-50% - ' + (r.right - vw + 8) + 'px))';
  }
});
