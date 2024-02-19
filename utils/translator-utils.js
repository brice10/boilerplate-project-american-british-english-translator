export const Locales = {
    A_to_B: 'american-to-british',
    B_to_A: 'british-to-american'
}

export const terminals = ['.', ';', '?', '!'];

export const getWordTab = (text) => {
    if (text && endsWithPontuation(text)) {
        text = text.slice(0, -1);
    }
    return text.split(' ') || null;
}

export const getFinalPonctuation = (text) => {
    return endsWithPontuation(text) ? text.charAt(text.length - 1) : null;
}

export const endsWithPontuation = (text) => {
    return terminals.includes(text.charAt(text.length - 1)) || false;
}

export const completePonctuation = (text, finalPonctuation) => {
    return text + finalPonctuation;
}

export const highlight = (word) => {
    return word ? `<span class=\"highlight\">${word}</span>` : word;
}

export const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1) || null;
}

export const isAmericanHour = (hour) => {
    const hourPattern = /^([0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    return hourPattern.test(hour);
}

export const toBritishHour = (hour) => {
    return hour.replace(':', '.');
}

export const isBritishHour = (hour) => {
    const hourPattern = /^([0-9]|1[0-9]|2[0-3])\.[0-5][0-9]$/;
    return hourPattern.test(hour);
}

export const toAmericanHour = (hour) => {
    return hour.replace('.', ':');
}

export const invertObject = (obj) => {
    const invertedObj = {};

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            invertedObj[obj[key]] = key;
        }
    }

    return invertedObj;
}