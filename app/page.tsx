"use client";
import HomePage from "../pages/homePage/index";
import {LanguageProv} from "@/contexts/LanguageContext";
import ChatGpt from "@/components/ui/chatGpt";
import React from "react";

export default function Home() {

  return (
      <div className={"app-container"}>
        <HomePage/>
        <ChatGpt/>
      </div>
  )
}
