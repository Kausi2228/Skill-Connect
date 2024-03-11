document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // Here you can add code to handle form submission, like sending data to a server
    // For demonstration, let's just log the form data
    const formData = new FormData(this);
    const username = formData.get('username');
    const password = formData.get('password');
    console.log('Username:', username);
    console.log('Password:', password);
  });
  