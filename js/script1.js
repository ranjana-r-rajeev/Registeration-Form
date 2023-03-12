
  const form = document.querySelector('.form');
  const registerBtn = document.querySelector('.btn');
  
  registerBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form values
    const firstName = form.querySelector('[name="firstname"]').value;
    const lastName = form.querySelector('[name="lastname"]').value;
    const dob = form.querySelector('[name="DOB"]').value;
    const gender = form.querySelector('[name="gender"]:checked').value;
    const address = form.querySelector('[name="address"]').value;
    const phone = form.querySelector('[name="phone"]').value;
    const email = form.querySelector('[name="email"]').value;
    const password = form.querySelector('[type="password"]').value;
    
    // Store form values in local storage
    const userData = {
      firstName,
      lastName,
      dob,
      gender,
      address,
      phone,
      email,
      password
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    
    // Redirect to results page
    window.location.href = 'results.html';
  });

