// Trigger as soon as Alphine loads from the html file
document.addEventListener("alpine:init", () => {
    Alpine.data('counter', () => ({
        count: 0,
        name: 'Mario',

        logCount() {
            console.log(this.count)
        }
    }))
})