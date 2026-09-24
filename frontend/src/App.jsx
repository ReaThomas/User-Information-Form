import { useState } from "react";
function ReviewItem({ label, value }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
      <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
        {label}
      </p>

      <p className="break-words text-base font-medium text-white">
        {value || "Not provided"}
      </p>
    </div>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    bloodGroup: "",
    schoolName: "",
    tenthPercentage: "",
    twelfthPercentage: "",
    collegeName: "",
    departmentOrDegree: "",
    cgpa: "",
    // Page 2 — Qualification + Contact
    graduationYear: "",
    highestQualification: "",
    currentCity: "",
    email: "",
    mobile: "",
    address: "",
    state: "",
    pincode: "",
    // Page 3 — Professional
    currentStatus: "",
    jobTitle: "",
    companyName: "",
    yearsOfExperience: "",
    linkedinProfile: "",
    githubProfile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleNext = (e) => {
  e.preventDefault();

  console.log("Page 1 data:", formData);

  setCurrentPage(2);
};
if (isSubmitted) {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="w-full max-w-2xl text-center">

        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10 border border-green-500/40">
          <span className="text-4xl text-green-400">✓</span>
        </div>

        <h1 className="text-4xl font-bold text-white">
          Form Submitted Successfully!
        </h1>

        <p className="mt-4 text-xl text-slate-300">
          {formData.name}
        </p>

        <p className="mt-3 text-slate-500">
          Your information has been successfully submitted.
        </p>

      </div>
    </div>
  );
}

   return (
    <div className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            User Information Form
          </p>

          <h1 className="text-4xl font-bold">
            Personal & Academic Information
          </h1>

          <p className="mt-3 text-slate-400">
            Please enter your details carefully.
          </p>
        </div>

        {/* Progress */}
        <div className="mb-10 flex items-center justify-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold">
            1
          </div>

          <div className="h-[2px] w-16 bg-slate-700"></div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-500">
            2
          </div>

          <div className="h-[2px] w-16 bg-slate-700"></div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-500">
            3
          </div>

          <div className="h-[2px] w-16 bg-slate-700"></div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-500">
            4
          </div>
        </div>

        {/* PAGE 1 */}
        {currentPage === 1 && (
          <form
            onSubmit={handleNext}
            className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl"
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

              {/* Full Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
                />
              </div>

              {/* DOB */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Date of Birth
                </label>

                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
                />
              </div>

              {/* Gender */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Gender
                </label>

                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Blood Group */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Blood Group
                </label>

                <select
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
                >
                  <option value="">Select Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
              </div>

              {/* School Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  School Name
                </label>

                <input
                  type="text"
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={handleChange}
                  placeholder="Enter school name"
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
                />
              </div>

              {/* 10th Percentage */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  10th Grade Percentage
                </label>

                <input
                  type="number"
                  name="tenthPercentage"
                  value={formData.tenthPercentage}
                  onChange={handleChange}
                  placeholder="Enter percentage"
                  min="0"
                  max="100"
                  step="0.01"
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
                />
              </div>

              {/* 12th Percentage */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  12th Grade Percentage
                </label>

                <input
                  type="number"
                  name="twelfthPercentage"
                  value={formData.twelfthPercentage}
                  onChange={handleChange}
                  placeholder="Enter percentage"
                  min="0"
                  max="100"
                  step="0.01"
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
                />
              </div>

              {/* College Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  College Name
                </label>

                <input
                  type="text"
                  name="collegeName"
                  value={formData.collegeName}
                  onChange={handleChange}
                  placeholder="Enter college name"
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
                />
              </div>

              {/* Department / Degree */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Department / Degree
                </label>

                <input
                  type="text"
                  name="departmentOrDegree"
                  value={formData.departmentOrDegree}
                  onChange={handleChange}
                  placeholder="e.g. B.Tech Information Technology"
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
                />
              </div>

              {/* CGPA */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  CGPA
                </label>

                <input
                  type="number"
                  name="cgpa"
                  value={formData.cgpa}
                  onChange={handleChange}
                  placeholder="Enter CGPA"
                  min="0"
                  max="10"
                  step="0.01"
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
                />
              </div>

            </div>

            {/* Next Button */}
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-xl bg-blue-600 px-8 py-3 font-semibold transition hover:bg-blue-500"
              >
                Next →
              </button>
            </div>
          </form>
        )}

       {/* PAGE 2 */}
{currentPage === 2 && (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      console.log("Page 2 data:", formData);
      setCurrentPage(3);
    }}
    className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl"
  >
    {/* Page 2 Heading */}
    <div className="mb-8">
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
        Step 2
      </p>

      <h2 className="text-3xl font-bold">
        Qualification & Contact Information
      </h2>

      <p className="mt-2 text-slate-400">
        Please provide your qualification and contact details.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

      {/* Graduation Year */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Graduation Year
        </label>

        <input
          type="number"
          name="graduationYear"
          value={formData.graduationYear}
          onChange={handleChange}
          placeholder="e.g. 2026"
          required
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
        />
      </div>

      {/* Highest Qualification */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Highest Qualification
        </label>

        <input
          type="text"
          name="highestQualification"
          value={formData.highestQualification}
          onChange={handleChange}
          placeholder="e.g. B.Tech"
          required
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
        />
      </div>

      {/* Current City */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Current City
        </label>

        <input
          type="text"
          name="currentCity"
          value={formData.currentCity}
          onChange={handleChange}
          placeholder="Enter your current city"
          required
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
        />
      </div>

      {/* Email */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Email Address
        </label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="example@email.com"
          required
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
        />
      </div>

      {/* Mobile */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Mobile Number
        </label>

        <input
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="Enter mobile number"
          required
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
        />
      </div>

      {/* State */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          State
        </label>

        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          placeholder="Enter your state"
          required
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
        />
      </div>

      {/* Pincode */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Pincode
        </label>

        <input
          type="text"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
          placeholder="Enter pincode"
          required
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
        />
      </div>

      {/* Address */}
      <div className="md:col-span-2">
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Address
        </label>

        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter your complete address"
          rows="4"
          required
          className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
        ></textarea>
      </div>

    </div>

    {/* Buttons */}
    <div className="mt-8 flex justify-between">

      <button
        type="button"
        onClick={() => setCurrentPage(1)}
        className="rounded-xl border border-slate-700 px-8 py-3 font-semibold text-slate-300 transition hover:bg-slate-800"
      >
        ← Back
      </button>

      <button
        type="submit"
        className="rounded-xl bg-blue-600 px-8 py-3 font-semibold transition hover:bg-blue-500"
      >
        Next →
      </button>

    </div>
  </form>
)}
{/* PAGE 3 */}
{currentPage === 3 && (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      console.log("Page 3 data:", formData);
      setCurrentPage(4);
    }}
    className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl"
  >
    {/* Page 3 Heading */}
    <div className="mb-8">
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
        Step 3
      </p>

      <h2 className="text-3xl font-bold">
        Professional Information
      </h2>

      <p className="mt-2 text-slate-400">
        Tell us about your current professional status and experience.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

      {/* Current Status */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Current Status
        </label>

        <select
          name="currentStatus"
          value={formData.currentStatus}
          onChange={handleChange}
          required
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
        >
          <option value="">Select Status</option>
          <option value="Fresher">Fresher</option>
          <option value="Employed">Employed</option>
          <option value="Intern">Intern</option>
          <option value="Self Employed">Self Employed</option>
          <option value="Freelancer">Freelancer</option>
          <option value="Student">Student</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Job Title */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Job Title / Role
        </label>

        <input
          type="text"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          placeholder="e.g. Software Developer"
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
        />
      </div>

      {/* Company Name */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Company Name
        </label>

        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          placeholder="Enter company name"
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
        />
      </div>

      {/* Years of Experience */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Years of Experience
        </label>

        <input
          type="number"
          name="yearsOfExperience"
          value={formData.yearsOfExperience}
          onChange={handleChange}
          placeholder="e.g. 2"
          min="0"
          step="0.1"
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
        />
      </div>

      {/* LinkedIn */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          LinkedIn Profile
        </label>

        <input
          type="url"
          name="linkedinProfile"
          value={formData.linkedinProfile}
          onChange={handleChange}
          placeholder="https://linkedin.com/in/yourname"
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
        />
      </div>

      {/* GitHub */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          GitHub Profile
        </label>

        <input
          type="url"
          name="githubProfile"
          value={formData.githubProfile}
          onChange={handleChange}
          placeholder="https://github.com/yourname"
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
        />
      </div>

    </div>

    {/* Buttons */}
    <div className="mt-8 flex justify-between">

      <button
        type="button"
        onClick={() => setCurrentPage(2)}
        className="rounded-xl border border-slate-700 px-8 py-3 font-semibold text-slate-300 transition hover:bg-slate-800"
      >
        ← Back
      </button>

      <button
        type="submit"
        className="rounded-xl bg-blue-600 px-8 py-3 font-semibold transition hover:bg-blue-500"
      >
        Review →
      </button>

    </div>
  </form>
)}
{/* PAGE 4 — REVIEW */}
{currentPage === 4 && (
  <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">

    {/* Header */}
    <div className="mb-10 text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
        Step 4
      </p>

      <h2 className="text-3xl font-bold">
        Review Your Information
      </h2>

      <p className="mt-3 text-slate-400">
        Please check all the information before submitting.
      </p>
    </div>

    {/* ========================= */}
    {/* PERSONAL & ACADEMIC */}
    {/* ========================= */}

    <div className="mb-8 rounded-2xl border border-slate-800 bg-slate-950 p-6">

      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Section 01
          </p>

          <h3 className="mt-1 text-2xl font-bold">
            Personal & Academic
          </h3>
        </div>

        <button
          type="button"
          onClick={() => setCurrentPage(1)}
          className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800"
        >
          Edit
        </button>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

        <ReviewItem
          label="Full Name"
          value={formData.name}
        />

        <ReviewItem
          label="Date of Birth"
          value={formData.dob}
        />

        <ReviewItem
          label="Gender"
          value={formData.gender}
        />

        <ReviewItem
          label="Blood Group"
          value={formData.bloodGroup}
        />

        <ReviewItem
          label="School Name"
          value={formData.schoolName}
        />

        <ReviewItem
          label="10th Grade Percentage"
          value={formData.tenthPercentage}
        />

        <ReviewItem
          label="12th Grade Percentage"
          value={formData.twelfthPercentage}
        />

        <ReviewItem
          label="College Name"
          value={formData.collegeName}
        />

        <ReviewItem
          label="Department / Degree"
          value={formData.departmentOrDegree}
        />

        <ReviewItem
          label="CGPA"
          value={formData.cgpa}
        />

      </div>
    </div>

    {/* ========================= */}
    {/* QUALIFICATION & CONTACT */}
    {/* ========================= */}

    <div className="mb-8 rounded-2xl border border-slate-800 bg-slate-950 p-6">

      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Section 02
          </p>

          <h3 className="mt-1 text-2xl font-bold">
            Qualification & Contact
          </h3>
        </div>

        <button
          type="button"
          onClick={() => setCurrentPage(2)}
          className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800"
        >
          Edit
        </button>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

        <ReviewItem
          label="Graduation Year"
          value={formData.graduationYear}
        />

        <ReviewItem
          label="Highest Qualification"
          value={formData.highestQualification}
        />

        <ReviewItem
          label="Current City"
          value={formData.currentCity}
        />

        <ReviewItem
          label="Email Address"
          value={formData.email}
        />

        <ReviewItem
          label="Mobile Number"
          value={formData.mobile}
        />

        <ReviewItem
          label="State"
          value={formData.state}
        />

        <ReviewItem
          label="Pincode"
          value={formData.pincode}
        />

        <div className="md:col-span-2">
          <ReviewItem
            label="Address"
            value={formData.address}
          />
        </div>

      </div>
    </div>

    {/* ========================= */}
    {/* PROFESSIONAL */}
    {/* ========================= */}

    <div className="mb-8 rounded-2xl border border-slate-800 bg-slate-950 p-6">

      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Section 03
          </p>

          <h3 className="mt-1 text-2xl font-bold">
            Professional Information
          </h3>
        </div>

        <button
          type="button"
          onClick={() => setCurrentPage(3)}
          className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800"
        >
          Edit
        </button>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

        <ReviewItem
          label="Current Status"
          value={formData.currentStatus}
        />

        <ReviewItem
          label="Job Title / Role"
          value={formData.jobTitle}
        />

        <ReviewItem
          label="Company Name"
          value={formData.companyName}
        />

        <ReviewItem
          label="Years of Experience"
          value={formData.yearsOfExperience}
        />

        <ReviewItem
          label="LinkedIn Profile"
          value={formData.linkedinProfile}
        />

        <ReviewItem
          label="GitHub Profile"
          value={formData.githubProfile}
        />

      </div>
    </div>

    {/* Final Notice */}
    <div className="mb-8 rounded-2xl border border-blue-900/50 bg-blue-950/30 p-5">
      <p className="text-sm leading-6 text-blue-200">
        Please make sure all the information above is correct.
        Once you click Final Submit, your information will be
        sent to the server for processing.
      </p>
    </div>

    {/* Buttons */}
    <div className="flex items-center justify-between">

      <button
        type="button"
        onClick={() => setCurrentPage(3)}
        className="rounded-xl border border-slate-700 px-8 py-3 font-semibold text-slate-300 transition hover:bg-slate-800"
      >
        ← Back
      </button>

      <button
        type="button"
       onClick={async () => {
  try {
    const response = await fetch("http://localhost:8080/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to submit user information");
    }

    const result = await response.json();

    console.log("Server response:", result);

    setIsSubmitted(true);
  } catch (error) {
    console.error("Submission error:", error);

    alert("Failed to submit user information. Please check the backend server.");
  }
}}
        className="rounded-xl bg-blue-600 px-8 py-3 font-semibold shadow-lg transition hover:bg-blue-500"
      >
        FINAL SUBMIT →
      </button>

    </div>

  </div>
)}

      </div>
    </div>
  );
}

export default App;