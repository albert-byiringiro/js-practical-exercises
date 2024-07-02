// FETCH CRUD

/*POST DATA
const newPost = {
  title: 'New Post Title',
  body: 'This is the content of the new post.',
  userId: 1
}
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your_token_here'
  },
  body: JSON.stringify(newPost)
})
  .then(response => response.json())
  .then(data => console.log('Created:', data))
  .catch(error => console.error('Error:', error));

*/

/*READ DATA
const userId = 1;
fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
  .then(response => response.json())
  .then(data => console.log('Read:', data))
  .catch(error => console.error('Error:', error));

*/

/*PUT

const updatedPost = {
  id: 1,
  title: 'Updated Post Title',
  body: 'This is the updated content of the post.',
  userId: 1
};

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your_token_here'
  },
  body: JSON.stringify(updatedPost)
})
.then(response => response.json())
.then(data => {
  if (data.id && data.userId === 1) {
    console.log('Updated:', data);
  } else {
    console.error('Validation Error: Incorrect user ID');
  }
})
.catch(error => console.error('Error:', error));
*/


