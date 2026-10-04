const form = document.querySelector('.login-form');

form.addEventListener('submit', formEvtHandler);


function formEvtHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email').trim();
    const password = formData.get('password').trim();
    if (!email || !password) {
        alert('All form fields must be filled in');
        return;
    }
    console.log({ email, password });
    form.reset();
}
