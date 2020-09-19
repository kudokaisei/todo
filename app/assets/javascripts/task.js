$(function(){
  function buildHTML(task){
    let html = `<div class="content">
                  <div class="content-main">
                    <div class="content-name">
                      担当者:
                      <a href="/users/${task.user_id}">${task.user_name}</a>
                    </div>
                    <div class="content-task">
                      タスク:
                      ${task.task}
                    </div>
                    <ul class="content-option">
                      <li></li>
                        <a class="complete" rel="nofollow" data-method="delete" href="/tasks/98">完了✔️</a>
                        <p>/</p>
                      <li></li>
                        <a class="edit" data-method="get" href="/tasks/98/edit">編集✏️</a>
                    </ul>
                </div>
                <div class="content-detalis">
                  <p>${task.detalis}</p>
                </div>
                </div>`
    return html;
  }

  $('.Form').on('submit', function(e){
    e.preventDefault()
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.task-content').append(html);
      $('.Form')[0].reset();
      $('.form-text').val('');
      $('.form-submit').prop('disabled', false);
    })
    .fail(function(){
      alert('error');
    })
  });
  $(".complete").on('click',function() {
		$(".content-task").appendTo(".task-complete");
	});
});






