export const zipWith3 = <T, U, V, W>(f: (a: T) => (b: U) => (c: V) => W ) => (a: T[]) => (b: U[]) => (c: V[]): W[] => {
    let answer = []
    const len = Math.min(a.length, b.length, c.length)
    
    for(let i=0; i<len; i++){
        const temp = f(a[i])(b[i])(c[i])
        answer.push(temp)
    }

    return answer
}