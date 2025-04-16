export const scrollTo = (target, position = 'top') => {
    window.scrollTo({
        top: target.el.getBoundingClientRect()[position] + window.pageYOffset - (position === 'bottom' ? window.innerHeight : 0),
        behavior: 'smooth',
    });
};
