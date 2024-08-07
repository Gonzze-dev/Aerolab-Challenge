const calcPrev = (index: number) => {
    const prevCalc = index - 1
    const prev = prevCalc > 1 ?  prevCalc : 1

    return prev
}

const calcNext = (index: number, size: number) => {
    const nextCalc = index + 1
    const next = nextCalc < size ?  nextCalc : size

    return next
}

export {calcPrev, calcNext}