export default class AppView {
  constructor(clips) {
    this.clips = clips;
  }

  render() {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    const content = document.createElement('ul');
    content.innerHTML = this.clips.map((title) => `<li>${title}</li>`).join('');

    swiperWrapper.appendChild(content);
  }
}
