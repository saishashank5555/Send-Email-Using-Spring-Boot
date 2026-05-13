const sendOtp = async (email) => {
  const response = await fetch("http://localhost:8080/api/otp/send?email=" + email, {
    method: "POST",
  });
  const data = await response.text();
  alert(data);
};
