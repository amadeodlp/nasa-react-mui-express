const Round = (number) => {
    return Math.round((number + Number.EPSILON) * 100) / 100
}

export const PercDiff =  (A, B) => {
    return ((A-B) / A) * 100;
}

export const sortRandomly = (arr) => {
    return Array.from(arr).sort(()=> 0.5 - Math.random())
}

export default Round;
