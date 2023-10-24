export const dispatchCustomEvent = (eventName: string, p?: string) => {
    if (window) {
        window.dispatchEvent(new CustomEvent(eventName, {
            detail: p, // You can replace this with your string
        }))
    }
};