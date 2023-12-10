"use client";
import HomePage from "@/pages/bulgaria/index";
import {LanguageProv} from "@/contexts/LanguageContext";
import ChatGpt from "@/components/ui/chatGpt";
import React from "react";
import AboutProject from "../pages/homePage";

export default function Home() {

  return (
      <div className={"app-container"}>
        <AboutProject/>
        <ChatGpt/>
      </div>
  )
}
