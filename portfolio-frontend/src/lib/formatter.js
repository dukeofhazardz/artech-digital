export const formatTitleForURL = (title) => {
    return title
    .toLowerCase()
    .replace(/[\s/]+/g, "-")
    .replace(/[^a-z0-9-]+/g, "");
};