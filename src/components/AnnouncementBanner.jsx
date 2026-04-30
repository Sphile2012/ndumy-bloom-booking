import { useState, useEffect } from "react";
import { ndumie } from "@/api/ndumieClient";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TYPE_STYLES = {
  info:    { banner: "bg-blue-50 border-blue-200 text-blue-900",    icon: "ℹ️" },
  warning: { banner: "bg-amber-50 border-amber-200 text-amber-900", icon: "⚠️" },
  success: { banner: "bg-green-50 border-green-200 text-green-900", icon: "✅" },
  promo:   { banner: "bg-pink-50 border-pink-200 text-pink-900",    icon: "🎉" },
};

export default function AnnouncementBanner() {
  const [announcements, setAnnouncements] = useState([]);
  const [dismissed, setDismissed] = useState([]);

  useEffect(() => {
    ndumie.entities.Announcement.list()
      .then(data => setAnnouncements(data))
      .catch(() => {});
  }, []);

  const visible = announcements.filter(a => !dismissed.includes(a.id));
  if (visible.length === 0) return null;

  return (
    <div className="w-full space-y-2 px-4 sm:px-6 pt-4">
      <AnimatePresence>
        {visible.map((a) => {
          const style = TYPE_STYLES[a.type] || TYPE_STYLES.info;
          return (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, height: 0, marginBottom: 0 }}
              className={`flex items-start justify-between gap-3 border rounded-2xl px-4 py-3 ${style.banner}`}
            >
              <div className="flex items-start gap-2">
                <span className="text-base shrink-0 mt-0.5">{style.icon}</span>
                <p className="text-sm leading-relaxed">{a.message}</p>
              </div>
              <button
                onClick={() => setDismissed(prev => [...prev, a.id])}
                className="shrink-0 mt-0.5 opacity-50 hover:opacity-100 transition-opacity"
                aria-label="Dismiss"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
