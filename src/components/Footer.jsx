import { FaFacebookF, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div
        style={{
          height: "1px",
          background: "#ccc",
          marginTop: "3rem",
        }}
      ></div>

      <footer
        id="about"
        style={{
          background: "#f0f2f5",
          color: "#111",
          padding: "4rem 2rem",
          textAlign: "center",
          direction: "rtl",
          width: "100%",
        }}
      >
        <h2 style={{ marginBottom: "2rem", color: "#0a3d62" }}>عن المكتب</h2>

        <p style={{ fontWeight: "bold", marginBottom: "1rem" }}>أرقامنا:</p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          {/* الرقم الأول */}
          <div
            style={{
              padding: "0.7rem 1rem",
              border: "2px solid #0a3d62",
              borderRadius: "8px",
              background: "#fff",
              direction: "ltr",
              fontWeight: "bold",
              minWidth: "250px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "0.5rem",
              color: "#0a3d62",
            }}
          >
            <a
              href="tel:+201126268611"
              style={{ color: "#0a3d62", textDecoration: "none", flexGrow: 1 }}
            >
              +20 112 626 8611
            </a>
            <a
              href="https://wa.me/201126268611"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#25D366", fontSize: "1.2rem" }}
            >
              <FaWhatsapp />
            </a>
          </div>

          {/* الرقم الثاني */}
          <div
            style={{
              padding: "0.7rem 1rem",
              border: "2px solid #0a3d62",
              borderRadius: "8px",
              background: "#fff",
              direction: "ltr",
              fontWeight: "bold",
              minWidth: "250px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "0.5rem",
              color: "#0a3d62",
            }}
          >
            <a
              href="tel:+201115315152"
              style={{ color: "#0a3d62", textDecoration: "none", flexGrow: 1 }}
            >
              +20 111 531 5152
            </a>
            <a
              href="https://wa.me/201115315152"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#25D366", fontSize: "1.2rem" }}
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* البريد الإلكتروني */}
        <p>
          <FaEnvelope style={{ marginLeft: "0.4rem" }} />
          البريد الإلكتروني:{" "}
          <a
            href="mailto:info@aanda.com"
            style={{ color: "#0a3d62", textDecoration: "none" }}
          >
            info@aanda.com
          </a>
        </p>

        {/* العنوان */}
        <p>
          <FaMapMarkerAlt style={{ marginLeft: "0.4rem" }} />
          العنوان:{" "}
          <a
            href="https://maps.app.goo.gl/ZcGXVbn6RJAcJH597?g_st=com.google.maps.preview.copy"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#0a3d62", textDecoration: "none" }}
          >
            103 برج الرياض - الهرم - أمام مستشفى الهرم - بجانب سفارة النيجر
          </a>
        </p>

        {/* فيسبوك */}
        <p>
          <FaFacebookF style={{ marginLeft: "0.4rem" }} />
          فيسبوك:{" "}
          <a
            href="https://www.facebook.com/people/AA-for-accounting-and-tax/100083656785387/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#0a3d62", textDecoration: "none" }}
          >
            A&A على فيسبوك
          </a>
        </p>

        {/* الحقوق */}
        <p
          style={{
            direction: "rtl",
            textAlign: "center",
            marginTop: "2rem",
            fontWeight: "bold",
            color: "#333",
          }}
        >
          © 2025 A&A
        </p>
      </footer>
    </>
  );
}
