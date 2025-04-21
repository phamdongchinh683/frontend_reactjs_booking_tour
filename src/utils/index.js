export function getWithExpiry(key) {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  const now = new Date();
  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
}

export function setWithExpiry(key, value, ttl) {
  const now = new Date();

  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
}

export function validateUsername(username) {
  if (!username) return "Username is required";
  if (username.trim() !== username)
    return "Username must not have leading or trailing whitespace";
  if (username.length < 8)
    return "Username length must be at least 8 characters long";
  if (username.length > 30) return "The maximum length of a username is 30";
  return "";
}

export function validatePassword(password) {
  if (!password) return "Password is required";
  if (password.trim() !== password)
    return "Password must not have leading or trailing whitespace";
  if (password.length < 10)
    return "Password length must be at least 10 characters long";
  if (password.length > 60) return "The maximum length of a password is 60";
  return "";
}

export function validateName(name, label = "Name") {
  if (!name) return `${label} is required`;
  if (name.trim() !== name)
    return `${label} must not have leading or trailing whitespace`;
  if (name.length < 2) return `${label} must be at least 2 characters long`;
  if (name.length > 60) return `${label} cannot exceed 60 characters`;
  return "";
}

export function validateAge(age) {
  if (age === undefined || age === null) return "Age is required";
  if (isNaN(age)) return "Age must be a number";
  if (Number(age) < 10) return "Age must be at least 10";
  if (Number(age) >90) return "Age must be under 90 years old";

  return "";
}

export function validateCity(city) {
  if (!city) return "City is required";
  if (city.trim() !== city)
    return "City must not have leading or trailing whitespace";
  if (city.length < 2) return "City must be at least 2 characters long";
  if (city.length > 30) return "City cannot exceed 30 characters";
  return "";
}

export function validateEmail(email) {
  const emailRegex = /^[\w.-]+@[a-zA-Z\d-]+\.(com|edu|net|org|gov)$/;
  if (!email) return "Email is required";
  if (!emailRegex.test(email))
    return "Email must be a valid address ending in .com, .edu, .net, .org, or .gov";
  return "";
}

export function validatePhoneNumber(phone) {
  const phoneRegex = /^[0-9]{11,20}$/;
  if (!phone) return "Phone number is required";
  if (!phoneRegex.test(phone))
    return "Phone number must contain only digits and be 11–15 characters long";
  return "";
}

export function validateRole(role) {
  if (!role) return "Role is required";
  if (!["Traveler", "Guide"].includes(role))
    return "Role must be one of Traveler or Guide";
  return "";
}

export function validateGuideId(guideId) {
  if (!guideId) return "Guide is required";
  if (guideId.length < 8) return "Guide ID must be at least 8 characters long";
  if (guideId.length > 30) return "Guide ID cannot exceed 30 characters";
  return "";
}

export function validateNumberVisitor(num) {
  if (num === undefined || num === null)
    return "Number of visitors is required";
  if (isNaN(num)) return "Number of visitors must be a number";
  if (num < 1) return "Number of visitors must be at least 1";
  if (num > 60) return "Number of visitors cannot exceed 60";
  return "";
}

export function validateDateField(value, label = "Date") {
  if (!value) return `${label} is required`;
  return "";
}

export function validateStatus(status) {
  if (status !== 0 && status !== 1) return "Status must be either 0 or 1";
  return "";
}

export function validateCardNumber(cardNumber) {
  if (!cardNumber) return "Card number is required";
  if (cardNumber.length < 8)
    return "Card number must be at least 8 characters long";
  if (cardNumber.length > 30) return "Card number cannot exceed 30 characters";
  return "";
}

export function validateTotalAmount(amount) {
  if (amount === undefined || amount === null)
    return "Total amount is required";
  if (isNaN(amount)) return "Total amount must be a number";
  if (Number(amount) <= 0) return "Total amount must be a positive number";
  return "";
}
