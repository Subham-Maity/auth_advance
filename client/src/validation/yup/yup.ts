import * as Yup from "yup";

//Username Validation
export const FORM_VALIDATION_USERNAME = Yup.object().shape({
  username: Yup.string()
    .required("Username Required...! 😣")
    .test("no-space", "Invalid Username...! 😣", (value) => {
      return !(value && value.includes(" "));
    }),
});

// **********************************************************************************************************************
//Password Validation
export const FORM_VALIDATION_PASSWORD = Yup.object().shape({
  password: Yup.string()
    .required("😥 Password Required...!")
    .test("no-space", "😕 Wrong Password...! No spaces allowed.", (value) => {
      return !(value && value.includes(" "));
    })
    .min(4, "😶 Password must be more than 4 characters long.")
    .matches(
      /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,
      "😫 Password must have a special character.",
    )
    .min(8, "😬 Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "😖 Password can only contain Latin letters.")
    .matches(/[A-Z]/, "😵 Password must contain at least one uppercase letter.")
    .matches(/[a-z]/, "😵‍💫 Password must contain at least one lowercase letter.")
    .matches(/[0-9]+/, "🐸 Password must contain at least one number.")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "😱 Password must contain at least one special character.",
    ),
});

// **********************************************************************************************************************
//Reset Password Validation
export const FORM_VALIDATION_RESET_PASSWORD = Yup.object().shape({
  password: Yup.string()
    .required("😥 New Password Required...!")
    .test("no-space", "😕 Wrong Password...! No spaces allowed.", (value) => {
      return !(value && value.includes(" "));
    })
    .min(4, "😶 Password must be more than 4 characters long.")
    .matches(
      /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,
      "😫 Password must have a special character.",
    )
    .min(8, "😬 Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "😖 Password can only contain Latin letters.")
    .matches(/[A-Z]/, "😵 Password must contain at least one uppercase letter.")
    .matches(/[a-z]/, "😵‍💫 Password must contain at least one lowercase letter.")
    .matches(/[0-9]+/, "🐸 Password must contain at least one number.")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "😱 Password must contain at least one special character.",
    ),
  confirm_pwd: Yup.string()
    .required("😥 Confirmation Password Required...!")
    .oneOf([Yup.ref("password")], "😰 Passwords must match"),
});

// **********************************************************************************************************************

// Email, Username, Password Validation
export const FORM_VALIDATION_REGISTER = Yup.object().shape({
  email: Yup.string()
    .required("Email Required...! 😣")
    .email("Invalid Email...! 😣"),

  username: Yup.string()
    .required("Username Required...! 😣")
    .test("no-space", "Invalid Username...! 😣", (value) => {
      return !(value && value.includes(" "));
    }),

  password: Yup.string()
    .required("😥 Password Required...!")
    .min(4, "😶 Password must be more than 4 characters long.")
    .matches(
      /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,
      "😫 Password must have a special character.",
    )
    .min(8, "😬 Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "😖 Password can only contain Latin letters.")
    .matches(/[A-Z]/, "😵 Password must contain at least one uppercase letter.")
    .matches(/[a-z]/, "😵‍💫 Password must contain at least one lowercase letter.")
    .matches(/[0-9]+/, "🐸 Password must contain at least one number.")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "😱 Password must contain at least one special character.",
    ),
});

// **********************************************************************************************************************

// Email, Username, Password Validation

export const FORM_VALIDATION_PROFILE = Yup.object().shape({
  firstName: Yup.string().required("🙏 First Name Required...!"),

  lastName: Yup.string().required("🙏 Last Name Required...!"),

  email: Yup.string()
    .required("🙏 Email Required...!")
    .email("🤔 Invalid Email...!"),

  mobile: Yup.string()
    .required("🙏 Mobile Number Required...!")
    .matches(/^[0-9]+$/, "🤔 Mobile Number can only contain numbers.")
    .length(10, "🤔 Mobile Number must be exactly 10 digits."),

  address: Yup.string().required("🙏 Address Required...!"),
});
