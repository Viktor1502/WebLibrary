function sendMessage() {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');
    var successMessage = document.getElementById('successMessage');
  
    if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
      alert('Proszę wypełnić wszystkie pola formularza.');
      return;
    }
  
    successMessage.style.display = 'block';
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
  
    var sendButton = document.getElementById('sendButton');
    sendButton.innerText = 'Wiadomość została wysłana';
    sendButton.disabled = true;
  }
  
  
  /* scroll to top*/
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  /* Menu closed */
  
  function closeMenu() {
    var menu = document.getElementById('navbarSupportedContent');
    menu.classList.remove('show');
  }
  
  
  


  