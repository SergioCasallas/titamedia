// let grillaJson;
const gallery = document.querySelector('.gallery');
const galleryArticle = document.querySelector('.gallery__article');

const buttonMore = document.querySelector('.gallery__button-js');
buttonMore.addEventListener('click', () => {
  requestJson('', true);
});

const typeList = document.querySelector('.gallery__icon-list-js');
const typeGrid = document.querySelector('.gallery__icon-grid-js');

// ! Link to diferents images
const linkAll = document.querySelector('.nav-secondary__link-all-js');
linkAll.addEventListener('click', () => {
  requestJson('all');
});

const branding = document.querySelector('.nav-secondary__link-branding-js');
branding.addEventListener('click', () => {
  requestJson('branding');
});

const web = document.querySelector('.nav-secondary__link-web-js');
web.addEventListener('click', () => {
  requestJson('web');
});

const photography = document.querySelector('.nav-secondary__link-photography-js');
photography.addEventListener('click', () => {
  requestJson('photography');
});

const app = document.querySelector('.nav-secondary__link-app-js');
app.addEventListener('click', () => {
  requestJson('app');
});

// ! Finish Link to diferents images

// !divs

const div1 = document.createElement('div');
div1.classList.add('gallery__group-1-js');
div1.classList.add('gallery__group-1');

const div2 = document.createElement('div');
div2.classList.add('gallery__group-2-js');
div2.classList.add('gallery__group-2');

const div3 = document.createElement('div');
div3.classList.add('gallery__group-3-js');
div3.classList.add('gallery__group-3');

galleryArticle.appendChild(div1);
galleryArticle.appendChild(div2);
galleryArticle.appendChild(div3);

// !fin divs

typeList.addEventListener('click', () => {
  galleryArticle.classList.add('gallery__article-list');
  galleryArticle.classList.remove('gallery__article-grid');
});

typeGrid.addEventListener('click', () => {
  galleryArticle.classList.add('gallery__article-grid');
  galleryArticle.classList.remove('gallery__article-list');
});

const requestJson = async (section, more = false) => {
  div1.style.visibility = 'hidden';
  div2.style.visibility = 'hidden';
  div3.style.visibility = 'hidden';

  let figures = document.querySelectorAll('.gallery__content-images');

  // console.log(figures[0]);
  // while (figures[0]) {
  //   div1.removeChild(figures[0]);
  //   console.log(div1.childElementCount)
  // }
  if (more === false) {
    const figuresTotal = figures.length;
    figures.forEach((item, index) => {
      const divisor = figuresTotal / 3;
      if (index >= 0 && index < divisor) {
        div1.removeChild(item);
      } else if (index >= divisor && index < divisor * 2) {
        div2.removeChild(item);
      } else if (index >= divisor * 2) {
        div3.removeChild(item);
      }
    });
  }

  const data = await fetch('../json/grilla.json')
    .then((response) => {
      return response.json();
    })
    .then((grillaJson) => {
      return grillaJson;
    });

  switch (section) {
    case 'all':
      sectionsGallery(await data.all);
      break;
    case 'branding':
      sectionsGallery(await data.branding);
      break;
    case 'web':
      sectionsGallery(await data.web);
      break;
    case 'photography':
      sectionsGallery(await data.photography);
      break;
    case 'app':
      sectionsGallery(await data.app);
      break;
    default:
      observador(await data.all);
  }
};

window.onload = () => {
  requestJson();
};

const observador = async (grilla) => {
  div1.style.visibility = 'visible';
  div2.style.visibility = 'visible';
  div3.style.visibility = 'visible';
  // console.log(await grilla);
  if ((await grilla) !== undefined) {
    const totalImages = grilla.length;
    const nImages = totalImages / 3;
    grilla.map((item, index) => {
      let figure = document.createElement('figure');
      let image = document.createElement('img');
      figure.classList.add('gallery__content-images');
      image.classList.add('gallery__image');
      if (index >= 0 && index < nImages) {
        image.src = `${item}`;
        figure.appendChild(image);
        div1.appendChild(figure);
      } else if (index >= nImages && index < nImages * 2) {
        image.src = `${item}`;
        figure.appendChild(image);
        div2.appendChild(figure);
      } else if (index >= nImages * 2) {
        image.src = `${item}`;
        figure.appendChild(image);
        div3.appendChild(figure);
      }
    });
  }
};

const sectionsGallery = async (grilla) => {
  div1.style.visibility = 'visible';
  div2.style.visibility = 'visible';
  div3.style.visibility = 'visible';
  console.log(await grilla);
  if ((await grilla) !== undefined) {
    const totalImages = grilla.length;
    const nImages = totalImages / 3;
    // !Figures total change
    grilla.map((item, index) => {
      let figure = document.createElement('figure');
      let image = document.createElement('img');
      figure.classList.add('gallery__content-images');
      image.classList.add('gallery__image');
      if (index >= 0 && index < nImages) {
        image.src = `${item}`;
        figure.appendChild(image);
        div1.appendChild(figure);
      } else if (index >= nImages && index < nImages * 2) {
        image.src = `${item}`;
        figure.appendChild(image);
        div2.appendChild(figure);
      } else if (index >= nImages * 2) {
        image.src = `${item}`;
        figure.appendChild(image);
        div3.appendChild(figure);
      }
    });
  }
};
