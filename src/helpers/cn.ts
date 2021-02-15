export const cn = (...src: (string | undefined | boolean)[]) => {
    return src.filter(src => src).join(' ');
}