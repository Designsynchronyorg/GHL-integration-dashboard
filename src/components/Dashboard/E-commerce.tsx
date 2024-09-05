"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import ChartOne from "../Charts/ChartOne";
import ChartTwo from "../Charts/ChartTwo";
import ChatCard from "../Chat/ChatCard";
import TableOne from "../Tables/TableOne";
import CardDataStats from "../CardDataStats";
import EyeIcon from "../Icons/EyeIcon";
import CartIcon from "../Icons/CartIcon";
import ShoppingBag from "../Icons/ShoppingBag";
import useDashboardStates from './useDashboardStates';
import useAnimatedNumber from "../AnimatedNumber/useAnimatedNumber";

const MapOne = dynamic(() => import("@/components/Maps/MapOne"), {
  ssr: false,
});

const ChartThree = dynamic(() => import("@/components/Charts/ChartThree"), {
  ssr: false,
});

const ECommerce: React.FC = () => {
  const dashboardStates = useDashboardStates();
  useAnimatedNumber(dashboardStates.budget, dashboardStates.setBudget, 2000);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {/* Budget Card */}
        <CardDataStats title="Budget" total={dashboardStates.budget} rate={`${dashboardStates.budgetRate}%`} levelUp={dashboardStates.budgetRate > 0}>
          <EyeIcon />
        </CardDataStats>

        {/* Visits Card */}
        <CardDataStats title="Visits" total={dashboardStates.visits} rate={dashboardStates.visitRateString} levelUp={dashboardStates.levelUpVisits}>
          <EyeIcon />
        </CardDataStats>

        {/* Leads Card */}
        <CardDataStats title="Leads" total={dashboardStates.leads} rate={dashboardStates.leadsRateString} levelUp={dashboardStates.levelUpLeads}>
          <CartIcon />
        </CardDataStats>

        {/* Conversion Card */}
        <CardDataStats title="Conversion" subtitle="Leads/Visits" total={dashboardStates.leadsVisitsCv} rate={dashboardStates.leadsVisitsCvRateString} levelUp={dashboardStates.levelUpLeadsVisitsCv}
        >
          <ShoppingBag />
        </CardDataStats>

        {/* Demo Booked */}
        <CardDataStats title="Demo Booked" total={dashboardStates.demoBooked} rate={dashboardStates.demoBookedRateString} levelUp={dashboardStates.levelUpDemoBooked}>
          <CartIcon />
        </CardDataStats>

        {/* Demo/Leads CV */}
        <CardDataStats title="Conversion" subtitle="Demo Booked/Leads" total={dashboardStates.demoBookedLeadsCv} rate={dashboardStates.demoBookedLeadsCvRateString} levelUp={dashboardStates.levelUpDemoBookedLeadsCv}
        >
          <ShoppingBag />
        </CardDataStats>

        {/* Show ups */}
        <CardDataStats title="Show Ups" total={dashboardStates.showUps} rate={dashboardStates.showUpsRateString} levelUp={dashboardStates.levelUpShowUps}>
          <CartIcon />
        </CardDataStats>

        {/* Show ups/Demo Booked CV */}
        <CardDataStats title="Conversion" subtitle="Show ups/Demo Booked" total={dashboardStates.showUpsDemoBookedCv} rate={dashboardStates.showUpsDemoBookedCvRateString} levelUp={dashboardStates.levelUpShowUpsDemoBookedCv}
        >
          <ShoppingBag />
        </CardDataStats>

        {/* Sale */}
        <CardDataStats title="Sale" total={dashboardStates.sale} rate={dashboardStates.saleRateString} levelUp={dashboardStates.levelUpSale}>
          <CartIcon />
        </CardDataStats>

        {/* Sale/SQL(Show Ups) CV */}
        <CardDataStats title="Conversion" subtitle="Sale/SQL" total={dashboardStates.saleShowUpCv} rate={dashboardStates.saleShowUpCvRateString} levelUp={dashboardStates.levelUpSaleShowUpCv}
        >
          <ShoppingBag />
        </CardDataStats>

        {/* Total Revenue */}
        <CardDataStats title="Total Revenue" total={dashboardStates.totalRevenue} rate={dashboardStates.totalRevenueRateString} levelUp={dashboardStates.levelUpTotalRevenue}>
          <CartIcon />
        </CardDataStats>

        {/* CAC Card */}
        <CardDataStats title="CAC" subtitle="Budget/Sale" total={dashboardStates.cac} rate={dashboardStates.cacRateString} levelUp={dashboardStates.levelUpCac}
        >
          <ShoppingBag />
        </CardDataStats>

        {/* ROAS */}
        <CardDataStats title="ROAS" subtitle="Total Revenue/Budget" total={dashboardStates.roas} rate={dashboardStates.roasRateString} levelUp={dashboardStates.levelUpRoas}
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
