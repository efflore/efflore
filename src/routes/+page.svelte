<script>
	import Container from "$lib/components/Container.svelte";
	import Section from "$lib/components/Section.svelte";
    import Columns from "$lib/components/Columns.svelte";
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
        <Columns fractions={{xsmall: '1', medium: '1:1', large: '1:1:1'}}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In reiciendis obcaecati tempore mollitia, iure praesentium voluptate? Veniam praesentium omnis maiores pariatur blanditiis corrupti eaque modi placeat odit, ex esse totam?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum natus deleniti nobis, enim similique numquam mollitia illo ad quis provident, pariatur fuga voluptatibus repellendus quod aspernatur quasi perferendis sunt nisi.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sed aperiam cum rem esse voluptas eveniet consequatur alias hic facere fuga neque rerum pariatur autem, libero dolore velit dicta. Eius!</p>
        </Columns>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores eius cumque alias delectus, commodi porro, reiciendis molestiae odio ipsum id ducimus voluptatibus! Vitae perspiciatis praesentium adipisci voluptate nulla provident itaque!</p>
    </Container>
</Section>

<style lang="scss" global>
    :root {
        /* sections */
        --efflore-section-background-color: #ffc;
        --efflore-section-text-color: #333;
    }

    /* .efflore-section--green {
        --efflore-section-background-color: #0f0;
    } */
</style>
