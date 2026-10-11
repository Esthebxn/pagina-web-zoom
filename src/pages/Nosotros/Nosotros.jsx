import React, { useState, useEffect } from "react";
import "./Nosotros.css";

// Imágenes locales (fallback)
import logoZoom from "../../assets/images/logoZoomtv.png";
import historiaImg from "../../assets/images/chatbot_logo.png";
import misionImg from "../../assets/images/profesional3.jpg";
import visionImg from "../../assets/images/profesional5.jpg";
import equipoCompletoImg from "../../assets/images/equipo.png";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

// Datos estáticos de respaldo
const nosotrosFallback = {
  nombre_empresa: "Zoom TV Canal 12",
  slogan: "Tu canal de confianza",
  historia: "Canal de televisión regional comprometido con la comunidad.",
  mision: "Informar, entretener y conectar a nuestra comunidad con contenido de calidad.",
  vision: "Ser el canal de referencia regional, innovando en contenidos y tecnología.",
  equipo: "Contamos con un equipo de profesionales apasionados por la comunicación.",
  email: "contacto@zoomtv.com",
  telefono: "+504 0000-0000",
};

const Nosotros = () => {
  const [nosotrosData, setNosotrosData] = useState(nosotrosFallback);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/nosotros`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setNosotrosData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.warn("No se pudo cargar nosotros desde la API, usando datos locales:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="nosotros-container" style={{ textAlign: "center", padding: "80px" }}>
        <p>Cargando...</p>
      </div>
    );
  }

  return (
    <div className="nosotros-container">
      <div className="nosotros-banner">
        <img src={logoZoom} alt={`Logo ${nosotrosData.nombre_empresa}`} className="logo-canal" />
        <h1>{nosotrosData.nombre_empresa}</h1>
        <p>{nosotrosData.slogan}</p>
      </div>

      <div className="nosotros-header">
        <h2>Conoce nuestro equipo y valores</h2>
        <p>Somos un equipo comprometido con la excelencia en la comunicación</p>
      </div>

      <div className="equipo-section">
        <h2>Nuestro Equipo</h2>
        <div className="equipo-completo">
          <img src={equipoCompletoImg} alt="Equipo completo de Zoom TV Canal 12" />
          <p>{nosotrosData.equipo || ""}</p>
        </div>
      </div>

      <div className="nosotros-sections">
        <div className="nosotros-section historia">
          <div className="section-image"><img src={historiaImg} alt="Historia del canal" /></div>
          <div className="section-content">
            <h2>Nuestra Historia</h2>
            {(nosotrosData.historia || "").split("\n").map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </div>
        </div>

        <div className="nosotros-section mision reverse">
          <div className="section-image"><img src={misionImg} alt="Misión de Zoom TV Canal 12" /></div>
          <div className="section-content"><h2>Nuestra Misión</h2><p>{nosotrosData.mision}</p></div>
        </div>

        <div className="nosotros-section vision">
          <div className="section-image"><img src={visionImg} alt="Visión de Zoom TV Canal 12" /></div>
          <div className="section-content"><h2>Nuestra Visión</h2><p>{nosotrosData.vision}</p></div>
        </div>
      </div>

      <div className="contacto-section">
        <p>Envíanos tu información a: <a href={`mailto:${nosotrosData.email}`}>{nosotrosData.email}</a></p>
        <p>O llámanos al: <a href={`tel:${nosotrosData.telefono}`}>{nosotrosData.telefono}</a></p>
      </div>
    </div>
  );
};

export default Nosotros;
