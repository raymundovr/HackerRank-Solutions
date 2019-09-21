function pangrams(s) {
    let lowered = s.toLowerCase().split('').filter(c => c !== ' ');    
    const panSet = new Set(lowered);    
    return panSet.size === 26 ? "pangram" : "not pangram";
}
