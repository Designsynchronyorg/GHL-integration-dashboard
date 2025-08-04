import { useState, useEffect } from 'react';

const useMetricState = (initialValue = 0) => {
    const [value, setValue] = useState(initialValue);
    const [percentValue, setPercentValue] = useState(`${initialValue}%`);
    const [previousValue, setPreviousValue] = useState(0);
    const [rate, setRate] = useState(0);
    const [rateString, setRateString] = useState('0%');
    const [levelUp, setLevelUp] = useState(false);

    useEffect(() => {
        const newRate = previousValue === 0 ? 0 : (((value - previousValue) / previousValue) * 100);
        const formattedRate = newRate % 1 === 0 ? newRate.toFixed(0) : newRate.toFixed(2); // Remove decimal places if zero

        setRate(parseFloat(formattedRate));
        setRateString(`${formattedRate}%`);
        setLevelUp(newRate > 0);
        setPercentValue(`${value}%`);
    }, [value, previousValue]);

    return { value, percentValue, setValue, setPreviousValue, rate, rateString, levelUp };
};

// const useConversionState = (numerator = 0, denominator = 0) => {
//     const cv = numerator/denominator;
//     const [value, setValue] = useState(cv);
//     const [previousValue, setPreviousValue] = useState(0);
//     const [rate, setRate] = useState(0);
//     const [rateString, setRateString] = useState('0%');
//     const [levelUp, setLevelUp] = useState(false);

//     useEffect(() => {
//         const newRate = previousValue === 0 ? 0 : (((value - previousValue) / previousValue) * 100).toFixed(3);
//         setRate(parseFloat(newRate));
//         setRateString(`${newRate}%`);
//         setLevelUp(newRate > 0);
//     }, [value, previousValue]);

//     return { value, rate, rateString, levelUp };
// };

const useDashboardStates = () => {
    const budget = useMetricState(100);
    const visits = useMetricState();
    const demoBooked = useMetricState(20);
    const showUps = useMetricState(20);
    const leads = useMetricState(20);
    const sale = useMetricState(20);

    const leadsVisitsCv = useMetricState(leads.value/visits.value);
    const demoBookedLeadsCv = useMetricState();
    const showUpsDemoBookedCv = useMetricState();
    const saleShowUpCv = useMetricState();
    const totalRevenue = useMetricState();
    const cac = useMetricState();
    const roas = useMetricState();

    useEffect(() => {
        leadsVisitsCv.setValue(leads.value / visits.value || 0);
        demoBookedLeadsCv.setValue(demoBooked.value / leads.value || 0);
        showUpsDemoBookedCv.setValue(showUps.value / demoBooked.value || 0);
        saleShowUpCv.setValue(sale.value / showUps.value || 0);
        cac.setValue(budget.value / sale.value || 0);
        roas.setValue(totalRevenue.value / budget.value || 0);
    }, [
        budget.value, visits.value, leads.value,
        demoBooked.value, showUps.value,
        sale.value, totalRevenue.value
    ]);

    const cardData = [
        { title: 'Budget', total: budget.value, rate: budget.rateString, levelUp: budget.levelUp, subtitle: '' },
        { title: 'Visits', total: visits.value, rate: visits.rateString, levelUp: visits.levelUp, subtitle: '' },
        { title: 'Leads', total: leads.value, rate: leads.rateString, levelUp: leads.levelUp, subtitle: '' },
        { title: 'Conversion', subtitle: 'Leads/Visits', total: leadsVisitsCv.percentValue, rate: leadsVisitsCv.rateString, levelUp: leadsVisitsCv.levelUp },
        { title: 'Demo Booked', subtitle: '', total: demoBookedLeadsCv.value, rate: demoBookedLeadsCv.rateString, levelUp: demoBookedLeadsCv.levelUp },
        { title: 'Show Ups', subtitle: 'Show Ups/Demo Booked', total: showUpsDemoBookedCv.percentValue, rate: showUpsDemoBookedCv.rateString, levelUp: showUpsDemoBookedCv.levelUp },
        { title: 'Sale', subtitle: 'Sale/Show Ups', total: saleShowUpCv.percentValue, rate: saleShowUpCv.rateString, levelUp: saleShowUpCv.levelUp },
        { title: 'Total Revenue', total: totalRevenue.percentValue, rate: totalRevenue.rateString, levelUp: totalRevenue.levelUp, subtitle: '' },
        { title: 'CAC', subtitle: 'Budget/Sale', total: cac.percentValue, rate: cac.rateString, levelUp: cac.levelUp },
        { title: 'ROAS', subtitle: 'Total Revenue/Budget', total: roas.percentValue, rate: roas.rateString, levelUp: roas.levelUp }
    ];

    return {
        cardData,
        budget, visits, leads, demoBooked, showUps, sale,
        leadsVisitsCv, demoBookedLeadsCv, showUpsDemoBookedCv,
        saleShowUpCv, totalRevenue, cac, roas
    };
};

export default useDashboardStates;
