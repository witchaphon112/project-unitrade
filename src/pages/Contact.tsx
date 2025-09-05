import { useState, ChangeEvent, FormEvent } from 'react';

// กำหนดประเภทข้อมูลสำหรับฟอร์ม
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('ส่งข้อความเรียบร้อยแล้ว! เราจะติดต่อกลับคุณเร็วๆ นี้');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div style={styles.contactContainer}>
      <div style={styles.contactHeader}>
        <h1 style={styles.callme}>ติดต่อเรา</h1>
        <p>มีอะไรให้เราช่วยคุณได้บ้าง?</p>
        <p>หากคุณมีปัญหาเกี่ยวกับการซื้อขาย การใช้จ่ายระบบ หรืออยากเสนอพีเจอร์ใหม่<br />
        UniTrade ยินดีฟังและพร้อมให้ความช่วยเหลือเสมอ ผิดต่อเรามาได้เลย!</p>
      </div>

      <div style={styles.contactContent}>
        <div style={styles.contactMethods}>
          <div style={styles.contactCard}>
            <h2>โทรศัพท์</h2>
            <p>สอบถามข้อมูลเพิ่มเติม หรือติดต่อเจ้าหน้าที่</p>
            <div style={styles.phoneInfo}>
              <p style={styles.phoneNumber}>09x-xxx-xxxxx</p>
              <p>ให้บริการทุกวัน ตั้งแต่เวลา<br />9.00 - 17.00 น.</p>
            </div>
            <a href="tel:09xxxxxxxxx" style={styles.callButton}>โทรเลย</a>
          </div>

          <div style={styles.contactCard}>
            <h2>อีเมล</h2>
            <p>รายงานปัญหา</p>
            <p>ข้อเสนอแนะ</p>
            <form onSubmit={handleSubmit} style={styles.contactForm}>
              <input 
                type="text" 
                name="name" 
                placeholder="ชื่อของคุณ" 
                value={formData.name}
                onChange={handleChange}
                required 
                style={styles.input}
              />
              <input 
                type="email" 
                name="email" 
                placeholder="อีเมล" 
                value={formData.email}
                onChange={handleChange}
                required 
                style={styles.input}
              />
              <input 
                type="text" 
                name="subject" 
                placeholder="หัวข้อ" 
                value={formData.subject}
                onChange={handleChange}
                required 
                style={styles.input}
              />
              <textarea 
                name="message" 
                placeholder="ข้อความ" 
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required 
                style={styles.textarea}
              ></textarea>
              <button type="submit" style={styles.submitButton}>ส่งข้อความ</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// กำหนดสไตล์เป็น object
const styles = {
  contactContainer: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "'Noto Sans Thai', sans-serif",
    color: "#333"
  } as const,
  
  contactHeader: {
    textAlign: "center" as const,
    marginBottom: "40px"
  },
  callme:{
    fontSize: "2.5rem",
  },
  contactContent: {
    // สามารถเพิ่มสไตล์ได้ตามต้องการ
  },
  
  contactMethods: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "30px",
    justifyContent: "center" as const
  },
  
  contactCard: {
    flex: 1,
    minWidth: "300px",
    background: "white",
    borderRadius: "12px",
    padding: "25px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)"
  },
  
  phoneInfo: {
    margin: "20px 0"
  },
  
  phoneNumber: {
    fontSize: "1.4rem",
    fontWeight: "bold" as const,
    color: "#0066ff",
    marginBottom: "10px"
  },
  
  callButton: {
    display: "inline-block",
    background: "#0066ff",
    color: "white",
    padding: "12px 25px",
    borderRadius: "6px",
    textDecoration: "none" as const,
    fontWeight: "bold" as const,
    transition: "background 0.3s"
  },
  
  contactForm: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "15px",
    marginTop: "20px"
  },
  
  input: {
    padding: "12px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    fontSize: "1rem",
    fontFamily: "inherit"
  },
  
  textarea: {
    padding: "12px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    fontSize: "1rem",
    fontFamily: "inherit"
  },
  
  submitButton: {
    background: "#0066ff",
    color: "white",
    border: "none",
    padding: "12px",
    borderRadius: "6px",
    fontSize: "1rem",
    fontWeight: "bold" as const,
    cursor: "pointer" as const,
    transition: "background 0.3s"
  }
};

export default Contact;