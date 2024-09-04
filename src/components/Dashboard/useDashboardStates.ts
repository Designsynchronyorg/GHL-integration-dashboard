import { useState, useEffect } from 'react';

const useDashboardStates = () => {
    // Budget
    const [budget, setBudget] = useState(0);
    const [previousBudget, setPreviousBudget] = useState(0);
    const [budgetRate, setBudgetRate] = useState(0);
    const [budgetRateString, setBudgetRateString] = useState('0%');
    const [levelUpBudget, setLevelUpBudget] = useState(false);

    // Visits
    const [visits, setVisits] = useState(0);
    const [previousVisits, setPreviousVisits] = useState(0);
    const [visitRate, setVisitRate] = useState(0);
    const [visitRateString, setVisitRateString] = useState('0%');
    const [levelUpVisits, setLevelUpVisits] = useState(false);

    // Leads
    const [leads, setLeads] = useState(0);
    const [previousLeads, setPreviousLeads] = useState(0);
    const [leadsRate, setLeadsRate] = useState(0);
    const [leadsRateString, setLeadsRateString] = useState('0%');
    const [levelUpLeads, setLevelUpLeads] = useState(false);

    // Conversion (Leads/Visits)
    const [leadsVisitsCv, setLeadsVisitsCv] = useState(0);
    const [previousLeadsVisitsCv, setPreviousLeadsVisitsCv] = useState(0);
    const [leadsVisitsCvRate, setLeadsVisitsCvRate] = useState(0);
    const [leadsVisitsCvRateString, setLeadsVisitsCvRateString] = useState('0%');
    const [levelUpLeadsVisitsCv, setLevelUpLeadsVisitsCv] = useState(false);

    // Conversion (Demo Booked/Leads)
    const [demoBooked, setDemoBooked] = useState(0);
    const [demoBookedRate, setDemoBookedRate] = useState(0);
    const [demoBookedRateString, setDemoBookedRateString] = useState('0%');
    const [levelUpDemoBooked, setLevelUpDemoBooked] = useState(false);
    const [previousDemoBooked, setPreviousDemoBooked] = useState(0);
    const [demoBookedLeadsCv, setDemoBookedLeadsCv] = useState(0);
    const [previousDemoBookedLeadsCv, setPreviousDemoBookedLeadsCv] = useState(0);
    const [demoBookedLeadsCvRate, setDemoBookedLeadsCvRate] = useState(0);
    const [demoBookedLeadsCvRateString, setDemoBookedLeadsCvRateString] = useState('0%');
    const [levelUpDemoBookedLeadsCv, setLevelUpDemoBookedLeadsCv] = useState(false);

    // Conversion (Show ups/Demo Booked)
    const [showUps, setShowUps] = useState(0);
    const [showUpsRate, setShowUpsRate] = useState(0);
    const [showUpsRateString, setShowUpsRateString] = useState('0%');
    const [levelUpShowUps, setLevelUpShowUps] = useState(false);
    const [previousShowUps, setPreviousShowUps] = useState(0);
    const [showUpsDemoBookedCv, setShowUpsDemoBookedCv] = useState(0);
    const [previousShowUpsDemoBookedCv, setPreviousShowUpsDemoBookedCv] = useState(0);
    const [showUpsDemoBookedCvRate, setShowUpsDemoBookedCvRate] = useState(0);
    const [showUpsDemoBookedCvRateString, setShowUpsDemoBookedCvRateString] = useState('0%');
    const [levelUpShowUpsDemoBookedCv, setLevelUpShowUpsDemoBookedCv] = useState(false);

    // Conversion (Sale/SQL)
    const [sale, setSale] = useState(0);
    const [saleRate, setSaleRate] = useState(0);
    const [saleRateString, setSaleRateString] = useState('0%');
    const [levelUpSale, setLevelUpSale] = useState(false);
    const [previousSale, setPreviousSale] = useState(0);
    const [saleShowUpCv, setSaleShowUpCv] = useState(0);
    const [previousSaleShowUpCv, setPreviousSaleShowUpCv] = useState(0);
    const [saleShowUpCvRate, setSaleShowUpCvRate] = useState(0);
    const [saleShowUpCvRateString, setSaleShowUpCvRateString] = useState('0%');
    const [levelUpSaleShowUpCv, setLevelUpSaleShowUpCv] = useState(false);

    // Total Revenue
    const [totalRevenue, setTotalRevenue] = useState(0);
    const [previousTotalRevenue, setPreviousTotalRevenue] = useState(0);
    const [totalRevenueRate, setTotalRevenueRate] = useState(0);
    const [totalRevenueRateString, setTotalRevenueRateString] = useState('0%');
    const [levelUpTotalRevenue, setLevelUpTotalRevenue] = useState(false);

    // CAC (Budget/Sale)
    const [cac, setCac] = useState(0);
    const [previousCac, setPreviousCac] = useState(0);
    const [cacRate, setCacRate] = useState(0);
    const [cacRateString, setCacRateString] = useState('0%');
    const [levelUpCac, setLevelUpCac] = useState(false);

    // ROAS (Total Revenue/Budget)
    const [roas, setRoas] = useState(0);
    const [previousRoas, setPreviousRoas] = useState(0);
    const [roasRate, setRoasRate] = useState(0);
    const [roasRateString, setRoasRateString] = useState('0%');
    const [levelUpRoas, setLevelUpRoas] = useState(false);

    // Helper functions
    const calculateRate = (previous: number, current: number): number => {
        const rate = previous === 0 ? 0 : (((current - previous) / previous) * 100);
        return parseFloat(rate.toFixed(3));
    };

    // Update levelUp states based on rate calculations
    const updateLevelUpStates = () => {
        setLevelUpBudget(budgetRate > 0);
        setLevelUpVisits(visitRate > 0);
        setLevelUpLeads(leadsRate > 0);
        setLevelUpLeadsVisitsCv(leadsVisitsCvRate > 0);
        setLevelUpDemoBookedLeadsCv(demoBookedLeadsCvRate > 0);
        setLevelUpShowUpsDemoBookedCv(showUpsDemoBookedCvRate > 0);
        setLevelUpSaleShowUpCv(saleShowUpCvRate > 0);
        setLevelUpTotalRevenue(totalRevenueRate > 0);
        setLevelUpCac(cacRate > 0);
        setLevelUpRoas(roasRate > 0);
    };


    // Calculate rates for all data points
    useEffect(() => {
        //    setVisits(5)
        // Calculate the differences between this week and last week's data
        // const visitRate = ((visits - lastWeekVisits) / lastWeekVisits) * 100;
        // const leadRate = ((leads - lastWeekLeads) / lastWeekLeads) * 100;
        // const conversionRate = ((conversion - lastWeekConversion) / lastWeekConversion) * 100;
        // const demoRate = ((demos - lastWeekDemos) / lastWeekDemos) * 100;
        // Update rate and levelUp states when data changes
        setBudgetRate(calculateRate(previousBudget, budget));
        setBudgetRateString(`${budgetRate}%`);

        setVisitRate(calculateRate(previousVisits, visits));
        setVisitRateString(`${visitRate}%`);

        setLeadsRate(calculateRate(previousLeads, leads));
        setLeadsRateString(`${leadsRate}%`);

        setLeadsVisitsCvRate(calculateRate(previousLeadsVisitsCv, leadsVisitsCv));
        setLeadsVisitsCvRateString(`${leadsVisitsCvRate}%`);

        setDemoBookedLeadsCvRate(calculateRate(previousDemoBookedLeadsCv, demoBookedLeadsCv));
        setDemoBookedLeadsCvRateString(`${demoBookedLeadsCvRate}%`);

        setShowUpsDemoBookedCvRate(calculateRate(previousShowUpsDemoBookedCv, showUpsDemoBookedCv));
        setShowUpsDemoBookedCvRateString(`${showUpsDemoBookedCvRate}%`);

        setSaleShowUpCvRate(calculateRate(previousSaleShowUpCv, saleShowUpCv));
        setSaleShowUpCvRateString(`${saleShowUpCvRate}%`);

        setTotalRevenueRate(calculateRate(previousTotalRevenue, totalRevenue));
        setTotalRevenueRateString(`${totalRevenueRate}%`);

        setCacRate(calculateRate(previousCac, cac));
        setCacRateString(`${cacRate}%`);

        setRoasRate(calculateRate(previousRoas, roas));
        setRoasRateString(`${roasRate}%`);

        // Update levelUp states after calculating rates
        updateLevelUpStates();
    }, [
        budget, previousBudget, budgetRate,
        visits, previousVisits, visitRate,
        leads, previousLeads, leadsRate,
        leadsVisitsCv, previousLeadsVisitsCv, leadsVisitsCvRate,
        demoBookedLeadsCv, previousDemoBookedLeadsCv, demoBookedLeadsCvRate,
        showUpsDemoBookedCv, previousShowUpsDemoBookedCv, showUpsDemoBookedCvRate,
        saleShowUpCv, previousSaleShowUpCv, saleShowUpCvRate,
        totalRevenue, previousTotalRevenue, totalRevenueRate,
        cac, previousCac, cacRate,
        roas, previousRoas, roasRate
    ]);

    return {
        demoBookedRate, setDemoBookedRate,
    demoBookedRateString, setDemoBookedRateString,
        levelUpDemoBooked, setLevelUpDemoBooked,
        saleRate, setSaleRate,
    saleRateString, setSaleRateString,
        levelUpSale, setLevelUpSale,
        showUpsRate, setShowUpsRate,
    showUpsRateString, setShowUpsRateString, levelUpShowUps, setLevelUpShowUps,
        budget, setBudget, previousBudget, setPreviousBudget, budgetRate, budgetRateString, levelUpBudget, setLevelUpBudget,
        visits, setVisits, previousVisits, setPreviousVisits, visitRate, visitRateString, levelUpVisits, setLevelUpVisits,
        leads, setLeads, previousLeads, setPreviousLeads, leadsRate, leadsRateString, levelUpLeads, setLevelUpLeads,
        leadsVisitsCv, setLeadsVisitsCv, previousLeadsVisitsCv, setPreviousLeadsVisitsCv, leadsVisitsCvRate, leadsVisitsCvRateString, levelUpLeadsVisitsCv, setLevelUpLeadsVisitsCv,
        demoBooked, setDemoBooked, previousDemoBooked, setPreviousDemoBooked, demoBookedLeadsCv, setDemoBookedLeadsCv, previousDemoBookedLeadsCv, setPreviousDemoBookedLeadsCv, demoBookedLeadsCvRate, demoBookedLeadsCvRateString, levelUpDemoBookedLeadsCv, setLevelUpDemoBookedLeadsCv,
        showUps, setShowUps, previousShowUps, setPreviousShowUps, showUpsDemoBookedCv, setShowUpsDemoBookedCv, previousShowUpsDemoBookedCv, setPreviousShowUpsDemoBookedCv, showUpsDemoBookedCvRate, showUpsDemoBookedCvRateString, levelUpShowUpsDemoBookedCv, setLevelUpShowUpsDemoBookedCv,
        sale, setSale, previousSale, setPreviousSale, saleShowUpCv, setSaleShowUpCv, previousSaleShowUpCv, setPreviousSaleShowUpCv, saleShowUpCvRate, saleShowUpCvRateString, levelUpSaleShowUpCv, setLevelUpSaleShowUpCv,
        totalRevenue, setTotalRevenue, previousTotalRevenue, setPreviousTotalRevenue, totalRevenueRate, totalRevenueRateString, levelUpTotalRevenue, setLevelUpTotalRevenue,
        cac, setCac, previousCac, setPreviousCac, cacRate, cacRateString, levelUpCac, setLevelUpCac,
        roas, setRoas, previousRoas, setPreviousRoas, roasRate, roasRateString, levelUpRoas, setLevelUpRoas
    };
};

export default useDashboardStates;
