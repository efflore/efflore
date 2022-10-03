<script lang="ts">
    export let variant: string = '';
</script>

<section class="efflore-section{variant ? ' efflore-section--' + variant : ''}">
    <slot name="section-title" />
    <slot />
</section>

<style lang="scss" global>
    .efflore-section {
        background-color: var(--efflore-section-background-color, white);
        color: var(--efflore-section-text-color, black);
        font-size: var(--efflore-font-size-base, 1rem);
        line-height: var(--efflore-line-height-base, 1.5);
        font-family: var(--efflore-section-font-family, sans-serif);
        padding-top: var(--efflore-section-padding, var(--efflore-space-large4, 2rem));
        padding-bottom: var(--efflore-section-padding, var(--efflore-space-large4, 2rem));

        * {
            margin-top: 0;
            margin-bottom: 1em;
        }

        *:first-child {
            margin-top: 0;
        }

        *:last-child {
            margin-bottom: 0;
        }

        h1, h2, h3, h4, h5, h6 {
            margin-top: 1em;
            margin-bottom: max(0.5em, var(--efflore-space-medium4, 1rem));
            line-height: var(--efflore-line-height-heading, 1);
        }

        h1 {
            font-size: var(--efflore-font-size-xxxlarge, calc(2.5 * var(--efflore-font-size-base, 1rem)));
        }

        h2 {
            font-size: var(--efflore-font-size-xxlarge, calc(2 * var(--efflore-font-size-base, 1rem)));
        }

        h3 {
            font-size: var(--efflore-font-size-xlarge, calc(1.5 * var(--efflore-font-size-base, 1rem)));
        }

        h4 {
            font-size: var(--efflore-font-size-xlarge, calc(1.25 * var(--efflore-font-size-base, 1rem)));
        }
    }
</style>
