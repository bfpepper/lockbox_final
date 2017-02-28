var $newLinkTitle, $newLinkUrl;

$(document).ready(function(){
  $newLinkTitle = $("#link-title");
  $newLinkUrl  = $("#link-url");

  $(".edit-link").on('click', editLink);
})

function editLink() {
  console.log("waht")
}

function getLinkData() {
 return {
   title: $newLinkTitle.val(),
   url: $newLinkUrl.val()
 }
}

// function linkHTML(link) {
//
//     return `<div class='link' data-id='${link.id}' id="link-${link.id}">
//               <p class='link-title'>${ link.title }</p>
//               <p class='link-url'>${ link.url }</p>
//
//               <p class="link_read">
//                 ${ link.read }
//               </p>
//               <p class="link_buttons">
//                 <button class="mark-read">Mark as Read</button>
//                 <button class='edit-link'>Edit</button>
//               </p>
//             </div>`
// }

function clearLink() {
  $newLinkTitle.val("");
  $newLinkUrl.val("");
}

function displayFailure(failureData){
  console.log("FAILED attempt to create new Link: " + failureData.responseText);
}
