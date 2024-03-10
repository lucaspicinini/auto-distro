function setValidForm(form, event) {
    form.classList.add('was-validated');
      event.preventDefault();
      event.stopPropagation();

      setTimeout(() => {
         form.classList.remove('was-validated');
      }, 1500);
}

export const validForm = setValidForm;
