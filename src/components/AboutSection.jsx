import { aboutImage } from "@/lib/images";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Award } from "lucide-react";

const values = [
  { icon: Sparkles, label: "Precision", desc: "Every set is crafted with care and attention to detail." },
  { icon: Heart, label: "Passion", desc: "We love what we do — and it shows in every client." },
  { icon: Award, label: "Quality", desc: "Only premium products used on every single service." },
];

export default function AboutSection() {
  return (
    <section className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
              <img
                src={aboutImage}
                alt="Bloom Skills & Beauty — our work"
                loading="lazy"
                decoding="async"
                className="w-full h-[480px] object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-xl border border-border/50 text-center">
              <p className="font-heading text-4xl font-black text-primary">100%</p>
              <p className="text-xs text-muted-foreground mt-1">Client Satisfaction</p>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">Our Story</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Where Beauty Meets Skill
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Bloom Skills & Beauty was born from a deep love for nail art and a passion for empowering women through beauty. Based at Sangro House in Durban, we offer a warm, professional salon experience that goes beyond just nails.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether you're coming in for a fresh set or you're ready to start your own career through our beginner nail course — you're in the right place.
            </p>

            <div className="space-y-4 mb-10">
              {values.map((v) => (
                <div key={v.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <v.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{v.label}</p>
                    <p className="text-sm text-muted-foreground">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/book">
              <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20">
                Book With Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}