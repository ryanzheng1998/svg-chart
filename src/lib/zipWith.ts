export const zipWith = <T1, T2, T3>(f: (a: T1) => (b: T2) => T3) => (a: T1[]) => (b: T2[]): T3[] => {
    let answer: T3[] = []

    const len = Math.min(a.length, b.length)

    for(let i=0; i<len; i++){
        const temp = f(a[i])(b[i])
        answer.push(temp)
    }
    return answer
}