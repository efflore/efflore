<div class="efflore-container">
    <slot />
</div>

<style>
    .efflore-container {
        margin-left: auto;
        margin-right: auto;
        padding-left: var(--efflore-container-padding, var(--efflore-space-medium4, 1rem));
        padding-right: var(--efflore-container-padding, var(--efflore-space-medium4, 1rem));
        max-width: var(--efflore-container-max-width, 65rem);
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
    }
</style>
