// Regex: Allows numbers with optional 1 decimal place
const decimalRegex = /^(\d+\.?\d{0,1}|\d*\.\d{1})$/;

export const validateFormData = (formData: any) => {
  const newErrors: Record<string, string> = {};
  if (!formData.goalName) {
    newErrors.goalName = "Goal name is required";
  } else if (formData.goalName.length > 500) {
    newErrors.goalName = "Goal name cannot be > 500";
  }

  if (formData.measureOfSuccess.length > 500) {
    newErrors.measureOfSuccess = "Measure of success cannot be > 500";
  }

  if (formData.target.length > 500) {
    newErrors.target = "Target cannot be > 500";
  }

  if (
    !(
      formData.weight >= 5 &&
      formData.weight <= 25 &&
      decimalRegex.test(formData.weight.toString())
    )
  )
    newErrors.weight = "Weight must be >= 5 and <= 25. Max 1 decimal allowed.";
  if (!formData.startDate) newErrors.startDate = "Start date is required";
  if (!formData.endDate) newErrors.endDate = "End date is required";
  return newErrors;
};

export const getIndianFinancialYearDates = (date = new Date()) => {
  const year =
    date.getMonth() >= 3 ? date.getFullYear() : date.getFullYear() - 1;
  const startDate = new Date(year, 3, 1); // April 1
  const endDate = new Date(year + 1, 2, 31); // March 31
  const options = { day: "numeric", month: "short", year: "numeric" } as const;
  return {
    startDate: startDate.toLocaleDateString("en-GB", options).replace(",", ""),
    endDate: endDate.toLocaleDateString("en-GB", options).replace(",", ""),
  };
};
