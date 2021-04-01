// select  для gallary  //
let myChoices;
const defaultSelect = () => {
  const element = document.querySelector('.gdefault');
  myChoices = new Choices(element, {
    searchEnabled: false,
    position: 'bottom',
    });
};

defaultSelect();


// select-checkbox publications для 320 //

const editAccAdapt = function () {
  let publicationsCheckAll = document.querySelectorAll('.checkbox-list-item'),  
      publicationslist3 = document.querySelector('.list3');

  [].forEach.call(publicationsCheckAll, function (item) {  // перебираем каждый элемент .checkbox-label 
    publicationslist3.append(item);                        // и добавляем их в конец list3
  });

  document.querySelector('.list1').remove();
  document.querySelector('.list2').remove();

  let accEditContent = document.querySelector('.publications-checkbox'),  // контент, содержащий добавляющиеся элементы .checkbox-label
      accEditTitle = document.querySelector('.categories');   // кнопка 

  let accordeonActiveit = function () {
    let publicationsCheckboks = document.querySelector('.checkbox-select');

    accEditContent.style.maxHeight = '0px';

    accEditTitle.addEventListener('click', function () {    // при нажатии кнопки 

      [].forEach.call(publicationsCheckAll, function (item) {  // перебираем каждый checkbox-list-item,
        let inputCheck = document.querySelector('.input-check');// ищем чекнутый инпут, находим и 
        if (inputCheck.checked) { 
          publicationsCheckboks.append(item);  // добавляем его в чекбокс
        } else {
          publicationslist3.append(item); // иначе, добавляем его в конец list3
        }
      })

      if (this.classList.contains('active')) {
        this.classList.remove('active');
        accEditContent.style.maxHeight = '0px'
      } else {
        this.classList.add('active');
        accEditContent.style.maxHeight = document.querySelector('.publications-checkbox >*').clientHeight + 'px'
      }
    })
  }
  accordeonActiveit();
};

