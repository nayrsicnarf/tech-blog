const updateCommentFormHandler = async (event) => {
  event.preventDefault();

  const id = document.getElementById('btn-save').getAttribute('data-id');
  const commentContent = document.getElementById('commentContent').value.trim();

  if (id && commentContent) {
    const response = await fetch(`/api/comments/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ commentContent }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      console.log(err);
      alert('Artilce update failed.');
    }
  } else {
    alert('Field cannot be blank.')
  }
};

const cancelButtonHandler = async () => {
  window.history.back();
}

document
  .querySelector('.updateCommentForm')
  .addEventListener('submit', updateCommentFormHandler);

document
  .querySelector('.updateCommentForm')
  .addEventListener('reset', cancelButtonHandler);