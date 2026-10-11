import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#060F22] border-t border-white/10 pt-16 pb-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#D9A93A] text-[#060F22] font-bold flex items-center justify-center text-sm">
                R
              </div>
              <span className="text-lg font-bold text-white">REWAIQ</span>
            </div>
            <div className="text-xs font-bold text-[#D9A93A] tracking-widest uppercase mb-3">
              DISCOVER • EARN • INFLUENCE
            </div>
            <p className="text-xs leading-relaxed max-w-sm mb-4">
              Rewaiq connects young people, creators, students and businesses to opportunities to discover, participate, earn and grow.
            </p>
            <div className="text-[11px] text-slate-400">
              Rewaiq Technologies Ltd • RC: 9137882<br />
              Email: info@rewaiq.com.ng | rewaiqhub@rewaiq.com.ng
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Platform</h4>
            <ul className="space-y-2 text-xs">
              <li><Link className="hover:text-[#D9A93A]" href="/opportunities">Opportunities</Link></li>
              <li><Link className="hover:text-[#D9A93A]" href="/platform">Tasks & Campaigns</Link></li>
              <li><a href="https://app.rewaiq.com.ng" className="hover:text-[#D9A93A]">Web App</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Programs</h4>
            <ul className="space-y-2 text-xs">
              <li><Link className="hover:text-[#D9A93A]" href="/artists">Artists & Creators</Link></li>
              <li><Link className="hover:text-[#D9A93A]" href="/campus-ambassadors">Campus Ambassadors</Link></li>
              <li><Link className="hover:text-[#D9A93A]" href="/hub">Aba Innovation Hub</Link></li>
              <li><Link className="hover:text-[#D9A93A]" href="/partners">For Businesses</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2 text-xs">
              <li><Link className="hover:text-[#D9A93A]" href="/about">About Us</Link></li>
              <li><Link className="hover:text-[#D9A93A]" href="/contact">Contact</Link></li>
              <li><Link className="hover:text-[#D9A93A]" href="/privacy">Privacy Policy</Link></li>
              <li><Link className="hover:text-[#D9A93A]" href="/terms">Terms of Service</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px]">
          <div>&copy; {new Date().getFullYear()} Rewaiq Technologies Ltd. All rights reserved.</div>
          <div className="mt-4 sm:mt-0">rewaiq.com.ng</div>
        </div>
      </div>
    </footer>
  );
}