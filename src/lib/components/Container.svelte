<div class="efflore-container">
    <slot />
</div>

<style lang="scss">
    .efflore-container {
        margin-left: auto;
        margin-right: auto;
        padding-left: var(--efflore-container-padding, var(--efflore-space-large4, 2rem));
        padding-right: var(--efflore-container-padding, var(--efflore-space-large4, 2rem));
        max-width: var(--efflore-container-max-width, 65rem);
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
    }
</style>
