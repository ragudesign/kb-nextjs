export const sanitiseExcerpt = (excerpt) => {
    if (typeof excerpt !== 'string') {
        throw new Error(`Failed to sanitise excerpt: invalid type ${typeof excerpt}`);
    }

    let sanitised = excerpt;

    sanitised = sanitised.replace(/\w*<a class="more-link".*<\/a>/, '');

    sanitised = sanitised.replace(/^(.{50}[^\s]*).*/, "$1..."); 

    return sanitised;
}