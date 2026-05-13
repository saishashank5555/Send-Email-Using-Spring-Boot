import React, { useState } from 'react';

const OtpForm = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState('send'); // 'send' or 'verify'

  const sendOtp = async () => {
    const response = await fetch(`http://localhost:8080/api/otp/send?email=${email}`, {
      method: 'POST',
    });
    const message = await response.text();
    alert(message);
    setStep('verify');
  };

  const verifyOtp = async () => {
    const response = await fetch(`http://localhost:8080/api/otp/verify?email=${email}&otp=${otp}`, {
      method: 'POST',
    });
    if (response.ok) {
      alert("OTP verified successfully!");
    } else {
      alert("Invalid OTP.");
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Email OTP Verification</h2>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        disabled={step === 'verify'}
      />
      <button onClick={sendOtp} disabled={!email || step === 'verify'}>
        Send OTP
      </button>

      {step === 'verify' && (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={e => setOtp(e.target.value)}
          />
          <button onClick={verifyOtp} disabled={!otp}>
            Verify OTP
          </button>
        </>
      )}
    </div>
  );
};

export default OtpForm;
