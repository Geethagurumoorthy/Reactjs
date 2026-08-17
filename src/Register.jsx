import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Person,
  Email,
  Phone,
  Lock,
  Visibility,
  VisibilityOff,
  Cake,
  LocationOn,
  School,
  Delete,
  AutoAwesome,
  CheckCircle,
} from "@mui/icons-material";

import {
  TextField,
  MenuItem,
  IconButton,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
} from "@mui/material";

const API_URL = "https://jsonplaceholder.typicode.com/users";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  gender: "",
  dob: "",
  password: "",
  confirmPassword: "",
  address: "",
  city: "",
  qualification: "",
  declaration: false,
};

// =====================================================
// REUSABLE INPUT
// =====================================================

function InputField({
  label,
  name,
  value,
  onChange,
  type = "text",
  icon,
  required = true,
}) {
  return (
    <TextField
      fullWidth
      required={required}
      type={type}
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      InputProps={
        icon
          ? {
              startAdornment: (
                <InputAdornment position="start">
                  {icon}
                </InputAdornment>
              ),
            }
          : undefined
      }
    />
  );
}

// =====================================================
// SECTION HEADER
// =====================================================

function SectionHeader({ icon, title, subtitle, color }) {
  return (
    <div className="mb-6 flex items-center gap-4">
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className={`flex h-12 w-12 items-center justify-center rounded-2xl ${color}`}
      >
        {icon}
      </motion.div>

      <div>
        <h3 className="font-black text-gray-800">
          {title}
        </h3>

        <p className="text-sm text-gray-500">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

// =====================================================
// ANIMATED FORM SECTION
// =====================================================

function FormSection({
  children,
  direction = -40,
  delay = 0,
  className = "",
}) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        x: direction,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.6,
        delay,
      }}
      whileHover={{ y: -4 }}
      className={`rounded-3xl border p-5 shadow-sm sm:p-7 ${className}`}
    >
      {children}
    </motion.section>
  );
}

// =====================================================
// PASSWORD FIELD
// =====================================================

function PasswordField({
  label,
  name,
  value,
  onChange,
  visible,
  setVisible,
}) {
  return (
    <TextField
      fullWidth
      required
      type={visible ? "text" : "password"}
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Lock />
          </InputAdornment>
        ),

        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              type="button"
              onClick={() => setVisible(!visible)}
            >
              {visible ? (
                <VisibilityOff />
              ) : (
                <Visibility />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

// =====================================================
// REGISTER COMPONENT
// =====================================================

function Register() {
  const [form, setForm] = useState(initialForm);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [message, setMessage] = useState("");

  // ===================================================
  // FETCH USERS
  // ===================================================

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();

        setUsers(data);
      } catch (error) {
        console.error(error);
        setMessage("Unable to load users.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // ===================================================
  // HANDLE INPUT
  // ===================================================

  const handleChange = (event) => {
    const {
      name,
      value,
      checked,
      type,
    } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));

    setMessage("");
  };

  // ===================================================
  // SUBMIT FORM
  // ===================================================

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (form.password !== form.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    if (!form.declaration) {
      setMessage("Please accept the declaration.");
      return;
    }

    const newUser = {
      name: `${form.firstName} ${form.lastName}`,
      email: form.email,
      phone: form.phone,
      gender: form.gender,
      dob: form.dob,
      address: form.address,
      city: form.city,
      qualification: form.qualification,
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const data = await response.json();

      setUsers((previous) => [
        {
          ...data,
          ...newUser,
        },
        ...previous,
      ]);

      setMessage(
        "Registration successful! 🎉"
      );

      setForm(initialForm);
      setShowPassword(false);
      setShowConfirmPassword(false);
    } catch (error) {
      console.error(error);
      setMessage(
        "Registration failed. Please try again."
      );
    }
  };

  // ===================================================
  // DELETE USER
  // ===================================================

  const deleteUser = (id) => {
    setUsers((previous) =>
      previous.filter(
        (user) => user.id !== id
      )
    );
  };

  return (
    <div className="min-h-screen overflow-hidden bg-slate-100">

      {/* ================================================= */}
      {/* BACKGROUND */}
      {/* ================================================= */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="
            absolute -left-32 top-20
            h-80 w-80 rounded-full
            bg-purple-400/20 blur-3xl
          "
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="
            absolute -right-32 top-60
            h-96 w-96 rounded-full
            bg-pink-400/20 blur-3xl
          "
        />

        <motion.div
          animate={{
            y: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="
            absolute bottom-0 left-1/3
            h-72 w-72 rounded-full
            bg-blue-400/20 blur-3xl
          "
        />

      </div>

      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <header
        className="
          relative overflow-hidden
          bg-gradient-to-br
          from-violet-800
          via-purple-700
          to-indigo-900
          px-5 py-16 text-white
          sm:py-20
        "
      >

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute -right-20 -top-20
            h-72 w-72 rounded-full
            border border-white/20
          "
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute -bottom-32 -left-20
            h-80 w-80 rounded-full
            border border-white/10
          "
        />

        <div className="relative mx-auto max-w-5xl text-center">

          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
              rotate: -30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
            }}
            className="
              mx-auto mb-6 flex h-20 w-20
              items-center justify-center
              rounded-3xl border border-white/20
              bg-white/15 shadow-2xl
              backdrop-blur-lg
            "
          >
            <AutoAwesome className="!text-4xl" />
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              text-4xl font-black
              sm:text-6xl
            "
          >
            Create Your{" "}
            <span className="text-pink-300">
              Account
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="
              mx-auto mt-4 max-w-xl
              text-purple-100 sm:text-lg
            "
          >
            Join our community and start your
            journey with a beautiful
            registration experience.
          </motion.p>

        </div>
      </header>

      {/* ================================================= */}
      {/* MAIN */}
      {/* ================================================= */}

      <main
        className="
          relative mx-auto -mt-10
          max-w-6xl px-4 pb-16
        "
      >

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.8 }}
          className="
            overflow-hidden rounded-[30px]
            border border-white
            bg-white/90 shadow-2xl
            backdrop-blur-xl
          "
        >

          {/* FORM HEADER */}

          <div
            className="
              border-b border-gray-100
              bg-gradient-to-r
              from-white to-purple-50
              px-6 py-8 sm:px-10
            "
          >

            <div className="flex items-center gap-4">

              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
                  flex h-14 w-14
                  items-center justify-center
                  rounded-2xl bg-purple-100
                  text-purple-600
                "
              >
                <Person />
              </motion.div>

              <div>
                <h2 className="text-2xl font-black text-gray-800">
                  Registration Details
                </h2>

                <p className="text-sm text-gray-500">
                  Fill in your information below
                </p>
              </div>

            </div>
          </div>

          {/* FORM */}

          <form
            onSubmit={handleSubmit}
            className="space-y-8 p-5 sm:p-10"
          >

            {/* PERSONAL DETAILS */}

            <FormSection
              direction={-40}
              className="
                border-purple-100
                bg-gradient-to-br
                from-purple-50 to-white
              "
            >

              <SectionHeader
                icon={<Person />}
                title="Personal Details"
                subtitle="Tell us about yourself"
                color="
                  bg-purple-100
                  text-purple-600
                "
              />

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                <InputField
                  label="First Name"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  icon={<Person />}
                />

                <InputField
                  label="Last Name"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                />

                <InputField
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  icon={<Email />}
                />

                <InputField
                  label="Phone Number"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  icon={<Phone />}
                />

                {/* GENDER */}

                <div
                  className="
                    rounded-2xl border
                    border-purple-100
                    bg-white p-4
                  "
                >

                  <FormLabel
                    sx={{
                      color: "#6d28d9",
                      fontWeight: "bold",
                    }}
                  >
                    Gender
                  </FormLabel>

                  <RadioGroup
                    row
                    name="gender"
                    value={form.gender}
                    onChange={handleChange}
                  >

                    <FormControlLabel
                      value="Male"
                      control={
                        <Radio color="secondary" />
                      }
                      label="Male"
                    />

                    <FormControlLabel
                      value="Female"
                      control={
                        <Radio color="secondary" />
                      }
                      label="Female"
                    />

                    <FormControlLabel
                      value="Other"
                      control={
                        <Radio color="secondary" />
                      }
                      label="Other"
                    />

                  </RadioGroup>

                </div>

                <InputField
                  type="date"
                  label="Date of Birth"
                  name="dob"
                  value={form.dob}
                  onChange={handleChange}
                  icon={<Cake />}
                />

              </div>

            </FormSection>

            {/* ADDRESS */}

            <FormSection
              direction={40}
              delay={0.1}
              className="
                border-pink-100
                bg-gradient-to-br
                from-pink-50 to-white
              "
            >

              <SectionHeader
                icon={<LocationOn />}
                title="Address Details"
                subtitle="Where do you live?"
                color="
                  bg-pink-100
                  text-pink-600
                "
              />

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                <div className="md:col-span-2">

                  <TextField
                    fullWidth
                    required
                    multiline
                    rows={3}
                    label="Address"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                  />

                </div>

                <InputField
                  label="City"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                />

              </div>

            </FormSection>

            {/* EDUCATION */}

            <FormSection
              direction={0}
              delay={0.2}
              className="
                border-blue-100
                bg-gradient-to-br
                from-blue-50 to-white
              "
            >

              <SectionHeader
                icon={<School />}
                title="Education"
                subtitle="Select your qualification"
                color="
                  bg-blue-100
                  text-blue-600
                "
              />

              <TextField
                fullWidth
                required
                select
                label="Qualification"
                name="qualification"
                value={form.qualification}
                onChange={handleChange}
              >

                {[
                  "10th",
                  "12th",
                  "Diploma",
                  "BCA",
                  "B.Sc",
                  "B.Com",
                  "MCA",
                  "M.Sc",
                  "Other",
                ].map((qualification) => (
                  <MenuItem
                    key={qualification}
                    value={qualification}
                  >
                    {qualification}
                  </MenuItem>
                ))}

              </TextField>

            </FormSection>

            {/* SECURITY */}

            <FormSection
              direction={-40}
              delay={0.3}
              className="
                border-green-100
                bg-gradient-to-br
                from-green-50 to-white
              "
            >

              <SectionHeader
                icon={<Lock />}
                title="Account Security"
                subtitle="Create your secure password"
                color="
                  bg-green-100
                  text-green-600
                "
              />

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                <PasswordField
                  label="Password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  visible={showPassword}
                  setVisible={setShowPassword}
                />

                <PasswordField
                  label="Confirm Password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  visible={showConfirmPassword}
                  setVisible={setShowConfirmPassword}
                />

              </div>

            </FormSection>

            {/* DECLARATION */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{ delay: 0.4 }}
              className="
                rounded-3xl
                border border-purple-200
                bg-purple-50 p-5
              "
            >

              <h3 className="mb-2 font-black text-purple-800">
                Declaration
              </h3>

              <FormControlLabel
                control={
                  <Checkbox
                    name="declaration"
                    checked={form.declaration}
                    onChange={handleChange}
                  />
                }
                label={
                  <span className="text-sm text-gray-700">
                    I hereby declare that all
                    information provided by me
                    is true and correct.
                  </span>
                }
              />

            </motion.div>

            {/* MESSAGE */}

            <AnimatePresence>
              {message && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -15,
                    scale: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: -15,
                  }}
                  className={`
                    flex items-center
                    justify-center gap-2
                    rounded-2xl p-4
                    text-center font-bold
                    ${
                      message.includes("successful")
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }
                  `}
                >

                  {message.includes("successful") && (
                    <CheckCircle />
                  )}

                  {message}

                </motion.div>
              )}
            </AnimatePresence>

            {/* SUBMIT */}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              className="
                group relative w-full
                overflow-hidden rounded-2xl
                bg-gradient-to-r
                from-violet-600
                via-purple-600
                to-pink-600
                px-6 py-5
                font-black text-white
                shadow-xl
              "
            >

              <span
                className="
                  absolute inset-0
                  -translate-x-full
                  bg-gradient-to-r
                  from-transparent
                  via-white/20
                  to-transparent
                  transition-transform
                  duration-700
                  group-hover:translate-x-full
                "
              />

              <span className="relative">
                Create Account ✨
              </span>

            </motion.button>

          </form>
        </motion.div>

        {/* ================================================= */}
        {/* USERS TABLE */}
        {/* ================================================= */}

        <motion.section
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ delay: 0.5 }}
          className="
            mt-10 overflow-hidden
            rounded-[30px]
            bg-slate-950 shadow-2xl
          "
        >

          <div
            className="
              bg-gradient-to-r
              from-slate-950
              via-purple-950
              to-indigo-950
              px-6 py-7 text-white
              sm:px-8
            "
          >

            <p
              className="
                text-xs font-bold
                uppercase tracking-widest
                text-purple-300
              "
            >
              User Directory
            </p>

            <h2 className="mt-1 text-2xl font-black">
              Registered Users
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Total Users: {users.length}
            </p>

          </div>

          {loading ? (
            <div
              className="
                p-12 text-center
                text-slate-400
              "
            >

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  mx-auto mb-4 h-8 w-8
                  rounded-full border-4
                  border-slate-700
                  border-t-purple-500
                "
              />

              Loading users...

            </div>
          ) : (
            <div className="overflow-x-auto">

              <table className="w-full min-w-[800px]">

                <thead className="bg-white/5 text-slate-300">

                  <tr>
                    <th className="p-4">#</th>
                    <th className="p-4 text-left">Name</th>
                    <th className="p-4 text-left">Email</th>
                    <th className="p-4 text-left">Phone</th>
                    <th className="p-4 text-left">Gender</th>
                    <th className="p-4">Action</th>
                  </tr>

                </thead>

                <tbody>

                  <AnimatePresence>

                    {users.map((user, index) => (
                      <motion.tr
                        key={user.id}
                        initial={{
                          opacity: 0,
                          x: -30,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        exit={{
                          opacity: 0,
                          x: 30,
                        }}
                        className="
                          border-b
                          border-white/5
                          text-slate-300
                        "
                        whileHover={{
                          backgroundColor:
                            "rgba(255,255,255,0.06)",
                        }}
                      >

                        <td className="p-4 text-center">
                          {index + 1}
                        </td>

                        <td className="p-4 font-bold text-white">
                          {user.name}
                        </td>

                        <td className="p-4">
                          {user.email}
                        </td>

                        <td className="p-4">
                          {user.phone}
                        </td>

                        <td className="p-4">
                          {user.gender || "N/A"}
                        </td>

                        <td className="p-4 text-center">

                          <motion.div
                            whileHover={{
                              scale: 1.2,
                              rotate: 5,
                            }}
                            whileTap={{
                              scale: 0.8,
                            }}
                          >

                            <IconButton
                              onClick={() =>
                                deleteUser(user.id)
                              }
                              sx={{
                                color: "#fb7185",
                              }}
                            >
                              <Delete />
                            </IconButton>

                          </motion.div>

                        </td>

                      </motion.tr>
                    ))}

                  </AnimatePresence>

                </tbody>

              </table>

            </div>
          )}

        </motion.section>

      </main>
    </div>
  );
}

export default Register;