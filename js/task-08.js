const formRef = document.querySelector('.login-form');

const isLogin = event => {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email === '' || password === '') {
    return alert('Заполните поля Email и Password');
  }
  const formData = {
    email,
    password,
  };

  console.log(formData);

  formRef.reset();
};

formRef.addEventListener('submit', isLogin);
