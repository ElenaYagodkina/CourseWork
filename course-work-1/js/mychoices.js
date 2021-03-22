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
  let publicationsCheckAll = document.querySelectorAll('.input-check'),
    publicationsList3 = document.querySelector('.list3');

  [].forEach.call(publicationsCheckAll, function (item) {
    let publicationsLabelChecked = document.querySelector(`[for="${item.id}"]`);
    publicationsList3.append(item);
    publicationsList3.append(publicationsLabelChecked);
  });

  document.querySelector('.list1').remove();
  document.querySelector('.list2').remove();

  let accEditContent = document.querySelector('.publications-checkbox'),
    accEditTitle = document.querySelector('.categories');

  let accordeonActiveit = function () {
    let publicationsCheckboks = document.querySelector('.checkbox-select');

    accEditContent.style.maxHeight = '0px';

    accEditTitle.addEventListener('click', function () {

      [].forEach.call(publicationsCheckAll, function (item) {

        let publicationsLabelChecked = document.querySelector(`[for="${item.id}"]`);

        if (item.checked) {
          publicationsCheckboks.append(item);
          publicationsCheckboks.append(publicationsLabelChecked);
        } else {
          publicationsList3.append(item);
          publicationsList3.append(publicationsLabelChecked);
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



