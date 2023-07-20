export async function load(event) {
    const { fetch } = event;
    const result = await fetch('/api/products');
    return {
        products: await result.json(),
    }
}