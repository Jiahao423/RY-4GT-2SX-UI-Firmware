const infoKeyMap = {
  'ip_address': 'info_ip',
  'ip_gateway': 'info_gateway',
  'ip_netmask': 'info_netmask',
  'syslog_server_ip': 'info_syslog',
  'mac_address': 'info_mac',
  'sw_ver': 'info_firmware',
  'build_date': 'info_build_date',
  'hw_ver': 'info_hw_ver',
  'flash_size': 'info_flash_size',
  'sfp_slot_0': 'info_sfp0',
  'sfp_slot_1': 'info_sfp1'
};

document.addEventListener("DOMContentLoaded", function () {
    fetch('/information.json')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('infoTable').querySelector('tbody');

            // Create table rows
            for (const [key, value] of Object.entries(data)) {
                const row = document.createElement('tr');
                const cellKey = document.createElement('td');
                const cellValue = document.createElement('td');

                cellKey.textContent = t(infoKeyMap[key] || key);
                cellValue.textContent = value;

                row.appendChild(cellKey);
                row.appendChild(cellValue);
                tableBody.appendChild(row);
            }
        })
        .catch(error => console.error('Error fetching the data:', error));
});
