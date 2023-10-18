import Javier from "../javier/page"
import Canoy from "../canoy/page"
import Property from "../property/page"
import ScopeOfServices from "../scopeOfServices/page"

import React from 'react'

const steps = [
    {
      label: "Set Schedule",
      page: <Javier />,
    },
    {
      label: "Property Details",
  
      page: <Canoy   />,
    },
    {
      label: "Property Details",
  
      page: <Property />,
    },
    {
      label: "Scope of Services",
  
      page: <ScopeOfServices  />,
    },
  ];

  export default steps;