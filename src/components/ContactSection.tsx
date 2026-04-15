import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-24 bg-muted/40">
    <div className="max-w-4xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-8">
          Get in <span className="text-primary">Touch</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card rounded-2xl p-6 border flex items-start gap-4">
            <Mail className="w-6 h-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-muted-foreground text-sm">your.email@example.com</p>
            </div>
          </div>
          <div className="bg-card rounded-2xl p-6 border flex items-start gap-4">
            <MapPin className="w-6 h-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Location</h3>
              <p className="text-muted-foreground text-sm">South Africa</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
