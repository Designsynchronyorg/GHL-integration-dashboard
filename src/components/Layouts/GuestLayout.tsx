"use client";
import React, { useState, ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import GuestHeader from "@/components/GuestHeader";
import Footer from "@/components/Footer";

export default function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex">
        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex min-h-screen flex-1 flex-col justify-between">
          <div className="relative flex flex-1 flex-col">
            {/* <!-- ===== Header Start ===== --> */}
            {/* <GuestHeader /> */}
            {/* <!-- ===== Header End ===== --> */}

            {/* <!-- ===== Main Content Start ===== --> */}
            <main>
              <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                {children}
              </div>
            </main>

            {/* <!-- ===== Main Content End ===== --> */}
          </div>

          {/* Footer */}
          <Footer />
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </>
  );
}
