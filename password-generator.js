const generatePassword = require('generate-password');

// Create a function that generates random passwords
function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 12,
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true,
  });

  // console.log() the generated password
  console.log('Generated Password:', password);
}

// Call the function to generate and log a password
generateRandomPassword();
