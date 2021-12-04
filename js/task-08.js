const formRefs = document.querySelector('.login-form');

const isLogin = event => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Заполните поля Email и Password');
  }

  console.log(`Ваш логин: ${email.value} и пароль: ${password.value}`);

  formRefs.reset();
};

formRefs.addEventListener('submit', isLogin);
