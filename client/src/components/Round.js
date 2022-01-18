const Round = (number) => {
    return Math.round((number + Number.EPSILON) * 100) / 100
}

export const PercDiff =  (A, B) => {
    return ((A-B) / A) * 100;
}

export default Round;
