import validate from "validate.js";
import moment from "moment";
export { validate };
validate.extend(validate.validators.datetime, {
  // The value is guaranteed not to be null or undefined but otherwise it
  // could be anything.
  parse: function (value: any) {
    return +moment.utc(value);
  },
  // Input is a unix timestamp
  format: function (value: any, options: any) {
    var format = options.dateOnly ? "YYYY-MM-DD" : "YYYY-MM-DD hh:mm:ss";
    return moment.utc(value).format(format);
  },
});

export const constraintsLogin = {
  mobileNo: {
    presence: true,
    length: {
      minimum: 10,
      message: "Mobile No must be least 10 numbers",
    },
  },
  password: {
    presence: true,
    format: {
      pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
      message:
        "Password should be included Lower case, Upper case, Numbers, special, 6 to 20 characters",
    },
  }
};

export const constraintsChangePassword = {
  oldPassword: {
    presence: true,
    format: {
      pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
      message:
        "Password should be included Lower case, Upper case, Numbers, special, 6 to 20 characters",
    },
  },
  newPassword: {
    presence: true,
    format: {
      pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
      message:
        "Password should be included Lower case, Upper case, Numbers, special, 6 to 20 characters",
    },
  },
  confirmPassword: {
    presence: true,
    format: {
      pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
      message:
        "Password should be included Lower case, Upper case, Numbers, special, 6 to 20 characters",
    },
  },
};

export const constraintsUser = {
  lab: {
    presence: true,
    length: {
      minimum: 4,
      message: "Lab must be least 4 characters ",
    },
  },
  userId: {
    presence: true,
    length: {
      minimum: 6,
      message: "UserId must be least 6 characters",
    },
  },
  password: {
    presence: true,
    format: {
      pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
      message:
        "Password should be included Lower case, Upper case, Numbers, special, 6 to 20 characters",
    },
  },
  deginisation: {
    presence: true,
  },
  fullName: {
    presence: true,
  },
  department: {
    presence: true,
  },
  exipreDate: {
    presence: true,
    datetime: {
      dateOnly: false,
      earliest: moment.utc().subtract(1, "days"),
      message: "^You need to be at least 1 month earliest",
    },
  },
  exipreDays: {
    presence: true,
  },
  role: {
    presence: true,
  },
  status: {
    presence: true,
  },
};
