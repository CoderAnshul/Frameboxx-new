import { Phone, Mail, MessageSquare, MapPin, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { C, FONTS } from "../theme";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative border-t py-12 sm:py-16"
      style={{
        backgroundColor: C.ink,
        borderColor: `${C.panelBorder}33`,
        fontFamily: "'Inter', sans-serif"
      }}
    >
      <style>{`
        ${FONTS}
        * { box-sizing: border-box; }
        
        .footer-link {
          color: ${C.slateLight};
          transition: all 0.3s ease;
        }
        .footer-link:hover {
          color: ${C.gold};
          padding-left: 4px;
        }
        
        .contact-pill {
          background-color: ${C.panel}33;
          border: 1px solid ${C.panelBorder}33;
          transition: all 0.3s ease;
        }
        .contact-pill:hover {
          border-color: ${C.gold}33;
          background-color: ${C.panel}66;
        }
      `}</style>

      {/* Decorative Glow */}
      <div 
        className="pointer-events-none absolute w-[400px] h-[400px] rounded-full" 
        style={{
          background: `radial-gradient(circle, ${C.gold}03 0%, transparent 70%)`,
          bottom: "0",
          right: "10%"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Logo & Branding */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Frameboxx Logo" 
                className="h-10 sm:h-12 w-auto object-contain" 
                
              />
            </div>
            <p className="text-xs sm:text-[13px] leading-relaxed" style={{ color: C.slateLight }}>
              Frameboxx 2.0 is a premier academy offering specialized industry-focused programs in Digital Marketing and AI Content Creation. Build real-world agency skills under guidance of industry mentors.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 
              className="text-xs font-bold uppercase tracking-wider mb-5" 
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: C.gold }}
            >
              Quick Navigation
            </h4>
            <ul className="flex flex-col gap-3 text-xs sm:text-[13px]">
              <li>
                <Link to="/" className="footer-link flex items-center gap-1.5">
                  <span>Digital Marketing Console</span>
                  <ArrowUpRight size={10} />
                </Link>
              </li>
              <li>
                <Link to="/ai" className="footer-link flex items-center gap-1.5">
                  <span>AI Content Creation Console</span>
                  <ArrowUpRight size={10} />
                </Link>
              </li>
              <li>
                <a href="#why" className="footer-link">Why Us</a>
              </li>
              <li>
                <a href="#gallery" className="footer-link">Student Gallery</a>
              </li>
              <li>
                <a href="#testimonials" className="footer-link">Testimonials</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Program Modules */}
          <div>
            <h4 
              className="text-xs font-bold uppercase tracking-wider mb-5" 
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#8B7AE5" }}
            >
              Curriculum Core
            </h4>
            <ul className="flex flex-col gap-3 text-xs sm:text-[13px] text-zinc-400">
              <li>• Search Engine Optimization (SEO)</li>
              <li>• Social Media & Brand Growth</li>
              <li>• Performance Marketing & PPC</li>
              <li>• AI-Assisted Copy & Graphics</li>
              <li>• Video Pipeline & Hook Optimization</li>
              <li>• Mobile Video Editing & Pacing</li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="flex flex-col gap-4">
            <h4 
              className="text-xs font-bold uppercase tracking-wider mb-2" 
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: C.gold }}
            >
              Direct Connect
            </h4>
            
            <a 
              href="tel:+919327024272"
              className="contact-pill p-3 rounded-xl flex items-center gap-3"
            >
              <Phone size={14} style={{ color: C.gold }} />
              <div className="flex flex-col text-xs">
                <span style={{ color: C.slateLight }}>CALL NOW</span>
                <span className="font-semibold" style={{ color: C.paper }}>+91 93270 24272</span>
              </div>
            </a>

            <a 
              href="https://wa.me/919327024272"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-pill p-3 rounded-xl flex items-center gap-3"
            >
              <MessageSquare size={14} style={{ color: "#8B7AE5" }} />
              <div className="flex flex-col text-xs">
                <span style={{ color: C.slateLight }}>WHATSAPP SUPPORT</span>
                <span className="font-semibold" style={{ color: C.paper }}>Chat with us</span>
              </div>
            </a>

            <a 
              href="mailto:info@frameboxx.in"
              className="contact-pill p-3 rounded-xl flex items-center gap-3"
            >
              <Mail size={14} style={{ color: C.gold }} />
              <div className="flex flex-col text-xs">
                <span style={{ color: C.slateLight }}>EMAIL INQUIRIES</span>
                <span className="font-semibold" style={{ color: C.paper }}>info@frameboxx.in</span>
              </div>
            </a>
          </div>

        </div>

        {/* Horizontal Divider */}
        <div className="h-px w-full my-6" style={{ backgroundColor: `${C.panelBorder}33` }} />

        {/* Footer Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-mono text-zinc-500">
          <div>
            <span>&copy; {currentYear} Frameboxx 2.0. All Rights Reserved.</span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>LIVE SERVER</span>
            </span>
            <span>MADE FOR INDUSTRY READY CREATIVES</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
