$(function(){
  function buildHTML(comment){
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
                        <a class="complete" rel="nofollow" data-method="delete" href="/tasks/57">完了✔️</a>
                        <p>/</p>
                      <li></li>
                        <a class="edit" data-method="get" href="/tasks/57/edit">編集✏️</a>
                    </ul>
                  </div>
                  <div class="content-details">
                    <p>${task.detalis}
                    </p>
                  </div>
                </div>`
    return html;
  }

  $('.Form').on('submit', function(e){
    e.preventDefault()
    let formData = new FormData(this);
    let url = "/3000";
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
      $('.task-info').append(html);
      $('form')[0].reset();
      $('.textbox').val('');
      $('.form__submit').prop('disabled', false);
    })
    .fail(function(){
      alert('error');
    })
  });
});