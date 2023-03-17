

const main = document.getElementById('main');
const ratingCard = document.querySelector('.rating-card');
const btnContainer = document.querySelector('.rating-card__buttons-container');
const btns = document.querySelectorAll('.btn');
const btnsArray = [...btns]

const selectNumber = (e) => {
    if(!e.target.classList.contains('btn')) return;
    btnsArray.forEach(btn => {
        if(btn.classList.contains('btn--active')){
            btn.classList.remove('btn--active');
        }
    })
    e.target.classList.add('btn--active');
}

const renderThanksCard = (value) => {
    return `
    <section id="thanks">
        <div class="thanks-card">
          <img class="thanks-card__img" src="./assets/img/illustration-thank-you.svg" alt="thank-you-img" />
          <p class="thanks-card__amount">You selected ${value} out of 5</p>
          <h3 class="thanks-card__title">Thank you!</h3>
          <p class="thanks-card__info">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      </section>
    `
}

const rate = e => {
    e.preventDefault();
    const rateNumber = btnsArray.find(btn => {
        if(!btn.classList.contains('btn--active')) return;
        return btn;
    });
    setTimeout(() => {
        main.innerHTML = renderThanksCard(rateNumber.value);
    }, 1500)
}

btnContainer.addEventListener('click', selectNumber)
ratingCard.addEventListener('submit', rate);


