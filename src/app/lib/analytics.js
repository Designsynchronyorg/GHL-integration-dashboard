import { google } from 'googleapis';

export async function getAnalyticsData() {
    // OAuth2 setup
    const oauth2Client = new google.auth.OAuth2(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_CLIENT_SECRET,
        process.env.REDIRECT_URI
    );

    // Set your access token here
    oauth2Client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });

    const analytics = google.analyticsreporting({
        version: 'v4',
        auth: oauth2Client
    });

    const response = await analytics.reports.batchGet({
        requestBody: {
            reportRequests: [
                {
                    viewId: process.env.GOOGLE_ANALYTICS_VIEW_ID,
                    dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
                    metrics: [{ expression: 'ga:sessions' }],
                    dimensions: [{ name: 'ga:date' }]
                }
            ]
        }
    });

    return response.data.reports[0].data.rows;
}
