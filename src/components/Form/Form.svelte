<script lang="ts">
    export let onSubmit = () => {}
    export let inputEl: HTMLInputElement | null = null
    export let value = ''
</script>

<form data-testid="form" on:submit|preventDefault={onSubmit}>
    <input
        data-testid="input"
        bind:this={inputEl}
        bind:value
        type="text"
        class="border-2 p-2 rounded-md w-72 mr-6"
    />
    <button type="submit" class="rounded-md bg-indigo-500 px-6 py-2 text-white"
        >Search</button
    >
</form>
