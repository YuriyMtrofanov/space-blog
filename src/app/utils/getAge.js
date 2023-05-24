export function getAge(date) {
    return new Date(Date.now()).getFullYear() - new Date(date).getFullYear();
};
