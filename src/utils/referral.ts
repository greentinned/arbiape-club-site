const getMap = (legend: string[], shift: number) => {
    return legend.reduce((charsMap: any, currentChar, charIndex) => {
        const copy = { ...charsMap };
        let ind = (charIndex + shift) % legend.length;
        if (ind < 0) {
            ind += legend.length;
        }
        copy[currentChar] = legend[ind];
        return copy;
    }, {});
};

const crypt = (str: string, shift = 13): string => {
    const legend = "abcdefghijklmnopqrstuvwxyz".split("");
    const map = getMap(legend, shift);

    return str
        .toLowerCase()
        .split("")
        .map((char: string) => map[char] || char)
        .join("");
};

export function accountToReferralCode(
    address?: string
): string | undefined {
    if (address) {
        const substring = address.substring(2);
        return crypt(substring);
    }

    return undefined;
}

export function referralCodeToAccount(
    code?: string
): string | undefined {
    if (code) return `0x${crypt(code)}`;

    return undefined;
}
