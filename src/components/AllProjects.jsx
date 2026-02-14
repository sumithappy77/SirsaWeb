import "../style/home.css";
import { Link } from "react-router-dom";

export default function AllProjects() {
  return (
    <div className="projects-page">

      {/* FIXED BACK BUTTON */}
      <Link to="/" className="fixed-back-btn">
        ← Home
      </Link>

      <div className="section">
        <h1 className="page-title">All Our Projects</h1>

        <div className="project-card">
          <h3>Gym Website</h3>
          <p>Modern fitness website with membership system.</p>
          <div className="project-price">₹12,000</div>
        </div>

        <div className="project-card">
          <h3>Boutique Store</h3>
          <p>Fashion ecommerce website with payment integration.</p>
          <div className="project-price">₹18,000</div>
        </div>

        <div className="project-card">
          <h3>Coaching Institute</h3>
          <p>Admission form & student management website.</p>
          <div className="project-price">₹10,000</div>
        </div>

      </div>
    </div>
  );
}
