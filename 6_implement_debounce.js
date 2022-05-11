function debounce(func, wait) {
  let timer = null;
  return function debounced(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, wait);
  };
}
