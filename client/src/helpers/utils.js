export const formatNumber = (number) => {
    number = parseFloat(number);
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(number);
};
