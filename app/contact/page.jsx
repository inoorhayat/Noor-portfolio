"use client";

import React, { useRef, useState, useEffect } from "react";
import emailjs from 'emailjs-com';
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Magnetic from "../../common/magnetic";
import Rounded from "../../common/roundedbutton";
import styles from "./stylecontact.module.scss";

// Custom SVG icons to replace lucide-react dependency
const Icons = {
  Send: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9L22 2"/>
    </svg>
  ),
  Mail: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  ),
  Phone: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  MapPin: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size || "20"} height={props.size || "20"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  Copy: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
    </svg>
  ),
  Check: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5"/>
    </svg>
  )
};

const Contact = () => {
  const container = useRef(null);
  const formRef = useRef(null); // Add a ref for the form
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [copied, setCopied] = useState({
    email: false,
    phone: false,
  });
  const [isSending, setIsSending] = useState(false); // Add loading state
  const [error, setError] = useState(null); // Add error state

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('xLd_4BeMb0ic_35i4');
  }, []);

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const springConfig = { stiffness: 100, damping: 15 };
  const ySpring = useSpring(useTransform(scrollYProgress, [0, 1], [-300, 0]), springConfig);
  const opacitySpring = useSpring(useTransform(scrollYProgress, [0, 0.3], [0, 1]), springConfig);

  // Contact information
  const contactInfo = {
    email: "hayat.noor2004@gmail.com",
    phone: "+91 8882840674",
    location: "New Delhi, India",
    availability: "Mon - Fri, 9am - 10pm",
  };

  // Copy to clipboard function
  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(prev => ({ ...prev, [type]: true }));
    setTimeout(() => setCopied(prev => ({ ...prev, [type]: false })), 2000);
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setError(null);

    try {
      const result = await emailjs.sendForm(
        'service_04a2x29', // Your EmailJS Service ID
        'template_iw37yop', // Your EmailJS Template ID
        formRef.current, // Using the form ref
        'xLd_4BeMb0ic_35i4' // Your EmailJS User ID
      );

      console.log('Success:', result.text);
      setMessageSent(true);

      // Clear form fields
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setMessageSent(false), 5000);
    } catch (err) {
      console.error('Failed:', err);
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsSending(false);
    }
  };

  // Social media profiles
  const socialProfiles = [
    { name: "GitHub", url: "https://github.com/inoorhayat" },
    { name: "LinkedIn", url: "https://linkedin.com/in/inoorhayat" },
    { name: "Twitter", url: "https://twitter.com/inoorhayat" },
    { name: "Instagram", url: "https://instagram.com/inoorhayat" },
  ];

  return (
    <motion.div
      ref={container}
      className={styles.contact}
      style={{ y: ySpring, opacity: opacitySpring }}
    >
      <div className={styles.gradientOrbs}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
      </div>

      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1>
            Get In <span>Touch</span>
          </h1>
          <motion.div
            className={styles.headerUnderline}
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />
          <p>Let's work together on your next project</p>
        </motion.div>

        <div className={styles.contentWrapper}>
          <motion.div
            className={styles.contactInfo}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.infoCard}>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Contact Information
              </motion.h2>

              <motion.div
                className={styles.infoItem}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Icons.Mail />
                <p>{contactInfo.email}</p>
                <button
                  onClick={() => copyToClipboard(contactInfo.email, "email")}
                  aria-label="Copy email"
                >
                  {copied.email ? (
                    <Icons.Check className={styles.copyIcon} />
                  ) : (
                    <Icons.Copy className={styles.copyIcon} />
                  )}
                </button>
              </motion.div>

              <motion.div
                className={styles.infoItem}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Icons.Phone />
                <p>{contactInfo.phone}</p>
                <button
                  onClick={() => copyToClipboard(contactInfo.phone, "phone")}
                  aria-label="Copy phone"
                >
                  {copied.phone ? (
                    <Icons.Check className={styles.copyIcon} />
                  ) : (
                    <Icons.Copy className={styles.copyIcon} />
                  )}
                </button>
              </motion.div>

              <motion.div
                className={styles.infoItem}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Icons.MapPin />
                <p>{contactInfo.location}</p>
              </motion.div>

              <motion.div
                className={styles.availabilityBadge}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <div className={styles.statusDot} />
                <p>Available: {contactInfo.availability}</p>
              </motion.div>

              <motion.div
                className={styles.socialLinks}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <h3>Connect with me</h3>
                <div className={styles.socialGrid}>
                  {socialProfiles.map((profile, index) => (
                    <Magnetic key={profile.name}>
                      <motion.a
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialButton}
                        whileHover={{ 
                          scale: 1.08, 
                          backgroundColor: "#334BD3",
                          color: "#ffffff" 
                        }}
                        transition={{ duration: 0.3 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.8 + (index * 0.1) }}
                      >
                        {profile.name}
                      </motion.a>
                    </Magnetic>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className={styles.contactForm}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className={styles.formContainer}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >

              <h2>Send a Message</h2>

              {messageSent ? (
                <motion.div 
                  className={styles.successMessage}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icons.Check size={30} />
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. I'll get back to you shortly.</p>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                    <motion.div
                      className={styles.inputContainer}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <label htmlFor="name">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </motion.div>

                    <motion.div
                      className={styles.inputContainer}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                    >
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    className={styles.inputContainer}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </motion.div>

                  <motion.div
                    className={styles.inputContainer}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </motion.div>

                  <motion.div
                    className={styles.submitContainer}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  >
                    <Magnetic>
                      <Rounded backgroundColor={"#334BD3"} hoverColor={"#4c68ff"}>
                        <button type="submit" className={styles.submitButton} disabled={isSending}>
                          <span>{isSending ? 'Sending...' : 'Send Message'}</span>
                          {!isSending && <Icons.Send />}
                        </button>
                      </Rounded>
                    </Magnetic>
                  </motion.div>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className={styles.mapContainer}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2>Find Me</h2>
          <div className={styles.map}>
            {/* This would be replaced with an actual map component */}
            <div className={styles.mapPlaceholder}>
              <Icons.MapPin size={40} />
              <motion.div 
                className={styles.locationRing}
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 0, 0.6]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className={styles.locationRing}
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 0, 0.6]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              <p>New Delhi, India</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
