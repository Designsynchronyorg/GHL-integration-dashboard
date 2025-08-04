"use client";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import useDashboardStates from './useDashboardStates';
import CardDataStats from "../CardDataStats";
import EyeIcon from "../Icons/EyeIcon";
import CartIcon from "../Icons/CartIcon";
import ShoppingBag from "../Icons/ShoppingBag";

// Define a mapping for icons
const iconMap = {
  'Budget': <EyeIcon />,
  'Visits': <EyeIcon />,
  'Leads': <CartIcon />,
  'Conversion': <ShoppingBag />,
  'Demo Booked': <CartIcon />,
  'Show Ups': <CartIcon />,
  'Sale': <CartIcon />,
  'Total Revenue': <CartIcon />,
  'CAC': <ShoppingBag />,
  'ROAS': <ShoppingBag />,
};

const ECommerce: React.FC = () => {
  const { cardData, visits } = useDashboardStates();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api', {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();

        // Assuming visits is a state object with a setValue method
        visits.setValue(data.report[0].views);
        visits.setPreviousValue(9);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [visits]);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {cardData.map((card, index) => (
          <CardDataStats
            key={index}
            title={card.title}
            subtitle={card.subtitle || ''} // Empty string if subtitle is not provided
            total={card.total}
            rate={card.rate}
            levelUp={card.levelUp}
          >
            {iconMap[card.title] || <EyeIcon />} {/* Default icon if not found */}
          </CardDataStats>
        ))}
      </div>
    </>
  );
};

export default ECommerce;
