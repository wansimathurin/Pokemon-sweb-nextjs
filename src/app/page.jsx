"use client";
import Navbar from "@/components/navbarComponent/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  return (
    <>
    <Navbar />
    <div className="bg-white h-screen flex items-center justify-center ">
      <h1 className="text-amber-600">hom page</h1>
    </div>
    </>
  );
}
