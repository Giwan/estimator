export const TITLES = {
    complexity: "complexity", 
    risks: "risks", 
    uncertainty: "uncertainty",
}

export const fibRange = [0, 1, 2, 3, 5, 8, 13, 20];

export function getFibonacci(index) {
    return fibRange[index];
}


const complexity =  [
    "Move the slider right to increase the estimate.",
    "The work is very easy to perform/understand. It can't get simpler than this.",
    "The work I'm doing is fairly easy to perform/understand. It's straight forward.",
    "The work I'm doing takes some time to perform/understand, but I'm able to handle it.",
    "The work takes some time to perform/understand. I might still be able to handle it after some initial assistance, guidance and/or research.",
    "The work I'm doing takes a lot time to perform or understand. I'll might need some assistance/guidance/further research.",
    "The work I'm doing takes a lot time to understand/perform. I'll definitely need some assistance/guidance/further research.",
    "The work I'm doing is too complex for one sprint. Is it possible to split it up?",
]; 

const risks = [
    "Move the slider right to increase the estimate.",
    "Nothing can go wrong. It can't get safer than this.",
    "It's unlikely that anything will go wrong.",
    "Something might go wrong. No real consequences.",
    "Something might go wrong, but the consequences are easily manageable.",
    "If something goes wrong, the problems can get out of hand. The consequences can be difficult to work around.",
    "If something goes wrong, the problems can get out of hand. The consequences will be very bad.",
    "The work I'm doing is very sensitive to risk. What can we do to mitigate them?"
]; 

const uncertainty = [
    "Move the slider right to increase the estimate.",
    "I know exactly what to do. It can't get clearer than this.",
    "I know what to do. It's very unlikely that I'll uncover unknown work.",
    "I have a good idea of what to do. I might uncover some work.",
    "I have an idea of what to do. It's very likely that we will be uncovering some new work.",
    "I’m a bit uncertain of what to do. We will be exploring new grounds and uncovering some unknown work.",
    "I’m very uncertain of what to do. There is a lot of work to be uncovered.",
    "I have no idea what I'm doing. The whole work has to be uncovered. Can we have a spike story first to uncover some of that work?"
];

const explanations = {complexity, risks, uncertainty};

export function getExplanation(index, factors) {
    if (!Array.isArray(factors)) {
        throw new Error("Invalid factor array provided", factors);
    }
    return factors[parseInt(index)];  
}

export function getItemExplanation(title) {
    if (!title) {
        throw new Error("Please provide a valid title");
    }

    const explanationsArray = explanations[title.toLowerCase()]; 

    if (!Array.isArray(explanationsArray)) {
        throw new Error("Invalid explanationsArray array provided", explanationsArray);
    }

    return function(index) {
        return getExplanation(index, explanationsArray);
    }
}

// This was copied from the example.
// I'm not entirely sure what this computes. 
export function modulo(n, m) {
    // handle negative numbers
    return ((n % m) + m) % m;
}