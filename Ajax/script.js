document.getElementById('userForm').addEventListener('submit', (e) => {
    e.preventDefault();  // Prevent the form from submitting and refreshing the page
    
    // Create an object for the new user with the form data
    const user = { 
      name: document.getElementById('name').value, 
      email: document.getElementById('email').value, 
      password: document.getElementById('password').value 
    };
    
    // Get the current list of users from localStorage, or initialize an empty array if none exist
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Add the new user to the list of users
    users.push(user);
    
    // Save the updated list of users back to localStorage
    localStorage.setItem('users', JSON.stringify(users));
    
    // Reset the form inputs after submission
    document.getElementById('userForm').reset();
    
  });
  
  
  