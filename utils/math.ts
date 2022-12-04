const mathUtils = {
  euclideanDist: (p1: [number, number], p2: [number, number]) => {
    return Math.sqrt((p2[0] - p1[0]) ** 2 + (p2[1] - p1[1]) ** 2);
  },
};

export default mathUtils;
