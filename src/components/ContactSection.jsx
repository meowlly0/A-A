import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    const text = `الاسم: ${name}%0Aالهاتف: ${phone}%0Aالشركة: ${company}%0Aالرسالة: ${message}`;
    const whatsappURL = `https://wa.me/201126268611?text=${text}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="section" id="contact" dir="rtl">
      <h2>تواصل معنا</h2>
      <form onSubmit={handleSend}>
        <input
          type="text"
          placeholder="الاسم"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="رقم الهاتف"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="اسم الشركة"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <textarea
          placeholder="الرسالة"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          required
        ></textarea>
        <button type="submit">إرسال</button>
      </form>
    </section>
  );
}
