// Datos de los pilotos
var pilotos = [
  { piloto: 'MDK_LORD_HADES', pais: 'AR', puntos: 100 },
  { piloto: 'JOAKO_SCR', pais: 'AR', puntos: 9500 },
  { piloto: 'S.J. SANDOVAL', pais: 'BO', puntos: 80 },
  { piloto: 'IRONHIIDE', pais: 'AR', puntos: 75 },
  { piloto: 'URCP_PABLITO', pais: 'AR', puntos: 75 },
  { piloto: 'FOX2267', pais: 'AR', puntos: 75 },
  { piloto: 'GTpe_Jeipi', pais: 'PE', puntos: 75 },
  { piloto: 'Indio2371', pais: 'AR', puntos: 75 },
  { piloto: 'OBR_Adka135', pais: 'AR', puntos: 75 },
  { piloto: 'Patriciozabala20', pais: 'AR', puntos: 75 },
  { piloto: 'Manuelx', pais: 'CO', puntos: 75 },
  { piloto: 'Rossisport', pais: 'AR', puntos: 75 },
  { piloto: 'ALUCARD2480', pais: 'AR', puntos: 75 },
  { piloto: 'ColxLu7h0r', pais: 'CO', puntos: 75 },
  { piloto: 'ChomPeeeras', pais: 'AR', puntos: 75 },



  // Agrega más pilotos aquí...
];

// Ordenar los pilotos por puntos de mayor a menor
pilotos.sort(function (a, b) {
  return b.puntos - a.puntos;
});

// Generar la tabla HTML
var tablaHTML = '<table><thead class="table-dark"><tr><th scope="col">#</th><th scope="col">Piloto</th><th scope="col">País</th><th scope="col">Puntos</th></tr></thead><tbody>';

for (var i = 0; i < pilotos.length; i++) {
  var claseDestacada = '';
  var iconoCopa = '';
  if (i === 0) {
    claseDestacada = 'table-warning';
    iconoCopa = '<i class="fas fa-trophy"></i>'; 
  } else if (i === 1) {
    claseDestacada = 'table-secondary';
    iconoCopa = '<i class="fas fa-medal"></i>';
  } else if (i === 2) {
    claseDestacada = 'table-info';
    iconoCopa = '<i class="fas fa-medal"></i>';
  }

  var posicion = (i + 1) + iconoCopa; // Concatenar el ícono de copa o medalla al número de posición

  tablaHTML += '<tr class="' + claseDestacada + '">';
  tablaHTML += '<td>' + posicion + '</td>'; // Mostrar la posición con el ícono
  tablaHTML += '<td>' + pilotos[i].piloto + '</td>';
  tablaHTML += '<td><img class="bandera" src="https://flagcdn.com/' + pilotos[i].pais.toLowerCase() + '.svg" alt="' + pilotos[i].pais + '"></td>';
  tablaHTML += '<td>' + pilotos[i].puntos + '</td>';
  tablaHTML += '</tr>';
}

tablaHTML += '</tbody></table>';

var tablaContainer = document.getElementById('tabla-container');
tablaContainer.innerHTML = tablaHTML;
