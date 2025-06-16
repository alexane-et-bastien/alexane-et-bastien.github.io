function checkRSVPPassword() {
    const input = document.getElementById('rsvp-password').value.trim().toLowerCase();
    if (input === 'pastel') {
      window.location.href = 'https://www.google.com';
    } else if (input === 'lauragais') {
      window.location.href = 'https://www.google.com';
    } else if (input === 'cocagne') {
      window.location.href = 'https://www.google.com';
    } else {
      document.getElementById('rsvp-error').style.display = 'block';
    }
  }