<script lang="ts">
    let searchText = ''

    function onSubmit(e) {
        e.preventDefault()
    }
</script>

<main class="p-20">
    <h1 class="text-3xl mb-20">Recipes</h1>
    <form on:submit={onSubmit}>
        <input
            bind:value={searchText}
            type="text"
            class="border-2 p-2 rounded-sm w-72 mr-6"
        />
        <button class="rounded-sm bg-indigo-500 px-6 py-2 text-white"
            >Search</button
        >
    </form>
</main>

<style>
</style>
