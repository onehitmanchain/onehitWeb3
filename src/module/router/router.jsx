import React from "react";
import { useRoutes } from "react-router-dom";
import ONEFtghting  from "../../view/home/ONEFtghting";






export default function Router() {
  let element = useRoutes([
    {
      path: '/',
      element: <ONEFtghting />,
      // children:[
      //   {
          
      //   },
      // ]
    },
   
  ]);

  return element;
}
