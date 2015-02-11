$(document).ready( function () {

  // get the doneButtons
  var doneButtons = $("button[id^='btn-done']")

  // set the verbiage on the button and line-thru the text if
  //   this task is done
  doneButtons.each( function (idx, val) {
    currentRow = val.parentElement.parentElement
    if ( $(val).text() == "Re-open" ) {
      $(currentRow).addClass("delete-text")
    }
  });

  // All the buttons are handled together here
  $("button").click( function (event) {
    event.preventDefault();
    event.stopPropagation();
    var clickedId = event.currentTarget.id;
    switch ( true ) {

      // Delete a List
      case ( clickedId.match(/^btn-delete-list/) == "btn-delete-list"):
        $("#_method").val("delete");
        $("#idx-form").attr("action","/lists/" + event.currentTarget.id.slice(16) );
        $("#idx-form").submit()
        break;

      // Delete a Task
      case ( clickedId.match(/^btn-delete-task/) == "btn-delete-task"):
        $("#_method").val("delete");
        $("#add-task-form").attr("action","/tasks/" + event.currentTarget.id.slice(16) );
        $("#add-task-form").submit()
        break;

      // Create a List
      case ( clickedId.match(/^btn-create-list/) == "btn-create-list"):
        $("#idx-form").submit()
        break;

      // Create a Task
      case ( clickedId.match(/^btn-create-task/) == "btn-create-task"):
        $("#add-task-form").submit()
        break;

      // return to the Lists display
      case ( clickedId.match(/^btn-return/) == "btn-return"):
        window.location.href = "/lists"
        break;

      // Mark a Task as done or undone
      case ( clickedId.match(/^btn-done/) == "btn-done"):
        row = event.currentTarget.parentElement.parentElement
        if ( $(row).hasClass("delete-text") ) {
          $(row).removeClass("delete-text")
        } else {
          $(row).addClass("delete-text")
        }
        $("#_method").val("patch");
        $("#add-task-form").attr("action","/tasks/" + event.currentTarget.id.slice(9) );
        $("#add-task-form").submit()
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
