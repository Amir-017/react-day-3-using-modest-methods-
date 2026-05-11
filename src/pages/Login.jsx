import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white/90 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-200/50";

 
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@*%$#])[A-Za-z\d@*%$#]{8,}$/;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.email || !emailRegex.test(form.email)) {
      newErrors.email = "Invalid email";
    }

    if (!form.name) {
      newErrors.name = "Name is required";
    }

    if (!form.username || form.username.includes(" ")) {
      newErrors.username = "Username must not contain spaces";
    }

    if (!passwordRegex.test(form.password)) {
      newErrors.password =
        "Password must be 8+ chars, uppercase, lowercase, number, special char";
    }

    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

   
    if (Object.keys(validationErrors).length === 0) {
      alert(JSON.stringify(form, null, 2));

     
      navigate("/");
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 py-10">
      <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-cyan-500/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-orange-400/30 blur-3xl" />

      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-white/15 bg-white/10 shadow-2xl backdrop-blur-xl lg:grid-cols-2">
        <div className="hidden flex-col justify-between bg-linear-to-br from-cyan-500 to-blue-700 p-10 text-white lg:flex">
          <div>
            <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold tracking-wide">
              Welcome Aboard
            </span>
            <h2 className="mt-5 text-4xl font-extrabold leading-tight">
              Create your account and start shopping smarter.
            </h2>
            <p className="mt-4 max-w-sm text-sm text-white/90">
              Join thousands of users discovering top products, great deals, and
              personalized picks.
            </p>
          </div>
          <p className="text-xs text-white/75">
            Secure signup with modern validation and clear feedback.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white/95 p-6 sm:p-8"
        >
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Register</h1>
            <p className="mt-1 text-sm text-slate-500">
              Fill your details to create a new account.
            </p>
          </div>

          {/* Email */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              name="email"
              placeholder="you@example.com"
              onChange={handleChange}
              className={inputClass}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-rose-600">{errors.email}</p>
            )}
          </div>

          {/* Name */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Full Name
            </label>
            <input
              name="name"
              placeholder="Enter your full name"
              onChange={handleChange}
              className={inputClass}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-rose-600">{errors.name}</p>
            )}
          </div>

          {/* Username */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Username
            </label>
            <input
              name="username"
              placeholder="Choose a unique username"
              onChange={handleChange}
              className={inputClass}
            />
            {errors.username && (
              <p className="mt-1 text-xs text-rose-600">{errors.username}</p>
            )}
          </div>

          {/* Password */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Create password"
                onChange={handleChange}
                className={inputClass}
              />
              {errors.password && (
                <p className="mt-1 text-xs text-rose-600">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Repeat password"
                onChange={handleChange}
                className={inputClass}
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-xs text-rose-600">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white transition hover:bg-cyan-600 active:scale-[0.99]"
          >
            Create Account
          </button>

          <p className="text-center text-xs text-slate-500">
            By registering, you agree to our Terms and Privacy Policy.
          </p>
        </form>
      </div>
    </div>
  );
}
