import { useState, useEffect } from "react";
import { Mail, MessageCircle, Phone, ExternalLink, ChevronDown, Menu, X } from "lucide-react";
import "../style/home.css";
import { Link } from "react-router-dom";

const translations = {
  en: {
    heroTitle: "Professional Websites for Sirsa Businesses – Starting at ₹4,999",
    heroSub: "Get a custom website or landing page to grow your business online",
    projectsTitle: "Our Completed Projects",
    contactTitle: "Get In Touch",
    sendBtn: "Send Message Now",
    navBtn: "Get Free Quote",
    countdownText: "Limited Time Offer Ends In:",
    viewDetails: "View Details",
    viewMore: "View More Projects →",
    name: "Name",
    email: "Email",
    phone: "Phone",
    message: "Message",
    footer: "© 2026 Sirsa Business Solutions",
    promoTitle: "Sirsa Special Showcase 🌆",
    promoText: "This is a demo website we created for a popular place in Sirsa. Your business website could look like this too!",
    promoView: "View Now",
    promoClose: "Close"
  },

  hi: {
    heroTitle: "सिरसा के बिज़नेस के लिए प्रोफेशनल वेबसाइट – ₹4,999 से शुरू",
    heroSub: "सीमित समय के लिए खास ऑफर – अभी अपनी वेबसाइट बनवाकर अपने ग्राहक बढ़ाएं",
    projectsTitle: "हमारे पूरे किए गए प्रोजेक्ट",
    contactTitle: "हमसे संपर्क करें",
    sendBtn: "अभी संदेश भेजें",
    navBtn: "फ्री कोटेशन पाएं",
    countdownText: "सीमित समय का ऑफर समाप्त होगा:",
    viewDetails: "विवरण देखें",
    viewMore: "और प्रोजेक्ट देखें →",
    name: "नाम",
    email: "ईमेल",
    phone: "फ़ोन",
    message: "संदेश",
    footer: "© 2026 सिरसा बिज़नेस सॉल्यूशंस",
    promoTitle: "सिरसा स्पेशल शोकेस 🌆",
    promoText: "यह एक डेमो वेबसाइट है जो हमने सिरसा की एक लोकप्रिय जगह के लिए बनाई है। आपका बिज़नेस भी ऐसा दिख सकता है।",
    promoView: "अभी देखें",
    promoClose: "बंद करें"
  },

  pa: {
    heroTitle: "ਸਿਰਸਾ ਦੇ ਬਿਜ਼ਨਸ ਲਈ ਪ੍ਰੋਫੈਸ਼ਨਲ ਵੈਬਸਾਈਟ – ₹4,999 ਤੋਂ ਸ਼ੁਰੂ",
    heroSub: "ਸੀਮਿਤ ਸਮੇਂ ਲਈ ਖਾਸ ਆਫਰ – ਆਪਣਾ ਬਿਜ਼ਨਸ ਆਨਲਾਈਨ ਲਿਆਓ ਅਤੇ ਗਾਹਕ ਵਧਾਓ",
    projectsTitle: "ਅਸੀਂ ਬਣਾਏ ਹੋਏ ਪ੍ਰੋਜੈਕਟ",
    contactTitle: "ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",
    sendBtn: "ਹੁਣੇ ਮੈਸੇਜ ਭੇਜੋ",
    navBtn: "ਮੁਫ਼ਤ ਕੋਟੇਸ਼ਨ ਲਵੋ",
    countdownText: "ਸੀਮਿਤ ਸਮੇਂ ਦੀ ਆਫਰ ਖਤਮ ਹੋਵੇਗੀ:",
    viewDetails: "ਵੇਰਵਾ ਵੇਖੋ",
    viewMore: "ਹੋਰ ਪ੍ਰੋਜੈਕਟ ਵੇਖੋ →",
    name: "ਨਾਮ",
    email: "ਈਮੇਲ",
    phone: "ਫ਼ੋਨ",
    message: "ਸੰਦੇਸ਼",
    footer: "© 2026 ਸਿਰਸਾ ਬਿਜ਼ਨਸ ਸੋਲੂਸ਼ਨਜ਼",
    promoTitle: "ਸਿਰਸਾ ਸਪੈਸ਼ਲ ਸ਼ੋਕੇਸ 🌆",
    promoText: "ਇਹ ਇੱਕ ਡੈਮੋ ਵੈਬਸਾਈਟ ਹੈ ਜੋ ਅਸੀਂ ਸਿਰਸਾ ਦੀ ਇੱਕ ਮਸ਼ਹੂਰ ਜਗ੍ਹਾ ਲਈ ਬਣਾਈ ਹੈ। ਤੁਹਾਡਾ ਬਿਜ਼ਨਸ ਵੀ ਇਸ ਤਰ੍ਹਾਂ ਲੱਗ ਸਕਦਾ ਹੈ।",
    promoView: "ਹੁਣੇ ਵੇਖੋ",
    promoClose: "ਬੰਦ ਕਰੋ"
  }
};

const projects = [
  {
    id: 1,
    title: "E-Commerce Store",
    description: "Complete online store with payment integration.",
    price: "₹15,000 - ₹25,000",
    features: ["Product Catalog", "Shopping Cart", "Payment Gateway", "Admin Panel"],
    image: "https://cdn.dribbble.com/userupload/16803370/file/original-9d0ad2f5ea74000deeedfdb97b49fa10.png?resize=400x0",
  },
  {
    id: 2,
    title: "Business Portfolio",
    description: "Professional portfolio website.",
    price: "₹8,000 - ₹12,000",
    features: ["Responsive Design", "Gallery", "Contact Form", "SEO"],
    image: "https://realtytech.com/wp-content/uploads/2019/08/affordable_real_estate_websites-min.png",
  },
  {
    id: 3,
    title: "Restaurant Website",
    description: "Modern restaurant website.",
    price: "₹12,000 - ₹20,000",
    features: ["Menu", "Booking", "Online Orders", "Map"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500",
  },
];

export default function Home() {

  const [language, setLanguage] = useState("en");
  const [expandedProject, setExpandedProject] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(3 * 24 * 60 * 60);
  const [showPromo, setShowPromo] = useState(false);

  const t = translations[language];

  useEffect(() => {
    const promoShown = localStorage.getItem("promoShown");
    if (!promoShown) {
      const timer = setTimeout(() => setShowPromo(true), 7000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(timeLeft / 86400);
  const hours = Math.floor((timeLeft % 86400) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">

          <div className="logo">
            Sirsa<span>Web</span>
          </div>

          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>{t.projectsTitle}</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>{t.contactTitle}</a></li>
            <li>
              <a
                href="https://wa.me/917206881771"
                target="_blank"
                rel="noreferrer"
                className="nav-btn"
              >
                {t.navBtn}
              </a>
            </li>
          </ul>

          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={26}/> : <Menu size={26}/>}
          </div>

        </div>
      </nav>

      {/* LANGUAGE SWITCH */}
      <div className="lang-switch">
        <button onClick={() => setLanguage("en")}>EN</button>
        <button onClick={() => setLanguage("hi")}>हिंदी</button>
        <button onClick={() => setLanguage("pa")}>ਪੰਜਾਬੀ</button>
      </div>

      {/* HERO */}
      <section className="hero">
        <h1>{t.heroTitle}</h1>
        <p>{t.heroSub}</p>

        <div className="countdown">
          ⏳ {t.countdownText}
          <div className="time-box">
            {days}d : {hours}h : {minutes}m : {seconds}s
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2 style={{ textAlign: "center" }}>{t.projectsTitle}</h2>

        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() =>
              setExpandedProject(expandedProject === project.id ? null : project.id)
            }
          >
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-price">{project.price}</div>

            {expandedProject === project.id && (
              <div>
                <ul className="project-features">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                <button className="btn">
                  <ExternalLink size={16} style={{ marginRight: "5px" }} />
                  {t.viewDetails}
                </button>
              </div>
            )}

            {expandedProject !== project.id && (
              <div style={{ textAlign: "center", marginTop: "10px" }}>
                <ChevronDown />
              </div>
            )}
          </div>
        ))}

        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <Link to="/projects" className="btn">
            {t.viewMore}
          </Link>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <h2 style={{ textAlign: "center" }}>{t.contactTitle}</h2>

        <div className="contact-info">
          <p><MessageCircle size={18}/> WhatsApp: +91 7206881771</p>
          <p><Mail size={18}/> Email: contact@sirsabusiness.com</p>
          <p><Phone size={18}/> Phone: +91 7206881771</p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <input name="name" placeholder={t.name} value={formData.name} onChange={handleChange} required />
          <input name="email" placeholder={t.email} value={formData.email} onChange={handleChange} required />
          <input name="phone" placeholder={t.phone} value={formData.phone} onChange={handleChange} required />
          <textarea name="message" placeholder={t.message} value={formData.message} onChange={handleChange} required />
          <button type="submit" className="btn">
            {submitted ? "✔ Done" : t.sendBtn}
          </button>
        </form>
      </section>

      <footer className="footer">
        {t.footer}
      </footer>

      {showPromo && (
        <div className="promo-overlay">
          <div className="promo-box">
            <h3>{t.promoTitle}</h3>
            <p>{t.promoText}</p>

            <div className="promo-buttons">
              <a
                href="/sirsa-demo"
                className="btn"
                onClick={() => localStorage.setItem("promoShown", "true")}
              >
                {t.promoView}
              </a>

              <button
                className="btn secondary-btn"
                onClick={() => {
                  setShowPromo(false);
                  localStorage.setItem("promoShown", "true");
                }}
              >
                {t.promoClose}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
