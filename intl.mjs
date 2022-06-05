// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat

export const formatDate = (value) => {
    const formatter = new Intl.DateTimeFormat('en-US');
    return formatter.format(value);
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat

export const formatCurrency = (value) => {
    const formatter = new Intl.NumberFormat('en-US', {currency: 'USD', style: 'currency'});
    return formatter.format(value);
}

export const formatNumber = (value) => {
    const formatter = new Intl.NumberFormat('en-US', {style: 'decimal'});
    return formatter.format(value);
}

export const formatRelativeTime = (value, unit) => {
    const formatter = new Intl.RelativeTimeFormat('es', {numeric: 'auto'});
    return formatter.format(value, unit);
}
