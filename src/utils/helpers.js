export const fibRange = [0, 1, 2, 3, 5, 8, 13, 20];

export function getFibonacci(index) {
    return fibRange[index];
}


const explanations =  [
    "Move the slider right to increase the estimate.",
    "The work is very easy to perform/understand. It can't get simpler than this.",
    "The work I'm doing is fairly easy to perform/understand. It's straight forward.",
    "The work I'm doing takes some time to perform/understand, but I'm able to handle it.",
    "The work takes some time to perform/understand. I might still be able to handle it after some initial assistance, guidance and/or research.",
    "The work I'm doing takes a lot time to perform or understand. I'll might need some assistance/guidance/further research.",
    "The work I'm doing takes a lot time to understand/perform. I'll definitely need some assistance/guidance/further research.",
    "The work I'm doing is too complex for one sprint. Is it possible to split it up?",
]

export function getExplanation(index) {
    return explanations[index];  
}