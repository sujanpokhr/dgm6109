"use strict";

/*
  Term Project: Screen Time vs Productivity
  Author: Sujan Pokhrel
  Description: Data structured as Array of Objects (Lab 6 → Homework 6)
  Displayed as formatted JSON on the webpage.
*/

let screenTimeData = [
  {
    date: "2025-10-08T22:00:00",
    objective: {
      totalScreenTimeHrs: 7,
      socialMediaHrs: 3.5,
      schoolTimeHrs: 3,
      sleepHrs: 6.5
    },
    subjective: {
      productivity: 3,
      stress: 3,
      notes: "Balanced day but distracted by social media in the evening."
    }
  }, // Oct 8 record

  {
    date: "2025-10-09T22:00:00",
    objective: {
      totalScreenTimeHrs: 8,
      socialMediaHrs: 4.5,
      schoolTimeHrs: 2.5,
      sleepHrs: 6
    },
    subjective: {
      productivity: 2,
      stress: 4,
      notes: "High phone use; struggled to focus on coursework."
    }
  }, // Oct 9 record

  {
    date: "2025-10-10T22:00:00",
    objective: {
      totalScreenTimeHrs: 6,
      socialMediaHrs: 2,
      schoolTimeHrs: 3.5,
      sleepHrs: 7.5
    },
    subjective: {
      productivity: 4,
      stress: 2,
      notes: "Productive day; moderate screen use helped stay on task."
    }
  }, // Oct 10 record

  {
    date: "2025-10-11T22:00:00",
    objective: {
      totalScreenTimeHrs: 9.2,
      socialMediaHrs: 5,
      schoolTimeHrs: 2.5,
      sleepHrs: 5.5
    },
    subjective: {
      productivity: 1,
      stress: 5,
      notes: "Too much scrolling late at night; slept poorly."
    }
  }, // Oct 11 record

  {
    date: "2025-10-12T22:00:00",
    objective: {
      totalScreenTimeHrs: 5.5,
      socialMediaHrs: 1.5,
      schoolTimeHrs: 3,
      sleepHrs: 8
    },
    subjective: {
      productivity: 4,
      stress: 2,
      notes: "More rest and limited phone time improved focus."
    }
  }, // Oct 12 record

  {
    date: "2025-10-13T22:00:00",
    objective: {
      totalScreenTimeHrs: 4.8,
      socialMediaHrs: 1.2,
      schoolTimeHrs: 3.8,
      sleepHrs: 8.5
    },
    subjective: {
      productivity: 5,
      stress: 1,
      notes: "Great balance between study and rest."
    }
  }, // Oct 13 record

  {
    date: "2025-10-14T22:00:00",
    objective: {
      totalScreenTimeHrs: 7.8,
      socialMediaHrs: 3.6,
      schoolTimeHrs: 3.2,
      sleepHrs: 6.2
    },
    subjective: {
      productivity: 3,
      stress: 3,
      notes: "Average day; school tasks done but distracted mid day."
    }
  }, // Oct 14 record

  {
    date: "2025-10-15T22:00:00",
    objective: {
      totalScreenTimeHrs: 6.5,
      socialMediaHrs: 3,
      schoolTimeHrs: 4,
      sleepHrs: 7
    },
    subjective: {
      productivity: 3,
      stress: 2,
      notes: "Felt average today. Balanced study and leisure screen time."
    }
  }, // Oct 15 record

  {
    date: "2025-10-16T22:00:00",
    objective: {
      totalScreenTimeHrs: 8.2,
      socialMediaHrs: 4.5,
      schoolTimeHrs: 2.8,
      sleepHrs: 6
    },
    subjective: {
      productivity: 2,
      stress: 4,
      notes: "Used social media too long; felt distracted and tired."
    }
  }, // Oct 16 record

  {
    date: "2025-10-17T22:00:00",
    objective: {
      totalScreenTimeHrs: 5.5,
      socialMediaHrs: 2,
      schoolTimeHrs: 3.5,
      sleepHrs: 8
    },
    subjective: {
      productivity: 4,
      stress: 2,
      notes: "Low social media use; slept well and worked efficiently."
    }
  }, // Oct 17 record

  {
    date: "2025-10-18T22:00:00",
    objective: {
      totalScreenTimeHrs: 9,
      socialMediaHrs: 5.5,
      schoolTimeHrs: 3,
      sleepHrs: 5.5
    },
    subjective: {
      productivity: 1,
      stress: 5,
      notes: "Too much time on phone, poor focus and lack of sleep."
    }
  }, // Oct 18 record

  {
    date: "2025-10-19T22:00:00",
    objective: {
      totalScreenTimeHrs: 4.8,
      socialMediaHrs: 1.2,
      schoolTimeHrs: 3.5,
      sleepHrs: 8.5
    },
    subjective: {
      productivity: 5,
      stress: 1,
      notes: "Excellent productivity, good sleep, low social media usage."
    }
  }, // Oct 19 record

  {
    date: "2025-10-20T22:00:00",
    objective: {
      totalScreenTimeHrs: 7.2,
      socialMediaHrs: 3.8,
      schoolTimeHrs: 3.5,
      sleepHrs: 6.5
    },
    subjective: {
      productivity: 2,
      stress: 4,
      notes: "Heavy phone use affected sleep quality and focus."
    }
  }, // Oct 20 record

  {
    date: "2025-10-21T22:00:00",
    objective: {
      totalScreenTimeHrs: 5,
      socialMediaHrs: 1.5,
      schoolTimeHrs: 4.5,
      sleepHrs: 8
    },
    subjective: {
      productivity: 4,
      stress: 2,
      notes: "Better balance between study and screen time."
    }
  } // Oct 21 record
]; // list of daily screen-time observations

// ✅ Display JSON data neatly on the webpage
// This converts your JS array into formatted JSON text.
let outputDiv = document.getElementById("output");

if (outputDiv) {
  outputDiv.innerHTML = "<pre>" + JSON.stringify(screenTimeData, null, 2) + "</pre>";
} else {
  console.error("Missing <div id='output'> in your HTML file.");
}

// ✅ Optional: Uncomment this line if you want to validate JSON at codebeautify.org
// console.log(JSON.stringify(screenTimeData));
