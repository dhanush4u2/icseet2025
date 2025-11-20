import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ICSEET-2025</h3>
            <p className="text-sm opacity-90">
              2nd International Conference on Sustainable Energy and Environmental Solutions
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="https://tinyurl.com/icseet-2025" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Registration
                </a>
              </li>
              <li>
                <a href="/schedule" className="hover:text-primary transition-colors">
                  Schedule
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm opacity-90">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91-8277049441</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:icseet-2025@reva.edu.in" className="hover:text-primary transition-colors">
                  icseet-2025@reva.edu.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>REVA University, Bangalore</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm opacity-75">
          <p>&copy; 2025 REVA University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
