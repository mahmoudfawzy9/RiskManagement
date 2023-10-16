sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'RiskManagment/Risks/test/integration/FirstJourney',
		'RiskManagment/Risks/test/integration/pages/RisksList',
		'RiskManagment/Risks/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('RiskManagment/Risks') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);