$(document).ready( function () {
//
  var doneBoxes = $("input[id^='done']")
//
//   doneBoxes.each( function (idx, val) {
//     currentRow = val.parentElement.parentElement
//     val.value = "0"
//     if ( val.checked ) {
//       $(currentRow).addClass("delete-text")
//       val.value = "1"
//     }
//   });
//
  // doneBoxes.click( function (event) {
  //   // event.preventDefault();
  //   // event.stopPropagation();
  //   var id = event.currentTarget.id.slice(4)
  //   var doneValue = event.currentTarget.value
  //   box = event.currentTarget
  //   currentRow = box.parentElement.parentElement
  //   if ( box.checked ) {
  //     box.value = "1"
  //     $(currentRow).addClass("delete-text")
  //   } else {
  //     box.value = "0"
  //     $(currentRow).removeClass("delete-text")
  //   }
  //   $("#_method").val("patch");
  //   $("#add-task-form").attr("action","/tasks/" + id );
  //   // $("#add-task-form").submit()
  // })

  $("button").click( function (event) {
    event.preventDefault();
    event.stopPropagation();
    var clickedId = event.currentTarget.id;
    switch ( true ) {

    case ( clickedId.match(/^btn-delete-list/) == "btn-delete-list"):
      $("#_method").val("delete");
      $("#idx-form").attr("action","/lists/" + event.currentTarget.id.slice(16) );
      $("#idx-form").submit()
      break;

    case ( clickedId.match(/^btn-delete-task/) == "btn-delete-task"):
      $("#_method").val("delete");
      $("#add-task-form").attr("action","/tasks/" + event.currentTarget.id.slice(16) );
      $("#add-task-form").submit()
      break;

    case ( clickedId.match(/^btn-create-list/) == "btn-create-list"):
      $("#idx-form").submit()
      break;

    case ( clickedId.match(/^btn-create-task/) == "btn-create-task"):
      $("#add-task-form").submit()
      break;

    case ( clickedId.match(/^btn-return/) == "btn-return"):
      window.location.href = "/lists"
      break;

    }

  });


  $("tr").click( function (event) {
    var clickedId = event.currentTarget.id;
    event.preventDefault();
    route = event.currentTarget.children[0].children[0].href
    $("#_method").val("get");
    $("#idx-form").attr("action",route)
    $("#idx-form").submit()
  })

})
