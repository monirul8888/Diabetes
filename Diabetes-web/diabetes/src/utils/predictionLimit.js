export const MAX_PREDICTIONS = 100;

export function getPredictionData() {
  const data = JSON.parse(localStorage.getItem("predictionData"));

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  if (!data) {
    return { count: 0, month: currentMonth, year: currentYear };
  }

  if (data.month !== currentMonth || data.year !== currentYear) {
    return { count: 0, month: currentMonth, year: currentYear };
  }

  return data;
}

export function incrementPrediction() {
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const data = getPredictionData();

  const newData = {
    count: data.count + 1,
    month: currentMonth,
    year: currentYear
  };

  localStorage.setItem("predictionData", JSON.stringify(newData));
}

export function canPredict() {
  const data = getPredictionData();
  return data.count < MAX_PREDICTIONS;
}