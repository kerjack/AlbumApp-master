
function addAlbum() {
  var albumTitle = $("#inputAlbumTitle").val();
  $("#inputAlbumTitle").val("");
  var albumBand  = $("#inputBand").val();
  $("#inputBand").val("");
  var albumReleaseYear = parseInt($("#inputReleaseYear").val());
  $("#inputReleaseYear").val("");
  var numCurrentAlbums = $("#albumTable tr").size() - 1;

  if(albumTitle === "") {
    addErrorBox("Album title cannot be empty!");
    return;
  } else if(albumBand === "") {
    addErrorBox("Band cannot be empty!");
    return;
  } else if(isNaN(albumReleaseYear)) {
    addErrorBox("Release Year does not appear to be valid");
    return;
  }

  var newRow = "<tr>" +
               "<td>" + (numCurrentAlbums+1) + "</td>" +
               "<td>" + albumTitle + "</td>" +
               "<td>" + albumBand + "</td>" +
               "<td>" + albumReleaseYear + "</td>" +
               "<td><span onclick='removeItem(this)' style='cursor: pointer;'>&times;</span></td>" +
               "</tr>";
  $("#albumTable").append(newRow);
}

function tableToObjects() {
  var data = $("tr").val();
}


function saveAlbums() {
}

function loadAlbums() {
  var albumString = localStorage.getItem("albums");
  console.log(albumString);
  if(albumString === null) {
    addErrorBox("No albums saved in local storage!");
    return;
  }
  var albums = JSON.parse(albumString);
  $("#albumTable tbody").empty();
  for(var i=0; i<albums.length; i++) {
      var newRow = "<tr>" +
               "<td>" + (i+1) + "</td>" +
               "<td>" + albums[i].title + "</td>" +
               "<td>" + albums[i].band + "</td>" +
               "<td>" + albums[i].year + "</td>" +
               "<td><span onclick='removeItem(this)' style='cursor: pointer;'>&times;</span></td>" +
               "</tr>";
      $("#albumTable").append(newRow);
  }
  $("#albumTable").hide().fadeIn();
}

function removeItem(obj) {
  $(obj).parent().parent().fadeOut("slow", function() {
    $(this).remove();
  });
}

function addErrorBox(errorMessage) {
  var errorDiv = '<div class="alert alert-danger alert-dismissible" role="alert">' +
                 '<button type="button" class="close" data-dismiss="alert">' +
                 '<span aria-hidden="true" style="cursor: pointer;">&times;</span>' +
                 '<span class="sr-only">Close</span></button>' +
                 '<strong>ERROR!</strong> '+errorMessage+'</div>';
  $('#errorArea').empty();
  $('#errorArea').append(errorDiv);
  $('#errorArea').hide().fadeIn("slow");
}
