var $newLinkTitle, $newLinkUrl;

$(document).ready(function(){

  $('.mark-read').on('click', function(){
    var $this = $(this);
    var linkId = $this.parents('.link').data('id');
    var url = $(this).parent().find('.link-url').text();
    var read = $(this).parent().find('.link_read');

    $.ajax({
      url: '/api/v1/links/' + linkId,
      method: 'PATCH',
      data: {read: true},
      dataType: 'json',
      success: function(response) {
        console.log(response);
        read.text('true');
      }
    });

    $.ajax({
      method: 'POST',
      dataType: 'json',
      url: 'http://localhost:3001/api/v1/links',
      data: { link: { url: url } },
      success: function(response) {
        console.log(response);
      }
    });
  })
})
