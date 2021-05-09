     require(["esri/views/MapView", "esri/WebMap", "esri/widgets/Home"], function(MapView, WebMap, Home) {
        /************************************************************
         * Creates a new WebMap instance. A WebMap must reference
         * a PortalItem ID that represents a WebMap saved to
         * arcgis.com or an on-premise portal.
         *
         * To load a WebMap from an on-premise portal, set the portal
         * url with esriConfig.portalUrl.
         ************************************************************/
        var webmap = new WebMap({
          portalItem: {
            // autocasts as new PortalItem()
            id: "31fa4ac21e8b41ffb2fc6dea0f9e913c"
          }
        });

        /************************************************************
         * Set the WebMap instance to the map property in a MapView.
         ************************************************************/
        var view = new MapView({
          container: "viewDiv",
          map: webmap
      });
  var homeBtn = new Home({
        view: view
      }); //Add the home button to the top left corner of the view
    view.ui.add(homeBtn, "top-left");
       
       
     });
