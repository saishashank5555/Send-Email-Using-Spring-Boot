const verifyOtp = async (email, otp) => {
  const response = await fetch(`http://localhost:8080/api/otp/verify?email=${email}&otp=${otp}`, {
    method: "POST",
  });
  if (response.ok) {
    alert("OTP verified");
  } else {
    alert("Invalid OTP");
  }
};
