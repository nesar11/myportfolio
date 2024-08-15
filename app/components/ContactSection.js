'use client';
import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import styles from './ContactSection.module.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

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
          <p><strong>Email:</strong>  <a href="mailto:nesar.uddin100@gmail.com">nesar.uddin100@gmail.com</a></p>
          <p><strong>Phone:</strong>  <a href="tel:+601128365140">+6 01 128 365140</a></p>
           <div className={styles.iconContainer}>
            <a href="https://www.linkedin.com/in/nesar-uddin-full-stack-developer-mern-stack/" target="_blank" rel="noopener noreferrer" className="linkedin">
              <LinkedInIcon fontSize="large" />
            </a>
            <a
              href="https://wa.me/601128365140?text=Hi%20I%20am%20from%20your%20portfolio%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp"
            >
              <WhatsAppIcon fontSize="large" />
            </a>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactSection;
