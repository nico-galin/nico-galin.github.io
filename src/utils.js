const euclideanDist = (p1, p2) => {
    return Math.sqrt((p2[0] - p1[0])**2 + (p2[1] - p1[1])**2)
}

const notBlank = (val) => {
    if (val == null) return false;
    if (val === {}) return false;
    if (typeof val == "string" && (val === "" || val.trim() === "")) return false
    return true;
}

export {
    euclideanDist,
    notBlank
}