const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const gallery = document.getElementById("gallery");
gallery.style.display = 'flex';
gallery.style.shrink = '1';
gallery.style.maxWidth = '800px';
gallery.style.listStyle = 'none';

images.forEach(image => gallery.insertAdjacentHTML('beforeend', `<li><img  style="max-width:100%; height:auto;" src=${image.url}; alt="${image.alt}"></li>`));
gallery.childNodes.forEach(child => child.style.margin = '15px');