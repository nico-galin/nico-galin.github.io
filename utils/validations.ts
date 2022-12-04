const validations = {
  isNotBlank: (val: any) => {
    if (val === 0) return true;
    if (!val) return false;
    if (val == null) return false;
    if (Object.keys(val).length == 0) return false;
    if (
      typeof val == "string" &&
      (val === "" || val.trim() === "" || val === "null")
    )
      return false;
    return true;
  },
};

export default validations;
