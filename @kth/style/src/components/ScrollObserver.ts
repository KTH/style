interface Options {
  threshold: number;
  className: string;
}

const DEFAULT_OPTIONS: Options = {
  threshold: 32,
  className: "collapsed",
};

function toggleClass(
  element: HTMLElement | null,
  { threshold, className }: Options,
) {
  if (window.scrollY > threshold) {
    element?.classList.add(className);
  } else {
    element?.classList.remove(className);
  }
}

export class ScrollObserver {
  /** Sets a class in an element when the window scroll is below a treshold */
  static setClass(
    element: HTMLElement | null,
    options: Options = DEFAULT_OPTIONS,
  ) {
    toggleClass(element, options);

    window.addEventListener("scroll", () => {
      toggleClass(element, options);
    });
  }
}
