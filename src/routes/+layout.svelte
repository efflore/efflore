<script lang="ts">
	import { onDestroy } from 'svelte';
    import { mq } from '../stores';

    let mediaClasses = '';
    const updateMediaClasses = () => {
        mediaClasses = Object.keys($mq).filter(key => $mq[key].matches).map(key => `media-${key}`).join(' ');
    };
    updateMediaClasses();

    const unsubscribeMedia = mq.subscribe(updateMediaClasses);
    onDestroy(unsubscribeMedia);
</script>

<div class="efflore-app {mediaClasses}">
    <header>
        <slot name="header" />
    </header>
    <main>
        <slot />
    </main>
    <footer>
        <slot name="footer" />
    </footer>
</div>

<style lang="scss" global>
    :root {
        /* breakpoints - need to be sass variables, because media queries don't support CSS custum props */
        $breakpoint-small: 32em; /* 512px; 1rem = 16px */
        $breakpoint-medium: 48em; /* 768px; 1rem = 16px */
        $breakpoint-large: 72em; /* 1024px; 1rem = 20px */
        $breakpoint-xlarge: 108em; /* 1728px; 1rem = 24px */

        /* spacings */
        --efflore-space-xsmall4: 0.25rem;
        --efflore-space-xsmall5: 0.3125rem;
        --efflore-space-xsmall6: 0.375rem;
        --efflore-space-small4: 0.5rem;
        --efflore-space-small5: 0.625rem;
        --efflore-space-small6: 0.75rem;
        --efflore-space-medium4: 1rem;
        --efflore-space-medium5: 1.25rem;
        --efflore-space-medium6: 1.5rem;
        --efflore-space-large4: 2rem;
        --efflore-space-large5: 2.5rem;
        --efflore-space-large6: 3rem;
        --efflore-space-xlarge4: 4rem;
        --efflore-space-xlarge5: 5rem;
        --efflore-space-xlarge6: 6rem;

        /* fonts */
        --efflore-font-size-small: 0.75rem;
        --efflore-font-size-base: 1rem;
        --efflore-font-size-large: 1.25rem;
        --efflore-font-size-xlarge: 1.5rem;
        --efflore-font-size-xxlarge: 2rem;
        --efflore-font-size-xxxlarge: 2.5rem;
        --efflore-line-height-heading: 1;
        --efflore-line-height-narrow: 1.25;
        --efflore-line-height-base: 1.5;
        --efflore-line-height-wide: 2;

        /* containers */
        --efflore-container-padding: var(--efflore-space-large4);
        --efflore-container-max-width: 65.5em;
    }

    html {
        font-size: clamp(1em, calc(0.636em + 0.8vw), 1.5em);
    }

    body {
        margin: 0;
        padding: 0;
    }
</style>