import React from "react";
import ReactGA from "react-ga";

const useAnalyticsEventTracker = (category="Category") => {
    const eventTracker = (action = "Action", label = "Label") => {
      ReactGA.event({category, action, label});
    }
    return eventTracker;
}
export default useAnalyticsEventTracker;

