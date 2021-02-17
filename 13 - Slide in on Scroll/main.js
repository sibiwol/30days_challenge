function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return () => {
    var context = this;
    var args = arguments;
    // immediate가  false면 checkSlicde()실행
    // 2초간 멈추니 later 실행됨
    // 2초 후 이벤트 받아오면 timeout = null
    var later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    // !timeout = false => event를 받아 오고 있다는 뜻
    // !timeout = true => clearTimout(timeout)에 의해 timeout = null
    // timeout 호출 종료시킴. 20ms간 멈추면 null 상태로 돌아감
    clearTimeout(timeout);
    // 20ms 뒤에 later를 호출한다.
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll(".slide-in");

function checkSlide() {
  sliderImages.forEach((sliderImage) => {
    // half way through the image
    const slideInAt =
      window.scrollY + window.innerHeight - sliderImage.height / 2;
    // bottom of the image
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add("active");
    } else {
      sliderImage.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", debounce(checkSlide));
