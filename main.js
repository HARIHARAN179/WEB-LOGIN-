document.getElementById('login').addEventListener('click', function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Add your login validation logic here
    if (username === 'your_username' && password === 'your_password') {
        alert('Login successful!');
        // You can redirect or perform other actions after successful login
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
