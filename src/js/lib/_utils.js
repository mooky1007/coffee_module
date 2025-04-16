export const scrollTo = (target) => {
    window.scrollTo({
        top: target.el.getBoundingClientRect().top + window.pageYOffset,
        behavior: 'smooth',
    });
};
