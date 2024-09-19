import { NextResponse } from 'next/server';
import { BetaAnalyticsDataClient } from '@google-analytics/data';

// Google Analytics Property ID
const propertyId: string = '458117030';

// Initialize Analytics Data API Client
const analyticsDataClient = new BetaAnalyticsDataClient();

export async function GET() {
    try {
        // Run a simple report
        const [response] = await analyticsDataClient.runReport({
            property: `properties/${propertyId}`,
            dateRanges: [
                {
                    startDate: '30daysAgo',
                    endDate: 'today',
                },
            ],
            metrics: [
                {
                    name: 'activeUsers',
                },
            ],
            dimensions: [
                {
                    name: 'pagePath',
                },
            ],
        });

        const reportData =  response.rows.map(row => ({
            url: row.dimensionValues[0].value,
            views: row.metricValues[0].value,
        }));

        // Process and return the report result
        // const reportData = response.rows.map(row => ({
        //     viewsDimension: row.dimensionValues[0]?.value,
        //     viewsMetrics: row.metricValues[0]?.value,
        // }));

        // return NextResponse.json({ report: "Test Data" });
        return NextResponse.json({ report: reportData });
    } catch (error) {
        console.error('Error running report:', error);
        return NextResponse.json({ error: 'Failed to run report' }, { status: 500 });
    }
}
