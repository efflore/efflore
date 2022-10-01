<header>
    <slot name="header" />
</header>
<main>
    <slot />
</main>
<footer>
    <slot name="footer" />
</footer>

<style global>
    html {
        font-size: clamp(1em, calc(0.75em + 0.75vw), 1.5em);
    }

    body {
        margin: 0;
        padding: 0;
    }
</style>