var $newLinkTitle, $newLinkUrl;

$(document).ready(function(){
  getReadReady();
});

function getUnreadReady() {
  $('.mark-unread').on('click', function(){
    var $this = $(this);
    var linkId = $this.parents('.link').data('id');
    var url = $(this).parent().find('.link-url').text();
    var read = $(this).parent().find('.link_read');
    var readStatus = $this.parent().find('.link_read').text();

    $this.toggle();
    updateLinkReadStatus(linkId, read, readStatus)
    $this.parent().append("<button class='mark-read' data-id='${linkId}'>Mark as Read</button>")
    getReadReady();
  })
}

function saveReadStatus($this){
  var linkId = $this.parents('.link').data('id');
  var url = $this.parent().find('.link-url').text();
  var read = $this.parent().find('.link_read');
  var readStatus = $this.parent().find('.link_read').text();

  updateLinkReadStatus(linkId, read, readStatus);
  newLinkForHotReads(url);
  markReadOnDom($this)
}

function updateLinkReadStatus(linkId, read, readStatus) {
  var status = false;

  if (readStatus = 'true') {
    status = true
  }

  $.ajax({
    url: '/api/v1/links/' + linkId,
    method: 'PATCH',
    data: {read: status},
    dataType: 'json',
    success: function(response) {
      read.text(readStatus);
      createReadRecord(linkId);
    }
  });
}

function getReadReady() {
  $('.mark-read').on('click', function(){
    var $this = $(this);
    saveReadStatus($this);
  })
}

function markReadOnDom($this) {
  var linkId = $this.data('id');
  $this.toggle();
  $this.parent().append(`<button class='mark-unread' data-id='${linkId}'>Mark as Unread</button>`)
  getUnreadReady();
}

function newLinkForHotReads(url) {
  $.ajax({
    method: 'POST',
    dataType: 'json',
    url: 'http://localhost:3001/api/v1/links',
    data: { link: { url: url } },
  });
}

function createReadRecord(linkId) {
  $.ajax({
    url: '/api/v1/reads',
    method: 'POST',
    data: {link_id: linkId},
    dataType: 'json',
  });
}

function tellHotReadsAboutRead(linkId) {
  $.ajax({
    url: '/api/v1/reads',
    method: 'POST',
    data: {link_id: linkId},
    dataType: 'json',
    success: function(response) {
      console.log(response);
    }
  });
}
