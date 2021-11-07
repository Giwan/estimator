import { writable } from "svelte/store"; 
import { fibRange } from "../utils/helpers";

let _estimations = {};

export const estimations = writable({});
export const highestEstimation = writable(0);
export const averageEstimation = writable(0);
export const recommendedEstimation = writable(0);

export const updateEstimation= function(name, value) {
    
    _estimations = {..._estimations, [name]: value}; 
    
    
    // estimations.update(currentValue => ({
    //         ...currentValue,
    //         [name] : value
    // }));

    const _estimationValues = Object.values(_estimations); 
    const _maxEstimation = Math.max(..._estimationValues);
    highestEstimation.set(_maxEstimation);

    const _avgMatch = calculateAvg(_estimationValues);
    averageEstimation.set(_avgMatch); 
    recommendedEstimation.set(calculateRecommendation(_maxEstimation, _avgMatch)); 
    
}

function calculateAvg(estimationValues) {
    if (!estimationValues.length) return;
    const total = estimationValues.reduce((previousValue, currentValue) => previousValue + currentValue, 0); 
    const avg = Math.ceil(total/estimationValues.length); 


    const avgMatch = fibRange.find(val => val >= avg ); 
    return avgMatch;
}

function calculateRecommendation(_maxEstimation, _avgMatch) {
    if (_maxEstimation - _avgMatch > _avgMatch) return _maxEstimation; 
    return _avgMatch;
}