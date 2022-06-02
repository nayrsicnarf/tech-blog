const updateArticleFormHandler = async (event) => {
  event.preventDefault();

  const id = document.getElementById('btn-save').getAttribute('data-id');
  const articleTitle = document.getElementById('articleTitle').value.trim();
  const articleContent = document.getElementById('articleContent').value.trim();

  if (id && articleTitle && articleContent) {
    const response = await fetch(`/api/articles/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ articleTitle, articleContent }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      console.log(err);
      alert('Article updated failed.');
    }
  } else {
    alert('Fields cannot be blank.')
  }
};

const cancelButtonHandler = async () => {
  document.location.replace('/dashboard');
}

document
  .querySelector('.updateArticleForm')
  .addEventListener('submit', updateArticleFormHandler);

document
  .querySelector('.updateArticleForm')
  .addEventListener('reset', cancelButtonHandler);