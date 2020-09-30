$(function(){
  function buildHTML(task){
    let html = `<div class="content" data-task-id="${task.task_id}">
    <div class="content-main">
    <div class="content-name">
    担当者:
    <a href="/users/${task.user_id}">${task.user_name}</a>
    </div>
    <div class="content-task">
    タスク:
    ${task.task}
    </div>
    <div class="content-edit">
    <a class="edit" data-method="get" href="/tasks/${task.task_id}/edit">編集✏️</a>
    <a class="delete" rel="nofollow" data-method="delete" href="/tasks/${task.task_id}">削除🗑</a>
    </div>
    </div>
    <div class="content-detalis">
    <p>${task.detalis}</p>
    </div>
    <div class="content-option">
    <input class="complete" type="button" value="✔︎">
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
      $('.task-content').animate({ scrollTop: $('.task-content')[0].scrollHeight});
      $('.form-submit').prop('disabled', false);
    })
    .fail(function(){
      alert('タスク追加に失敗しました');
      $('.form-submit').prop('disabled', false);
    })
  });
  $(".task-content").on("click", ".complete", function() {
    let $row = $(this).parents(".content");
    let $newRow = $row.clone(true);
    $newRow.children(".content-detalis").remove();
    $newRow.children(".content-option").remove();
    $newRow.find(".edit").remove();
    $newRow.find(".content-name").remove();
    $($newRow).appendTo(".list").css('background-color','#00FFFF');
    $(this).parents(".content").remove();
  });
  $(".task-content").on("click", ".delete", function() {
    $(this).parents(".content").remove();
  });
  $(".task-complete").on("click", ".delete", function() {
    $(this).parents(".content").remove();
  });
});


