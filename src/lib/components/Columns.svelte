<script lang="ts">
	import { onDestroy } from 'svelte';
    import { mq } from '../../stores';

    export let fractions: Record<string, string> | undefined = {xsmall: '1fr'};

    let activeTemplate: string; 
    const updateFractions = () => {
        if (fractions) {
            const mobileFirst = ['xsmall', 'small', 'medium', 'large', 'xlarge']; // media query order
            for (const key of mobileFirst) {
                if ($mq[key] && $mq[key].matches && fractions[key]) {
                    activeTemplate = fractions[key].split(':').map(v => `${v}fr`).join(' ');
                }
            }
        } else {
            activeTemplate = '1fr'; // fall back to single column layout if fractions is undefined
        }
    };
    updateFractions();

    const unsubscribeMedia = mq.subscribe(updateFractions);
    onDestroy(unsubscribeMedia);
</script>

{#if activeTemplate}
    <div class="efflore-columns" style:--efflore-columns-template={activeTemplate}>
        <slot />
    </div>
{/if}

<style>
    .efflore-columns {
        display: grid;
        width: 100%;
        gap: 0 var(--efflore-columns-gap, var(--efflore-space-medium4, 1rem));
        grid-template-columns: var(--efflore-columns-template, 1fr);
    }
</style>