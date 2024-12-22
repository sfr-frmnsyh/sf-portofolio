export const scrollToDiv = (id, customPosition = 0) => {
  const element = document.getElementById(id);
  if (element) {
    // Get the top position of the element
    const elementTop = element.getBoundingClientRect().top + window.scrollY;
    // Scroll to the position with an offset of 100px from the top
    window.scrollTo({
      top: elementTop + customPosition, // Adjust the offset as needed
      behavior: "smooth",
    });
  }
};
export const openInternalLinkInNewWindow = (url) => {
  const baseURL = window.location.origin;
  window.open(baseURL + url, "_blank");
};
export const openLinkInNewWindow = (url) => {
  window.open(url, "_blank");
};
