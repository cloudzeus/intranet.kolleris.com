export const formatNumber = (number) => {
    number = parseFloat(number);
    return new Intl.NumberFormat('el-GR', {
        style: 'currency',
        currency: 'EUR',
    }).format(number);
};
