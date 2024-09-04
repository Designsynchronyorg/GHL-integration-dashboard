"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import ChartOne from "../Charts/ChartOne";
import ChartTwo from "../Charts/ChartTwo";
import ChatCard from "../Chat/ChatCard";
import TableOne from "../Tables/TableOne";
import CardDataStats from "../CardDataStats";
import EyeIcon from "../Icons/EyeIcon";
import CartIcon from "../Icons/CartIcon";
import ShoppingBag from "../Icons/ShoppingBag";

const MapOne = dynamic(() => import("@/components/Maps/MapOne"), {
  ssr: false,
});

const ChartThree = dynamic(() => import("@/components/Charts/ChartThree"), {
  ssr: false,
});

const ECommerce: React.FC = () => {
  // State for current week data
  const [visits, setVisits] = useState(97);
  const [leads, setLeads] = useState(48);
  const [conversion, setConversion] = useState(2.45);
  const [demos, setDemos] = useState(3.456);

  // State for last week data
  const [lastWeekVisits, setLastWeekVisits] = useState(90);
  const [lastWeekLeads, setLastWeekLeads] = useState(50);
  const [lastWeekConversion, setLastWeekConversion] = useState(2.35);
  const [lastWeekDemos, setLastWeekDemos] = useState(4.0);

  // Calculate the differences between this week and last week's data
  const visitRate = ((visits - lastWeekVisits) / lastWeekVisits) * 100;
  const leadRate = ((leads - lastWeekLeads) / lastWeekLeads) * 100;
  const conversionRate = ((conversion - lastWeekConversion) / lastWeekConversion) * 100;
  const demoRate = ((demos - lastWeekDemos) / lastWeekDemos) * 100;


  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Visits" total={visits} rate={`${visitRate.toFixed(2)}%`} levelUp={visitRate > 0}>
          <EyeIcon />
        </CardDataStats>
        <CardDataStats title="Leads" total={leads} rate={`${leadRate.toFixed(2)}%`} levelUp={leadRate > 0}>
          <CartIcon />
        </CardDataStats>
        <CardDataStats title="Conversion" subtitle="Leads/Visits" total={`${conversion.toFixed(3)}%`} rate={`${conversionRate.toFixed(2)}%`} levelUp={conversionRate > 0}
        >
          <ShoppingBag />
        </CardDataStats>
        <CardDataStats title="Demo Booked" total={leads} rate={`${leadRate.toFixed(2)}%`} levelUp={leadRate > 0}>
          <CartIcon />
        </CardDataStats>
        <CardDataStats title="Conversion" subtitle="Demo Booked/Leads" total={`${conversion.toFixed(3)}%`} rate={`${conversionRate.toFixed(2)}%`} levelUp={conversionRate > 0}
        >
          <ShoppingBag />
        </CardDataStats>
        <CardDataStats title="Show Ups" total={leads} rate={`${leadRate.toFixed(2)}%`} levelUp={leadRate > 0}>
          <CartIcon />
        </CardDataStats>
        <CardDataStats title="Conversion" subtitle="Show ups/Demo Booked" total={`${conversion.toFixed(3)}%`} rate={`${conversionRate.toFixed(2)}%`} levelUp={conversionRate > 0}
        >
          <ShoppingBag />
        </CardDataStats>
        <CardDataStats title="Sale" total={leads} rate={`${leadRate.toFixed(2)}%`} levelUp={leadRate > 0}>
          <CartIcon />
        </CardDataStats>
        <CardDataStats title="Conversion" subtitle="Sale/SQL" total={`${conversion.toFixed(3)}%`} rate={`${conversionRate.toFixed(2)}%`} levelUp={conversionRate > 0}
        >
          <ShoppingBag />
        </CardDataStats>
        <CardDataStats title="Total Revenue" total={leads} rate={`${leadRate.toFixed(2)}%`} levelUp={leadRate > 0}>
          <CartIcon />
        </CardDataStats>
        <CardDataStats title="CAC" subtitle="Budget/Sale" total={`${conversion.toFixed(3)}%`} rate={`${conversionRate.toFixed(2)}%`} levelUp={conversionRate > 0}
        >
          <ShoppingBag />
        </CardDataStats>
        <CardDataStats title="ROAS" subtitle="Total Revenue/Budget" total={`${conversion.toFixed(3)}%`} rate={`${conversionRate.toFixed(2)}%`} levelUp={conversionRate > 0}
        >
          <ShoppingBag />
        </CardDataStats>
      </div>

      {/* Charts */}
      {/* <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <MapOne />
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard />
      </div> */}
    </>
  );
};

export default ECommerce;
