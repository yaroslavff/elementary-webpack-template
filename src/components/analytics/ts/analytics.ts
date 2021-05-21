function createAnalytics(): object {
    let counter = 0;
    let isDestoyed: boolean = false;

    const listener = (): number => counter++;

    document.addEventListener("click", listener);

    return {
        destroy() {
            document.removeEventListener("click", listener);
            isDestoyed = true;
        },

        getClicks() {
            if(isDestoyed) {
                return "Analitycs is destroyed";
            }
            return counter;
        }
    }
}

window["analytics"] = createAnalytics();
