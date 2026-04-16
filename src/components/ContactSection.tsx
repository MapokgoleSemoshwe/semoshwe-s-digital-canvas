import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
    toast({ title: "Opening email client…", description: "Your message will be sent via your default email app." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-muted/40">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8">
            Get in <span className="text-primary">Touch</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Left – contact info */}
            <div className="flex flex-col gap-4">
              <div className="bg-card rounded-xl p-5 border flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground text-sm">smapokgole17@gmail.com</p>
                </div>
              </div>
              <div className="bg-card rounded-xl p-5 border flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground text-sm">Cape Town, Western Cape,South Africa</p>
                </div>
              </div>
              <div className="bg-card rounded-xl p-5 border flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-muted-foreground text-sm">+27 72 120 0228</p>
                </div>
              </div>
            </div>

            {/* Right – form */}
            <form onSubmit={handleSubmit} className="bg-card rounded-xl border p-6 flex flex-col gap-4">
              <Input
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
              <Textarea
                placeholder="Your Message"
                className="min-h-[120px]"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
