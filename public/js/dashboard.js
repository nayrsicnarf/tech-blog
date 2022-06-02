const addButtonHandler = async (event) => {
  document.location.replace('dashboard/newArticle');
};

const updateButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    document.location.replace(`/dashboard/updateArticle/${id}`);
  } else {
    alert('No data-id');
  }
};

const deleteButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/articles/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Article delete failed');
    }
  } else {
    alert('No data-id');
  }
};

document
  .querySelector('#btn-add')
  .addEventListener('click', addButtonHandler);

document
  .querySelectorAll('.btn-update')
  .forEach(btn => btn.addEventListener('click', updateButtonHandler));

document
  .querySelectorAll('.btn-delete')
  .forEach(btn => btn.addEventListener('click', deleteButtonHandler));