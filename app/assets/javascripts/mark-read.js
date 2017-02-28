var $newLinkTitle, $newLinkUrl;

$(document).ready(function(){

  $('.mark-read').on('click', function(){
    var $this = $(this);
    var linkId = $this.parents('.link').data('id');
    var url = $(this).parent().find('.link-url').text();
    var read = $(this).parent().find('.link_read');

    // $.ajax({
    //   url: '/api/v1/links/' + linkId,
    //   method: 'PATCH',
    //   data: {read: true},
    //   dataType: 'json',
    //   success: function(response) {
    //     console.log(response);
    //     read.text('true');
    //     createReadRecord(linkId);
    //   }
    // });
    updateLinkReadStatus(linkId, read);
    // newLinkForHotReads(url);
    newHOTForHotReads(url);

    // $.ajax({
    //   url: '/api/v1/reads/',
    //   method: 'POST',
    //   data: {read: true},
    //   dataType: 'json',
    //   success: function(response) {
    //     console.log(response);
    //     read.text('true');
    //   }
    // });

    // $.ajax({
    //   method: 'POST',
    //   dataType: 'json',
    //   url: 'http://localhost:3001/api/v1/links',
    //   data: { link: { url: url } },
    //   success: function(response) {
    //     console.log(response);
    //   }
    // });
  })
})

function updateLinkReadStatus(linkId, read) {
  $.ajax({
    url: '/api/v1/links/' + linkId,
    method: 'PATCH',
    data: {read: true},
    dataType: 'json',
    success: function(response) {
      console.log(response);
      read.text('true');
      createReadRecord(linkId);
    }
  });
}

function newLinkForHotReads(url) {
  $.ajax({
    method: 'POST',
    dataType: 'json',
    url: 'http://localhost:3001/api/v1/links',
    data: { link: { url: url } },
    success: function(response) {
      console.log(response);
    }
  });
}

function newHOTForHotReads(url) {
  $.ajax({
    method: 'POST',
    dataType: 'json',
    url: 'http://localhost:3001/api/v1/hots',
    data: { hot: { url: url, reads: 0 } },
    success: function(response) {
      console.log(response);
    }
  });
}

function createReadRecord(linkId) {
  // debugger;
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

function tellHotReadsAboutRead(linkId) {
  // debugger;
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
