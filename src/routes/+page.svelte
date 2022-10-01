<script>
	import Container from "$lib/components/Container.svelte";
	import Section from "$lib/components/Section.svelte";

</script>

<Section>
    <Container slot="section-title">
        <h1>Welcome to Efflore</h1>
    </Container>
    <Container>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorum, ipsam voluptas aliquam provident porro! Iste hic natus quisquam animi, impedit deserunt, a amet, earum veritatis aliquam repellat sunt dolore?</p>
        <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation.</p>
    </Container>
</Section>
<Section variant="green">
    <Container slot="section-title">
        <h2>Second Section</h2>
    </Container>
    <Container>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores eius cumque alias delectus, commodi porro, reiciendis molestiae odio ipsum id ducimus voluptatibus! Vitae perspiciatis praesentium adipisci voluptate nulla provident itaque!</p>
    </Container>
</Section>

<style lang="scss">
    :root {
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

        /* sections */
        --efflore-section-background-color: #ff0;
        --efflore-section-text-color: #333;

        /* coontainers */
        --efflore-container-padding: var(--efflore-space-base);
        --efflore-container-max-width: 65rem;

        .efflore-section--green {
            --efflore-section-background-color: #0f0;
        }
    }
</style>
