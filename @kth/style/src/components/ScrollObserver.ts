function pxToRem(px: number) {
  const ONE_REM = parseInt(window.getComputedStyle(document.body).fontSize, 10);

  return px / ONE_REM;
}
export class ScrollObserver {
  /**
   * Set a `--kth-scroll-block` variable in `:root` with the scroll amount in rem
   */
  static init() {
    document.documentElement.style.setProperty("--kth-scroll-block", "0");

    window.addEventListener("scroll", () => {
      const scroll = pxToRem(window.scrollY);
      document.documentElement.style.setProperty(
        "--kth-scroll-block",
        `${scroll}`,
      );
    });
  }
}
