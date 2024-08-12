import { useState } from 'react';

function JobApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    coverLetter: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name) {
      tempErrors["name"] = "Name is required";
      isValid = false;
    }

    if (!formData.email) {
      tempErrors["email"] = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors["email"] = "Email is invalid";
      isValid = false;
    }

    if (!formData.phone) {
      tempErrors["phone"] = "Phone number is required";
      isValid = false;
    } else if (!/^\d+$/.test(formData.phone)) {
      tempErrors["phone"] = "Phone number must be numeric";
      isValid = false;
    }

    if (!formData.coverLetter) {
      tempErrors["coverLetter"] = "Cover letter is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission, e.g., send data to an API
      console.log('Form submitted:', formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
      </div>

      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>

      <div>
        <label>
          Phone Number:
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>
        {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
      </div>

      <div>
        <label>
          Cover Letter:
          <textarea
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
          ></textarea>
        </label>
        {errors.coverLetter && <p style={{ color: 'red' }}>{errors.coverLetter}</p>}
      </div>

      <button type="submit">Submit Application</button>
    </form>
  );
}

export default JobApplicationForm;
