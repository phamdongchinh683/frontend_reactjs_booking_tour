import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthButton from "../../components/AuthButton";
import AuthInput from "../../components/InputAuth";
import Notification from "../../components/Notification";
import { User } from "../../models/User";
import { AuthService } from "../../services";
import * as validation from '../../utils';

const SignUp = () => {
 const { register, provinces } = AuthService();
 const [province, setProvinces] = useState([]);

 const navigate = useNavigate();
 useEffect(() => {
  const fetchProvinces = async () => {
   try {
    const response = await provinces();
    const result = response?.data;
    if (result) {
     setProvinces(result);
    }
   } catch (e) {
    toast.warn('Please try again later');
   }
  };
  fetchProvinces();
 }, []);

 const [form, setForm] = useState({
  username: "",
  email: "", password: "", phone: "",
  firstName: "", lastName: "", age: "", city: "", role: "Traveler"
 });

 const handleChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
 };

 const handlePhoneChange = (value) => {
  if (/^\d{0,20}$/.test(value)) {
   setForm({ ...form, phone: value });
  }
 };

 const registerAccount = async () => {
  const { username, email, password, phone, firstName, lastName, age, city, role } = form;

  const validators = [
   validation.validateName(firstName, "First Name"),
   validation.validateName(lastName, "Last Name"),
   validation.validateAge(age),
   validation.validateCity(city),
   validation.validateUsername(username),
   validation.validateEmail(email),
   validation.validatePassword(password),
   validation.validatePhoneNumber(phone),
   validation.validateRole(role),
  ];

  const error = validators.find(v => v !== "");
  if (error) {
   return toast.warn(error);
  }
  try {
   console.log(phone);

   const data = new User(username, password, age, city, firstName, lastName, email, phone, role);
   const response = await register(data);
   if (response.data?.status === "success") {
    toast.success("Welcome! You can sign in now!");
    setTimeout(() => navigate("/sign-in"), 1500);
   }
  } catch (e) {
   if (e.response.data.message === "username existed") {
    toast.warn("This username is already in use");
   } else if (e.response.data.message === "contact.phone existed") {
    toast.warn("This mobile number is already in use");
   } else if (e.response.data.message === "contact.email existed") {
    toast.warn('This email is already in use');
   }
  }
 };

 return (
  <>
   <div className="container-page-auth">
    <div className="container">
     <h2 className="title-auth">Sign Up</h2>
     <form id="signupForm">
      <AuthInput field="First Name" name="firstName" value={form.firstName} onChange={handleChange} hint="Your first name" />
      <AuthInput field="Last Name" name="lastName" value={form.lastName} onChange={handleChange} hint="Your last name" />
      <AuthInput field="Age" name="age" type="number" value={form.age} min={0} max={90} onChange={handleChange} hint="Your age" />
      <label className="label-auth-field">City</label>
      <select
       name="city"
       className="auth-input"
       value={form.city}
       onChange={handleChange}
       required
      >
       <option value="">Select a city</option>
       {province.map((province, index) => (
        <option key={index} value={province.name || province}>
         {province.name || province}
        </option>
       ))}
      </select>
      <AuthInput field="Username" name="username" type="text" value={form.username} onChange={handleChange} hint="e.g. chinhchinh123@gmail.com" />
      <AuthInput field="Email" name="email" type="email" value={form.email} onChange={handleChange} hint="e.g. chinhchinh123@gmail.com" />
      <AuthInput field="Password" name="password" type="password" value={form.password} onChange={handleChange} hint="Your password" />
      <label className="label-auth-field">Mobile Number</label>
      <PhoneInput country={"vn"} value={form.phone} onChange={handlePhoneChange} className="number" style={{ marginBottom: "16px" }} />
      <AuthButton name="Sign Up" func={registerAccount} />
      <Link to="/sign-in" className="auth-link-page">Sign in to your account here</Link>
     </form>
    </div>
   </div>
   <Notification />
  </>
 );
};

export default SignUp;
