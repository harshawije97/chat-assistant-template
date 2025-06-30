"use client";

import React from "react";
import ProfilePreview from "@/components/profile-preview";
import { History, LayoutDashboard, SquarePen, Workflow } from "lucide-react";

function SidebarPrimary() {
  return (
    <aside className="group peer md:block text-sidebar-foreground z-[40] shrink-0 w-[56px] h-svh hover:grow hover:w-64 hover:animate-in transition-all ease-in-out">
      <div className="flex flex-col gap-y-3 w-full h-full border-r-1">
        <div className="w-full h-full flex flex-col overflow-hidden">
          <div className="flex flex-col gap-2 mb-2 mt-1 pt-3 cursor-default">
            <div className="flex flex-row items-center start-1">
              <a
                aria-label="Home Page"
                href="#"
                className="ms-2 me-[0.5] rounded-lg focus:outline-none focus-visible:ring-1 focus-visible:ring-ring w-8 sm:w-auto"
              >
                Logo
              </a>
            </div>
          </div>
          <div className="flex min-h-0 flex-col overflow-auto group-data-[collapsible=icon]:overflow-hidden grow-0 relative scroll-bar">
            <ul className="relative flex w-full min-w-0 flex-col gap-y-1 px-1.5 py-[2px] shrink-0 my-3">
              <li className="relative mx-0.5">
                <a
                  href="#"
                  className="overflow-hidden flex items-center gap-3 p-2.5 text-sm w-full hover:bg-sidebar hover:rounded-lg"
                >
                  <span>
                    <SquarePen size={16} />
                  </span>
                  New Chat
                </a>
              </li>
              <li className="relative mx-0.5">
                <a
                  href="#"
                  className="overflow-hidden flex items-center gap-3 p-2.5 text-sm w-full hover:bg-sidebar hover:rounded-lg"
                >
                  <span>
                    <History size={16} />
                  </span>
                  History
                </a>
              </li>
              <li className="relative mx-0.5">
                <a
                  href="#"
                  className="overflow-hidden flex items-center gap-3 p-2.5 text-sm w-full hover:bg-sidebar hover:rounded-lg"
                >
                  <span>
                    <LayoutDashboard size={16} />
                  </span>
                  Dashboard
                </a>
              </li>
              <li className="relative mx-0.5">
                <a
                  href="#"
                  className="overflow-hidden flex items-center gap-3 p-2.5 text-sm w-full hover:bg-sidebar hover:rounded-lg"
                >
                  <span>
                    <Workflow size={16} />
                  </span>
                  Automate
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col flex-1 w-full h-full justify-end items-center">
            <ProfilePreview />
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SidebarPrimary;
