import { readable } from 'svelte/store';

type Query = Record<string, string>;
type MediaQueryLists = Record<string, MediaQueryList>;
  
export const watchMedia = (mediaQueries: Query) => {
	return readable<MediaQueryLists>({}, function start(set) {
		if (typeof window === 'undefined') return;
		const mqls: MediaQueryLists = {};
		const updateMedia = () => set(mqls);
		for (const key in mediaQueries) {
			mqls[key] = window.matchMedia(mediaQueries[key]);
			mqls[key].addEventListener('change', updateMedia);
		}
		updateMedia();

		return function stop() {
			for (const key in mqls) {
				mqls[key].removeEventListener('change', updateMedia);
			}
		};
	});
}

const breakpoints = {
	small: '32em',
	medium: '48em',
	large: '72em',
	xlarge: '108em'
};

const mediaQueries = {
    xsmall: '(max-width: ' + breakpoints.small + ')',
    small: '(min-width: ' + breakpoints.small + ') and (max-width: ' + breakpoints.medium + ')',
    medium: '(min-width: ' + breakpoints.medium + ') and (max-width: ' + breakpoints.large + ')',
    large: '(min-width: ' + breakpoints.large + ') and (max-width: ' + breakpoints.xlarge + ')',
    xlarge: '(min-width: ' + breakpoints.xlarge + ')'
};

export const mq = watchMedia(mediaQueries);
// export const darkMode = watchMedia({ dark: '(prefers-color-scheme: dark)' });
// export const reducedMotion = watchMedia({ noanimations: '(prefers-reduced-motion: reduce)' });