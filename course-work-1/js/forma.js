let selector = document.querySelector("input[type='tel']");
      let im = new Inputmask("+7 (999)-999-99-99");

      im.mask(selector);

      new JustValidate('.contacts__form', {
          rules: {
              name: {
                  required: true,
                  minLength: 2,
                  maxLength: 10
              },
              tel: {
                  required: true,
                  function: (name, value) => {
                      const phone = selector.inputmask.unmaskedvalue()
                      return Number(phone) && phone.length === 10
                  }
              },
          },
          messages: {
            name: {
              minLength: 'Поле должно содержать не менее двух символов',
              required:'Как вас зовут?'
            },
            tel: 'Укажите ваш телефон',
          },
      });


document.querySelector('.contacts__btn').addEventListener('click', function() {
    document.querySelector('.contacts__form').submit()
}) 
      
