function checkRSVPPassword() {
    const input = document.getElementById('rsvp-password').value.trim().toLowerCase();
    if (input === 'rose') {
      window.open('https://docs.google.com/forms/d/e/1FAIpQLSc92ZaztbXB6sX_CywdZAtKwgx4Cu6X3gvoHiIMgfXPZD7fcQ/viewform?usp=dialog', '_blank');
    } else if (input === 'pastel') {
      window.open('https://docs.google.com/forms/d/e/1FAIpQLSebuNM9_aIp2aHMoFnrwg1gX6GsSEj6UKoDNaHgSW0tfQbTfg/viewform?usp=dialog', '_blank');
    } else if (input === 'lauragais') {
      window.open('https://docs.google.com/forms/d/e/1FAIpQLSfxkYQjmI6mccnu_U3RU6GQuwE1lRPx6DFmrl3P_N9HMT3iUw/viewform?usp=dialog', '_blank');
    } else if (input === 'cocagne') {
      window.open('https://docs.google.com/forms/d/e/1FAIpQLSe7gNXYD7UKkDJ_QP3aL4boPVn9w24J1cpJemSE2bogATU7-w/viewform?usp=dialog', '_blank');
    } else {
      document.getElementById('rsvp-error').style.display = 'block';
    }
  }