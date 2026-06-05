self.onmessage = function (e) {
  const { allocated, target, gradesList } = e.data;
  
  if (!allocated || allocated.length === 0) {
    self.postMessage([]);
    return;
  }

  const getSgpa = () => {
    let pts = 0;
    let totCr = 0;
    allocated.forEach(item => {
      pts += gradesList[item.gradeIdx].gp * item.credits;
      totCr += item.credits;
    });
    return totCr > 0 ? pts / totCr : 0;
  };

  // Iteratively upgrade grades for courses with max credits to reach target
  let iterations = 0;
  while (getSgpa() < target && iterations < 100) {
    let bestIdx = -1;
    let maxCredits = -1;
    for (let i = 0; i < allocated.length; i++) {
      if (allocated[i].gradeIdx > 0 && allocated[i].credits > maxCredits) {
        maxCredits = allocated[i].credits;
        bestIdx = i;
      }
    }

    if (bestIdx === -1) break;
    allocated[bestIdx].gradeIdx--;
    iterations++;
  }

  // Iteratively downgrade grades to match close to target without overshooting
  iterations = 0;
  while (getSgpa() > target + 0.1 && iterations < 100) {
    let bestIdx = -1;
    let minCredits = 999;
    for (let i = 0; i < allocated.length; i++) {
      if (allocated[i].gradeIdx < gradesList.length - 1 && allocated[i].credits < minCredits) {
        minCredits = allocated[i].credits;
        bestIdx = i;
      }
    }

    if (bestIdx === -1) break;
    const prevIdx = allocated[bestIdx].gradeIdx;
    allocated[bestIdx].gradeIdx++;
    if (getSgpa() < target) {
      allocated[bestIdx].gradeIdx = prevIdx;
      break;
    }
    iterations++;
  }

  const result = allocated.map(item => ({
    code: item.code,
    name: item.name,
    credits: item.credits,
    grade: gradesList[item.gradeIdx].grade,
    points: gradesList[item.gradeIdx].gp
  }));

  self.postMessage(result);
};
