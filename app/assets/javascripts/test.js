$(document).ready( function () {

  $("tr").click( function (event) {
    event.preventDefault;
    window.location = event.target.firstChild.href;
  })

})
