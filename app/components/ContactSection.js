'use client';
import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import styles from './ContactSection.module.scss';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    service: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className={styles.contactSection}>
      <div className={styles.contactHeader}>
        <h1>Contact Us</h1>
      </div>
      <div className={styles.contactContent}>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                margin="normal"
              />
            </div>
            <div className={styles.formGroup}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                margin="normal"
              />
            </div>
            <div className={styles.formGroup}>
              <FormControl variant="outlined" fullWidth margin="normal" required>
                <InputLabel>Service</InputLabel>
                <Select
                  label="Service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <MenuItem value="Web Development">Web Development</MenuItem>
                  <MenuItem value="Frontend Development">Frontend Development</MenuItem>
                  <MenuItem value="Backend Development">Backend Development</MenuItem>
                  <MenuItem value="Open Source Integration">Open Source Integration</MenuItem>
                  <MenuItem value="Devops">Devops</MenuItem>
                  <MenuItem value="UI & UX">UI & UX</MenuItem>
                  <MenuItem value="QA Engineering">QA Engineering</MenuItem>
                  <MenuItem value="Project Management">Project Management</MenuItem>
                  <MenuItem value="Technical Support">Technical Support</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className={styles.formGroup}>
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                margin="normal"
                multiline
                rows={4}
              />
            </div>
            <Button type="submit" variant="contained" color="primary" className={styles.sendButton}>
              Send
            </Button>
          </form>
        </div>
        <div className={styles.contactDetails}>
          <h2>Contact Information</h2>
          <h3>Nesar Uddin</h3>
          <p><strong>Address:</strong> Block A, Dataran Prima Condominium<br />
            Petaling Jaya 47301<br />
            Selangor, Malaysia</p>
          <p><strong>Email:</strong> nesar.uddin100@gmail.com</p>
          <p><strong>Phone:</strong> +6 01 128 365140</p>
          <p><strong>Whatsapp:</strong> +6 01 128 365140</p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
