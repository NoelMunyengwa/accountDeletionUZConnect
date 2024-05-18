const firebaseConfig = {
    // Your Firebase project configuration goes here
    // ...
  };
  
  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth();
  const deleteForm = document.getElementById('delete-form');
  const messageEl = document.getElementById('message');
  
  deleteForm.addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    try {
      // Sign in the user
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
  
      // Delete the user account
      await userCredential.user.delete();
  
      messageEl.textContent = 'Account deleted successfully.';
      deleteForm.reset(); // Clear form fields
  
    } catch (error) {
      console.error('Error deleting account:', error);
      messageEl.textContent = 'Error: ' + error.message;
    }
  });
  