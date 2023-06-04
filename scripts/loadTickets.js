function loadTickets() {
    var ticketContent = document.getElementById("main");
    ticketContent.innerHTML = ""; // Limpiar cualquier contenido anterior

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "./ticket.html", true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        ticketContent.innerHTML = xhr.responseText;
      }
    };
    xhr.send();
  }